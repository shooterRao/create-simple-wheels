/*
 * @Author: raojw
 * @Description: 迷你ajax工具
 */

export interface SimpleAjaxConfig {
  method: 'get' | 'post' | 'put' | 'delete';
  url: string;
  withCredentials?: boolean;
  responseType?: 'json' | 'text' | 'blob' | 'document' | 'arraybuffer';
  headers?: object;
  timeout?: number;
  params?: object;
  data?: any;
  onDownloadProgress?: (this: XMLHttpRequest, ev: any) => void;
  onUploadProgress?: (this: XMLHttpRequestUpload, ev: any) => void;
  validateStatus?: (status: number) => boolean;
}

function SimpleAjax(config: SimpleAjaxConfig) {
  const toString = Object.prototype.toString;

  const isObject = (val: any) => toString.call(val) === '[object Object]';
  const isArray = (val: any) => Array.isArray(val);
  const isDate = (val: any) => toString.call(val) === '[object Date]';
  const isFunction = (val: any) => typeof val === 'function';
  const isBoolean = (val: any) => typeof val === 'boolean';
  const isFormData = (val: any) => typeof FormData !== 'undefined' && val instanceof FormData;
  const isNumber = (val: any) => typeof val === 'number';

  // 编码
  const encode = (val: string) => {
    return encodeURIComponent(val)
      .replace(/%40/gi, '@')
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%20/g, '+')
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']');
  };

  // 序列化参数
  const serializedParamsUtil = (params: object) => {
    let res;

    const parts: string[] = [];

    Object.keys(params).forEach(function(key) {
      let val = params[key];
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (isArray(val)) {
        key = key + '[]';
      }

      if (isDate(val)) {
        val = val.toISOString();
      } else if (isObject(val)) {
        val = JSON.stringify(val);
      }

      parts.push(encode(key) + '=' + encode(val));
    });

    res = parts.join('&');

    return res;
  };

  const buildURL = function(url: string, params: any) {
    if (!params) {
      return url;
    }

    const serializedParams = serializedParamsUtil(params);

    if (serializedParams) {
      const hashmarkIndex = url.indexOf('#');
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }

    return url;
  };

  // 默认参数
  const defaultConfig: SimpleAjaxConfig = {
    method: 'get',
    url: '',
    withCredentials: false,
    responseType: 'json',
    data: null,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    timeout: 0,
    validateStatus(status) {
      return status !== 0; // 状态码验证，默认不为0的都resolve
    }
    // params: {},
    // onDownloadProgress: undefined,
    // onUploadProgress: undefined
  };

  config = Object.assign({}, defaultConfig, config);

  return new Promise((resolve, reject) => {
    const {
      method,
      url,
      data,
      params,
      headers,
      timeout,
      withCredentials,
      responseType,
      onDownloadProgress,
      onUploadProgress,
      validateStatus
    } = config;

    let reqData = data;
    const reqHeaders = headers;

    if (isFormData(reqData)) {
      if (reqHeaders && 'Content-Type' in reqHeaders) {
        delete reqHeaders['Content-Type'];
      }
    }

    if (isObject(data) && reqHeaders) {
      reqHeaders['Content-Type'] = 'application/json;charset=utf-8';
    }

    const request = new XMLHttpRequest();

    request.open(method.toUpperCase(), buildURL(url, params), true);

    if (isBoolean(withCredentials) && withCredentials !== undefined) {
      request.withCredentials = withCredentials;
    }

    onDownloadProgress &&
      isFunction(onDownloadProgress) &&
      request.addEventListener('progress', onDownloadProgress);
    onUploadProgress &&
      isFunction(onUploadProgress) &&
      request.upload.addEventListener('progress', onUploadProgress);

    headers &&
      isObject(headers) &&
      Object.keys(headers).forEach(function(key) {
        request.setRequestHeader(key, headers[key]);
      });

    timeout && isNumber(timeout) && (request.timeout = timeout);

    request.onreadystatechange = function handleOnLoad() {
      if (request.readyState === 4) {
        const responseData = responseType === 'text' ? request.responseText : request.response;
        const responseHeaders = request.getAllResponseHeaders();

        const response = {
          data: responseData,
          status: request.status,
          requset: request,
          responseHeaders,
          config
        };

        if (validateStatus && validateStatus(request.status)) {
          resolve(response);
        } else {
          const error = new Error(`Request failed with status code` + request.status);
          // @ts-ignore
          error.requset = request;
          // @ts-ignore
          error.response = response;

          reject(error);
        }
      }
    };

    request.onerror = function handleError() {
      reject(new Error('Network Error'));
    };

    if (isObject(reqData)) {
      reqData = JSON.stringify(reqData);
    }

    request.send(reqData);
  });
}

SimpleAjax.version = '1.0.0';

export default SimpleAjax;

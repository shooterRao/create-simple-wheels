(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.simpleAjax = factory());
}(this, function () { 'use strict';

  /*
   * @Author: raojw
   * @Description: 迷你ajax工具
   */
  function SimpleAjax(config) {
      var toString = Object.prototype.toString;
      var isObject = function (val) { return toString.call(val) === '[object Object]'; };
      var isArray = function (val) { return Array.isArray(val); };
      var isDate = function (val) { return toString.call(val) === '[object Date]'; };
      var isFunction = function (val) { return typeof val === 'function'; };
      var isBoolean = function (val) { return typeof val === 'boolean'; };
      var isFormData = function (val) { return typeof FormData !== 'undefined' && val instanceof FormData; };
      var isNumber = function (val) { return typeof val === 'number'; };
      // 编码
      var encode = function (val) {
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
      var serializedParamsUtil = function (params) {
          var res;
          var parts = [];
          Object.keys(params).forEach(function (key) {
              var val = params[key];
              if (val === null || typeof val === 'undefined') {
                  return;
              }
              if (isArray(val)) {
                  key = key + '[]';
              }
              if (isDate(val)) {
                  val = val.toISOString();
              }
              else if (isObject(val)) {
                  val = JSON.stringify(val);
              }
              parts.push(encode(key) + '=' + encode(val));
          });
          res = parts.join('&');
          return res;
      };
      var buildURL = function (url, params) {
          if (!params) {
              return url;
          }
          var serializedParams = serializedParamsUtil(params);
          if (serializedParams) {
              var hashmarkIndex = url.indexOf('#');
              if (hashmarkIndex !== -1) {
                  url = url.slice(0, hashmarkIndex);
              }
              url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
          }
          return url;
      };
      // 默认参数
      var defaultConfig = {
          method: 'get',
          url: '',
          withCredentials: false,
          responseType: 'json',
          data: null,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          },
          timeout: 0,
          validateStatus: function (status) {
              return status !== 0; // 状态码验证，默认不为0的都resolve
          }
          // params: {},
          // onDownloadProgress: undefined,
          // onUploadProgress: undefined
      };
      config = Object.assign({}, defaultConfig, config);
      return new Promise(function (resolve, reject) {
          var method = config.method, url = config.url, data = config.data, params = config.params, headers = config.headers, timeout = config.timeout, withCredentials = config.withCredentials, responseType = config.responseType, onDownloadProgress = config.onDownloadProgress, onUploadProgress = config.onUploadProgress, validateStatus = config.validateStatus;
          var reqData = data;
          var reqHeaders = headers;
          if (isFormData(reqData)) {
              if (reqHeaders && 'Content-Type' in reqHeaders) {
                  delete reqHeaders['Content-Type'];
              }
          }
          if (isObject(data) && reqHeaders) {
              reqHeaders['Content-Type'] = 'application/json;charset=utf-8';
          }
          var request = new XMLHttpRequest();
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
              Object.keys(headers).forEach(function (key) {
                  request.setRequestHeader(key, headers[key]);
              });
          timeout && isNumber(timeout) && (request.timeout = timeout);
          request.onreadystatechange = function handleOnLoad() {
              // status 非0都为 resolve 状态
              if (request.readyState === 4) {
                  var responseData = responseType === 'text' ? request.responseText : request.response;
                  var responseHeaders = request.getAllResponseHeaders();
                  var response = {
                      data: responseData,
                      status: request.status,
                      requset: request,
                      responseHeaders: responseHeaders,
                      config: config
                  };
                  if (validateStatus && validateStatus(request.status)) {
                      resolve(response);
                  }
                  else {
                      var error = new Error("Request failed with status code" + request.status);
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

  return SimpleAjax;

}));
//# sourceMappingURL=simpleAjax.js.map

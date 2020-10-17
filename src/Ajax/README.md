## 轻量的 ajax 请求工具

类似`axios`使用方式的ajax请求库，包括参数使用也一致，仅支持浏览器，非常轻量

How to use?

`config`参数

```ts
interface SimpleAjaxConfig {
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
  validateStatus?: (status: number) => boolean; // 默认大于0的promise都为resolve状态，提供自定义验证方法
}
```

```js
import { simpleAjax } from 'simplewheels';

// 请求demo
(async function() {
  // http://localhost:3000/http/data
  await simpleAjax({
    method: 'get',
    url: 'http://localhost:3000/http/data',
  });

  // http://localhost:3000/http/getQuery?id=123
  await simpleAjax({
    method: 'get',
    url: 'http://localhost:3000/http/getQuery',
    params: {
      id: 123
    }
  });

  // http://localhost:3000/http/post/form
  // 请求 content-type 为 application/x-www-form-urlencoded
  await simpleAjax({
    method: 'post',
    url: 'http://localhost:3000/http/form',
    data: 'id=123'
  });

  // http://localhost:3000/http/post/json
  // 请求 content-type 为 application/json
  await simpleAjax({
    method: 'post',
    url: 'http://localhost:3000/http/json',
    data: {
      id: 123
    }
  });

  // 'http://localhost:3000/http/upload'
  // 文件上传 Formdata
  const formData = new FormData();
  formData.append('file', new File(["foo"], "foo.txt", {
    type: "text/plain"
  }));
  await simpleAjax({
    method: 'post',
    url: 'http://localhost:3000/http/upload',
    data: formData
  });

  // 自定义 status 验证
  simpleAjax({
    method: 'get',
    url: 'http://localhost:3000/http/getQueryy',
    validateStatus(status) {
      return status === 200; // 状态码 200 promise 才会 resolve
    }
  })catch(error => console.log(error));
})();
```

更多配置信息请参考`index.ts`和`index.html`

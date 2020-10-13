export interface SimpleAjaxConfig {
    method: string;
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
declare function SimpleAjax(config: SimpleAjaxConfig): Promise<unknown>;
declare namespace SimpleAjax {
    var version: string;
}
export default SimpleAjax;

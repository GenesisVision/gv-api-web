import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { UploadResult } from "../model/UploadResult";
export declare class FileApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getFile(id: string): CancelablePromise<null>;
    private getFileWithHttpInfo;
    uploadFile(uploadedFile: any, opts?: {
        authorization?: string;
    }): CancelablePromise<UploadResult>;
    private uploadFileWithHttpInfo;
}

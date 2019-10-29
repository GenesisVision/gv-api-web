import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { UploadResult } from "../model/uploadResult";
export declare class FileService {
    apiClient: ApiClient;
    constructor(apiClient?: ApiClient);
    getFile(id: string): CancelablePromise<null>;
    private getFileWithHttpInfo;
    uploadFile(uploadedFile: any, opts?: {
        authorization?: string;
    }): CancelablePromise<UploadResult>;
    private uploadFileWithHttpInfo;
}

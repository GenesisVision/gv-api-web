import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { CommonPublicAssetsViewModel } from "../model/CommonPublicAssetsViewModel";
export declare class SearchApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    search(opts?: {
        authorization?: string;
        mask?: string;
        take?: number;
    }): CancelablePromise<CommonPublicAssetsViewModel>;
    private searchWithHttpInfo;
}

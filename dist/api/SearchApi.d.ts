import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { SearchViewModelOld } from "../model/SearchViewModelOld";
export declare class SearchApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    search(opts?: {
        authorization?: string;
        mask?: string;
        take?: number;
    }): CancelablePromise<SearchViewModelOld>;
    private searchWithHttpInfo;
}

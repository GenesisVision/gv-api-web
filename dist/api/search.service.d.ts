import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { SearchViewModelOld } from "../model/searchViewModelOld";
export declare class SearchService {
    apiClient: ApiClient;
    constructor(apiClient?: ApiClient);
    search(opts?: {
        authorization?: string;
        mask?: string;
        take?: number;
    }): CancelablePromise<SearchViewModelOld>;
    private searchWithHttpInfo;
}

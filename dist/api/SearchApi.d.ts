import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { SearchViewModel } from "../model/SearchViewModel";
export declare class SearchApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    search(opts?: {
        authorization?: string;
        mask?: string;
        take?: number;
    }): CancelablePromise<SearchViewModel>;
    private searchWithHttpInfo;
}

import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { FollowDetailsFull } from "../model/FollowDetailsFull";
export declare class TradingaccountApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getTradingAccountDetails(id: string, authorization: string): CancelablePromise<FollowDetailsFull>;
    private getTradingAccountDetailsWithHttpInfo;
}

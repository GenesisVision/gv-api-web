import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { ItemsViewModelCopyTradingAccountInfo } from "../model/ItemsViewModelCopyTradingAccountInfo";
export declare class CopytradingApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getSignalAssets(opts?: {
        authorization?: string;
        tags?: Array<string>;
        statisticDateFrom?: Date;
        statisticDateTo?: Date;
        chartPointsCount?: number;
        facetId?: string;
        mask?: string;
        showFavorites?: boolean;
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelCopyTradingAccountInfo>;
    private getSignalAssetsWithHttpInfo;
}

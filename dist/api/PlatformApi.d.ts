import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { AssetInfo } from "../model/AssetInfo";
import { CaptchaDetails } from "../model/CaptchaDetails";
import { LevelsParamsInfo } from "../model/LevelsParamsInfo";
import { PlatformAssets } from "../model/PlatformAssets";
import { PlatformInfo } from "../model/PlatformInfo";
import { ProgramsLevelsInfo } from "../model/ProgramsLevelsInfo";
export declare class PlatformApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getAllPlatformAssets(): CancelablePromise<PlatformAssets>;
    private getAllPlatformAssetsWithHttpInfo;
    getPlatformAssetInfo(asset: string): CancelablePromise<AssetInfo>;
    private getPlatformAssetInfoWithHttpInfo;
    getPlatformDate(): CancelablePromise<string>;
    private getPlatformDateWithHttpInfo;
    getPlatformInfo(): CancelablePromise<PlatformInfo>;
    private getPlatformInfoWithHttpInfo;
    getProgramLevels(opts?: {
        currency?: 'USD' | 'BTC' | 'Undefined' | 'GVT' | 'ETH' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
    }): CancelablePromise<ProgramsLevelsInfo>;
    private getProgramLevelsWithHttpInfo;
    getProgramLevelsParams(opts?: {
        currency?: 'USD' | 'BTC' | 'Undefined' | 'GVT' | 'ETH' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
    }): CancelablePromise<LevelsParamsInfo>;
    private getProgramLevelsParamsWithHttpInfo;
    getRiskControlInfo(route: string, opts?: {
        client?: string;
        version?: string;
    }): CancelablePromise<CaptchaDetails>;
    private getRiskControlInfoWithHttpInfo;
}

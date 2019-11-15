import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
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
    getPlatformDate(): CancelablePromise<string>;
    private getPlatformDateWithHttpInfo;
    getPlatformInfo(): CancelablePromise<PlatformInfo>;
    private getPlatformInfoWithHttpInfo;
    getProgramLevels(opts?: {
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<ProgramsLevelsInfo>;
    private getProgramLevelsWithHttpInfo;
    getProgramLevelsParams(opts?: {
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<LevelsParamsInfo>;
    private getProgramLevelsParamsWithHttpInfo;
    getRiskControlInfo(route: string, opts?: {
        client?: string;
        version?: string;
    }): CancelablePromise<CaptchaDetails>;
    private getRiskControlInfoWithHttpInfo;
}

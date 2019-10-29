import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { CaptchaDetails } from "../model/captchaDetails";
import { LevelsParamsInfo } from "../model/levelsParamsInfo";
import { PlatformAssets } from "../model/platformAssets";
import { PlatformInfo } from "../model/platformInfo";
import { ProgramsLevelsInfo } from "../model/programsLevelsInfo";
export declare class PlatformService {
    apiClient: ApiClient;
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

import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { CaptchaDetails } from "../model/CaptchaDetails";
import { LevelsParamsInfo } from "../model/LevelsParamsInfo";
import { PlatformInfoOld } from "../model/PlatformInfoOld";
import { PlatformStatisticOld } from "../model/PlatformStatisticOld";
import { ProgramsLevelsInfo } from "../model/ProgramsLevelsInfo";
export declare class PlatformApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getCaptchaModel(route: string, opts?: {
        client?: string;
        version?: string;
    }): CancelablePromise<CaptchaDetails>;
    private getCaptchaModelWithHttpInfo;
    getLevelsParams(opts?: {
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<LevelsParamsInfo>;
    private getLevelsParamsWithHttpInfo;
    getPlatformDate(): CancelablePromise<string>;
    private getPlatformDateWithHttpInfo;
    getPlatformStatistic(): CancelablePromise<PlatformStatisticOld>;
    private getPlatformStatisticWithHttpInfo;
    getPlatformStatus(): CancelablePromise<PlatformInfoOld>;
    private getPlatformStatusWithHttpInfo;
    getProgramsLevels(opts?: {
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<ProgramsLevelsInfo>;
    private getProgramsLevelsWithHttpInfo;
}

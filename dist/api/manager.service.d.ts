import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { ChangeBrokerProgramRequestOld } from "../model/changeBrokerProgramRequestOld";
import { FundAssetPart } from "../model/fundAssetPart";
import { FundInvestInfo } from "../model/fundInvestInfo";
import { FundsListOld } from "../model/fundsListOld";
import { InvestmentEventViewModels } from "../model/investmentEventViewModels";
import { ManagerAssets } from "../model/managerAssets";
import { ManagerFundWithdrawInfoOld } from "../model/managerFundWithdrawInfoOld";
import { ManagerProfileDetails } from "../model/managerProfileDetails";
import { ManagerProgramWithdrawInfoOld } from "../model/managerProgramWithdrawInfoOld";
import { NewFundRequest } from "../model/newFundRequest";
import { NewProgramRequest } from "../model/newProgramRequest";
import { ProgramCreateResult } from "../model/programCreateResult";
import { ProgramInvestInfoOld } from "../model/programInvestInfoOld";
import { ProgramLevelInfo } from "../model/programLevelInfo";
import { ProgramMinimumDepositOld } from "../model/programMinimumDepositOld";
import { ProgramPwdUpdate } from "../model/programPwdUpdate";
import { ProgramRequestsOld } from "../model/programRequestsOld";
import { ProgramUpdate } from "../model/programUpdate";
import { ProgramsListOld } from "../model/programsListOld";
import { PublicProfile } from "../model/publicProfile";
import { TwoFactorAuthenticator } from "../model/twoFactorAuthenticator";
export declare class ManagerService {
    apiClient: ApiClient;
    constructor(apiClient?: ApiClient);
    cancelChangeBroker(authorization: string, opts?: {
        programId?: string;
    }): CancelablePromise<null>;
    private cancelChangeBrokerWithHttpInfo;
    cancelRequest(id: string, authorization: string): CancelablePromise<null>;
    private cancelRequestWithHttpInfo;
    cancelRequest_1(id: string, authorization: string): CancelablePromise<null>;
    private cancelRequest_1WithHttpInfo;
    changeBroker(authorization: string, opts?: {
        request?: ChangeBrokerProgramRequestOld;
    }): CancelablePromise<null>;
    private changeBrokerWithHttpInfo;
    changeProgramPassword(id: string, authorization: string, opts?: {
        model?: ProgramPwdUpdate;
    }): CancelablePromise<null>;
    private changeProgramPasswordWithHttpInfo;
    closeCurrentPeriod(id: string, authorization: string): CancelablePromise<null>;
    private closeCurrentPeriodWithHttpInfo;
    closeFund(id: string, authorization: string, opts?: {
        twoFactorCode?: string;
    }): CancelablePromise<null>;
    private closeFundWithHttpInfo;
    closeInvestmentProgram(id: string, authorization: string, opts?: {
        twoFactorCode?: string;
    }): CancelablePromise<null>;
    private closeInvestmentProgramWithHttpInfo;
    confirmProgram2FA(authorization: string, opts?: {
        programId?: string;
        code?: string;
    }): CancelablePromise<null>;
    private confirmProgram2FAWithHttpInfo;
    createFund(authorization: string, opts?: {
        request?: NewFundRequest;
    }): CancelablePromise<null>;
    private createFundWithHttpInfo;
    createProgram(authorization: string, opts?: {
        request?: NewProgramRequest;
    }): CancelablePromise<ProgramCreateResult>;
    private createProgramWithHttpInfo;
    getEvents(authorization: string, opts?: {
        eventLocation?: 'Asset' | 'Dashboard' | 'EventsAll';
        assetId?: string;
        from?: Date;
        to?: Date;
        eventType?: 'All' | 'AssetStarted' | 'AssetFinished' | 'AssetPeriodStarted' | 'AssetPeriodEnded' | 'AssetPeriodEndedDueToStopOut' | 'AssetBrokerChanged' | 'AssetInvestByInvestor' | 'AssetWithdrawalByInvestor' | 'AssetInvestByManager' | 'AssetWithdrawalByManager' | 'AssetPeriodProcessed' | 'AssetReallocation' | 'AssetSubscribeByInvestor' | 'AssetUnsubscribeByInvestor' | 'AssetTradeOpen' | 'AssetTradeClosed' | 'AssetSubscriptionEdit' | 'AssetEnterInvestment';
        assetType?: 'All' | 'Program' | 'Fund' | 'Signal';
        skip?: number;
        take?: number;
    }): CancelablePromise<InvestmentEventViewModels>;
    private getEventsWithHttpInfo;
    getFundInvestInfo(id: string, currency: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR', authorization: string): CancelablePromise<FundInvestInfo>;
    private getFundInvestInfoWithHttpInfo;
    getFundInvestment(authorization: string): CancelablePromise<number>;
    private getFundInvestmentWithHttpInfo;
    getFundWithdrawInfo(id: string, currency: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR', authorization: string): CancelablePromise<ManagerFundWithdrawInfoOld>;
    private getFundWithdrawInfoWithHttpInfo;
    getLevelsCalculator(id: string, authorization: string): CancelablePromise<ProgramLevelInfo>;
    private getLevelsCalculatorWithHttpInfo;
    getManagerAssets(authorization: string): CancelablePromise<ManagerAssets>;
    private getManagerAssetsWithHttpInfo;
    getManagerDetails(id: string): CancelablePromise<ManagerProfileDetails>;
    private getManagerDetailsWithHttpInfo;
    getManagerFunds(authorization: string, opts?: {
        sorting?: 'ByProfitAsc' | 'ByProfitDesc' | 'ByDrawdownAsc' | 'ByDrawdownDesc' | 'ByInvestorsAsc' | 'ByInvestorsDesc' | 'ByNewAsc' | 'ByNewDesc' | 'ByTitleAsc' | 'ByTitleDesc' | 'ByBalanceAsc' | 'ByBalanceDesc';
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        from?: Date;
        to?: Date;
        chartPointsCount?: number;
        currencySecondary?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        actionStatus?: 'Pending' | 'Active' | 'Investing' | 'Withdrawing' | 'Ended';
        dashboardActionStatus?: 'All' | 'Active';
        isHideInList?: boolean;
        skip?: number;
        take?: number;
    }): CancelablePromise<FundsListOld>;
    private getManagerFundsWithHttpInfo;
    getManagerProfile(id: string): CancelablePromise<PublicProfile>;
    private getManagerProfileWithHttpInfo;
    getManagerPrograms(authorization: string, opts?: {
        sorting?: 'ByLevelAsc' | 'ByLevelDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByDrawdownAsc' | 'ByDrawdownDesc' | 'ByTradesAsc' | 'ByTradesDesc' | 'ByInvestorsAsc' | 'ByInvestorsDesc' | 'ByNewDesc' | 'ByNewAsc' | 'ByEndOfPeriodAsc' | 'ByEndOfPeriodDesc' | 'ByTitleAsc' | 'ByTitleDesc' | 'ByBalanceAsc' | 'ByBalanceDesc' | 'ByCurrDesc' | 'ByCurrAsc' | 'ByLevelProgressDesc' | 'ByLevelProgressAsc';
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        from?: Date;
        to?: Date;
        chartPointsCount?: number;
        currencySecondary?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        actionStatus?: 'Pending' | 'Active' | 'Investing' | 'Withdrawing' | 'Ended';
        dashboardActionStatus?: 'All' | 'Active';
        isHideInList?: boolean;
        skip?: number;
        take?: number;
    }): CancelablePromise<ProgramsListOld>;
    private getManagerProgramsWithHttpInfo;
    getProgram2FA(authorization: string, opts?: {
        programId?: string;
    }): CancelablePromise<TwoFactorAuthenticator>;
    private getProgram2FAWithHttpInfo;
    getProgramInvestInfo(id: string, currency: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR', authorization: string): CancelablePromise<ProgramInvestInfoOld>;
    private getProgramInvestInfoWithHttpInfo;
    getProgramInvestment(authorization: string, opts?: {
        brokerTradingAccount?: string;
    }): CancelablePromise<ProgramMinimumDepositOld>;
    private getProgramInvestmentWithHttpInfo;
    getProgramRequests(id: string, skip: number, take: number, authorization: string): CancelablePromise<ProgramRequestsOld>;
    private getProgramRequestsWithHttpInfo;
    getProgramRequests_2(id: string, skip: number, take: number, authorization: string): CancelablePromise<ProgramRequestsOld>;
    private getProgramRequests_2WithHttpInfo;
    getProgramWithdrawInfo(id: string, currency: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR', authorization: string): CancelablePromise<ManagerProgramWithdrawInfoOld>;
    private getProgramWithdrawInfoWithHttpInfo;
    getRequests(skip: number, take: number, authorization: string, opts?: {
        assetType?: 'All' | 'Program' | 'Fund' | 'Signal';
    }): CancelablePromise<ProgramRequestsOld>;
    private getRequestsWithHttpInfo;
    investIntoFund(id: string, amount: number, authorization: string, opts?: {
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<null>;
    private investIntoFundWithHttpInfo;
    investIntoProgram(id: string, amount: number, authorization: string, opts?: {
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<null>;
    private investIntoProgramWithHttpInfo;
    updateFundAssets(id: string, authorization: string, opts?: {
        assets?: [FundAssetPart];
    }): CancelablePromise<null>;
    private updateFundAssetsWithHttpInfo;
    updateInvestmentProgram(id: string, authorization: string, opts?: {
        model?: ProgramUpdate;
    }): CancelablePromise<null>;
    private updateInvestmentProgramWithHttpInfo;
    updateInvestmentProgram_3(id: string, authorization: string, opts?: {
        model?: ProgramUpdate;
    }): CancelablePromise<null>;
    private updateInvestmentProgram_3WithHttpInfo;
    updateProgramSignalSettings(authorization: string, opts?: {
        programId?: string;
        volumeFee?: number;
        successFee?: number;
    }): CancelablePromise<null>;
    private updateProgramSignalSettingsWithHttpInfo;
    updateProgramSignalSettings_4(authorization: string, opts?: {
        programId?: string;
        volumeFee?: number;
        successFee?: number;
    }): CancelablePromise<null>;
    private updateProgramSignalSettings_4WithHttpInfo;
    withdrawFromFund(id: string, percent: number, authorization: string, opts?: {
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<null>;
    private withdrawFromFundWithHttpInfo;
    withdrawFromProgram(id: string, amount: number, authorization: string): CancelablePromise<null>;
    private withdrawFromProgramWithHttpInfo;
}

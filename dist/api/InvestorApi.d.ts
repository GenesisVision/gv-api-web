import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { DashboardChartValue } from "../model/DashboardChartValue";
import { DashboardSummary } from "../model/DashboardSummary";
import { FundInvestInfo } from "../model/FundInvestInfo";
import { FundWithdrawInfoOld } from "../model/FundWithdrawInfoOld";
import { FundsListOld } from "../model/FundsListOld";
import { InvestmentEventViewModels } from "../model/InvestmentEventViewModels";
import { ProgramInvestInfoOld } from "../model/ProgramInvestInfoOld";
import { ProgramRequestsOld } from "../model/ProgramRequestsOld";
import { ProgramWithdrawInfoOld } from "../model/ProgramWithdrawInfoOld";
import { ProgramsListOld } from "../model/ProgramsListOld";
import { SignalsList } from "../model/SignalsList";
export declare class InvestorApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    cancelRequest(id: string, authorization: string): CancelablePromise<null>;
    private cancelRequestWithHttpInfo;
    getDashboard(authorization: string, opts?: {
        chartCurrency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        from?: Date;
        to?: Date;
        balancePoints?: number;
        programsPoints?: number;
        eventsTake?: number;
        requestsSkip?: number;
        requestsTake?: number;
    }): CancelablePromise<DashboardSummary>;
    private getDashboardWithHttpInfo;
    getEvents(authorization: string, opts?: {
        eventLocation?: 'Asset' | 'Dashboard' | 'EventsAll';
        assetId?: string;
        from?: Date;
        to?: Date;
        eventType?: 'All' | 'AssetStarted' | 'AssetFinished' | 'AssetPeriodStarted' | 'AssetPeriodEnded' | 'AssetPeriodEndedDueToStopOut' | 'AssetBrokerChanged' | 'AssetInvestByInvestor' | 'AssetWithdrawalByInvestor' | 'AssetInvestByManager' | 'AssetWithdrawalByManager' | 'AssetPeriodProcessed' | 'AssetReallocation' | 'AssetSubscribeByInvestor' | 'AssetUnsubscribeByInvestor' | 'AssetTradeOpen' | 'AssetTradeClosed' | 'AssetSubscriptionEdit' | 'AssetEnterInvestment';
        assetType?: 'All' | 'Program' | 'Fund' | 'Signal';
        assetsIds?: Array<string>;
        forceFilterByIds?: boolean;
        skip?: number;
        take?: number;
    }): CancelablePromise<InvestmentEventViewModels>;
    private getEventsWithHttpInfo;
    getFundInvestInfo(id: string, currency: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR', authorization: string): CancelablePromise<FundInvestInfo>;
    private getFundInvestInfoWithHttpInfo;
    getFundWithdrawInfo(id: string, currency: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR', authorization: string): CancelablePromise<FundWithdrawInfoOld>;
    private getFundWithdrawInfoWithHttpInfo;
    getFunds(authorization: string, opts?: {
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
    private getFundsWithHttpInfo;
    getPortfolioChart(authorization: string, opts?: {
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        from?: Date;
        to?: Date;
        balancePoints?: number;
        programsPoints?: number;
    }): CancelablePromise<DashboardChartValue>;
    private getPortfolioChartWithHttpInfo;
    getProgramInvestInfo(id: string, currency: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR', authorization: string): CancelablePromise<ProgramInvestInfoOld>;
    private getProgramInvestInfoWithHttpInfo;
    getProgramRequests(id: string, skip: number, take: number, authorization: string): CancelablePromise<ProgramRequestsOld>;
    private getProgramRequestsWithHttpInfo;
    getProgramRequests_1(id: string, skip: number, take: number, authorization: string): CancelablePromise<ProgramRequestsOld>;
    private getProgramRequests_1WithHttpInfo;
    getProgramWithdrawInfo(id: string, currency: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR', authorization: string): CancelablePromise<ProgramWithdrawInfoOld>;
    private getProgramWithdrawInfoWithHttpInfo;
    getPrograms(authorization: string, opts?: {
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
    private getProgramsWithHttpInfo;
    getRequests(skip: number, take: number, authorization: string): CancelablePromise<ProgramRequestsOld>;
    private getRequestsWithHttpInfo;
    getSignalPrograms(authorization: string, opts?: {
        sorting?: 'ByLevelAsc' | 'ByLevelDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByDrawdownAsc' | 'ByDrawdownDesc' | 'ByTradesAsc' | 'ByTradesDesc' | 'ByInvestorsAsc' | 'ByInvestorsDesc' | 'ByNewDesc' | 'ByNewAsc' | 'ByEndOfPeriodAsc' | 'ByEndOfPeriodDesc' | 'ByTitleAsc' | 'ByTitleDesc' | 'ByBalanceAsc' | 'ByBalanceDesc' | 'ByCurrDesc' | 'ByCurrAsc' | 'ByLevelProgressDesc' | 'ByLevelProgressAsc';
        from?: Date;
        to?: Date;
        chartPointsCount?: number;
        currencySecondary?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        actionStatus?: 'Pending' | 'Active' | 'Investing' | 'Withdrawing' | 'Ended';
        dashboardActionStatus?: 'All' | 'Active';
        isHideInList?: boolean;
        skip?: number;
        take?: number;
    }): CancelablePromise<SignalsList>;
    private getSignalProgramsWithHttpInfo;
    investIntoFund(id: string, amount: number, authorization: string, opts?: {
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<null>;
    private investIntoFundWithHttpInfo;
    investIntoProgram(id: string, amount: number, authorization: string, opts?: {
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<null>;
    private investIntoProgramWithHttpInfo;
    switchReinvestOff(id: string, authorization: string): CancelablePromise<null>;
    private switchReinvestOffWithHttpInfo;
    switchReinvestOn(id: string, authorization: string): CancelablePromise<null>;
    private switchReinvestOnWithHttpInfo;
    withdrawFromFund(id: string, percent: number, authorization: string, opts?: {
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<null>;
    private withdrawFromFundWithHttpInfo;
    withdrawFromProgram(id: string, authorization: string, opts?: {
        amount?: number;
        withdrawAll?: boolean;
    }): CancelablePromise<null>;
    private withdrawFromProgramWithHttpInfo;
    withdrawFromProgram_2(id: string, amount: number, authorization: string, opts?: {
        withdrawAll?: boolean;
    }): CancelablePromise<null>;
    private withdrawFromProgram_2WithHttpInfo;
}

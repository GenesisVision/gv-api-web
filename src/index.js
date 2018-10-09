/**
 * Core API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AmountWithCurrency from './model/AmountWithCurrency';
import AndroidAppVersion from './model/AndroidAppVersion';
import AndroidVersion from './model/AndroidVersion';
import AssetsPartsChangeRequest from './model/AssetsPartsChangeRequest';
import AssetsValue from './model/AssetsValue';
import BalanceChartElement from './model/BalanceChartElement';
import Broker from './model/Broker';
import BrokerAccountType from './model/BrokerAccountType';
import BrokersInfo from './model/BrokersInfo';
import ChangePasswordViewModel from './model/ChangePasswordViewModel';
import ChartSimple from './model/ChartSimple';
import CreateWithdrawalRequestModel from './model/CreateWithdrawalRequestModel';
import DashboardChartValue from './model/DashboardChartValue';
import DashboardPortfolioEvent from './model/DashboardPortfolioEvent';
import DashboardPortfolioEvents from './model/DashboardPortfolioEvents';
import DashboardProgramDetails from './model/DashboardProgramDetails';
import DashboardSummary from './model/DashboardSummary';
import ErrorMessage from './model/ErrorMessage';
import ErrorViewModel from './model/ErrorViewModel';
import Facet from './model/Facet';
import ForgotPasswordViewModel from './model/ForgotPasswordViewModel';
import FundAssetPartDetails from './model/FundAssetPartDetails';
import FundAssetPartWithIcon from './model/FundAssetPartWithIcon';
import FundAssetPercent from './model/FundAssetPercent';
import FundBalanceChart from './model/FundBalanceChart';
import FundDetails from './model/FundDetails';
import FundDetailsFull from './model/FundDetailsFull';
import FundDetailsListStatistic from './model/FundDetailsListStatistic';
import FundInvestInfo from './model/FundInvestInfo';
import FundProfitChart from './model/FundProfitChart';
import FundStatistic from './model/FundStatistic';
import FundWithdrawInfo from './model/FundWithdrawInfo';
import FundsList from './model/FundsList';
import IOsAppVersion from './model/IOsAppVersion';
import LoginViewModel from './model/LoginViewModel';
import ManagerNotificationSettingList from './model/ManagerNotificationSettingList';
import ManagerProfile from './model/ManagerProfile';
import ManagersList from './model/ManagersList';
import NewFundRequest from './model/NewFundRequest';
import NewProgramRequest from './model/NewProgramRequest';
import NotificationList from './model/NotificationList';
import NotificationSettingList from './model/NotificationSettingList';
import NotificationSettingViewModel from './model/NotificationSettingViewModel';
import NotificationViewModel from './model/NotificationViewModel';
import OefAssetPart from './model/OefAssetPart';
import OrderModel from './model/OrderModel';
import OtherAssetsValue from './model/OtherAssetsValue';
import PasswordModel from './model/PasswordModel';
import PeriodDate from './model/PeriodDate';
import PersonalFundDetailsFull from './model/PersonalFundDetailsFull';
import PersonalFundDetailsList from './model/PersonalFundDetailsList';
import PersonalProgramDetailsFull from './model/PersonalProgramDetailsFull';
import PersonalProgramDetailsList from './model/PersonalProgramDetailsList';
import PlatformAsset from './model/PlatformAsset';
import PlatformAssets from './model/PlatformAssets';
import PlatformInfo from './model/PlatformInfo';
import ProfileFullViewModel from './model/ProfileFullViewModel';
import ProfileHeaderViewModel from './model/ProfileHeaderViewModel';
import ProfilePublic from './model/ProfilePublic';
import ProgramBalanceChart from './model/ProgramBalanceChart';
import ProgramBalanceChartElement from './model/ProgramBalanceChartElement';
import ProgramDetails from './model/ProgramDetails';
import ProgramDetailsFull from './model/ProgramDetailsFull';
import ProgramDetailsListStatistic from './model/ProgramDetailsListStatistic';
import ProgramInvestInfo from './model/ProgramInvestInfo';
import ProgramNotificationSettingList from './model/ProgramNotificationSettingList';
import ProgramProfitChart from './model/ProgramProfitChart';
import ProgramRequest from './model/ProgramRequest';
import ProgramRequests from './model/ProgramRequests';
import ProgramSets from './model/ProgramSets';
import ProgramStatistic from './model/ProgramStatistic';
import ProgramUpdate from './model/ProgramUpdate';
import ProgramWithdrawInfo from './model/ProgramWithdrawInfo';
import ProgramsList from './model/ProgramsList';
import RateItem from './model/RateItem';
import RatesModel from './model/RatesModel';
import RatesModelRates from './model/RatesModelRates';
import RebalancesViewModel from './model/RebalancesViewModel';
import RebalancingModel from './model/RebalancingModel';
import RecoveryCode from './model/RecoveryCode';
import RecoveryCodesViewModel from './model/RecoveryCodesViewModel';
import RegisterInvestorViewModel from './model/RegisterInvestorViewModel';
import RegisterManagerViewModel from './model/RegisterManagerViewModel';
import ResendConfirmationViewModel from './model/ResendConfirmationViewModel';
import ResetPasswordViewModel from './model/ResetPasswordViewModel';
import SearchViewModel from './model/SearchViewModel';
import TradesViewModel from './model/TradesViewModel';
import TwoFactorAuthenticator from './model/TwoFactorAuthenticator';
import TwoFactorAuthenticatorConfirm from './model/TwoFactorAuthenticatorConfirm';
import TwoFactorCodeModel from './model/TwoFactorCodeModel';
import TwoFactorStatus from './model/TwoFactorStatus';
import UpdateProfileViewModel from './model/UpdateProfileViewModel';
import UploadResult from './model/UploadResult';
import ValueChartBar from './model/ValueChartBar';
import WalletInfo from './model/WalletInfo';
import WalletSummary from './model/WalletSummary';
import WalletTransaction from './model/WalletTransaction';
import WalletTransactionsViewModel from './model/WalletTransactionsViewModel';
import WalletWithdrawalInfo from './model/WalletWithdrawalInfo';
import WalletsInfo from './model/WalletsInfo';
import WithdrawalSummary from './model/WithdrawalSummary';
import AuthApi from './api/AuthApi';
import BrokersApi from './api/BrokersApi';
import FileApi from './api/FileApi';
import FundsApi from './api/FundsApi';
import InvestorApi from './api/InvestorApi';
import ManagersApi from './api/ManagersApi';
import NotificationsApi from './api/NotificationsApi';
import PlatformApi from './api/PlatformApi';
import ProfileApi from './api/ProfileApi';
import ProgramsApi from './api/ProgramsApi';
import RateApi from './api/RateApi';
import SearchApi from './api/SearchApi';
import WalletApi from './api/WalletApi';


/**
* ERROR_UNKNOWN.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var CoreApiV10 = require('index'); // See note below*.
* var xxxSvc = new CoreApiV10.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new CoreApiV10.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new CoreApiV10.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new CoreApiV10.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version v1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AmountWithCurrency model constructor.
     * @property {module:model/AmountWithCurrency}
     */
    AmountWithCurrency,

    /**
     * The AndroidAppVersion model constructor.
     * @property {module:model/AndroidAppVersion}
     */
    AndroidAppVersion,

    /**
     * The AndroidVersion model constructor.
     * @property {module:model/AndroidVersion}
     */
    AndroidVersion,

    /**
     * The AssetsPartsChangeRequest model constructor.
     * @property {module:model/AssetsPartsChangeRequest}
     */
    AssetsPartsChangeRequest,

    /**
     * The AssetsValue model constructor.
     * @property {module:model/AssetsValue}
     */
    AssetsValue,

    /**
     * The BalanceChartElement model constructor.
     * @property {module:model/BalanceChartElement}
     */
    BalanceChartElement,

    /**
     * The Broker model constructor.
     * @property {module:model/Broker}
     */
    Broker,

    /**
     * The BrokerAccountType model constructor.
     * @property {module:model/BrokerAccountType}
     */
    BrokerAccountType,

    /**
     * The BrokersInfo model constructor.
     * @property {module:model/BrokersInfo}
     */
    BrokersInfo,

    /**
     * The ChangePasswordViewModel model constructor.
     * @property {module:model/ChangePasswordViewModel}
     */
    ChangePasswordViewModel,

    /**
     * The ChartSimple model constructor.
     * @property {module:model/ChartSimple}
     */
    ChartSimple,

    /**
     * The CreateWithdrawalRequestModel model constructor.
     * @property {module:model/CreateWithdrawalRequestModel}
     */
    CreateWithdrawalRequestModel,

    /**
     * The DashboardChartValue model constructor.
     * @property {module:model/DashboardChartValue}
     */
    DashboardChartValue,

    /**
     * The DashboardPortfolioEvent model constructor.
     * @property {module:model/DashboardPortfolioEvent}
     */
    DashboardPortfolioEvent,

    /**
     * The DashboardPortfolioEvents model constructor.
     * @property {module:model/DashboardPortfolioEvents}
     */
    DashboardPortfolioEvents,

    /**
     * The DashboardProgramDetails model constructor.
     * @property {module:model/DashboardProgramDetails}
     */
    DashboardProgramDetails,

    /**
     * The DashboardSummary model constructor.
     * @property {module:model/DashboardSummary}
     */
    DashboardSummary,

    /**
     * The ErrorMessage model constructor.
     * @property {module:model/ErrorMessage}
     */
    ErrorMessage,

    /**
     * The ErrorViewModel model constructor.
     * @property {module:model/ErrorViewModel}
     */
    ErrorViewModel,

    /**
     * The Facet model constructor.
     * @property {module:model/Facet}
     */
    Facet,

    /**
     * The ForgotPasswordViewModel model constructor.
     * @property {module:model/ForgotPasswordViewModel}
     */
    ForgotPasswordViewModel,

    /**
     * The FundAssetPartDetails model constructor.
     * @property {module:model/FundAssetPartDetails}
     */
    FundAssetPartDetails,

    /**
     * The FundAssetPartWithIcon model constructor.
     * @property {module:model/FundAssetPartWithIcon}
     */
    FundAssetPartWithIcon,

    /**
     * The FundAssetPercent model constructor.
     * @property {module:model/FundAssetPercent}
     */
    FundAssetPercent,

    /**
     * The FundBalanceChart model constructor.
     * @property {module:model/FundBalanceChart}
     */
    FundBalanceChart,

    /**
     * The FundDetails model constructor.
     * @property {module:model/FundDetails}
     */
    FundDetails,

    /**
     * The FundDetailsFull model constructor.
     * @property {module:model/FundDetailsFull}
     */
    FundDetailsFull,

    /**
     * The FundDetailsListStatistic model constructor.
     * @property {module:model/FundDetailsListStatistic}
     */
    FundDetailsListStatistic,

    /**
     * The FundInvestInfo model constructor.
     * @property {module:model/FundInvestInfo}
     */
    FundInvestInfo,

    /**
     * The FundProfitChart model constructor.
     * @property {module:model/FundProfitChart}
     */
    FundProfitChart,

    /**
     * The FundStatistic model constructor.
     * @property {module:model/FundStatistic}
     */
    FundStatistic,

    /**
     * The FundWithdrawInfo model constructor.
     * @property {module:model/FundWithdrawInfo}
     */
    FundWithdrawInfo,

    /**
     * The FundsList model constructor.
     * @property {module:model/FundsList}
     */
    FundsList,

    /**
     * The IOsAppVersion model constructor.
     * @property {module:model/IOsAppVersion}
     */
    IOsAppVersion,

    /**
     * The LoginViewModel model constructor.
     * @property {module:model/LoginViewModel}
     */
    LoginViewModel,

    /**
     * The ManagerNotificationSettingList model constructor.
     * @property {module:model/ManagerNotificationSettingList}
     */
    ManagerNotificationSettingList,

    /**
     * The ManagerProfile model constructor.
     * @property {module:model/ManagerProfile}
     */
    ManagerProfile,

    /**
     * The ManagersList model constructor.
     * @property {module:model/ManagersList}
     */
    ManagersList,

    /**
     * The NewFundRequest model constructor.
     * @property {module:model/NewFundRequest}
     */
    NewFundRequest,

    /**
     * The NewProgramRequest model constructor.
     * @property {module:model/NewProgramRequest}
     */
    NewProgramRequest,

    /**
     * The NotificationList model constructor.
     * @property {module:model/NotificationList}
     */
    NotificationList,

    /**
     * The NotificationSettingList model constructor.
     * @property {module:model/NotificationSettingList}
     */
    NotificationSettingList,

    /**
     * The NotificationSettingViewModel model constructor.
     * @property {module:model/NotificationSettingViewModel}
     */
    NotificationSettingViewModel,

    /**
     * The NotificationViewModel model constructor.
     * @property {module:model/NotificationViewModel}
     */
    NotificationViewModel,

    /**
     * The OefAssetPart model constructor.
     * @property {module:model/OefAssetPart}
     */
    OefAssetPart,

    /**
     * The OrderModel model constructor.
     * @property {module:model/OrderModel}
     */
    OrderModel,

    /**
     * The OtherAssetsValue model constructor.
     * @property {module:model/OtherAssetsValue}
     */
    OtherAssetsValue,

    /**
     * The PasswordModel model constructor.
     * @property {module:model/PasswordModel}
     */
    PasswordModel,

    /**
     * The PeriodDate model constructor.
     * @property {module:model/PeriodDate}
     */
    PeriodDate,

    /**
     * The PersonalFundDetailsFull model constructor.
     * @property {module:model/PersonalFundDetailsFull}
     */
    PersonalFundDetailsFull,

    /**
     * The PersonalFundDetailsList model constructor.
     * @property {module:model/PersonalFundDetailsList}
     */
    PersonalFundDetailsList,

    /**
     * The PersonalProgramDetailsFull model constructor.
     * @property {module:model/PersonalProgramDetailsFull}
     */
    PersonalProgramDetailsFull,

    /**
     * The PersonalProgramDetailsList model constructor.
     * @property {module:model/PersonalProgramDetailsList}
     */
    PersonalProgramDetailsList,

    /**
     * The PlatformAsset model constructor.
     * @property {module:model/PlatformAsset}
     */
    PlatformAsset,

    /**
     * The PlatformAssets model constructor.
     * @property {module:model/PlatformAssets}
     */
    PlatformAssets,

    /**
     * The PlatformInfo model constructor.
     * @property {module:model/PlatformInfo}
     */
    PlatformInfo,

    /**
     * The ProfileFullViewModel model constructor.
     * @property {module:model/ProfileFullViewModel}
     */
    ProfileFullViewModel,

    /**
     * The ProfileHeaderViewModel model constructor.
     * @property {module:model/ProfileHeaderViewModel}
     */
    ProfileHeaderViewModel,

    /**
     * The ProfilePublic model constructor.
     * @property {module:model/ProfilePublic}
     */
    ProfilePublic,

    /**
     * The ProgramBalanceChart model constructor.
     * @property {module:model/ProgramBalanceChart}
     */
    ProgramBalanceChart,

    /**
     * The ProgramBalanceChartElement model constructor.
     * @property {module:model/ProgramBalanceChartElement}
     */
    ProgramBalanceChartElement,

    /**
     * The ProgramDetails model constructor.
     * @property {module:model/ProgramDetails}
     */
    ProgramDetails,

    /**
     * The ProgramDetailsFull model constructor.
     * @property {module:model/ProgramDetailsFull}
     */
    ProgramDetailsFull,

    /**
     * The ProgramDetailsListStatistic model constructor.
     * @property {module:model/ProgramDetailsListStatistic}
     */
    ProgramDetailsListStatistic,

    /**
     * The ProgramInvestInfo model constructor.
     * @property {module:model/ProgramInvestInfo}
     */
    ProgramInvestInfo,

    /**
     * The ProgramNotificationSettingList model constructor.
     * @property {module:model/ProgramNotificationSettingList}
     */
    ProgramNotificationSettingList,

    /**
     * The ProgramProfitChart model constructor.
     * @property {module:model/ProgramProfitChart}
     */
    ProgramProfitChart,

    /**
     * The ProgramRequest model constructor.
     * @property {module:model/ProgramRequest}
     */
    ProgramRequest,

    /**
     * The ProgramRequests model constructor.
     * @property {module:model/ProgramRequests}
     */
    ProgramRequests,

    /**
     * The ProgramSets model constructor.
     * @property {module:model/ProgramSets}
     */
    ProgramSets,

    /**
     * The ProgramStatistic model constructor.
     * @property {module:model/ProgramStatistic}
     */
    ProgramStatistic,

    /**
     * The ProgramUpdate model constructor.
     * @property {module:model/ProgramUpdate}
     */
    ProgramUpdate,

    /**
     * The ProgramWithdrawInfo model constructor.
     * @property {module:model/ProgramWithdrawInfo}
     */
    ProgramWithdrawInfo,

    /**
     * The ProgramsList model constructor.
     * @property {module:model/ProgramsList}
     */
    ProgramsList,

    /**
     * The RateItem model constructor.
     * @property {module:model/RateItem}
     */
    RateItem,

    /**
     * The RatesModel model constructor.
     * @property {module:model/RatesModel}
     */
    RatesModel,

    /**
     * The RatesModelRates model constructor.
     * @property {module:model/RatesModelRates}
     */
    RatesModelRates,

    /**
     * The RebalancesViewModel model constructor.
     * @property {module:model/RebalancesViewModel}
     */
    RebalancesViewModel,

    /**
     * The RebalancingModel model constructor.
     * @property {module:model/RebalancingModel}
     */
    RebalancingModel,

    /**
     * The RecoveryCode model constructor.
     * @property {module:model/RecoveryCode}
     */
    RecoveryCode,

    /**
     * The RecoveryCodesViewModel model constructor.
     * @property {module:model/RecoveryCodesViewModel}
     */
    RecoveryCodesViewModel,

    /**
     * The RegisterInvestorViewModel model constructor.
     * @property {module:model/RegisterInvestorViewModel}
     */
    RegisterInvestorViewModel,

    /**
     * The RegisterManagerViewModel model constructor.
     * @property {module:model/RegisterManagerViewModel}
     */
    RegisterManagerViewModel,

    /**
     * The ResendConfirmationViewModel model constructor.
     * @property {module:model/ResendConfirmationViewModel}
     */
    ResendConfirmationViewModel,

    /**
     * The ResetPasswordViewModel model constructor.
     * @property {module:model/ResetPasswordViewModel}
     */
    ResetPasswordViewModel,

    /**
     * The SearchViewModel model constructor.
     * @property {module:model/SearchViewModel}
     */
    SearchViewModel,

    /**
     * The TradesViewModel model constructor.
     * @property {module:model/TradesViewModel}
     */
    TradesViewModel,

    /**
     * The TwoFactorAuthenticator model constructor.
     * @property {module:model/TwoFactorAuthenticator}
     */
    TwoFactorAuthenticator,

    /**
     * The TwoFactorAuthenticatorConfirm model constructor.
     * @property {module:model/TwoFactorAuthenticatorConfirm}
     */
    TwoFactorAuthenticatorConfirm,

    /**
     * The TwoFactorCodeModel model constructor.
     * @property {module:model/TwoFactorCodeModel}
     */
    TwoFactorCodeModel,

    /**
     * The TwoFactorStatus model constructor.
     * @property {module:model/TwoFactorStatus}
     */
    TwoFactorStatus,

    /**
     * The UpdateProfileViewModel model constructor.
     * @property {module:model/UpdateProfileViewModel}
     */
    UpdateProfileViewModel,

    /**
     * The UploadResult model constructor.
     * @property {module:model/UploadResult}
     */
    UploadResult,

    /**
     * The ValueChartBar model constructor.
     * @property {module:model/ValueChartBar}
     */
    ValueChartBar,

    /**
     * The WalletInfo model constructor.
     * @property {module:model/WalletInfo}
     */
    WalletInfo,

    /**
     * The WalletSummary model constructor.
     * @property {module:model/WalletSummary}
     */
    WalletSummary,

    /**
     * The WalletTransaction model constructor.
     * @property {module:model/WalletTransaction}
     */
    WalletTransaction,

    /**
     * The WalletTransactionsViewModel model constructor.
     * @property {module:model/WalletTransactionsViewModel}
     */
    WalletTransactionsViewModel,

    /**
     * The WalletWithdrawalInfo model constructor.
     * @property {module:model/WalletWithdrawalInfo}
     */
    WalletWithdrawalInfo,

    /**
     * The WalletsInfo model constructor.
     * @property {module:model/WalletsInfo}
     */
    WalletsInfo,

    /**
     * The WithdrawalSummary model constructor.
     * @property {module:model/WithdrawalSummary}
     */
    WithdrawalSummary,

    /**
    * The AuthApi service constructor.
    * @property {module:api/AuthApi}
    */
    AuthApi,

    /**
    * The BrokersApi service constructor.
    * @property {module:api/BrokersApi}
    */
    BrokersApi,

    /**
    * The FileApi service constructor.
    * @property {module:api/FileApi}
    */
    FileApi,

    /**
    * The FundsApi service constructor.
    * @property {module:api/FundsApi}
    */
    FundsApi,

    /**
    * The InvestorApi service constructor.
    * @property {module:api/InvestorApi}
    */
    InvestorApi,

    /**
    * The ManagersApi service constructor.
    * @property {module:api/ManagersApi}
    */
    ManagersApi,

    /**
    * The NotificationsApi service constructor.
    * @property {module:api/NotificationsApi}
    */
    NotificationsApi,

    /**
    * The PlatformApi service constructor.
    * @property {module:api/PlatformApi}
    */
    PlatformApi,

    /**
    * The ProfileApi service constructor.
    * @property {module:api/ProfileApi}
    */
    ProfileApi,

    /**
    * The ProgramsApi service constructor.
    * @property {module:api/ProgramsApi}
    */
    ProgramsApi,

    /**
    * The RateApi service constructor.
    * @property {module:api/RateApi}
    */
    RateApi,

    /**
    * The SearchApi service constructor.
    * @property {module:api/SearchApi}
    */
    SearchApi,

    /**
    * The WalletApi service constructor.
    * @property {module:api/WalletApi}
    */
    WalletApi
};

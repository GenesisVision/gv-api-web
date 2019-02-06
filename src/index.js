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
import AssetSelection from './model/AssetSelection';
import AssetsValue from './model/AssetsValue';
import BalanceChartElement from './model/BalanceChartElement';
import BlockchainInfo from './model/BlockchainInfo';
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
import FcmTokenViewModel from './model/FcmTokenViewModel';
import ForgotPasswordViewModel from './model/ForgotPasswordViewModel';
import FundAssetInfo from './model/FundAssetInfo';
import FundAssetPart from './model/FundAssetPart';
import FundAssetPartWithIcon from './model/FundAssetPartWithIcon';
import FundAssetPercent from './model/FundAssetPercent';
import FundAssetsListInfo from './model/FundAssetsListInfo';
import FundBalanceChart from './model/FundBalanceChart';
import FundDetails from './model/FundDetails';
import FundDetailsFull from './model/FundDetailsFull';
import FundDetailsListStatistic from './model/FundDetailsListStatistic';
import FundInvestInfo from './model/FundInvestInfo';
import FundNotificationSettingList from './model/FundNotificationSettingList';
import FundProfitChart from './model/FundProfitChart';
import FundStatistic from './model/FundStatistic';
import FundWithdrawInfo from './model/FundWithdrawInfo';
import FundsList from './model/FundsList';
import IOsAppVersion from './model/IOsAppVersion';
import KycCallback from './model/KycCallback';
import LevelInfo from './model/LevelInfo';
import LevelUpData from './model/LevelUpData';
import LevelUpSummary from './model/LevelUpSummary';
import LoginViewModel from './model/LoginViewModel';
import ManagerAssets from './model/ManagerAssets';
import ManagerDashboard from './model/ManagerDashboard';
import ManagerFundWithdrawInfo from './model/ManagerFundWithdrawInfo';
import ManagerNotificationSettingList from './model/ManagerNotificationSettingList';
import ManagerOverview from './model/ManagerOverview';
import ManagerPortfolioEvent from './model/ManagerPortfolioEvent';
import ManagerPortfolioEvents from './model/ManagerPortfolioEvents';
import ManagerProfile from './model/ManagerProfile';
import ManagerProfileDetails from './model/ManagerProfileDetails';
import ManagerProgramWithdrawInfo from './model/ManagerProgramWithdrawInfo';
import ManagerSimpleFund from './model/ManagerSimpleFund';
import ManagerSimpleProgram from './model/ManagerSimpleProgram';
import ManagersList from './model/ManagersList';
import MultiWalletExternalTransaction from './model/MultiWalletExternalTransaction';
import MultiWalletExternalTransactionsViewModel from './model/MultiWalletExternalTransactionsViewModel';
import MultiWalletFilters from './model/MultiWalletFilters';
import MultiWalletTransaction from './model/MultiWalletTransaction';
import MultiWalletTransactionsViewModel from './model/MultiWalletTransactionsViewModel';
import NewFundRequest from './model/NewFundRequest';
import NewProgramRequest from './model/NewProgramRequest';
import NotificationList from './model/NotificationList';
import NotificationSettingList from './model/NotificationSettingList';
import NotificationSettingViewModel from './model/NotificationSettingViewModel';
import NotificationViewModel from './model/NotificationViewModel';
import OrderModel from './model/OrderModel';
import OtherAssetsValue from './model/OtherAssetsValue';
import PasswordModel from './model/PasswordModel';
import PeriodDate from './model/PeriodDate';
import PersonalFundDetailsFull from './model/PersonalFundDetailsFull';
import PersonalProgramDetailsFull from './model/PersonalProgramDetailsFull';
import PlatformAsset from './model/PlatformAsset';
import PlatformAssets from './model/PlatformAssets';
import PlatformCurrency from './model/PlatformCurrency';
import PlatformInfo from './model/PlatformInfo';
import PlatformStatistic from './model/PlatformStatistic';
import ProfileFullViewModel from './model/ProfileFullViewModel';
import ProfileHeaderViewModel from './model/ProfileHeaderViewModel';
import ProfilePublic from './model/ProfilePublic';
import ProgramBalanceChart from './model/ProgramBalanceChart';
import ProgramBalanceChartElement from './model/ProgramBalanceChartElement';
import ProgramDetails from './model/ProgramDetails';
import ProgramDetailsFull from './model/ProgramDetailsFull';
import ProgramDetailsListStatistic from './model/ProgramDetailsListStatistic';
import ProgramDetailsRating from './model/ProgramDetailsRating';
import ProgramInfo from './model/ProgramInfo';
import ProgramInvestInfo from './model/ProgramInvestInfo';
import ProgramNotificationSettingList from './model/ProgramNotificationSettingList';
import ProgramProfitChart from './model/ProgramProfitChart';
import ProgramRequest from './model/ProgramRequest';
import ProgramRequests from './model/ProgramRequests';
import ProgramSets from './model/ProgramSets';
import ProgramStatistic from './model/ProgramStatistic';
import ProgramTag from './model/ProgramTag';
import ProgramUpdate from './model/ProgramUpdate';
import ProgramWithdrawInfo from './model/ProgramWithdrawInfo';
import ProgramsInfo from './model/ProgramsInfo';
import ProgramsLevelsInfo from './model/ProgramsLevelsInfo';
import ProgramsList from './model/ProgramsList';
import RateItem from './model/RateItem';
import RatesModel from './model/RatesModel';
import RatesModelRates from './model/RatesModelRates';
import RecoveryCode from './model/RecoveryCode';
import RecoveryCodesViewModel from './model/RecoveryCodesViewModel';
import RegisterInvestorViewModel from './model/RegisterInvestorViewModel';
import RegisterManagerViewModel from './model/RegisterManagerViewModel';
import ResendConfirmationViewModel from './model/ResendConfirmationViewModel';
import ResetPasswordViewModel from './model/ResetPasswordViewModel';
import Review from './model/Review';
import SearchViewModel from './model/SearchViewModel';
import TradesViewModel from './model/TradesViewModel';
import TransactionDetatils from './model/TransactionDetatils';
import TwoFactorAuthenticator from './model/TwoFactorAuthenticator';
import TwoFactorAuthenticatorConfirm from './model/TwoFactorAuthenticatorConfirm';
import TwoFactorCodeModel from './model/TwoFactorCodeModel';
import TwoFactorStatus from './model/TwoFactorStatus';
import UpdatePersonalDetailViewModel from './model/UpdatePersonalDetailViewModel';
import UpdateProfileViewModel from './model/UpdateProfileViewModel';
import UploadResult from './model/UploadResult';
import ValueChartBar from './model/ValueChartBar';
import WalletData from './model/WalletData';
import WalletInfo from './model/WalletInfo';
import WalletMultiSummary from './model/WalletMultiSummary';
import WalletSummary from './model/WalletSummary';
import WalletTransaction from './model/WalletTransaction';
import WalletTransactionsViewModel from './model/WalletTransactionsViewModel';
import WalletWithdrawalInfo from './model/WalletWithdrawalInfo';
import WalletsGrandTotal from './model/WalletsGrandTotal';
import WalletsInfo from './model/WalletsInfo';
import WithdrawalInfo from './model/WithdrawalInfo';
import WithdrawalSummary from './model/WithdrawalSummary';
import AuthApi from './api/AuthApi';
import BrokersApi from './api/BrokersApi';
import FileApi from './api/FileApi';
import FundsApi from './api/FundsApi';
import InvestorApi from './api/InvestorApi';
import KycApi from './api/KycApi';
import ManagerApi from './api/ManagerApi';
import NotificationsApi from './api/NotificationsApi';
import PlatformApi from './api/PlatformApi';
import ProfileApi from './api/ProfileApi';
import ProgramsApi from './api/ProgramsApi';
import RateApi from './api/RateApi';
import SearchApi from './api/SearchApi';
import WalletApi from './api/WalletApi';


/**
*
* @interface index
* @version v1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @name index#ApiClient
     * @type {ApiClient}
     */
    ApiClient,

    /**
     * @name index#AmountWithCurrency
     * @type {AmountWithCurrency}
     */
    AmountWithCurrency,

    /**
     * @name index#AndroidAppVersion
     * @type {AndroidAppVersion}
     */
    AndroidAppVersion,

    /**
     * @name index#AndroidVersion
     * @type {AndroidVersion}
     */
    AndroidVersion,

    /**
     * @name index#AssetSelection
     * @type {AssetSelection}
     */
    AssetSelection,

    /**
     * @name index#AssetsValue
     * @type {AssetsValue}
     */
    AssetsValue,

    /**
     * @name index#BalanceChartElement
     * @type {BalanceChartElement}
     */
    BalanceChartElement,

    /**
     * @name index#BlockchainInfo
     * @type {BlockchainInfo}
     */
    BlockchainInfo,

    /**
     * @name index#Broker
     * @type {Broker}
     */
    Broker,

    /**
     * @name index#BrokerAccountType
     * @type {BrokerAccountType}
     */
    BrokerAccountType,

    /**
     * @name index#BrokersInfo
     * @type {BrokersInfo}
     */
    BrokersInfo,

    /**
     * @name index#ChangePasswordViewModel
     * @type {ChangePasswordViewModel}
     */
    ChangePasswordViewModel,

    /**
     * @name index#ChartSimple
     * @type {ChartSimple}
     */
    ChartSimple,

    /**
     * @name index#CreateWithdrawalRequestModel
     * @type {CreateWithdrawalRequestModel}
     */
    CreateWithdrawalRequestModel,

    /**
     * @name index#DashboardChartValue
     * @type {DashboardChartValue}
     */
    DashboardChartValue,

    /**
     * @name index#DashboardPortfolioEvent
     * @type {DashboardPortfolioEvent}
     */
    DashboardPortfolioEvent,

    /**
     * @name index#DashboardPortfolioEvents
     * @type {DashboardPortfolioEvents}
     */
    DashboardPortfolioEvents,

    /**
     * @name index#DashboardProgramDetails
     * @type {DashboardProgramDetails}
     */
    DashboardProgramDetails,

    /**
     * @name index#DashboardSummary
     * @type {DashboardSummary}
     */
    DashboardSummary,

    /**
     * @name index#ErrorMessage
     * @type {ErrorMessage}
     */
    ErrorMessage,

    /**
     * @name index#ErrorViewModel
     * @type {ErrorViewModel}
     */
    ErrorViewModel,

    /**
     * @name index#Facet
     * @type {Facet}
     */
    Facet,

    /**
     * @name index#FcmTokenViewModel
     * @type {FcmTokenViewModel}
     */
    FcmTokenViewModel,

    /**
     * @name index#ForgotPasswordViewModel
     * @type {ForgotPasswordViewModel}
     */
    ForgotPasswordViewModel,

    /**
     * @name index#FundAssetInfo
     * @type {FundAssetInfo}
     */
    FundAssetInfo,

    /**
     * @name index#FundAssetPart
     * @type {FundAssetPart}
     */
    FundAssetPart,

    /**
     * @name index#FundAssetPartWithIcon
     * @type {FundAssetPartWithIcon}
     */
    FundAssetPartWithIcon,

    /**
     * @name index#FundAssetPercent
     * @type {FundAssetPercent}
     */
    FundAssetPercent,

    /**
     * @name index#FundAssetsListInfo
     * @type {FundAssetsListInfo}
     */
    FundAssetsListInfo,

    /**
     * @name index#FundBalanceChart
     * @type {FundBalanceChart}
     */
    FundBalanceChart,

    /**
     * @name index#FundDetails
     * @type {FundDetails}
     */
    FundDetails,

    /**
     * @name index#FundDetailsFull
     * @type {FundDetailsFull}
     */
    FundDetailsFull,

    /**
     * @name index#FundDetailsListStatistic
     * @type {FundDetailsListStatistic}
     */
    FundDetailsListStatistic,

    /**
     * @name index#FundInvestInfo
     * @type {FundInvestInfo}
     */
    FundInvestInfo,

    /**
     * @name index#FundNotificationSettingList
     * @type {FundNotificationSettingList}
     */
    FundNotificationSettingList,

    /**
     * @name index#FundProfitChart
     * @type {FundProfitChart}
     */
    FundProfitChart,

    /**
     * @name index#FundStatistic
     * @type {FundStatistic}
     */
    FundStatistic,

    /**
     * @name index#FundWithdrawInfo
     * @type {FundWithdrawInfo}
     */
    FundWithdrawInfo,

    /**
     * @name index#FundsList
     * @type {FundsList}
     */
    FundsList,

    /**
     * @name index#IOsAppVersion
     * @type {IOsAppVersion}
     */
    IOsAppVersion,

    /**
     * @name index#KycCallback
     * @type {KycCallback}
     */
    KycCallback,

    /**
     * @name index#LevelInfo
     * @type {LevelInfo}
     */
    LevelInfo,

    /**
     * @name index#LevelUpData
     * @type {LevelUpData}
     */
    LevelUpData,

    /**
     * @name index#LevelUpSummary
     * @type {LevelUpSummary}
     */
    LevelUpSummary,

    /**
     * @name index#LoginViewModel
     * @type {LoginViewModel}
     */
    LoginViewModel,

    /**
     * @name index#ManagerAssets
     * @type {ManagerAssets}
     */
    ManagerAssets,

    /**
     * @name index#ManagerDashboard
     * @type {ManagerDashboard}
     */
    ManagerDashboard,

    /**
     * @name index#ManagerFundWithdrawInfo
     * @type {ManagerFundWithdrawInfo}
     */
    ManagerFundWithdrawInfo,

    /**
     * @name index#ManagerNotificationSettingList
     * @type {ManagerNotificationSettingList}
     */
    ManagerNotificationSettingList,

    /**
     * @name index#ManagerOverview
     * @type {ManagerOverview}
     */
    ManagerOverview,

    /**
     * @name index#ManagerPortfolioEvent
     * @type {ManagerPortfolioEvent}
     */
    ManagerPortfolioEvent,

    /**
     * @name index#ManagerPortfolioEvents
     * @type {ManagerPortfolioEvents}
     */
    ManagerPortfolioEvents,

    /**
     * @name index#ManagerProfile
     * @type {ManagerProfile}
     */
    ManagerProfile,

    /**
     * @name index#ManagerProfileDetails
     * @type {ManagerProfileDetails}
     */
    ManagerProfileDetails,

    /**
     * @name index#ManagerProgramWithdrawInfo
     * @type {ManagerProgramWithdrawInfo}
     */
    ManagerProgramWithdrawInfo,

    /**
     * @name index#ManagerSimpleFund
     * @type {ManagerSimpleFund}
     */
    ManagerSimpleFund,

    /**
     * @name index#ManagerSimpleProgram
     * @type {ManagerSimpleProgram}
     */
    ManagerSimpleProgram,

    /**
     * @name index#ManagersList
     * @type {ManagersList}
     */
    ManagersList,

    /**
     * @name index#MultiWalletExternalTransaction
     * @type {MultiWalletExternalTransaction}
     */
    MultiWalletExternalTransaction,

    /**
     * @name index#MultiWalletExternalTransactionsViewModel
     * @type {MultiWalletExternalTransactionsViewModel}
     */
    MultiWalletExternalTransactionsViewModel,

    /**
     * @name index#MultiWalletFilters
     * @type {MultiWalletFilters}
     */
    MultiWalletFilters,

    /**
     * @name index#MultiWalletTransaction
     * @type {MultiWalletTransaction}
     */
    MultiWalletTransaction,

    /**
     * @name index#MultiWalletTransactionsViewModel
     * @type {MultiWalletTransactionsViewModel}
     */
    MultiWalletTransactionsViewModel,

    /**
     * @name index#NewFundRequest
     * @type {NewFundRequest}
     */
    NewFundRequest,

    /**
     * @name index#NewProgramRequest
     * @type {NewProgramRequest}
     */
    NewProgramRequest,

    /**
     * @name index#NotificationList
     * @type {NotificationList}
     */
    NotificationList,

    /**
     * @name index#NotificationSettingList
     * @type {NotificationSettingList}
     */
    NotificationSettingList,

    /**
     * @name index#NotificationSettingViewModel
     * @type {NotificationSettingViewModel}
     */
    NotificationSettingViewModel,

    /**
     * @name index#NotificationViewModel
     * @type {NotificationViewModel}
     */
    NotificationViewModel,

    /**
     * @name index#OrderModel
     * @type {OrderModel}
     */
    OrderModel,

    /**
     * @name index#OtherAssetsValue
     * @type {OtherAssetsValue}
     */
    OtherAssetsValue,

    /**
     * @name index#PasswordModel
     * @type {PasswordModel}
     */
    PasswordModel,

    /**
     * @name index#PeriodDate
     * @type {PeriodDate}
     */
    PeriodDate,

    /**
     * @name index#PersonalFundDetailsFull
     * @type {PersonalFundDetailsFull}
     */
    PersonalFundDetailsFull,

    /**
     * @name index#PersonalProgramDetailsFull
     * @type {PersonalProgramDetailsFull}
     */
    PersonalProgramDetailsFull,

    /**
     * @name index#PlatformAsset
     * @type {PlatformAsset}
     */
    PlatformAsset,

    /**
     * @name index#PlatformAssets
     * @type {PlatformAssets}
     */
    PlatformAssets,

    /**
     * @name index#PlatformCurrency
     * @type {PlatformCurrency}
     */
    PlatformCurrency,

    /**
     * @name index#PlatformInfo
     * @type {PlatformInfo}
     */
    PlatformInfo,

    /**
     * @name index#PlatformStatistic
     * @type {PlatformStatistic}
     */
    PlatformStatistic,

    /**
     * @name index#ProfileFullViewModel
     * @type {ProfileFullViewModel}
     */
    ProfileFullViewModel,

    /**
     * @name index#ProfileHeaderViewModel
     * @type {ProfileHeaderViewModel}
     */
    ProfileHeaderViewModel,

    /**
     * @name index#ProfilePublic
     * @type {ProfilePublic}
     */
    ProfilePublic,

    /**
     * @name index#ProgramBalanceChart
     * @type {ProgramBalanceChart}
     */
    ProgramBalanceChart,

    /**
     * @name index#ProgramBalanceChartElement
     * @type {ProgramBalanceChartElement}
     */
    ProgramBalanceChartElement,

    /**
     * @name index#ProgramDetails
     * @type {ProgramDetails}
     */
    ProgramDetails,

    /**
     * @name index#ProgramDetailsFull
     * @type {ProgramDetailsFull}
     */
    ProgramDetailsFull,

    /**
     * @name index#ProgramDetailsListStatistic
     * @type {ProgramDetailsListStatistic}
     */
    ProgramDetailsListStatistic,

    /**
     * @name index#ProgramDetailsRating
     * @type {ProgramDetailsRating}
     */
    ProgramDetailsRating,

    /**
     * @name index#ProgramInfo
     * @type {ProgramInfo}
     */
    ProgramInfo,

    /**
     * @name index#ProgramInvestInfo
     * @type {ProgramInvestInfo}
     */
    ProgramInvestInfo,

    /**
     * @name index#ProgramNotificationSettingList
     * @type {ProgramNotificationSettingList}
     */
    ProgramNotificationSettingList,

    /**
     * @name index#ProgramProfitChart
     * @type {ProgramProfitChart}
     */
    ProgramProfitChart,

    /**
     * @name index#ProgramRequest
     * @type {ProgramRequest}
     */
    ProgramRequest,

    /**
     * @name index#ProgramRequests
     * @type {ProgramRequests}
     */
    ProgramRequests,

    /**
     * @name index#ProgramSets
     * @type {ProgramSets}
     */
    ProgramSets,

    /**
     * @name index#ProgramStatistic
     * @type {ProgramStatistic}
     */
    ProgramStatistic,

    /**
     * @name index#ProgramTag
     * @type {ProgramTag}
     */
    ProgramTag,

    /**
     * @name index#ProgramUpdate
     * @type {ProgramUpdate}
     */
    ProgramUpdate,

    /**
     * @name index#ProgramWithdrawInfo
     * @type {ProgramWithdrawInfo}
     */
    ProgramWithdrawInfo,

    /**
     * @name index#ProgramsInfo
     * @type {ProgramsInfo}
     */
    ProgramsInfo,

    /**
     * @name index#ProgramsLevelsInfo
     * @type {ProgramsLevelsInfo}
     */
    ProgramsLevelsInfo,

    /**
     * @name index#ProgramsList
     * @type {ProgramsList}
     */
    ProgramsList,

    /**
     * @name index#RateItem
     * @type {RateItem}
     */
    RateItem,

    /**
     * @name index#RatesModel
     * @type {RatesModel}
     */
    RatesModel,

    /**
     * @name index#RatesModelRates
     * @type {RatesModelRates}
     */
    RatesModelRates,

    /**
     * @name index#RecoveryCode
     * @type {RecoveryCode}
     */
    RecoveryCode,

    /**
     * @name index#RecoveryCodesViewModel
     * @type {RecoveryCodesViewModel}
     */
    RecoveryCodesViewModel,

    /**
     * @name index#RegisterInvestorViewModel
     * @type {RegisterInvestorViewModel}
     */
    RegisterInvestorViewModel,

    /**
     * @name index#RegisterManagerViewModel
     * @type {RegisterManagerViewModel}
     */
    RegisterManagerViewModel,

    /**
     * @name index#ResendConfirmationViewModel
     * @type {ResendConfirmationViewModel}
     */
    ResendConfirmationViewModel,

    /**
     * @name index#ResetPasswordViewModel
     * @type {ResetPasswordViewModel}
     */
    ResetPasswordViewModel,

    /**
     * @name index#Review
     * @type {Review}
     */
    Review,

    /**
     * @name index#SearchViewModel
     * @type {SearchViewModel}
     */
    SearchViewModel,

    /**
     * @name index#TradesViewModel
     * @type {TradesViewModel}
     */
    TradesViewModel,

    /**
     * @name index#TransactionDetatils
     * @type {TransactionDetatils}
     */
    TransactionDetatils,

    /**
     * @name index#TwoFactorAuthenticator
     * @type {TwoFactorAuthenticator}
     */
    TwoFactorAuthenticator,

    /**
     * @name index#TwoFactorAuthenticatorConfirm
     * @type {TwoFactorAuthenticatorConfirm}
     */
    TwoFactorAuthenticatorConfirm,

    /**
     * @name index#TwoFactorCodeModel
     * @type {TwoFactorCodeModel}
     */
    TwoFactorCodeModel,

    /**
     * @name index#TwoFactorStatus
     * @type {TwoFactorStatus}
     */
    TwoFactorStatus,

    /**
     * @name index#UpdatePersonalDetailViewModel
     * @type {UpdatePersonalDetailViewModel}
     */
    UpdatePersonalDetailViewModel,

    /**
     * @name index#UpdateProfileViewModel
     * @type {UpdateProfileViewModel}
     */
    UpdateProfileViewModel,

    /**
     * @name index#UploadResult
     * @type {UploadResult}
     */
    UploadResult,

    /**
     * @name index#ValueChartBar
     * @type {ValueChartBar}
     */
    ValueChartBar,

    /**
     * @name index#WalletData
     * @type {WalletData}
     */
    WalletData,

    /**
     * @name index#WalletInfo
     * @type {WalletInfo}
     */
    WalletInfo,

    /**
     * @name index#WalletMultiSummary
     * @type {WalletMultiSummary}
     */
    WalletMultiSummary,

    /**
     * @name index#WalletSummary
     * @type {WalletSummary}
     */
    WalletSummary,

    /**
     * @name index#WalletTransaction
     * @type {WalletTransaction}
     */
    WalletTransaction,

    /**
     * @name index#WalletTransactionsViewModel
     * @type {WalletTransactionsViewModel}
     */
    WalletTransactionsViewModel,

    /**
     * @name index#WalletWithdrawalInfo
     * @type {WalletWithdrawalInfo}
     */
    WalletWithdrawalInfo,

    /**
     * @name index#WalletsGrandTotal
     * @type {WalletsGrandTotal}
     */
    WalletsGrandTotal,

    /**
     * @name index#WalletsInfo
     * @type {WalletsInfo}
     */
    WalletsInfo,

    /**
     * @name index#WithdrawalInfo
     * @type {WithdrawalInfo}
     */
    WithdrawalInfo,

    /**
     * @name index#WithdrawalSummary
     * @type {WithdrawalSummary}
     */
    WithdrawalSummary,

    /**
    * @name index#AuthApi
    * @type {AuthApi}
    */
    AuthApi,

    /**
    * @name index#BrokersApi
    * @type {BrokersApi}
    */
    BrokersApi,

    /**
    * @name index#FileApi
    * @type {FileApi}
    */
    FileApi,

    /**
    * @name index#FundsApi
    * @type {FundsApi}
    */
    FundsApi,

    /**
    * @name index#InvestorApi
    * @type {InvestorApi}
    */
    InvestorApi,

    /**
    * @name index#KycApi
    * @type {KycApi}
    */
    KycApi,

    /**
    * @name index#ManagerApi
    * @type {ManagerApi}
    */
    ManagerApi,

    /**
    * @name index#NotificationsApi
    * @type {NotificationsApi}
    */
    NotificationsApi,

    /**
    * @name index#PlatformApi
    * @type {PlatformApi}
    */
    PlatformApi,

    /**
    * @name index#ProfileApi
    * @type {ProfileApi}
    */
    ProfileApi,

    /**
    * @name index#ProgramsApi
    * @type {ProgramsApi}
    */
    ProgramsApi,

    /**
    * @name index#RateApi
    * @type {RateApi}
    */
    RateApi,

    /**
    * @name index#SearchApi
    * @type {SearchApi}
    */
    SearchApi,

    /**
    * @name index#WalletApi
    * @type {WalletApi}
    */
    WalletApi
};

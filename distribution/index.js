'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WalletApi = exports.SearchApi = exports.RateApi = exports.ProgramsApi = exports.ProfileApi = exports.PlatformApi = exports.NotificationsApi = exports.ManagerApi = exports.KycApi = exports.InvestorApi = exports.FundsApi = exports.FileApi = exports.BrokersApi = exports.AuthApi = exports.WithdrawalSummary = exports.WithdrawalInfo = exports.WalletsInfo = exports.WalletsGrandTotal = exports.WalletWithdrawalInfo = exports.WalletTransactionsViewModel = exports.WalletTransaction = exports.WalletSummary = exports.WalletMultiSummary = exports.WalletInfo = exports.WalletData = exports.ValueChartBar = exports.UploadResult = exports.UpdateProfileViewModel = exports.UpdatePersonalDetailViewModel = exports.TwoFactorStatus = exports.TwoFactorCodeModel = exports.TwoFactorAuthenticatorConfirm = exports.TwoFactorAuthenticator = exports.TransactionDetails = exports.TradesViewModel = exports.SearchViewModel = exports.Review = exports.ResetPasswordViewModel = exports.ResendConfirmationViewModel = exports.RegisterManagerViewModel = exports.RegisterInvestorViewModel = exports.RecoveryCodesViewModel = exports.RecoveryCode = exports.RatesModelRates = exports.RatesModel = exports.RateItem = exports.ProgramsList = exports.ProgramsLevelsInfo = exports.ProgramsInfo = exports.ProgramWithdrawInfo = exports.ProgramUpdate = exports.ProgramTransactionDetails = exports.ProgramTag = exports.ProgramStatistic = undefined;
exports.ProgramSets = exports.ProgramRequests = exports.ProgramRequest = exports.ProgramProfitChart = exports.ProgramNotificationSettingList = exports.ProgramInvestInfo = exports.ProgramInfo = exports.ProgramFacet = exports.ProgramDetailsRating = exports.ProgramDetailsListStatistic = exports.ProgramDetailsFull = exports.ProgramDetails = exports.ProgramBalanceChartElement = exports.ProgramBalanceChart = exports.ProfilePublic = exports.ProfileHeaderViewModel = exports.ProfileFullViewModel = exports.PlatformStatistic = exports.PlatformInfo = exports.PlatformCurrency = exports.PlatformAssets = exports.PlatformAsset = exports.PersonalProgramDetailsFull = exports.PersonalFundDetailsFull = exports.PeriodDate = exports.PasswordModel = exports.OtherAssetsValue = exports.OrderModel = exports.NotificationViewModel = exports.NotificationSettingViewModel = exports.NotificationSettingList = exports.NotificationList = exports.NewProgramRequest = exports.NewFundRequest = exports.MultiWalletTransactionsViewModel = exports.MultiWalletTransaction = exports.MultiWalletFilters = exports.MultiWalletExternalTransactionsViewModel = exports.MultiWalletExternalTransaction = exports.ManagersList = exports.ManagerSimpleProgram = exports.ManagerSimpleFund = exports.ManagerProgramWithdrawInfo = exports.ManagerProfileDetails = exports.ManagerProfile = exports.ManagerPortfolioEvents = exports.ManagerPortfolioEvent = exports.ManagerOverview = exports.ManagerNotificationSettingList = exports.ManagerFundWithdrawInfo = exports.ManagerDashboard = exports.ManagerAssets = exports.LoginViewModel = exports.LevelUpSummary = exports.LevelUpData = exports.LevelInfo = exports.KycCallback = exports.IOsAppVersion = exports.FundsList = exports.FundWithdrawInfo = exports.FundStatistic = exports.FundSets = exports.FundProfitChart = exports.FundNotificationSettingList = exports.FundInvestInfo = exports.FundFacet = exports.FundDetailsListStatistic = exports.FundDetailsFull = exports.FundDetails = exports.FundBalanceChart = exports.FundAssetsListInfo = exports.FundAssetPercent = exports.FundAssetPartWithIcon = exports.FundAssetPart = exports.FundAssetInfo = exports.ForgotPasswordViewModel = exports.FcmTokenViewModel = exports.ExternalTransactionDetails = exports.ErrorViewModel = exports.ErrorMessage = exports.DashboardSummary = exports.DashboardProgramDetails = exports.DashboardPortfolioEvents = exports.DashboardPortfolioEvent = exports.DashboardChartValue = exports.CreateWithdrawalRequestModel = exports.ConvertingDetails = exports.ChartSimple = exports.ChangePasswordViewModel = exports.BrokersInfo = exports.BrokerAccountType = exports.Broker = exports.BlockchainInfo = exports.BalanceChartElement = exports.AssetsValue = exports.AssetSelection = exports.AndroidVersion = exports.AndroidAppVersion = exports.AmountWithCurrency = exports.ApiClient = undefined;

var _ApiClient = require('./ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _AmountWithCurrency = require('./model/AmountWithCurrency');

var _AmountWithCurrency2 = _interopRequireDefault(_AmountWithCurrency);

var _AndroidAppVersion = require('./model/AndroidAppVersion');

var _AndroidAppVersion2 = _interopRequireDefault(_AndroidAppVersion);

var _AndroidVersion = require('./model/AndroidVersion');

var _AndroidVersion2 = _interopRequireDefault(_AndroidVersion);

var _AssetSelection = require('./model/AssetSelection');

var _AssetSelection2 = _interopRequireDefault(_AssetSelection);

var _AssetsValue = require('./model/AssetsValue');

var _AssetsValue2 = _interopRequireDefault(_AssetsValue);

var _BalanceChartElement = require('./model/BalanceChartElement');

var _BalanceChartElement2 = _interopRequireDefault(_BalanceChartElement);

var _BlockchainInfo = require('./model/BlockchainInfo');

var _BlockchainInfo2 = _interopRequireDefault(_BlockchainInfo);

var _Broker = require('./model/Broker');

var _Broker2 = _interopRequireDefault(_Broker);

var _BrokerAccountType = require('./model/BrokerAccountType');

var _BrokerAccountType2 = _interopRequireDefault(_BrokerAccountType);

var _BrokersInfo = require('./model/BrokersInfo');

var _BrokersInfo2 = _interopRequireDefault(_BrokersInfo);

var _ChangePasswordViewModel = require('./model/ChangePasswordViewModel');

var _ChangePasswordViewModel2 = _interopRequireDefault(_ChangePasswordViewModel);

var _ChartSimple = require('./model/ChartSimple');

var _ChartSimple2 = _interopRequireDefault(_ChartSimple);

var _ConvertingDetails = require('./model/ConvertingDetails');

var _ConvertingDetails2 = _interopRequireDefault(_ConvertingDetails);

var _CreateWithdrawalRequestModel = require('./model/CreateWithdrawalRequestModel');

var _CreateWithdrawalRequestModel2 = _interopRequireDefault(_CreateWithdrawalRequestModel);

var _DashboardChartValue = require('./model/DashboardChartValue');

var _DashboardChartValue2 = _interopRequireDefault(_DashboardChartValue);

var _DashboardPortfolioEvent = require('./model/DashboardPortfolioEvent');

var _DashboardPortfolioEvent2 = _interopRequireDefault(_DashboardPortfolioEvent);

var _DashboardPortfolioEvents = require('./model/DashboardPortfolioEvents');

var _DashboardPortfolioEvents2 = _interopRequireDefault(_DashboardPortfolioEvents);

var _DashboardProgramDetails = require('./model/DashboardProgramDetails');

var _DashboardProgramDetails2 = _interopRequireDefault(_DashboardProgramDetails);

var _DashboardSummary = require('./model/DashboardSummary');

var _DashboardSummary2 = _interopRequireDefault(_DashboardSummary);

var _ErrorMessage = require('./model/ErrorMessage');

var _ErrorMessage2 = _interopRequireDefault(_ErrorMessage);

var _ErrorViewModel = require('./model/ErrorViewModel');

var _ErrorViewModel2 = _interopRequireDefault(_ErrorViewModel);

var _ExternalTransactionDetails = require('./model/ExternalTransactionDetails');

var _ExternalTransactionDetails2 = _interopRequireDefault(_ExternalTransactionDetails);

var _FcmTokenViewModel = require('./model/FcmTokenViewModel');

var _FcmTokenViewModel2 = _interopRequireDefault(_FcmTokenViewModel);

var _ForgotPasswordViewModel = require('./model/ForgotPasswordViewModel');

var _ForgotPasswordViewModel2 = _interopRequireDefault(_ForgotPasswordViewModel);

var _FundAssetInfo = require('./model/FundAssetInfo');

var _FundAssetInfo2 = _interopRequireDefault(_FundAssetInfo);

var _FundAssetPart = require('./model/FundAssetPart');

var _FundAssetPart2 = _interopRequireDefault(_FundAssetPart);

var _FundAssetPartWithIcon = require('./model/FundAssetPartWithIcon');

var _FundAssetPartWithIcon2 = _interopRequireDefault(_FundAssetPartWithIcon);

var _FundAssetPercent = require('./model/FundAssetPercent');

var _FundAssetPercent2 = _interopRequireDefault(_FundAssetPercent);

var _FundAssetsListInfo = require('./model/FundAssetsListInfo');

var _FundAssetsListInfo2 = _interopRequireDefault(_FundAssetsListInfo);

var _FundBalanceChart = require('./model/FundBalanceChart');

var _FundBalanceChart2 = _interopRequireDefault(_FundBalanceChart);

var _FundDetails = require('./model/FundDetails');

var _FundDetails2 = _interopRequireDefault(_FundDetails);

var _FundDetailsFull = require('./model/FundDetailsFull');

var _FundDetailsFull2 = _interopRequireDefault(_FundDetailsFull);

var _FundDetailsListStatistic = require('./model/FundDetailsListStatistic');

var _FundDetailsListStatistic2 = _interopRequireDefault(_FundDetailsListStatistic);

var _FundFacet = require('./model/FundFacet');

var _FundFacet2 = _interopRequireDefault(_FundFacet);

var _FundInvestInfo = require('./model/FundInvestInfo');

var _FundInvestInfo2 = _interopRequireDefault(_FundInvestInfo);

var _FundNotificationSettingList = require('./model/FundNotificationSettingList');

var _FundNotificationSettingList2 = _interopRequireDefault(_FundNotificationSettingList);

var _FundProfitChart = require('./model/FundProfitChart');

var _FundProfitChart2 = _interopRequireDefault(_FundProfitChart);

var _FundSets = require('./model/FundSets');

var _FundSets2 = _interopRequireDefault(_FundSets);

var _FundStatistic = require('./model/FundStatistic');

var _FundStatistic2 = _interopRequireDefault(_FundStatistic);

var _FundWithdrawInfo = require('./model/FundWithdrawInfo');

var _FundWithdrawInfo2 = _interopRequireDefault(_FundWithdrawInfo);

var _FundsList = require('./model/FundsList');

var _FundsList2 = _interopRequireDefault(_FundsList);

var _IOsAppVersion = require('./model/IOsAppVersion');

var _IOsAppVersion2 = _interopRequireDefault(_IOsAppVersion);

var _KycCallback = require('./model/KycCallback');

var _KycCallback2 = _interopRequireDefault(_KycCallback);

var _LevelInfo = require('./model/LevelInfo');

var _LevelInfo2 = _interopRequireDefault(_LevelInfo);

var _LevelUpData = require('./model/LevelUpData');

var _LevelUpData2 = _interopRequireDefault(_LevelUpData);

var _LevelUpSummary = require('./model/LevelUpSummary');

var _LevelUpSummary2 = _interopRequireDefault(_LevelUpSummary);

var _LoginViewModel = require('./model/LoginViewModel');

var _LoginViewModel2 = _interopRequireDefault(_LoginViewModel);

var _ManagerAssets = require('./model/ManagerAssets');

var _ManagerAssets2 = _interopRequireDefault(_ManagerAssets);

var _ManagerDashboard = require('./model/ManagerDashboard');

var _ManagerDashboard2 = _interopRequireDefault(_ManagerDashboard);

var _ManagerFundWithdrawInfo = require('./model/ManagerFundWithdrawInfo');

var _ManagerFundWithdrawInfo2 = _interopRequireDefault(_ManagerFundWithdrawInfo);

var _ManagerNotificationSettingList = require('./model/ManagerNotificationSettingList');

var _ManagerNotificationSettingList2 = _interopRequireDefault(_ManagerNotificationSettingList);

var _ManagerOverview = require('./model/ManagerOverview');

var _ManagerOverview2 = _interopRequireDefault(_ManagerOverview);

var _ManagerPortfolioEvent = require('./model/ManagerPortfolioEvent');

var _ManagerPortfolioEvent2 = _interopRequireDefault(_ManagerPortfolioEvent);

var _ManagerPortfolioEvents = require('./model/ManagerPortfolioEvents');

var _ManagerPortfolioEvents2 = _interopRequireDefault(_ManagerPortfolioEvents);

var _ManagerProfile = require('./model/ManagerProfile');

var _ManagerProfile2 = _interopRequireDefault(_ManagerProfile);

var _ManagerProfileDetails = require('./model/ManagerProfileDetails');

var _ManagerProfileDetails2 = _interopRequireDefault(_ManagerProfileDetails);

var _ManagerProgramWithdrawInfo = require('./model/ManagerProgramWithdrawInfo');

var _ManagerProgramWithdrawInfo2 = _interopRequireDefault(_ManagerProgramWithdrawInfo);

var _ManagerSimpleFund = require('./model/ManagerSimpleFund');

var _ManagerSimpleFund2 = _interopRequireDefault(_ManagerSimpleFund);

var _ManagerSimpleProgram = require('./model/ManagerSimpleProgram');

var _ManagerSimpleProgram2 = _interopRequireDefault(_ManagerSimpleProgram);

var _ManagersList = require('./model/ManagersList');

var _ManagersList2 = _interopRequireDefault(_ManagersList);

var _MultiWalletExternalTransaction = require('./model/MultiWalletExternalTransaction');

var _MultiWalletExternalTransaction2 = _interopRequireDefault(_MultiWalletExternalTransaction);

var _MultiWalletExternalTransactionsViewModel = require('./model/MultiWalletExternalTransactionsViewModel');

var _MultiWalletExternalTransactionsViewModel2 = _interopRequireDefault(_MultiWalletExternalTransactionsViewModel);

var _MultiWalletFilters = require('./model/MultiWalletFilters');

var _MultiWalletFilters2 = _interopRequireDefault(_MultiWalletFilters);

var _MultiWalletTransaction = require('./model/MultiWalletTransaction');

var _MultiWalletTransaction2 = _interopRequireDefault(_MultiWalletTransaction);

var _MultiWalletTransactionsViewModel = require('./model/MultiWalletTransactionsViewModel');

var _MultiWalletTransactionsViewModel2 = _interopRequireDefault(_MultiWalletTransactionsViewModel);

var _NewFundRequest = require('./model/NewFundRequest');

var _NewFundRequest2 = _interopRequireDefault(_NewFundRequest);

var _NewProgramRequest = require('./model/NewProgramRequest');

var _NewProgramRequest2 = _interopRequireDefault(_NewProgramRequest);

var _NotificationList = require('./model/NotificationList');

var _NotificationList2 = _interopRequireDefault(_NotificationList);

var _NotificationSettingList = require('./model/NotificationSettingList');

var _NotificationSettingList2 = _interopRequireDefault(_NotificationSettingList);

var _NotificationSettingViewModel = require('./model/NotificationSettingViewModel');

var _NotificationSettingViewModel2 = _interopRequireDefault(_NotificationSettingViewModel);

var _NotificationViewModel = require('./model/NotificationViewModel');

var _NotificationViewModel2 = _interopRequireDefault(_NotificationViewModel);

var _OrderModel = require('./model/OrderModel');

var _OrderModel2 = _interopRequireDefault(_OrderModel);

var _OtherAssetsValue = require('./model/OtherAssetsValue');

var _OtherAssetsValue2 = _interopRequireDefault(_OtherAssetsValue);

var _PasswordModel = require('./model/PasswordModel');

var _PasswordModel2 = _interopRequireDefault(_PasswordModel);

var _PeriodDate = require('./model/PeriodDate');

var _PeriodDate2 = _interopRequireDefault(_PeriodDate);

var _PersonalFundDetailsFull = require('./model/PersonalFundDetailsFull');

var _PersonalFundDetailsFull2 = _interopRequireDefault(_PersonalFundDetailsFull);

var _PersonalProgramDetailsFull = require('./model/PersonalProgramDetailsFull');

var _PersonalProgramDetailsFull2 = _interopRequireDefault(_PersonalProgramDetailsFull);

var _PlatformAsset = require('./model/PlatformAsset');

var _PlatformAsset2 = _interopRequireDefault(_PlatformAsset);

var _PlatformAssets = require('./model/PlatformAssets');

var _PlatformAssets2 = _interopRequireDefault(_PlatformAssets);

var _PlatformCurrency = require('./model/PlatformCurrency');

var _PlatformCurrency2 = _interopRequireDefault(_PlatformCurrency);

var _PlatformInfo = require('./model/PlatformInfo');

var _PlatformInfo2 = _interopRequireDefault(_PlatformInfo);

var _PlatformStatistic = require('./model/PlatformStatistic');

var _PlatformStatistic2 = _interopRequireDefault(_PlatformStatistic);

var _ProfileFullViewModel = require('./model/ProfileFullViewModel');

var _ProfileFullViewModel2 = _interopRequireDefault(_ProfileFullViewModel);

var _ProfileHeaderViewModel = require('./model/ProfileHeaderViewModel');

var _ProfileHeaderViewModel2 = _interopRequireDefault(_ProfileHeaderViewModel);

var _ProfilePublic = require('./model/ProfilePublic');

var _ProfilePublic2 = _interopRequireDefault(_ProfilePublic);

var _ProgramBalanceChart = require('./model/ProgramBalanceChart');

var _ProgramBalanceChart2 = _interopRequireDefault(_ProgramBalanceChart);

var _ProgramBalanceChartElement = require('./model/ProgramBalanceChartElement');

var _ProgramBalanceChartElement2 = _interopRequireDefault(_ProgramBalanceChartElement);

var _ProgramDetails = require('./model/ProgramDetails');

var _ProgramDetails2 = _interopRequireDefault(_ProgramDetails);

var _ProgramDetailsFull = require('./model/ProgramDetailsFull');

var _ProgramDetailsFull2 = _interopRequireDefault(_ProgramDetailsFull);

var _ProgramDetailsListStatistic = require('./model/ProgramDetailsListStatistic');

var _ProgramDetailsListStatistic2 = _interopRequireDefault(_ProgramDetailsListStatistic);

var _ProgramDetailsRating = require('./model/ProgramDetailsRating');

var _ProgramDetailsRating2 = _interopRequireDefault(_ProgramDetailsRating);

var _ProgramFacet = require('./model/ProgramFacet');

var _ProgramFacet2 = _interopRequireDefault(_ProgramFacet);

var _ProgramInfo = require('./model/ProgramInfo');

var _ProgramInfo2 = _interopRequireDefault(_ProgramInfo);

var _ProgramInvestInfo = require('./model/ProgramInvestInfo');

var _ProgramInvestInfo2 = _interopRequireDefault(_ProgramInvestInfo);

var _ProgramNotificationSettingList = require('./model/ProgramNotificationSettingList');

var _ProgramNotificationSettingList2 = _interopRequireDefault(_ProgramNotificationSettingList);

var _ProgramProfitChart = require('./model/ProgramProfitChart');

var _ProgramProfitChart2 = _interopRequireDefault(_ProgramProfitChart);

var _ProgramRequest = require('./model/ProgramRequest');

var _ProgramRequest2 = _interopRequireDefault(_ProgramRequest);

var _ProgramRequests = require('./model/ProgramRequests');

var _ProgramRequests2 = _interopRequireDefault(_ProgramRequests);

var _ProgramSets = require('./model/ProgramSets');

var _ProgramSets2 = _interopRequireDefault(_ProgramSets);

var _ProgramStatistic = require('./model/ProgramStatistic');

var _ProgramStatistic2 = _interopRequireDefault(_ProgramStatistic);

var _ProgramTag = require('./model/ProgramTag');

var _ProgramTag2 = _interopRequireDefault(_ProgramTag);

var _ProgramTransactionDetails = require('./model/ProgramTransactionDetails');

var _ProgramTransactionDetails2 = _interopRequireDefault(_ProgramTransactionDetails);

var _ProgramUpdate = require('./model/ProgramUpdate');

var _ProgramUpdate2 = _interopRequireDefault(_ProgramUpdate);

var _ProgramWithdrawInfo = require('./model/ProgramWithdrawInfo');

var _ProgramWithdrawInfo2 = _interopRequireDefault(_ProgramWithdrawInfo);

var _ProgramsInfo = require('./model/ProgramsInfo');

var _ProgramsInfo2 = _interopRequireDefault(_ProgramsInfo);

var _ProgramsLevelsInfo = require('./model/ProgramsLevelsInfo');

var _ProgramsLevelsInfo2 = _interopRequireDefault(_ProgramsLevelsInfo);

var _ProgramsList = require('./model/ProgramsList');

var _ProgramsList2 = _interopRequireDefault(_ProgramsList);

var _RateItem = require('./model/RateItem');

var _RateItem2 = _interopRequireDefault(_RateItem);

var _RatesModel = require('./model/RatesModel');

var _RatesModel2 = _interopRequireDefault(_RatesModel);

var _RatesModelRates = require('./model/RatesModelRates');

var _RatesModelRates2 = _interopRequireDefault(_RatesModelRates);

var _RecoveryCode = require('./model/RecoveryCode');

var _RecoveryCode2 = _interopRequireDefault(_RecoveryCode);

var _RecoveryCodesViewModel = require('./model/RecoveryCodesViewModel');

var _RecoveryCodesViewModel2 = _interopRequireDefault(_RecoveryCodesViewModel);

var _RegisterInvestorViewModel = require('./model/RegisterInvestorViewModel');

var _RegisterInvestorViewModel2 = _interopRequireDefault(_RegisterInvestorViewModel);

var _RegisterManagerViewModel = require('./model/RegisterManagerViewModel');

var _RegisterManagerViewModel2 = _interopRequireDefault(_RegisterManagerViewModel);

var _ResendConfirmationViewModel = require('./model/ResendConfirmationViewModel');

var _ResendConfirmationViewModel2 = _interopRequireDefault(_ResendConfirmationViewModel);

var _ResetPasswordViewModel = require('./model/ResetPasswordViewModel');

var _ResetPasswordViewModel2 = _interopRequireDefault(_ResetPasswordViewModel);

var _Review = require('./model/Review');

var _Review2 = _interopRequireDefault(_Review);

var _SearchViewModel = require('./model/SearchViewModel');

var _SearchViewModel2 = _interopRequireDefault(_SearchViewModel);

var _TradesViewModel = require('./model/TradesViewModel');

var _TradesViewModel2 = _interopRequireDefault(_TradesViewModel);

var _TransactionDetails = require('./model/TransactionDetails');

var _TransactionDetails2 = _interopRequireDefault(_TransactionDetails);

var _TwoFactorAuthenticator = require('./model/TwoFactorAuthenticator');

var _TwoFactorAuthenticator2 = _interopRequireDefault(_TwoFactorAuthenticator);

var _TwoFactorAuthenticatorConfirm = require('./model/TwoFactorAuthenticatorConfirm');

var _TwoFactorAuthenticatorConfirm2 = _interopRequireDefault(_TwoFactorAuthenticatorConfirm);

var _TwoFactorCodeModel = require('./model/TwoFactorCodeModel');

var _TwoFactorCodeModel2 = _interopRequireDefault(_TwoFactorCodeModel);

var _TwoFactorStatus = require('./model/TwoFactorStatus');

var _TwoFactorStatus2 = _interopRequireDefault(_TwoFactorStatus);

var _UpdatePersonalDetailViewModel = require('./model/UpdatePersonalDetailViewModel');

var _UpdatePersonalDetailViewModel2 = _interopRequireDefault(_UpdatePersonalDetailViewModel);

var _UpdateProfileViewModel = require('./model/UpdateProfileViewModel');

var _UpdateProfileViewModel2 = _interopRequireDefault(_UpdateProfileViewModel);

var _UploadResult = require('./model/UploadResult');

var _UploadResult2 = _interopRequireDefault(_UploadResult);

var _ValueChartBar = require('./model/ValueChartBar');

var _ValueChartBar2 = _interopRequireDefault(_ValueChartBar);

var _WalletData = require('./model/WalletData');

var _WalletData2 = _interopRequireDefault(_WalletData);

var _WalletInfo = require('./model/WalletInfo');

var _WalletInfo2 = _interopRequireDefault(_WalletInfo);

var _WalletMultiSummary = require('./model/WalletMultiSummary');

var _WalletMultiSummary2 = _interopRequireDefault(_WalletMultiSummary);

var _WalletSummary = require('./model/WalletSummary');

var _WalletSummary2 = _interopRequireDefault(_WalletSummary);

var _WalletTransaction = require('./model/WalletTransaction');

var _WalletTransaction2 = _interopRequireDefault(_WalletTransaction);

var _WalletTransactionsViewModel = require('./model/WalletTransactionsViewModel');

var _WalletTransactionsViewModel2 = _interopRequireDefault(_WalletTransactionsViewModel);

var _WalletWithdrawalInfo = require('./model/WalletWithdrawalInfo');

var _WalletWithdrawalInfo2 = _interopRequireDefault(_WalletWithdrawalInfo);

var _WalletsGrandTotal = require('./model/WalletsGrandTotal');

var _WalletsGrandTotal2 = _interopRequireDefault(_WalletsGrandTotal);

var _WalletsInfo = require('./model/WalletsInfo');

var _WalletsInfo2 = _interopRequireDefault(_WalletsInfo);

var _WithdrawalInfo = require('./model/WithdrawalInfo');

var _WithdrawalInfo2 = _interopRequireDefault(_WithdrawalInfo);

var _WithdrawalSummary = require('./model/WithdrawalSummary');

var _WithdrawalSummary2 = _interopRequireDefault(_WithdrawalSummary);

var _AuthApi = require('./api/AuthApi');

var _AuthApi2 = _interopRequireDefault(_AuthApi);

var _BrokersApi = require('./api/BrokersApi');

var _BrokersApi2 = _interopRequireDefault(_BrokersApi);

var _FileApi = require('./api/FileApi');

var _FileApi2 = _interopRequireDefault(_FileApi);

var _FundsApi = require('./api/FundsApi');

var _FundsApi2 = _interopRequireDefault(_FundsApi);

var _InvestorApi = require('./api/InvestorApi');

var _InvestorApi2 = _interopRequireDefault(_InvestorApi);

var _KycApi = require('./api/KycApi');

var _KycApi2 = _interopRequireDefault(_KycApi);

var _ManagerApi = require('./api/ManagerApi');

var _ManagerApi2 = _interopRequireDefault(_ManagerApi);

var _NotificationsApi = require('./api/NotificationsApi');

var _NotificationsApi2 = _interopRequireDefault(_NotificationsApi);

var _PlatformApi = require('./api/PlatformApi');

var _PlatformApi2 = _interopRequireDefault(_PlatformApi);

var _ProfileApi = require('./api/ProfileApi');

var _ProfileApi2 = _interopRequireDefault(_ProfileApi);

var _ProgramsApi = require('./api/ProgramsApi');

var _ProgramsApi2 = _interopRequireDefault(_ProgramsApi);

var _RateApi = require('./api/RateApi');

var _RateApi2 = _interopRequireDefault(_RateApi);

var _SearchApi = require('./api/SearchApi');

var _SearchApi2 = _interopRequireDefault(_SearchApi);

var _WalletApi = require('./api/WalletApi');

var _WalletApi2 = _interopRequireDefault(_WalletApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
*
* @interface index
* @version v1.0
*/
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

exports.ApiClient = _ApiClient2.default;
exports.AmountWithCurrency = _AmountWithCurrency2.default;
exports.AndroidAppVersion = _AndroidAppVersion2.default;
exports.AndroidVersion = _AndroidVersion2.default;
exports.AssetSelection = _AssetSelection2.default;
exports.AssetsValue = _AssetsValue2.default;
exports.BalanceChartElement = _BalanceChartElement2.default;
exports.BlockchainInfo = _BlockchainInfo2.default;
exports.Broker = _Broker2.default;
exports.BrokerAccountType = _BrokerAccountType2.default;
exports.BrokersInfo = _BrokersInfo2.default;
exports.ChangePasswordViewModel = _ChangePasswordViewModel2.default;
exports.ChartSimple = _ChartSimple2.default;
exports.ConvertingDetails = _ConvertingDetails2.default;
exports.CreateWithdrawalRequestModel = _CreateWithdrawalRequestModel2.default;
exports.DashboardChartValue = _DashboardChartValue2.default;
exports.DashboardPortfolioEvent = _DashboardPortfolioEvent2.default;
exports.DashboardPortfolioEvents = _DashboardPortfolioEvents2.default;
exports.DashboardProgramDetails = _DashboardProgramDetails2.default;
exports.DashboardSummary = _DashboardSummary2.default;
exports.ErrorMessage = _ErrorMessage2.default;
exports.ErrorViewModel = _ErrorViewModel2.default;
exports.ExternalTransactionDetails = _ExternalTransactionDetails2.default;
exports.FcmTokenViewModel = _FcmTokenViewModel2.default;
exports.ForgotPasswordViewModel = _ForgotPasswordViewModel2.default;
exports.FundAssetInfo = _FundAssetInfo2.default;
exports.FundAssetPart = _FundAssetPart2.default;
exports.FundAssetPartWithIcon = _FundAssetPartWithIcon2.default;
exports.FundAssetPercent = _FundAssetPercent2.default;
exports.FundAssetsListInfo = _FundAssetsListInfo2.default;
exports.FundBalanceChart = _FundBalanceChart2.default;
exports.FundDetails = _FundDetails2.default;
exports.FundDetailsFull = _FundDetailsFull2.default;
exports.FundDetailsListStatistic = _FundDetailsListStatistic2.default;
exports.FundFacet = _FundFacet2.default;
exports.FundInvestInfo = _FundInvestInfo2.default;
exports.FundNotificationSettingList = _FundNotificationSettingList2.default;
exports.FundProfitChart = _FundProfitChart2.default;
exports.FundSets = _FundSets2.default;
exports.FundStatistic = _FundStatistic2.default;
exports.FundWithdrawInfo = _FundWithdrawInfo2.default;
exports.FundsList = _FundsList2.default;
exports.IOsAppVersion = _IOsAppVersion2.default;
exports.KycCallback = _KycCallback2.default;
exports.LevelInfo = _LevelInfo2.default;
exports.LevelUpData = _LevelUpData2.default;
exports.LevelUpSummary = _LevelUpSummary2.default;
exports.LoginViewModel = _LoginViewModel2.default;
exports.ManagerAssets = _ManagerAssets2.default;
exports.ManagerDashboard = _ManagerDashboard2.default;
exports.ManagerFundWithdrawInfo = _ManagerFundWithdrawInfo2.default;
exports.ManagerNotificationSettingList = _ManagerNotificationSettingList2.default;
exports.ManagerOverview = _ManagerOverview2.default;
exports.ManagerPortfolioEvent = _ManagerPortfolioEvent2.default;
exports.ManagerPortfolioEvents = _ManagerPortfolioEvents2.default;
exports.ManagerProfile = _ManagerProfile2.default;
exports.ManagerProfileDetails = _ManagerProfileDetails2.default;
exports.ManagerProgramWithdrawInfo = _ManagerProgramWithdrawInfo2.default;
exports.ManagerSimpleFund = _ManagerSimpleFund2.default;
exports.ManagerSimpleProgram = _ManagerSimpleProgram2.default;
exports.ManagersList = _ManagersList2.default;
exports.MultiWalletExternalTransaction = _MultiWalletExternalTransaction2.default;
exports.MultiWalletExternalTransactionsViewModel = _MultiWalletExternalTransactionsViewModel2.default;
exports.MultiWalletFilters = _MultiWalletFilters2.default;
exports.MultiWalletTransaction = _MultiWalletTransaction2.default;
exports.MultiWalletTransactionsViewModel = _MultiWalletTransactionsViewModel2.default;
exports.NewFundRequest = _NewFundRequest2.default;
exports.NewProgramRequest = _NewProgramRequest2.default;
exports.NotificationList = _NotificationList2.default;
exports.NotificationSettingList = _NotificationSettingList2.default;
exports.NotificationSettingViewModel = _NotificationSettingViewModel2.default;
exports.NotificationViewModel = _NotificationViewModel2.default;
exports.OrderModel = _OrderModel2.default;
exports.OtherAssetsValue = _OtherAssetsValue2.default;
exports.PasswordModel = _PasswordModel2.default;
exports.PeriodDate = _PeriodDate2.default;
exports.PersonalFundDetailsFull = _PersonalFundDetailsFull2.default;
exports.PersonalProgramDetailsFull = _PersonalProgramDetailsFull2.default;
exports.PlatformAsset = _PlatformAsset2.default;
exports.PlatformAssets = _PlatformAssets2.default;
exports.PlatformCurrency = _PlatformCurrency2.default;
exports.PlatformInfo = _PlatformInfo2.default;
exports.PlatformStatistic = _PlatformStatistic2.default;
exports.ProfileFullViewModel = _ProfileFullViewModel2.default;
exports.ProfileHeaderViewModel = _ProfileHeaderViewModel2.default;
exports.ProfilePublic = _ProfilePublic2.default;
exports.ProgramBalanceChart = _ProgramBalanceChart2.default;
exports.ProgramBalanceChartElement = _ProgramBalanceChartElement2.default;
exports.ProgramDetails = _ProgramDetails2.default;
exports.ProgramDetailsFull = _ProgramDetailsFull2.default;
exports.ProgramDetailsListStatistic = _ProgramDetailsListStatistic2.default;
exports.ProgramDetailsRating = _ProgramDetailsRating2.default;
exports.ProgramFacet = _ProgramFacet2.default;
exports.ProgramInfo = _ProgramInfo2.default;
exports.ProgramInvestInfo = _ProgramInvestInfo2.default;
exports.ProgramNotificationSettingList = _ProgramNotificationSettingList2.default;
exports.ProgramProfitChart = _ProgramProfitChart2.default;
exports.ProgramRequest = _ProgramRequest2.default;
exports.ProgramRequests = _ProgramRequests2.default;
exports.ProgramSets = _ProgramSets2.default;
exports.ProgramStatistic = _ProgramStatistic2.default;
exports.ProgramTag = _ProgramTag2.default;
exports.ProgramTransactionDetails = _ProgramTransactionDetails2.default;
exports.ProgramUpdate = _ProgramUpdate2.default;
exports.ProgramWithdrawInfo = _ProgramWithdrawInfo2.default;
exports.ProgramsInfo = _ProgramsInfo2.default;
exports.ProgramsLevelsInfo = _ProgramsLevelsInfo2.default;
exports.ProgramsList = _ProgramsList2.default;
exports.RateItem = _RateItem2.default;
exports.RatesModel = _RatesModel2.default;
exports.RatesModelRates = _RatesModelRates2.default;
exports.RecoveryCode = _RecoveryCode2.default;
exports.RecoveryCodesViewModel = _RecoveryCodesViewModel2.default;
exports.RegisterInvestorViewModel = _RegisterInvestorViewModel2.default;
exports.RegisterManagerViewModel = _RegisterManagerViewModel2.default;
exports.ResendConfirmationViewModel = _ResendConfirmationViewModel2.default;
exports.ResetPasswordViewModel = _ResetPasswordViewModel2.default;
exports.Review = _Review2.default;
exports.SearchViewModel = _SearchViewModel2.default;
exports.TradesViewModel = _TradesViewModel2.default;
exports.TransactionDetails = _TransactionDetails2.default;
exports.TwoFactorAuthenticator = _TwoFactorAuthenticator2.default;
exports.TwoFactorAuthenticatorConfirm = _TwoFactorAuthenticatorConfirm2.default;
exports.TwoFactorCodeModel = _TwoFactorCodeModel2.default;
exports.TwoFactorStatus = _TwoFactorStatus2.default;
exports.UpdatePersonalDetailViewModel = _UpdatePersonalDetailViewModel2.default;
exports.UpdateProfileViewModel = _UpdateProfileViewModel2.default;
exports.UploadResult = _UploadResult2.default;
exports.ValueChartBar = _ValueChartBar2.default;
exports.WalletData = _WalletData2.default;
exports.WalletInfo = _WalletInfo2.default;
exports.WalletMultiSummary = _WalletMultiSummary2.default;
exports.WalletSummary = _WalletSummary2.default;
exports.WalletTransaction = _WalletTransaction2.default;
exports.WalletTransactionsViewModel = _WalletTransactionsViewModel2.default;
exports.WalletWithdrawalInfo = _WalletWithdrawalInfo2.default;
exports.WalletsGrandTotal = _WalletsGrandTotal2.default;
exports.WalletsInfo = _WalletsInfo2.default;
exports.WithdrawalInfo = _WithdrawalInfo2.default;
exports.WithdrawalSummary = _WithdrawalSummary2.default;
exports.AuthApi = _AuthApi2.default;
exports.BrokersApi = _BrokersApi2.default;
exports.FileApi = _FileApi2.default;
exports.FundsApi = _FundsApi2.default;
exports.InvestorApi = _InvestorApi2.default;
exports.KycApi = _KycApi2.default;
exports.ManagerApi = _ManagerApi2.default;
exports.NotificationsApi = _NotificationsApi2.default;
exports.PlatformApi = _PlatformApi2.default;
exports.ProfileApi = _ProfileApi2.default;
exports.ProgramsApi = _ProgramsApi2.default;
exports.RateApi = _RateApi2.default;
exports.SearchApi = _SearchApi2.default;
exports.WalletApi = _WalletApi2.default;
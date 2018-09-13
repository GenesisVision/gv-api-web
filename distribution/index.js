'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WalletApi = exports.RateApi = exports.ProgramsApi = exports.ProfileApi = exports.PlatformApi = exports.OefApi = exports.NotificationsApi = exports.ManagersApi = exports.InvestorApi = exports.FileApi = exports.DexchangeApi = exports.BrokersApi = exports.AuthApi = exports.WithdrawInfo = exports.WalletTransactionsViewModel = exports.WalletTransaction = exports.WalletSummary = exports.WalletInfo = exports.ValueChartBar = exports.UploadResult = exports.UpdateProfileViewModel = exports.TwoFactorStatus = exports.TwoFactorCodeModel = exports.TwoFactorAuthenticatorConfirm = exports.TwoFactorAuthenticator = exports.TradesViewModel = exports.StatisticProgramDetails = exports.ResetPasswordViewModel = exports.ResendConfirmationViewModel = exports.RegisterManagerViewModel = exports.RegisterInvestorViewModel = exports.RecoveryCodesViewModel = exports.RecoveryCode = exports.RatesModelRates = exports.RatesModel = exports.RateItem = exports.ProgramsList = exports.ProgramStatistic = exports.ProgramSets = exports.ProgramRequests = exports.ProgramRequest = exports.ProgramNotificationSettingList = exports.ProgramDetailsListStatistic = exports.ProgramDetailsFull = exports.ProgramDetails = exports.ProgramChart = exports.ProfilePublic = exports.ProfileHeaderViewModel = exports.ProfileFullViewModel = exports.PlatformInfo = exports.PlatformAssets = exports.PlatformAsset = exports.PersonalProgramDetailsList = exports.PersonalProgramDetailsFull = exports.PasswordModel = exports.OrderModel = exports.NotificationViewModel = exports.NotificationSettingViewModel = exports.NotificationSettingList = exports.NotificationList = exports.NewProgramRequest = exports.ManagerProfile = exports.LoginViewModel = exports.InvestmentProgramUpdate = exports.InvestInfo = exports.IOsAppVersion = exports.ForgotPasswordViewModel = exports.Facet = exports.ErrorViewModel = exports.ErrorMessage = exports.DashboardSummary = exports.DashboardProgramDetails = exports.DashboardPortfolioEvents = exports.DashboardPortfolioEvent = exports.DashboardChartValue = exports.DExchangeResponse = exports.DExchangeRequest = exports.CreateWithdrawalRequestModel = exports.ChartSimple = exports.ChartProgramDetails = exports.ChangePasswordViewModel = exports.BrokersInfo = exports.BrokerTradingServer = exports.Broker = exports.AssetsValue = exports.AndroidVersion = exports.AndroidAppVersion = exports.AmountWithCurrency = exports.ApiClient = undefined;

var _ApiClient = require('./ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _AmountWithCurrency = require('./model/AmountWithCurrency');

var _AmountWithCurrency2 = _interopRequireDefault(_AmountWithCurrency);

var _AndroidAppVersion = require('./model/AndroidAppVersion');

var _AndroidAppVersion2 = _interopRequireDefault(_AndroidAppVersion);

var _AndroidVersion = require('./model/AndroidVersion');

var _AndroidVersion2 = _interopRequireDefault(_AndroidVersion);

var _AssetsValue = require('./model/AssetsValue');

var _AssetsValue2 = _interopRequireDefault(_AssetsValue);

var _Broker = require('./model/Broker');

var _Broker2 = _interopRequireDefault(_Broker);

var _BrokerTradingServer = require('./model/BrokerTradingServer');

var _BrokerTradingServer2 = _interopRequireDefault(_BrokerTradingServer);

var _BrokersInfo = require('./model/BrokersInfo');

var _BrokersInfo2 = _interopRequireDefault(_BrokersInfo);

var _ChangePasswordViewModel = require('./model/ChangePasswordViewModel');

var _ChangePasswordViewModel2 = _interopRequireDefault(_ChangePasswordViewModel);

var _ChartProgramDetails = require('./model/ChartProgramDetails');

var _ChartProgramDetails2 = _interopRequireDefault(_ChartProgramDetails);

var _ChartSimple = require('./model/ChartSimple');

var _ChartSimple2 = _interopRequireDefault(_ChartSimple);

var _CreateWithdrawalRequestModel = require('./model/CreateWithdrawalRequestModel');

var _CreateWithdrawalRequestModel2 = _interopRequireDefault(_CreateWithdrawalRequestModel);

var _DExchangeRequest = require('./model/DExchangeRequest');

var _DExchangeRequest2 = _interopRequireDefault(_DExchangeRequest);

var _DExchangeResponse = require('./model/DExchangeResponse');

var _DExchangeResponse2 = _interopRequireDefault(_DExchangeResponse);

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

var _Facet = require('./model/Facet');

var _Facet2 = _interopRequireDefault(_Facet);

var _ForgotPasswordViewModel = require('./model/ForgotPasswordViewModel');

var _ForgotPasswordViewModel2 = _interopRequireDefault(_ForgotPasswordViewModel);

var _IOsAppVersion = require('./model/IOsAppVersion');

var _IOsAppVersion2 = _interopRequireDefault(_IOsAppVersion);

var _InvestInfo = require('./model/InvestInfo');

var _InvestInfo2 = _interopRequireDefault(_InvestInfo);

var _InvestmentProgramUpdate = require('./model/InvestmentProgramUpdate');

var _InvestmentProgramUpdate2 = _interopRequireDefault(_InvestmentProgramUpdate);

var _LoginViewModel = require('./model/LoginViewModel');

var _LoginViewModel2 = _interopRequireDefault(_LoginViewModel);

var _ManagerProfile = require('./model/ManagerProfile');

var _ManagerProfile2 = _interopRequireDefault(_ManagerProfile);

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

var _PasswordModel = require('./model/PasswordModel');

var _PasswordModel2 = _interopRequireDefault(_PasswordModel);

var _PersonalProgramDetailsFull = require('./model/PersonalProgramDetailsFull');

var _PersonalProgramDetailsFull2 = _interopRequireDefault(_PersonalProgramDetailsFull);

var _PersonalProgramDetailsList = require('./model/PersonalProgramDetailsList');

var _PersonalProgramDetailsList2 = _interopRequireDefault(_PersonalProgramDetailsList);

var _PlatformAsset = require('./model/PlatformAsset');

var _PlatformAsset2 = _interopRequireDefault(_PlatformAsset);

var _PlatformAssets = require('./model/PlatformAssets');

var _PlatformAssets2 = _interopRequireDefault(_PlatformAssets);

var _PlatformInfo = require('./model/PlatformInfo');

var _PlatformInfo2 = _interopRequireDefault(_PlatformInfo);

var _ProfileFullViewModel = require('./model/ProfileFullViewModel');

var _ProfileFullViewModel2 = _interopRequireDefault(_ProfileFullViewModel);

var _ProfileHeaderViewModel = require('./model/ProfileHeaderViewModel');

var _ProfileHeaderViewModel2 = _interopRequireDefault(_ProfileHeaderViewModel);

var _ProfilePublic = require('./model/ProfilePublic');

var _ProfilePublic2 = _interopRequireDefault(_ProfilePublic);

var _ProgramChart = require('./model/ProgramChart');

var _ProgramChart2 = _interopRequireDefault(_ProgramChart);

var _ProgramDetails = require('./model/ProgramDetails');

var _ProgramDetails2 = _interopRequireDefault(_ProgramDetails);

var _ProgramDetailsFull = require('./model/ProgramDetailsFull');

var _ProgramDetailsFull2 = _interopRequireDefault(_ProgramDetailsFull);

var _ProgramDetailsListStatistic = require('./model/ProgramDetailsListStatistic');

var _ProgramDetailsListStatistic2 = _interopRequireDefault(_ProgramDetailsListStatistic);

var _ProgramNotificationSettingList = require('./model/ProgramNotificationSettingList');

var _ProgramNotificationSettingList2 = _interopRequireDefault(_ProgramNotificationSettingList);

var _ProgramRequest = require('./model/ProgramRequest');

var _ProgramRequest2 = _interopRequireDefault(_ProgramRequest);

var _ProgramRequests = require('./model/ProgramRequests');

var _ProgramRequests2 = _interopRequireDefault(_ProgramRequests);

var _ProgramSets = require('./model/ProgramSets');

var _ProgramSets2 = _interopRequireDefault(_ProgramSets);

var _ProgramStatistic = require('./model/ProgramStatistic');

var _ProgramStatistic2 = _interopRequireDefault(_ProgramStatistic);

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

var _StatisticProgramDetails = require('./model/StatisticProgramDetails');

var _StatisticProgramDetails2 = _interopRequireDefault(_StatisticProgramDetails);

var _TradesViewModel = require('./model/TradesViewModel');

var _TradesViewModel2 = _interopRequireDefault(_TradesViewModel);

var _TwoFactorAuthenticator = require('./model/TwoFactorAuthenticator');

var _TwoFactorAuthenticator2 = _interopRequireDefault(_TwoFactorAuthenticator);

var _TwoFactorAuthenticatorConfirm = require('./model/TwoFactorAuthenticatorConfirm');

var _TwoFactorAuthenticatorConfirm2 = _interopRequireDefault(_TwoFactorAuthenticatorConfirm);

var _TwoFactorCodeModel = require('./model/TwoFactorCodeModel');

var _TwoFactorCodeModel2 = _interopRequireDefault(_TwoFactorCodeModel);

var _TwoFactorStatus = require('./model/TwoFactorStatus');

var _TwoFactorStatus2 = _interopRequireDefault(_TwoFactorStatus);

var _UpdateProfileViewModel = require('./model/UpdateProfileViewModel');

var _UpdateProfileViewModel2 = _interopRequireDefault(_UpdateProfileViewModel);

var _UploadResult = require('./model/UploadResult');

var _UploadResult2 = _interopRequireDefault(_UploadResult);

var _ValueChartBar = require('./model/ValueChartBar');

var _ValueChartBar2 = _interopRequireDefault(_ValueChartBar);

var _WalletInfo = require('./model/WalletInfo');

var _WalletInfo2 = _interopRequireDefault(_WalletInfo);

var _WalletSummary = require('./model/WalletSummary');

var _WalletSummary2 = _interopRequireDefault(_WalletSummary);

var _WalletTransaction = require('./model/WalletTransaction');

var _WalletTransaction2 = _interopRequireDefault(_WalletTransaction);

var _WalletTransactionsViewModel = require('./model/WalletTransactionsViewModel');

var _WalletTransactionsViewModel2 = _interopRequireDefault(_WalletTransactionsViewModel);

var _WithdrawInfo = require('./model/WithdrawInfo');

var _WithdrawInfo2 = _interopRequireDefault(_WithdrawInfo);

var _AuthApi = require('./api/AuthApi');

var _AuthApi2 = _interopRequireDefault(_AuthApi);

var _BrokersApi = require('./api/BrokersApi');

var _BrokersApi2 = _interopRequireDefault(_BrokersApi);

var _DexchangeApi = require('./api/DexchangeApi');

var _DexchangeApi2 = _interopRequireDefault(_DexchangeApi);

var _FileApi = require('./api/FileApi');

var _FileApi2 = _interopRequireDefault(_FileApi);

var _InvestorApi = require('./api/InvestorApi');

var _InvestorApi2 = _interopRequireDefault(_InvestorApi);

var _ManagersApi = require('./api/ManagersApi');

var _ManagersApi2 = _interopRequireDefault(_ManagersApi);

var _NotificationsApi = require('./api/NotificationsApi');

var _NotificationsApi2 = _interopRequireDefault(_NotificationsApi);

var _OefApi = require('./api/OefApi');

var _OefApi2 = _interopRequireDefault(_OefApi);

var _PlatformApi = require('./api/PlatformApi');

var _PlatformApi2 = _interopRequireDefault(_PlatformApi);

var _ProfileApi = require('./api/ProfileApi');

var _ProfileApi2 = _interopRequireDefault(_ProfileApi);

var _ProgramsApi = require('./api/ProgramsApi');

var _ProgramsApi2 = _interopRequireDefault(_ProgramsApi);

var _RateApi = require('./api/RateApi');

var _RateApi2 = _interopRequireDefault(_RateApi);

var _WalletApi = require('./api/WalletApi');

var _WalletApi2 = _interopRequireDefault(_WalletApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
exports.ApiClient = _ApiClient2.default;
exports.AmountWithCurrency = _AmountWithCurrency2.default;
exports.AndroidAppVersion = _AndroidAppVersion2.default;
exports.AndroidVersion = _AndroidVersion2.default;
exports.AssetsValue = _AssetsValue2.default;
exports.Broker = _Broker2.default;
exports.BrokerTradingServer = _BrokerTradingServer2.default;
exports.BrokersInfo = _BrokersInfo2.default;
exports.ChangePasswordViewModel = _ChangePasswordViewModel2.default;
exports.ChartProgramDetails = _ChartProgramDetails2.default;
exports.ChartSimple = _ChartSimple2.default;
exports.CreateWithdrawalRequestModel = _CreateWithdrawalRequestModel2.default;
exports.DExchangeRequest = _DExchangeRequest2.default;
exports.DExchangeResponse = _DExchangeResponse2.default;
exports.DashboardChartValue = _DashboardChartValue2.default;
exports.DashboardPortfolioEvent = _DashboardPortfolioEvent2.default;
exports.DashboardPortfolioEvents = _DashboardPortfolioEvents2.default;
exports.DashboardProgramDetails = _DashboardProgramDetails2.default;
exports.DashboardSummary = _DashboardSummary2.default;
exports.ErrorMessage = _ErrorMessage2.default;
exports.ErrorViewModel = _ErrorViewModel2.default;
exports.Facet = _Facet2.default;
exports.ForgotPasswordViewModel = _ForgotPasswordViewModel2.default;
exports.IOsAppVersion = _IOsAppVersion2.default;
exports.InvestInfo = _InvestInfo2.default;
exports.InvestmentProgramUpdate = _InvestmentProgramUpdate2.default;
exports.LoginViewModel = _LoginViewModel2.default;
exports.ManagerProfile = _ManagerProfile2.default;
exports.NewProgramRequest = _NewProgramRequest2.default;
exports.NotificationList = _NotificationList2.default;
exports.NotificationSettingList = _NotificationSettingList2.default;
exports.NotificationSettingViewModel = _NotificationSettingViewModel2.default;
exports.NotificationViewModel = _NotificationViewModel2.default;
exports.OrderModel = _OrderModel2.default;
exports.PasswordModel = _PasswordModel2.default;
exports.PersonalProgramDetailsFull = _PersonalProgramDetailsFull2.default;
exports.PersonalProgramDetailsList = _PersonalProgramDetailsList2.default;
exports.PlatformAsset = _PlatformAsset2.default;
exports.PlatformAssets = _PlatformAssets2.default;
exports.PlatformInfo = _PlatformInfo2.default;
exports.ProfileFullViewModel = _ProfileFullViewModel2.default;
exports.ProfileHeaderViewModel = _ProfileHeaderViewModel2.default;
exports.ProfilePublic = _ProfilePublic2.default;
exports.ProgramChart = _ProgramChart2.default;
exports.ProgramDetails = _ProgramDetails2.default;
exports.ProgramDetailsFull = _ProgramDetailsFull2.default;
exports.ProgramDetailsListStatistic = _ProgramDetailsListStatistic2.default;
exports.ProgramNotificationSettingList = _ProgramNotificationSettingList2.default;
exports.ProgramRequest = _ProgramRequest2.default;
exports.ProgramRequests = _ProgramRequests2.default;
exports.ProgramSets = _ProgramSets2.default;
exports.ProgramStatistic = _ProgramStatistic2.default;
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
exports.StatisticProgramDetails = _StatisticProgramDetails2.default;
exports.TradesViewModel = _TradesViewModel2.default;
exports.TwoFactorAuthenticator = _TwoFactorAuthenticator2.default;
exports.TwoFactorAuthenticatorConfirm = _TwoFactorAuthenticatorConfirm2.default;
exports.TwoFactorCodeModel = _TwoFactorCodeModel2.default;
exports.TwoFactorStatus = _TwoFactorStatus2.default;
exports.UpdateProfileViewModel = _UpdateProfileViewModel2.default;
exports.UploadResult = _UploadResult2.default;
exports.ValueChartBar = _ValueChartBar2.default;
exports.WalletInfo = _WalletInfo2.default;
exports.WalletSummary = _WalletSummary2.default;
exports.WalletTransaction = _WalletTransaction2.default;
exports.WalletTransactionsViewModel = _WalletTransactionsViewModel2.default;
exports.WithdrawInfo = _WithdrawInfo2.default;
exports.AuthApi = _AuthApi2.default;
exports.BrokersApi = _BrokersApi2.default;
exports.DexchangeApi = _DexchangeApi2.default;
exports.FileApi = _FileApi2.default;
exports.InvestorApi = _InvestorApi2.default;
exports.ManagersApi = _ManagersApi2.default;
exports.NotificationsApi = _NotificationsApi2.default;
exports.OefApi = _OefApi2.default;
exports.PlatformApi = _PlatformApi2.default;
exports.ProfileApi = _ProfileApi2.default;
exports.ProgramsApi = _ProgramsApi2.default;
exports.RateApi = _RateApi2.default;
exports.WalletApi = _WalletApi2.default; /**
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
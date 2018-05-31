'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TradesApi = exports.RateApi = exports.ManagerApi = exports.InvestorApi = undefined;
exports.FilesApi = exports.BrokerApi = exports.WalletsViewModel = exports.WalletWithdrawRequestModel = exports.WalletViewModel = exports.WalletTransactionsViewModel = exports.WalletTransaction = exports.WalletStatisticFilter = exports.WalletStatistic = exports.WalletInvestmentPrograms = exports.WalletInvestmentProgram = exports.WalletAddressViewModel = exports.UploadResult = exports.UpdateProfileViewModel = exports.TwoFactorStatus = exports.TwoFactorCodeModel = exports.TwoFactorAuthenticatorConfirm = exports.TwoFactorAuthenticator = exports.TransactionsFilter = exports.TradesViewModel = exports.TradesFilter = exports.TradesChartViewModel = exports.TradeChart = exports.Token = exports.StartValues = exports.ResetPasswordViewModel = exports.RequestRate = exports.RegisterManagerViewModel = exports.RegisterInvestorViewModel = exports.RecoveryCodesViewModel = exports.RecoveryCode = exports.RateViewModel = exports.ProgramBalances = exports.ProfilePublicViewModel = exports.ProfileFullViewModel = exports.PlatformStatus = exports.PeriodProfitDiagram = exports.Period = exports.PaymentTxInfo = exports.PasswordModel = exports.OrderModel = exports.OpenTradesViewModel = exports.OpenOrderModel = exports.NewTradeEvent = exports.NewTournamentAccountRequest = exports.NewOpenTradesEvent = exports.NewManager = exports.NewInvestmentRequest = exports.ManagerRequest = exports.ManagerProfitChartData = exports.ManagerProfitChart = exports.ManagerOpenTrades = exports.ManagerLevelStatistic = exports.ManagerIpfsHash = exports.ManagerInvestmentPrograms = exports.ManagerHistoryIpfsHash = exports.ManagerFundChart = exports.ManagerDashboardStatistic = exports.ManagerDashboardProgramsFilter = exports.ManagerAccountOnlineInfo = exports.LoginViewModel = exports.InvestorDashboard = exports.InvestorAmount = exports.InvestmentProgramsViewModel = exports.InvestmentProgramsFilter = exports.InvestmentProgramViewModel = exports.InvestmentProgramUpdate = exports.InvestmentProgramTxInfo = exports.InvestmentProgramRequestsFilter = exports.InvestmentProgramRequests = exports.InvestmentProgramRequestTxInfo = exports.InvestmentProgramRequest = exports.InvestmentProgramDetails = exports.InvestmentProgramDashboardManager = exports.InvestmentProgramDashboardInvestor = exports.InvestmentProgramBuyToken = exports.InvestmentProgramAccrual = exports.InvestmentProgram = exports.Invest = exports.IOsAppVersion = exports.IFormFile = exports.FreeTokens = exports.ForgotPasswordViewModel = exports.ErrorViewModel = exports.ErrorMessage = exports.EndOfNextPeriod = exports.DateChart = exports.ClosePeriodData = exports.ChartByDate = exports.Chart = exports.ChangePasswordViewModel = exports.BrokersViewModel = exports.BrokersFilter = exports.BrokerTradeServer = exports.BrokerInvestmentProgram = exports.BrokerInitData = exports.Broker = exports.AndroidVersion = exports.AndroidAppVersion = exports.ApiClient = undefined;

var _ApiClient = require('./ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _AndroidAppVersion = require('./model/AndroidAppVersion');

var _AndroidAppVersion2 = _interopRequireDefault(_AndroidAppVersion);

var _AndroidVersion = require('./model/AndroidVersion');

var _AndroidVersion2 = _interopRequireDefault(_AndroidVersion);

var _Broker = require('./model/Broker');

var _Broker2 = _interopRequireDefault(_Broker);

var _BrokerInitData = require('./model/BrokerInitData');

var _BrokerInitData2 = _interopRequireDefault(_BrokerInitData);

var _BrokerInvestmentProgram = require('./model/BrokerInvestmentProgram');

var _BrokerInvestmentProgram2 = _interopRequireDefault(_BrokerInvestmentProgram);

var _BrokerTradeServer = require('./model/BrokerTradeServer');

var _BrokerTradeServer2 = _interopRequireDefault(_BrokerTradeServer);

var _BrokersFilter = require('./model/BrokersFilter');

var _BrokersFilter2 = _interopRequireDefault(_BrokersFilter);

var _BrokersViewModel = require('./model/BrokersViewModel');

var _BrokersViewModel2 = _interopRequireDefault(_BrokersViewModel);

var _ChangePasswordViewModel = require('./model/ChangePasswordViewModel');

var _ChangePasswordViewModel2 = _interopRequireDefault(_ChangePasswordViewModel);

var _Chart = require('./model/Chart');

var _Chart2 = _interopRequireDefault(_Chart);

var _ChartByDate = require('./model/ChartByDate');

var _ChartByDate2 = _interopRequireDefault(_ChartByDate);

var _ClosePeriodData = require('./model/ClosePeriodData');

var _ClosePeriodData2 = _interopRequireDefault(_ClosePeriodData);

var _DateChart = require('./model/DateChart');

var _DateChart2 = _interopRequireDefault(_DateChart);

var _EndOfNextPeriod = require('./model/EndOfNextPeriod');

var _EndOfNextPeriod2 = _interopRequireDefault(_EndOfNextPeriod);

var _ErrorMessage = require('./model/ErrorMessage');

var _ErrorMessage2 = _interopRequireDefault(_ErrorMessage);

var _ErrorViewModel = require('./model/ErrorViewModel');

var _ErrorViewModel2 = _interopRequireDefault(_ErrorViewModel);

var _ForgotPasswordViewModel = require('./model/ForgotPasswordViewModel');

var _ForgotPasswordViewModel2 = _interopRequireDefault(_ForgotPasswordViewModel);

var _FreeTokens = require('./model/FreeTokens');

var _FreeTokens2 = _interopRequireDefault(_FreeTokens);

var _IFormFile = require('./model/IFormFile');

var _IFormFile2 = _interopRequireDefault(_IFormFile);

var _IOsAppVersion = require('./model/IOsAppVersion');

var _IOsAppVersion2 = _interopRequireDefault(_IOsAppVersion);

var _Invest = require('./model/Invest');

var _Invest2 = _interopRequireDefault(_Invest);

var _InvestmentProgram = require('./model/InvestmentProgram');

var _InvestmentProgram2 = _interopRequireDefault(_InvestmentProgram);

var _InvestmentProgramAccrual = require('./model/InvestmentProgramAccrual');

var _InvestmentProgramAccrual2 = _interopRequireDefault(_InvestmentProgramAccrual);

var _InvestmentProgramBuyToken = require('./model/InvestmentProgramBuyToken');

var _InvestmentProgramBuyToken2 = _interopRequireDefault(_InvestmentProgramBuyToken);

var _InvestmentProgramDashboardInvestor = require('./model/InvestmentProgramDashboardInvestor');

var _InvestmentProgramDashboardInvestor2 = _interopRequireDefault(_InvestmentProgramDashboardInvestor);

var _InvestmentProgramDashboardManager = require('./model/InvestmentProgramDashboardManager');

var _InvestmentProgramDashboardManager2 = _interopRequireDefault(_InvestmentProgramDashboardManager);

var _InvestmentProgramDetails = require('./model/InvestmentProgramDetails');

var _InvestmentProgramDetails2 = _interopRequireDefault(_InvestmentProgramDetails);

var _InvestmentProgramRequest = require('./model/InvestmentProgramRequest');

var _InvestmentProgramRequest2 = _interopRequireDefault(_InvestmentProgramRequest);

var _InvestmentProgramRequestTxInfo = require('./model/InvestmentProgramRequestTxInfo');

var _InvestmentProgramRequestTxInfo2 = _interopRequireDefault(_InvestmentProgramRequestTxInfo);

var _InvestmentProgramRequests = require('./model/InvestmentProgramRequests');

var _InvestmentProgramRequests2 = _interopRequireDefault(_InvestmentProgramRequests);

var _InvestmentProgramRequestsFilter = require('./model/InvestmentProgramRequestsFilter');

var _InvestmentProgramRequestsFilter2 = _interopRequireDefault(_InvestmentProgramRequestsFilter);

var _InvestmentProgramTxInfo = require('./model/InvestmentProgramTxInfo');

var _InvestmentProgramTxInfo2 = _interopRequireDefault(_InvestmentProgramTxInfo);

var _InvestmentProgramUpdate = require('./model/InvestmentProgramUpdate');

var _InvestmentProgramUpdate2 = _interopRequireDefault(_InvestmentProgramUpdate);

var _InvestmentProgramViewModel = require('./model/InvestmentProgramViewModel');

var _InvestmentProgramViewModel2 = _interopRequireDefault(_InvestmentProgramViewModel);

var _InvestmentProgramsFilter = require('./model/InvestmentProgramsFilter');

var _InvestmentProgramsFilter2 = _interopRequireDefault(_InvestmentProgramsFilter);

var _InvestmentProgramsViewModel = require('./model/InvestmentProgramsViewModel');

var _InvestmentProgramsViewModel2 = _interopRequireDefault(_InvestmentProgramsViewModel);

var _InvestorAmount = require('./model/InvestorAmount');

var _InvestorAmount2 = _interopRequireDefault(_InvestorAmount);

var _InvestorDashboard = require('./model/InvestorDashboard');

var _InvestorDashboard2 = _interopRequireDefault(_InvestorDashboard);

var _LoginViewModel = require('./model/LoginViewModel');

var _LoginViewModel2 = _interopRequireDefault(_LoginViewModel);

var _ManagerAccountOnlineInfo = require('./model/ManagerAccountOnlineInfo');

var _ManagerAccountOnlineInfo2 = _interopRequireDefault(_ManagerAccountOnlineInfo);

var _ManagerDashboardProgramsFilter = require('./model/ManagerDashboardProgramsFilter');

var _ManagerDashboardProgramsFilter2 = _interopRequireDefault(_ManagerDashboardProgramsFilter);

var _ManagerDashboardStatistic = require('./model/ManagerDashboardStatistic');

var _ManagerDashboardStatistic2 = _interopRequireDefault(_ManagerDashboardStatistic);

var _ManagerFundChart = require('./model/ManagerFundChart');

var _ManagerFundChart2 = _interopRequireDefault(_ManagerFundChart);

var _ManagerHistoryIpfsHash = require('./model/ManagerHistoryIpfsHash');

var _ManagerHistoryIpfsHash2 = _interopRequireDefault(_ManagerHistoryIpfsHash);

var _ManagerInvestmentPrograms = require('./model/ManagerInvestmentPrograms');

var _ManagerInvestmentPrograms2 = _interopRequireDefault(_ManagerInvestmentPrograms);

var _ManagerIpfsHash = require('./model/ManagerIpfsHash');

var _ManagerIpfsHash2 = _interopRequireDefault(_ManagerIpfsHash);

var _ManagerLevelStatistic = require('./model/ManagerLevelStatistic');

var _ManagerLevelStatistic2 = _interopRequireDefault(_ManagerLevelStatistic);

var _ManagerOpenTrades = require('./model/ManagerOpenTrades');

var _ManagerOpenTrades2 = _interopRequireDefault(_ManagerOpenTrades);

var _ManagerProfitChart = require('./model/ManagerProfitChart');

var _ManagerProfitChart2 = _interopRequireDefault(_ManagerProfitChart);

var _ManagerProfitChartData = require('./model/ManagerProfitChartData');

var _ManagerProfitChartData2 = _interopRequireDefault(_ManagerProfitChartData);

var _ManagerRequest = require('./model/ManagerRequest');

var _ManagerRequest2 = _interopRequireDefault(_ManagerRequest);

var _NewInvestmentRequest = require('./model/NewInvestmentRequest');

var _NewInvestmentRequest2 = _interopRequireDefault(_NewInvestmentRequest);

var _NewManager = require('./model/NewManager');

var _NewManager2 = _interopRequireDefault(_NewManager);

var _NewOpenTradesEvent = require('./model/NewOpenTradesEvent');

var _NewOpenTradesEvent2 = _interopRequireDefault(_NewOpenTradesEvent);

var _NewTournamentAccountRequest = require('./model/NewTournamentAccountRequest');

var _NewTournamentAccountRequest2 = _interopRequireDefault(_NewTournamentAccountRequest);

var _NewTradeEvent = require('./model/NewTradeEvent');

var _NewTradeEvent2 = _interopRequireDefault(_NewTradeEvent);

var _OpenOrderModel = require('./model/OpenOrderModel');

var _OpenOrderModel2 = _interopRequireDefault(_OpenOrderModel);

var _OpenTradesViewModel = require('./model/OpenTradesViewModel');

var _OpenTradesViewModel2 = _interopRequireDefault(_OpenTradesViewModel);

var _OrderModel = require('./model/OrderModel');

var _OrderModel2 = _interopRequireDefault(_OrderModel);

var _PasswordModel = require('./model/PasswordModel');

var _PasswordModel2 = _interopRequireDefault(_PasswordModel);

var _PaymentTxInfo = require('./model/PaymentTxInfo');

var _PaymentTxInfo2 = _interopRequireDefault(_PaymentTxInfo);

var _Period = require('./model/Period');

var _Period2 = _interopRequireDefault(_Period);

var _PeriodProfitDiagram = require('./model/PeriodProfitDiagram');

var _PeriodProfitDiagram2 = _interopRequireDefault(_PeriodProfitDiagram);

var _PlatformStatus = require('./model/PlatformStatus');

var _PlatformStatus2 = _interopRequireDefault(_PlatformStatus);

var _ProfileFullViewModel = require('./model/ProfileFullViewModel');

var _ProfileFullViewModel2 = _interopRequireDefault(_ProfileFullViewModel);

var _ProfilePublicViewModel = require('./model/ProfilePublicViewModel');

var _ProfilePublicViewModel2 = _interopRequireDefault(_ProfilePublicViewModel);

var _ProgramBalances = require('./model/ProgramBalances');

var _ProgramBalances2 = _interopRequireDefault(_ProgramBalances);

var _RateViewModel = require('./model/RateViewModel');

var _RateViewModel2 = _interopRequireDefault(_RateViewModel);

var _RecoveryCode = require('./model/RecoveryCode');

var _RecoveryCode2 = _interopRequireDefault(_RecoveryCode);

var _RecoveryCodesViewModel = require('./model/RecoveryCodesViewModel');

var _RecoveryCodesViewModel2 = _interopRequireDefault(_RecoveryCodesViewModel);

var _RegisterInvestorViewModel = require('./model/RegisterInvestorViewModel');

var _RegisterInvestorViewModel2 = _interopRequireDefault(_RegisterInvestorViewModel);

var _RegisterManagerViewModel = require('./model/RegisterManagerViewModel');

var _RegisterManagerViewModel2 = _interopRequireDefault(_RegisterManagerViewModel);

var _RequestRate = require('./model/RequestRate');

var _RequestRate2 = _interopRequireDefault(_RequestRate);

var _ResetPasswordViewModel = require('./model/ResetPasswordViewModel');

var _ResetPasswordViewModel2 = _interopRequireDefault(_ResetPasswordViewModel);

var _StartValues = require('./model/StartValues');

var _StartValues2 = _interopRequireDefault(_StartValues);

var _Token = require('./model/Token');

var _Token2 = _interopRequireDefault(_Token);

var _TradeChart = require('./model/TradeChart');

var _TradeChart2 = _interopRequireDefault(_TradeChart);

var _TradesChartViewModel = require('./model/TradesChartViewModel');

var _TradesChartViewModel2 = _interopRequireDefault(_TradesChartViewModel);

var _TradesFilter = require('./model/TradesFilter');

var _TradesFilter2 = _interopRequireDefault(_TradesFilter);

var _TradesViewModel = require('./model/TradesViewModel');

var _TradesViewModel2 = _interopRequireDefault(_TradesViewModel);

var _TransactionsFilter = require('./model/TransactionsFilter');

var _TransactionsFilter2 = _interopRequireDefault(_TransactionsFilter);

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

var _WalletAddressViewModel = require('./model/WalletAddressViewModel');

var _WalletAddressViewModel2 = _interopRequireDefault(_WalletAddressViewModel);

var _WalletInvestmentProgram = require('./model/WalletInvestmentProgram');

var _WalletInvestmentProgram2 = _interopRequireDefault(_WalletInvestmentProgram);

var _WalletInvestmentPrograms = require('./model/WalletInvestmentPrograms');

var _WalletInvestmentPrograms2 = _interopRequireDefault(_WalletInvestmentPrograms);

var _WalletStatistic = require('./model/WalletStatistic');

var _WalletStatistic2 = _interopRequireDefault(_WalletStatistic);

var _WalletStatisticFilter = require('./model/WalletStatisticFilter');

var _WalletStatisticFilter2 = _interopRequireDefault(_WalletStatisticFilter);

var _WalletTransaction = require('./model/WalletTransaction');

var _WalletTransaction2 = _interopRequireDefault(_WalletTransaction);

var _WalletTransactionsViewModel = require('./model/WalletTransactionsViewModel');

var _WalletTransactionsViewModel2 = _interopRequireDefault(_WalletTransactionsViewModel);

var _WalletViewModel = require('./model/WalletViewModel');

var _WalletViewModel2 = _interopRequireDefault(_WalletViewModel);

var _WalletWithdrawRequestModel = require('./model/WalletWithdrawRequestModel');

var _WalletWithdrawRequestModel2 = _interopRequireDefault(_WalletWithdrawRequestModel);

var _WalletsViewModel = require('./model/WalletsViewModel');

var _WalletsViewModel2 = _interopRequireDefault(_WalletsViewModel);

var _BrokerApi = require('./api/BrokerApi');

var _BrokerApi2 = _interopRequireDefault(_BrokerApi);

var _FilesApi = require('./api/FilesApi');

var _FilesApi2 = _interopRequireDefault(_FilesApi);

var _InvestorApi = require('./api/InvestorApi');

var _InvestorApi2 = _interopRequireDefault(_InvestorApi);

var _ManagerApi = require('./api/ManagerApi');

var _ManagerApi2 = _interopRequireDefault(_ManagerApi);

var _RateApi = require('./api/RateApi');

var _RateApi2 = _interopRequireDefault(_RateApi);

var _TradesApi = require('./api/TradesApi');

var _TradesApi2 = _interopRequireDefault(_TradesApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* ERROR_UNKNOWN.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var CoreApi = require('index'); // See note below*.
* var xxxSvc = new CoreApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new CoreApi.Yyy(); // Construct a model instance.
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
* var xxxSvc = new CoreApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new CoreApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version v1
*/
/**
 * Core API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

exports.ApiClient = _ApiClient2.default;
exports.AndroidAppVersion = _AndroidAppVersion2.default;
exports.AndroidVersion = _AndroidVersion2.default;
exports.Broker = _Broker2.default;
exports.BrokerInitData = _BrokerInitData2.default;
exports.BrokerInvestmentProgram = _BrokerInvestmentProgram2.default;
exports.BrokerTradeServer = _BrokerTradeServer2.default;
exports.BrokersFilter = _BrokersFilter2.default;
exports.BrokersViewModel = _BrokersViewModel2.default;
exports.ChangePasswordViewModel = _ChangePasswordViewModel2.default;
exports.Chart = _Chart2.default;
exports.ChartByDate = _ChartByDate2.default;
exports.ClosePeriodData = _ClosePeriodData2.default;
exports.DateChart = _DateChart2.default;
exports.EndOfNextPeriod = _EndOfNextPeriod2.default;
exports.ErrorMessage = _ErrorMessage2.default;
exports.ErrorViewModel = _ErrorViewModel2.default;
exports.ForgotPasswordViewModel = _ForgotPasswordViewModel2.default;
exports.FreeTokens = _FreeTokens2.default;
exports.IFormFile = _IFormFile2.default;
exports.IOsAppVersion = _IOsAppVersion2.default;
exports.Invest = _Invest2.default;
exports.InvestmentProgram = _InvestmentProgram2.default;
exports.InvestmentProgramAccrual = _InvestmentProgramAccrual2.default;
exports.InvestmentProgramBuyToken = _InvestmentProgramBuyToken2.default;
exports.InvestmentProgramDashboardInvestor = _InvestmentProgramDashboardInvestor2.default;
exports.InvestmentProgramDashboardManager = _InvestmentProgramDashboardManager2.default;
exports.InvestmentProgramDetails = _InvestmentProgramDetails2.default;
exports.InvestmentProgramRequest = _InvestmentProgramRequest2.default;
exports.InvestmentProgramRequestTxInfo = _InvestmentProgramRequestTxInfo2.default;
exports.InvestmentProgramRequests = _InvestmentProgramRequests2.default;
exports.InvestmentProgramRequestsFilter = _InvestmentProgramRequestsFilter2.default;
exports.InvestmentProgramTxInfo = _InvestmentProgramTxInfo2.default;
exports.InvestmentProgramUpdate = _InvestmentProgramUpdate2.default;
exports.InvestmentProgramViewModel = _InvestmentProgramViewModel2.default;
exports.InvestmentProgramsFilter = _InvestmentProgramsFilter2.default;
exports.InvestmentProgramsViewModel = _InvestmentProgramsViewModel2.default;
exports.InvestorAmount = _InvestorAmount2.default;
exports.InvestorDashboard = _InvestorDashboard2.default;
exports.LoginViewModel = _LoginViewModel2.default;
exports.ManagerAccountOnlineInfo = _ManagerAccountOnlineInfo2.default;
exports.ManagerDashboardProgramsFilter = _ManagerDashboardProgramsFilter2.default;
exports.ManagerDashboardStatistic = _ManagerDashboardStatistic2.default;
exports.ManagerFundChart = _ManagerFundChart2.default;
exports.ManagerHistoryIpfsHash = _ManagerHistoryIpfsHash2.default;
exports.ManagerInvestmentPrograms = _ManagerInvestmentPrograms2.default;
exports.ManagerIpfsHash = _ManagerIpfsHash2.default;
exports.ManagerLevelStatistic = _ManagerLevelStatistic2.default;
exports.ManagerOpenTrades = _ManagerOpenTrades2.default;
exports.ManagerProfitChart = _ManagerProfitChart2.default;
exports.ManagerProfitChartData = _ManagerProfitChartData2.default;
exports.ManagerRequest = _ManagerRequest2.default;
exports.NewInvestmentRequest = _NewInvestmentRequest2.default;
exports.NewManager = _NewManager2.default;
exports.NewOpenTradesEvent = _NewOpenTradesEvent2.default;
exports.NewTournamentAccountRequest = _NewTournamentAccountRequest2.default;
exports.NewTradeEvent = _NewTradeEvent2.default;
exports.OpenOrderModel = _OpenOrderModel2.default;
exports.OpenTradesViewModel = _OpenTradesViewModel2.default;
exports.OrderModel = _OrderModel2.default;
exports.PasswordModel = _PasswordModel2.default;
exports.PaymentTxInfo = _PaymentTxInfo2.default;
exports.Period = _Period2.default;
exports.PeriodProfitDiagram = _PeriodProfitDiagram2.default;
exports.PlatformStatus = _PlatformStatus2.default;
exports.ProfileFullViewModel = _ProfileFullViewModel2.default;
exports.ProfilePublicViewModel = _ProfilePublicViewModel2.default;
exports.ProgramBalances = _ProgramBalances2.default;
exports.RateViewModel = _RateViewModel2.default;
exports.RecoveryCode = _RecoveryCode2.default;
exports.RecoveryCodesViewModel = _RecoveryCodesViewModel2.default;
exports.RegisterInvestorViewModel = _RegisterInvestorViewModel2.default;
exports.RegisterManagerViewModel = _RegisterManagerViewModel2.default;
exports.RequestRate = _RequestRate2.default;
exports.ResetPasswordViewModel = _ResetPasswordViewModel2.default;
exports.StartValues = _StartValues2.default;
exports.Token = _Token2.default;
exports.TradeChart = _TradeChart2.default;
exports.TradesChartViewModel = _TradesChartViewModel2.default;
exports.TradesFilter = _TradesFilter2.default;
exports.TradesViewModel = _TradesViewModel2.default;
exports.TransactionsFilter = _TransactionsFilter2.default;
exports.TwoFactorAuthenticator = _TwoFactorAuthenticator2.default;
exports.TwoFactorAuthenticatorConfirm = _TwoFactorAuthenticatorConfirm2.default;
exports.TwoFactorCodeModel = _TwoFactorCodeModel2.default;
exports.TwoFactorStatus = _TwoFactorStatus2.default;
exports.UpdateProfileViewModel = _UpdateProfileViewModel2.default;
exports.UploadResult = _UploadResult2.default;
exports.WalletAddressViewModel = _WalletAddressViewModel2.default;
exports.WalletInvestmentProgram = _WalletInvestmentProgram2.default;
exports.WalletInvestmentPrograms = _WalletInvestmentPrograms2.default;
exports.WalletStatistic = _WalletStatistic2.default;
exports.WalletStatisticFilter = _WalletStatisticFilter2.default;
exports.WalletTransaction = _WalletTransaction2.default;
exports.WalletTransactionsViewModel = _WalletTransactionsViewModel2.default;
exports.WalletViewModel = _WalletViewModel2.default;
exports.WalletWithdrawRequestModel = _WalletWithdrawRequestModel2.default;
exports.WalletsViewModel = _WalletsViewModel2.default;
exports.BrokerApi = _BrokerApi2.default;
exports.FilesApi = _FilesApi2.default;
exports.InvestorApi = _InvestorApi2.default;
exports.ManagerApi = _ManagerApi2.default;
exports.RateApi = _RateApi2.default;
exports.TradesApi = _TradesApi2.default;
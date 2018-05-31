swagger-codegen generate -i <url> -l javascript -c config.json -t ./template/es6/

npm run build

# core_api

CoreApi - JavaScript client for core_api
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: v1
- Package version: v1
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://genesis.vision/](https://genesis.vision/)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install core_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CoreApi = require('core_api');

var api = new CoreApi.BrokerApi()

var authorization = "authorization_example"; // {String} JWT access token

var opts = { 
  'request': new CoreApi.NewManager() // {NewManager} 
};
api.apiBrokerAccountCreatePost(authorization, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CoreApi.BrokerApi* | [**apiBrokerAccountCreatePost**](docs/BrokerApi.md#apiBrokerAccountCreatePost) | **POST** /api/broker/account/create | Create manager
*CoreApi.BrokerApi* | [**apiBrokerAuthChangePasswordPost**](docs/BrokerApi.md#apiBrokerAuthChangePasswordPost) | **POST** /api/broker/auth/changePassword | Change password
*CoreApi.BrokerApi* | [**apiBrokerAuthConfirmEmailPost**](docs/BrokerApi.md#apiBrokerAuthConfirmEmailPost) | **POST** /api/broker/auth/confirmEmail | Confirm email after registration
*CoreApi.BrokerApi* | [**apiBrokerAuthSignInPost**](docs/BrokerApi.md#apiBrokerAuthSignInPost) | **POST** /api/broker/auth/signIn | Authorize
*CoreApi.BrokerApi* | [**apiBrokerAuthUpdateTokenGet**](docs/BrokerApi.md#apiBrokerAuthUpdateTokenGet) | **GET** /api/broker/auth/updateToken | Update auth token
*CoreApi.BrokerApi* | [**apiBrokerInitDataGet**](docs/BrokerApi.md#apiBrokerInitDataGet) | **GET** /api/broker/initData | Get broker initial data
*CoreApi.BrokerApi* | [**apiBrokerManagersAccountsOnlineInfoUpdatePost**](docs/BrokerApi.md#apiBrokerManagersAccountsOnlineInfoUpdatePost) | **POST** /api/broker/managersAccounts/onlineInfo/update | Upload accounts online info
*CoreApi.BrokerApi* | [**apiBrokerPeriodAccrueProfitsPost**](docs/BrokerApi.md#apiBrokerPeriodAccrueProfitsPost) | **POST** /api/broker/period/accrueProfits | Accrue investors&#39; profits
*CoreApi.BrokerApi* | [**apiBrokerPeriodClosePost**](docs/BrokerApi.md#apiBrokerPeriodClosePost) | **POST** /api/broker/period/close | Close investment period
*CoreApi.BrokerApi* | [**apiBrokerPeriodProcessClosingProgramPost**](docs/BrokerApi.md#apiBrokerPeriodProcessClosingProgramPost) | **POST** /api/broker/period/processClosingProgram | Close investment program
*CoreApi.BrokerApi* | [**apiBrokerPeriodProcessInvestmentRequestsPost**](docs/BrokerApi.md#apiBrokerPeriodProcessInvestmentRequestsPost) | **POST** /api/broker/period/processInvestmentRequests | Process investment requests
*CoreApi.BrokerApi* | [**apiBrokerPeriodReevaluateManagerTokenPost**](docs/BrokerApi.md#apiBrokerPeriodReevaluateManagerTokenPost) | **POST** /api/broker/period/reevaluateManagerToken | Update manager token initial price/total supply after loss
*CoreApi.BrokerApi* | [**apiBrokerPeriodSetStartValuesPost**](docs/BrokerApi.md#apiBrokerPeriodSetStartValuesPost) | **POST** /api/broker/period/setStartValues | Set investment period start balance, manager share, manager balance
*CoreApi.BrokerApi* | [**apiBrokerPeriodTerminatePost**](docs/BrokerApi.md#apiBrokerPeriodTerminatePost) | **POST** /api/broker/period/terminate | Terminate program
*CoreApi.BrokerApi* | [**apiBrokerPeriodlosingDataGet**](docs/BrokerApi.md#apiBrokerPeriodlosingDataGet) | **GET** /api/broker/period/сlosingData | Get data for closing investment period
*CoreApi.BrokerApi* | [**apiBrokerTradesIpfsHashUpdatePost**](docs/BrokerApi.md#apiBrokerTradesIpfsHashUpdatePost) | **POST** /api/broker/trades/ipfsHash/update | Update manager history ipfs hash
*CoreApi.BrokerApi* | [**apiBrokerTradesNewPost**](docs/BrokerApi.md#apiBrokerTradesNewPost) | **POST** /api/broker/trades/new | New trade event
*CoreApi.BrokerApi* | [**apiBrokerTradesOpenTradesNewPost**](docs/BrokerApi.md#apiBrokerTradesOpenTradesNewPost) | **POST** /api/broker/trades/openTrades/new | New open trades event
*CoreApi.FilesApi* | [**apiFilesByIdGet**](docs/FilesApi.md#apiFilesByIdGet) | **GET** /api/files/{id} | Download file
*CoreApi.FilesApi* | [**apiFilesGet**](docs/FilesApi.md#apiFilesGet) | **GET** /api/files | Download file
*CoreApi.FilesApi* | [**apiFilesUploadPost**](docs/FilesApi.md#apiFilesUploadPost) | **POST** /api/files/upload | Upload file
*CoreApi.InvestorApi* | [**apiInvestorAuth2faConfirmPost**](docs/InvestorApi.md#apiInvestorAuth2faConfirmPost) | **POST** /api/investor/auth/2fa/confirm | 2FA confirm
*CoreApi.InvestorApi* | [**apiInvestorAuth2faCreatePost**](docs/InvestorApi.md#apiInvestorAuth2faCreatePost) | **POST** /api/investor/auth/2fa/create | 2FA create
*CoreApi.InvestorApi* | [**apiInvestorAuth2faDisablePost**](docs/InvestorApi.md#apiInvestorAuth2faDisablePost) | **POST** /api/investor/auth/2fa/disable | 2FA disable
*CoreApi.InvestorApi* | [**apiInvestorAuth2faGet**](docs/InvestorApi.md#apiInvestorAuth2faGet) | **GET** /api/investor/auth/2fa | 2FA status
*CoreApi.InvestorApi* | [**apiInvestorAuth2faRecoveryCodesNewPost**](docs/InvestorApi.md#apiInvestorAuth2faRecoveryCodesNewPost) | **POST** /api/investor/auth/2fa/recoveryCodes/new | 2FA generate new recovery codes
*CoreApi.InvestorApi* | [**apiInvestorAuth2faRecoveryCodesPost**](docs/InvestorApi.md#apiInvestorAuth2faRecoveryCodesPost) | **POST** /api/investor/auth/2fa/recoveryCodes | 2FA recovery codes
*CoreApi.InvestorApi* | [**apiInvestorAuthChangePasswordPost**](docs/InvestorApi.md#apiInvestorAuthChangePasswordPost) | **POST** /api/investor/auth/changePassword | Change password
*CoreApi.InvestorApi* | [**apiInvestorAuthConfirmEmailPost**](docs/InvestorApi.md#apiInvestorAuthConfirmEmailPost) | **POST** /api/investor/auth/confirmEmail | Confirm email after registration
*CoreApi.InvestorApi* | [**apiInvestorAuthForgotPasswordPost**](docs/InvestorApi.md#apiInvestorAuthForgotPasswordPost) | **POST** /api/investor/auth/forgotPassword | Forgot password investor
*CoreApi.InvestorApi* | [**apiInvestorAuthResetPasswordPost**](docs/InvestorApi.md#apiInvestorAuthResetPasswordPost) | **POST** /api/investor/auth/resetPassword | Reset password
*CoreApi.InvestorApi* | [**apiInvestorAuthSignInPost**](docs/InvestorApi.md#apiInvestorAuthSignInPost) | **POST** /api/investor/auth/signIn | Authorize
*CoreApi.InvestorApi* | [**apiInvestorAuthSignUpPost**](docs/InvestorApi.md#apiInvestorAuthSignUpPost) | **POST** /api/investor/auth/signUp | Register new investor
*CoreApi.InvestorApi* | [**apiInvestorAuthUpdateTokenGet**](docs/InvestorApi.md#apiInvestorAuthUpdateTokenGet) | **GET** /api/investor/auth/updateToken | Update auth token
*CoreApi.InvestorApi* | [**apiInvestorDashboardGet**](docs/InvestorApi.md#apiInvestorDashboardGet) | **GET** /api/investor/dashboard | Get investor dashboard
*CoreApi.InvestorApi* | [**apiInvestorInvestmentProgramBuyTokensGet**](docs/InvestorApi.md#apiInvestorInvestmentProgramBuyTokensGet) | **GET** /api/investor/investmentProgram/buyTokens | Get investment program buy token model
*CoreApi.InvestorApi* | [**apiInvestorInvestmentProgramEquityChartGet**](docs/InvestorApi.md#apiInvestorInvestmentProgramEquityChartGet) | **GET** /api/investor/investmentProgram/equity/chart | Get manager equity chart
*CoreApi.InvestorApi* | [**apiInvestorInvestmentProgramGet**](docs/InvestorApi.md#apiInvestorInvestmentProgramGet) | **GET** /api/investor/investmentProgram | Get investment program details by id
*CoreApi.InvestorApi* | [**apiInvestorInvestmentProgramOpenTradesPost**](docs/InvestorApi.md#apiInvestorInvestmentProgramOpenTradesPost) | **POST** /api/investor/investmentProgram/openTrades | Get manager open trades
*CoreApi.InvestorApi* | [**apiInvestorInvestmentProgramRequestsPost**](docs/InvestorApi.md#apiInvestorInvestmentProgramRequestsPost) | **POST** /api/investor/investmentProgram/requests | Get investment program&#39;s requests
*CoreApi.InvestorApi* | [**apiInvestorInvestmentProgramTradesChartGet**](docs/InvestorApi.md#apiInvestorInvestmentProgramTradesChartGet) | **GET** /api/investor/investmentProgram/trades/chart | Get manager trades chart
*CoreApi.InvestorApi* | [**apiInvestorInvestmentProgramTradesPost**](docs/InvestorApi.md#apiInvestorInvestmentProgramTradesPost) | **POST** /api/investor/investmentProgram/trades | Get manager trade history
*CoreApi.InvestorApi* | [**apiInvestorInvestmentProgramsCancelInvestmentRequestPost**](docs/InvestorApi.md#apiInvestorInvestmentProgramsCancelInvestmentRequestPost) | **POST** /api/investor/investmentPrograms/cancelInvestmentRequest | Cancel investment request
*CoreApi.InvestorApi* | [**apiInvestorInvestmentProgramsFavoritesAddPost**](docs/InvestorApi.md#apiInvestorInvestmentProgramsFavoritesAddPost) | **POST** /api/investor/investmentPrograms/favorites/add | Add to favorites
*CoreApi.InvestorApi* | [**apiInvestorInvestmentProgramsFavoritesRemovePost**](docs/InvestorApi.md#apiInvestorInvestmentProgramsFavoritesRemovePost) | **POST** /api/investor/investmentPrograms/favorites/remove | Remove from favorites
*CoreApi.InvestorApi* | [**apiInvestorInvestmentProgramsInvestPost**](docs/InvestorApi.md#apiInvestorInvestmentProgramsInvestPost) | **POST** /api/investor/investmentPrograms/invest | Invest in manager
*CoreApi.InvestorApi* | [**apiInvestorInvestmentProgramsPost**](docs/InvestorApi.md#apiInvestorInvestmentProgramsPost) | **POST** /api/investor/investmentPrograms | Get public investment program&#39;s list
*CoreApi.InvestorApi* | [**apiInvestorInvestmentProgramsWithdrawPost**](docs/InvestorApi.md#apiInvestorInvestmentProgramsWithdrawPost) | **POST** /api/investor/investmentPrograms/withdraw | Withdraw from investment program
*CoreApi.InvestorApi* | [**apiInvestorPlatformStatusGet**](docs/InvestorApi.md#apiInvestorPlatformStatusGet) | **GET** /api/investor/platformStatus | Platform status
*CoreApi.InvestorApi* | [**apiInvestorProfileFullGet**](docs/InvestorApi.md#apiInvestorProfileFullGet) | **GET** /api/investor/profile/full | Get full profile
*CoreApi.InvestorApi* | [**apiInvestorProfilePublicGet**](docs/InvestorApi.md#apiInvestorProfilePublicGet) | **GET** /api/investor/profile/public | Get public profile
*CoreApi.InvestorApi* | [**apiInvestorProfileUpdatePost**](docs/InvestorApi.md#apiInvestorProfileUpdatePost) | **POST** /api/investor/profile/update | Update profile
*CoreApi.InvestorApi* | [**apiInvestorWalletAddressGet**](docs/InvestorApi.md#apiInvestorWalletAddressGet) | **GET** /api/investor/wallet/address | Get eth address for GVT depositing
*CoreApi.InvestorApi* | [**apiInvestorWalletGet**](docs/InvestorApi.md#apiInvestorWalletGet) | **GET** /api/investor/wallet | Get user wallets
*CoreApi.InvestorApi* | [**apiInvestorWalletStatisticPost**](docs/InvestorApi.md#apiInvestorWalletStatisticPost) | **POST** /api/investor/wallet/statistic | Get user wallet statistic
*CoreApi.InvestorApi* | [**apiInvestorWalletTransactionsInvestmentProgramsListGet**](docs/InvestorApi.md#apiInvestorWalletTransactionsInvestmentProgramsListGet) | **GET** /api/investor/wallet/transactions/investmentProgramsList | Get user investment programs with tx
*CoreApi.InvestorApi* | [**apiInvestorWalletTransactionsPost**](docs/InvestorApi.md#apiInvestorWalletTransactionsPost) | **POST** /api/investor/wallet/transactions | Get user wallet transactions
*CoreApi.InvestorApi* | [**apiInvestorWalletWithdrawRequestPost**](docs/InvestorApi.md#apiInvestorWalletWithdrawRequestPost) | **POST** /api/investor/wallet/withdrawRequest | Withdraw request
*CoreApi.ManagerApi* | [**apiManagerAccountNewInvestmentRequestPost**](docs/ManagerApi.md#apiManagerAccountNewInvestmentRequestPost) | **POST** /api/manager/account/newInvestmentRequest | Create new investment program request
*CoreApi.ManagerApi* | [**apiManagerAccountTournamentNewInvestmentRequestPost**](docs/ManagerApi.md#apiManagerAccountTournamentNewInvestmentRequestPost) | **POST** /api/manager/account/tournament/newInvestmentRequest | Create new tournament investment program request
*CoreApi.ManagerApi* | [**apiManagerAuth2faConfirmPost**](docs/ManagerApi.md#apiManagerAuth2faConfirmPost) | **POST** /api/manager/auth/2fa/confirm | 2FA confirm
*CoreApi.ManagerApi* | [**apiManagerAuth2faCreatePost**](docs/ManagerApi.md#apiManagerAuth2faCreatePost) | **POST** /api/manager/auth/2fa/create | 2FA create
*CoreApi.ManagerApi* | [**apiManagerAuth2faDisablePost**](docs/ManagerApi.md#apiManagerAuth2faDisablePost) | **POST** /api/manager/auth/2fa/disable | 2FA disable
*CoreApi.ManagerApi* | [**apiManagerAuth2faGet**](docs/ManagerApi.md#apiManagerAuth2faGet) | **GET** /api/manager/auth/2fa | 2FA status
*CoreApi.ManagerApi* | [**apiManagerAuth2faRecoveryCodesNewPost**](docs/ManagerApi.md#apiManagerAuth2faRecoveryCodesNewPost) | **POST** /api/manager/auth/2fa/recoveryCodes/new | 2FA generate new recovery codes
*CoreApi.ManagerApi* | [**apiManagerAuth2faRecoveryCodesPost**](docs/ManagerApi.md#apiManagerAuth2faRecoveryCodesPost) | **POST** /api/manager/auth/2fa/recoveryCodes | 2FA recovery codes
*CoreApi.ManagerApi* | [**apiManagerAuthChangePasswordPost**](docs/ManagerApi.md#apiManagerAuthChangePasswordPost) | **POST** /api/manager/auth/changePassword | Change password
*CoreApi.ManagerApi* | [**apiManagerAuthConfirmEmailPost**](docs/ManagerApi.md#apiManagerAuthConfirmEmailPost) | **POST** /api/manager/auth/confirmEmail | Confirm email after registration
*CoreApi.ManagerApi* | [**apiManagerAuthForgotPasswordPost**](docs/ManagerApi.md#apiManagerAuthForgotPasswordPost) | **POST** /api/manager/auth/forgotPassword | Forgot password manager
*CoreApi.ManagerApi* | [**apiManagerAuthResetPasswordPost**](docs/ManagerApi.md#apiManagerAuthResetPasswordPost) | **POST** /api/manager/auth/resetPassword | Reset password
*CoreApi.ManagerApi* | [**apiManagerAuthSignInPost**](docs/ManagerApi.md#apiManagerAuthSignInPost) | **POST** /api/manager/auth/signIn | Authorize
*CoreApi.ManagerApi* | [**apiManagerAuthSignUpPost**](docs/ManagerApi.md#apiManagerAuthSignUpPost) | **POST** /api/manager/auth/signUp | Register new manager
*CoreApi.ManagerApi* | [**apiManagerAuthUpdateTokenGet**](docs/ManagerApi.md#apiManagerAuthUpdateTokenGet) | **GET** /api/manager/auth/updateToken | Update auth token
*CoreApi.ManagerApi* | [**apiManagerBrokersPost**](docs/ManagerApi.md#apiManagerBrokersPost) | **POST** /api/manager/brokers | Get all enabled trade servers
*CoreApi.ManagerApi* | [**apiManagerDashboardProgramsPost**](docs/ManagerApi.md#apiManagerDashboardProgramsPost) | **POST** /api/manager/dashboard/programs | Dashboard programs
*CoreApi.ManagerApi* | [**apiManagerDashboardStatisticGet**](docs/ManagerApi.md#apiManagerDashboardStatisticGet) | **GET** /api/manager/dashboard/statistic | Dashboard statistic
*CoreApi.ManagerApi* | [**apiManagerInvestmentCancelInvestmentRequestPost**](docs/ManagerApi.md#apiManagerInvestmentCancelInvestmentRequestPost) | **POST** /api/manager/investment/cancelInvestmentRequest | Cancel investment request
*CoreApi.ManagerApi* | [**apiManagerInvestmentClosePost**](docs/ManagerApi.md#apiManagerInvestmentClosePost) | **POST** /api/manager/investment/close | Close existing investment program
*CoreApi.ManagerApi* | [**apiManagerInvestmentInvestPost**](docs/ManagerApi.md#apiManagerInvestmentInvestPost) | **POST** /api/manager/investment/invest | Manager deposit in his own investment program
*CoreApi.ManagerApi* | [**apiManagerInvestmentProgramBuyTokensGet**](docs/ManagerApi.md#apiManagerInvestmentProgramBuyTokensGet) | **GET** /api/manager/investmentProgram/buyTokens | Get investment program buy token model
*CoreApi.ManagerApi* | [**apiManagerInvestmentProgramEquityChartGet**](docs/ManagerApi.md#apiManagerInvestmentProgramEquityChartGet) | **GET** /api/manager/investmentProgram/equity/chart | Get manager equity chart
*CoreApi.ManagerApi* | [**apiManagerInvestmentProgramGet**](docs/ManagerApi.md#apiManagerInvestmentProgramGet) | **GET** /api/manager/investmentProgram | Get investment program details by id
*CoreApi.ManagerApi* | [**apiManagerInvestmentProgramGetlevelstatisticGet**](docs/ManagerApi.md#apiManagerInvestmentProgramGetlevelstatisticGet) | **GET** /api/manager/investmentProgram/getlevelstatistic | Level statistic
*CoreApi.ManagerApi* | [**apiManagerInvestmentProgramPeriodClosePost**](docs/ManagerApi.md#apiManagerInvestmentProgramPeriodClosePost) | **POST** /api/manager/investmentProgram/period/close | Close current period
*CoreApi.ManagerApi* | [**apiManagerInvestmentProgramRequestsPost**](docs/ManagerApi.md#apiManagerInvestmentProgramRequestsPost) | **POST** /api/manager/investmentProgram/requests | Get investment program&#39;s requests
*CoreApi.ManagerApi* | [**apiManagerInvestmentProgramTradesChartGet**](docs/ManagerApi.md#apiManagerInvestmentProgramTradesChartGet) | **GET** /api/manager/investmentProgram/trades/chart | Get manager trades chart
*CoreApi.ManagerApi* | [**apiManagerInvestmentProgramTradesPost**](docs/ManagerApi.md#apiManagerInvestmentProgramTradesPost) | **POST** /api/manager/investmentProgram/trades | Get manager trade history
*CoreApi.ManagerApi* | [**apiManagerInvestmentProgramUpdatePost**](docs/ManagerApi.md#apiManagerInvestmentProgramUpdatePost) | **POST** /api/manager/investmentProgram/update | Update investment program details
*CoreApi.ManagerApi* | [**apiManagerInvestmentProgramsFavoritesAddPost**](docs/ManagerApi.md#apiManagerInvestmentProgramsFavoritesAddPost) | **POST** /api/manager/investmentPrograms/favorites/add | Add to favorites
*CoreApi.ManagerApi* | [**apiManagerInvestmentProgramsFavoritesRemovePost**](docs/ManagerApi.md#apiManagerInvestmentProgramsFavoritesRemovePost) | **POST** /api/manager/investmentPrograms/favorites/remove | Remove from favorites
*CoreApi.ManagerApi* | [**apiManagerInvestmentProgramsPost**](docs/ManagerApi.md#apiManagerInvestmentProgramsPost) | **POST** /api/manager/investmentPrograms | Get public investment program&#39;s list
*CoreApi.ManagerApi* | [**apiManagerInvestmentWithdrawPost**](docs/ManagerApi.md#apiManagerInvestmentWithdrawPost) | **POST** /api/manager/investment/withdraw | Manager withdrawal from his own investment program
*CoreApi.ManagerApi* | [**apiManagerPlatformStatusGet**](docs/ManagerApi.md#apiManagerPlatformStatusGet) | **GET** /api/manager/platformStatus | Platform status
*CoreApi.ManagerApi* | [**apiManagerProfileFullGet**](docs/ManagerApi.md#apiManagerProfileFullGet) | **GET** /api/manager/profile/full | Get full profile
*CoreApi.ManagerApi* | [**apiManagerProfilePublicGet**](docs/ManagerApi.md#apiManagerProfilePublicGet) | **GET** /api/manager/profile/public | Get public profile
*CoreApi.ManagerApi* | [**apiManagerProfileUpdatePost**](docs/ManagerApi.md#apiManagerProfileUpdatePost) | **POST** /api/manager/profile/update | Update profile
*CoreApi.ManagerApi* | [**apiManagerWalletAddressGet**](docs/ManagerApi.md#apiManagerWalletAddressGet) | **GET** /api/manager/wallet/address | Get eth address for GVT depositing
*CoreApi.ManagerApi* | [**apiManagerWalletGet**](docs/ManagerApi.md#apiManagerWalletGet) | **GET** /api/manager/wallet | Get user wallets
*CoreApi.ManagerApi* | [**apiManagerWalletStatisticPost**](docs/ManagerApi.md#apiManagerWalletStatisticPost) | **POST** /api/manager/wallet/statistic | Get user wallet statistic
*CoreApi.ManagerApi* | [**apiManagerWalletTransactionsInvestmentProgramsListGet**](docs/ManagerApi.md#apiManagerWalletTransactionsInvestmentProgramsListGet) | **GET** /api/manager/wallet/transactions/investmentProgramsList | Get user investment programs with tx
*CoreApi.ManagerApi* | [**apiManagerWalletTransactionsPost**](docs/ManagerApi.md#apiManagerWalletTransactionsPost) | **POST** /api/manager/wallet/transactions | Get user wallet transactions
*CoreApi.ManagerApi* | [**apiManagerWalletWithdrawRequestPost**](docs/ManagerApi.md#apiManagerWalletWithdrawRequestPost) | **POST** /api/manager/wallet/withdrawRequest | Withdraw request
*CoreApi.RateApi* | [**apiRatePost**](docs/RateApi.md#apiRatePost) | **POST** /api/rate | Get rate
*CoreApi.TradesApi* | [**apiTradesIpfsHistoryGet**](docs/TradesApi.md#apiTradesIpfsHistoryGet) | **GET** /api/trades/ipfsHistory | Get trades by IPFS hash id


## Documentation for Models

 - [CoreApi.AndroidAppVersion](docs/AndroidAppVersion.md)
 - [CoreApi.AndroidVersion](docs/AndroidVersion.md)
 - [CoreApi.Broker](docs/Broker.md)
 - [CoreApi.BrokerInitData](docs/BrokerInitData.md)
 - [CoreApi.BrokerInvestmentProgram](docs/BrokerInvestmentProgram.md)
 - [CoreApi.BrokerTradeServer](docs/BrokerTradeServer.md)
 - [CoreApi.BrokersFilter](docs/BrokersFilter.md)
 - [CoreApi.BrokersViewModel](docs/BrokersViewModel.md)
 - [CoreApi.ChangePasswordViewModel](docs/ChangePasswordViewModel.md)
 - [CoreApi.Chart](docs/Chart.md)
 - [CoreApi.ChartByDate](docs/ChartByDate.md)
 - [CoreApi.ClosePeriodData](docs/ClosePeriodData.md)
 - [CoreApi.DateChart](docs/DateChart.md)
 - [CoreApi.EndOfNextPeriod](docs/EndOfNextPeriod.md)
 - [CoreApi.ErrorMessage](docs/ErrorMessage.md)
 - [CoreApi.ErrorViewModel](docs/ErrorViewModel.md)
 - [CoreApi.ForgotPasswordViewModel](docs/ForgotPasswordViewModel.md)
 - [CoreApi.FreeTokens](docs/FreeTokens.md)
 - [CoreApi.IFormFile](docs/IFormFile.md)
 - [CoreApi.IOsAppVersion](docs/IOsAppVersion.md)
 - [CoreApi.Invest](docs/Invest.md)
 - [CoreApi.InvestmentProgram](docs/InvestmentProgram.md)
 - [CoreApi.InvestmentProgramAccrual](docs/InvestmentProgramAccrual.md)
 - [CoreApi.InvestmentProgramBuyToken](docs/InvestmentProgramBuyToken.md)
 - [CoreApi.InvestmentProgramDashboardInvestor](docs/InvestmentProgramDashboardInvestor.md)
 - [CoreApi.InvestmentProgramDashboardManager](docs/InvestmentProgramDashboardManager.md)
 - [CoreApi.InvestmentProgramDetails](docs/InvestmentProgramDetails.md)
 - [CoreApi.InvestmentProgramRequest](docs/InvestmentProgramRequest.md)
 - [CoreApi.InvestmentProgramRequestTxInfo](docs/InvestmentProgramRequestTxInfo.md)
 - [CoreApi.InvestmentProgramRequests](docs/InvestmentProgramRequests.md)
 - [CoreApi.InvestmentProgramRequestsFilter](docs/InvestmentProgramRequestsFilter.md)
 - [CoreApi.InvestmentProgramTxInfo](docs/InvestmentProgramTxInfo.md)
 - [CoreApi.InvestmentProgramUpdate](docs/InvestmentProgramUpdate.md)
 - [CoreApi.InvestmentProgramViewModel](docs/InvestmentProgramViewModel.md)
 - [CoreApi.InvestmentProgramsFilter](docs/InvestmentProgramsFilter.md)
 - [CoreApi.InvestmentProgramsViewModel](docs/InvestmentProgramsViewModel.md)
 - [CoreApi.InvestorAmount](docs/InvestorAmount.md)
 - [CoreApi.InvestorDashboard](docs/InvestorDashboard.md)
 - [CoreApi.LoginViewModel](docs/LoginViewModel.md)
 - [CoreApi.ManagerAccountOnlineInfo](docs/ManagerAccountOnlineInfo.md)
 - [CoreApi.ManagerDashboardProgramsFilter](docs/ManagerDashboardProgramsFilter.md)
 - [CoreApi.ManagerDashboardStatistic](docs/ManagerDashboardStatistic.md)
 - [CoreApi.ManagerFundChart](docs/ManagerFundChart.md)
 - [CoreApi.ManagerHistoryIpfsHash](docs/ManagerHistoryIpfsHash.md)
 - [CoreApi.ManagerInvestmentPrograms](docs/ManagerInvestmentPrograms.md)
 - [CoreApi.ManagerIpfsHash](docs/ManagerIpfsHash.md)
 - [CoreApi.ManagerLevelStatistic](docs/ManagerLevelStatistic.md)
 - [CoreApi.ManagerOpenTrades](docs/ManagerOpenTrades.md)
 - [CoreApi.ManagerProfitChart](docs/ManagerProfitChart.md)
 - [CoreApi.ManagerProfitChartData](docs/ManagerProfitChartData.md)
 - [CoreApi.ManagerRequest](docs/ManagerRequest.md)
 - [CoreApi.NewInvestmentRequest](docs/NewInvestmentRequest.md)
 - [CoreApi.NewManager](docs/NewManager.md)
 - [CoreApi.NewOpenTradesEvent](docs/NewOpenTradesEvent.md)
 - [CoreApi.NewTournamentAccountRequest](docs/NewTournamentAccountRequest.md)
 - [CoreApi.NewTradeEvent](docs/NewTradeEvent.md)
 - [CoreApi.OpenOrderModel](docs/OpenOrderModel.md)
 - [CoreApi.OpenTradesViewModel](docs/OpenTradesViewModel.md)
 - [CoreApi.OrderModel](docs/OrderModel.md)
 - [CoreApi.PasswordModel](docs/PasswordModel.md)
 - [CoreApi.PaymentTxInfo](docs/PaymentTxInfo.md)
 - [CoreApi.Period](docs/Period.md)
 - [CoreApi.PeriodProfitDiagram](docs/PeriodProfitDiagram.md)
 - [CoreApi.PlatformStatus](docs/PlatformStatus.md)
 - [CoreApi.ProfileFullViewModel](docs/ProfileFullViewModel.md)
 - [CoreApi.ProfilePublicViewModel](docs/ProfilePublicViewModel.md)
 - [CoreApi.ProgramBalances](docs/ProgramBalances.md)
 - [CoreApi.RateViewModel](docs/RateViewModel.md)
 - [CoreApi.RecoveryCode](docs/RecoveryCode.md)
 - [CoreApi.RecoveryCodesViewModel](docs/RecoveryCodesViewModel.md)
 - [CoreApi.RegisterInvestorViewModel](docs/RegisterInvestorViewModel.md)
 - [CoreApi.RegisterManagerViewModel](docs/RegisterManagerViewModel.md)
 - [CoreApi.RequestRate](docs/RequestRate.md)
 - [CoreApi.ResetPasswordViewModel](docs/ResetPasswordViewModel.md)
 - [CoreApi.StartValues](docs/StartValues.md)
 - [CoreApi.Token](docs/Token.md)
 - [CoreApi.TradeChart](docs/TradeChart.md)
 - [CoreApi.TradesChartViewModel](docs/TradesChartViewModel.md)
 - [CoreApi.TradesFilter](docs/TradesFilter.md)
 - [CoreApi.TradesViewModel](docs/TradesViewModel.md)
 - [CoreApi.TransactionsFilter](docs/TransactionsFilter.md)
 - [CoreApi.TwoFactorAuthenticator](docs/TwoFactorAuthenticator.md)
 - [CoreApi.TwoFactorAuthenticatorConfirm](docs/TwoFactorAuthenticatorConfirm.md)
 - [CoreApi.TwoFactorCodeModel](docs/TwoFactorCodeModel.md)
 - [CoreApi.TwoFactorStatus](docs/TwoFactorStatus.md)
 - [CoreApi.UpdateProfileViewModel](docs/UpdateProfileViewModel.md)
 - [CoreApi.UploadResult](docs/UploadResult.md)
 - [CoreApi.WalletAddressViewModel](docs/WalletAddressViewModel.md)
 - [CoreApi.WalletInvestmentProgram](docs/WalletInvestmentProgram.md)
 - [CoreApi.WalletInvestmentPrograms](docs/WalletInvestmentPrograms.md)
 - [CoreApi.WalletStatistic](docs/WalletStatistic.md)
 - [CoreApi.WalletStatisticFilter](docs/WalletStatisticFilter.md)
 - [CoreApi.WalletTransaction](docs/WalletTransaction.md)
 - [CoreApi.WalletTransactionsViewModel](docs/WalletTransactionsViewModel.md)
 - [CoreApi.WalletViewModel](docs/WalletViewModel.md)
 - [CoreApi.WalletWithdrawRequestModel](docs/WalletWithdrawRequestModel.md)
 - [CoreApi.WalletsViewModel](docs/WalletsViewModel.md)


## Documentation for Authorization

 All endpoints do not require authorization.


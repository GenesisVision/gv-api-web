swagger-codegen generate -i <url> -l javascript -c config.json -t ./template/es6/

npm run build

# core_api_v10

CoreApiV10 - JavaScript client for core_api_v10
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: v1.0
- Package version: v1.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://genesis.vision/](https://genesis.vision/)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install core_api_v10 --save
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
var CoreApiV10 = require('core_api_v10');

var api = new CoreApiV10.AuthApi()

var opts = { 
  'model': new CoreApiV10.LoginViewModel() // {LoginViewModel} 
};
api.authorizeInvestor(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CoreApiV10.AuthApi* | [**authorizeInvestor**](docs/AuthApi.md#authorizeInvestor) | **POST** /v1.0/auth/signin/investor | Authorize
*CoreApiV10.AuthApi* | [**authorizeManager**](docs/AuthApi.md#authorizeManager) | **POST** /v1.0/auth/signin/manager | Authorize
*CoreApiV10.AuthApi* | [**changePassword**](docs/AuthApi.md#changePassword) | **POST** /v1.0/auth/password/change | Change password
*CoreApiV10.AuthApi* | [**confirmEmail**](docs/AuthApi.md#confirmEmail) | **POST** /v1.0/auth/signup/confirm | Confirm email after registration
*CoreApiV10.AuthApi* | [**forgotPasswordInvestor**](docs/AuthApi.md#forgotPasswordInvestor) | **POST** /v1.0/auth/password/forgot/investor | Forgot password for investor
*CoreApiV10.AuthApi* | [**forgotPasswordManager**](docs/AuthApi.md#forgotPasswordManager) | **POST** /v1.0/auth/password/forgot/manager | Forgot password for manager
*CoreApiV10.AuthApi* | [**logoutFromAnotherDevices**](docs/AuthApi.md#logoutFromAnotherDevices) | **POST** /v1.0/auth/token/devices/logout | Logout from another devices
*CoreApiV10.AuthApi* | [**registerInvestor**](docs/AuthApi.md#registerInvestor) | **POST** /v1.0/auth/signup/investor | New investor registration
*CoreApiV10.AuthApi* | [**registerManager**](docs/AuthApi.md#registerManager) | **POST** /v1.0/auth/signup/manager | New manager registration
*CoreApiV10.AuthApi* | [**requestPhoneNumberVerificationCode**](docs/AuthApi.md#requestPhoneNumberVerificationCode) | **POST** /v1.0/auth/phone/code | Get phone number verification code
*CoreApiV10.AuthApi* | [**resendConfirmationLink**](docs/AuthApi.md#resendConfirmationLink) | **POST** /v1.0/auth/resendconfirmationlink | Resend Confirmation Link
*CoreApiV10.AuthApi* | [**resetPassword**](docs/AuthApi.md#resetPassword) | **POST** /v1.0/auth/password/reset | Reset password
*CoreApiV10.AuthApi* | [**twoStepAuthConfirm**](docs/AuthApi.md#twoStepAuthConfirm) | **POST** /v1.0/auth/2fa/confirm | 2FA confirm
*CoreApiV10.AuthApi* | [**twoStepAuthCreate**](docs/AuthApi.md#twoStepAuthCreate) | **POST** /v1.0/auth/2fa/create | 2FA create
*CoreApiV10.AuthApi* | [**twoStepAuthDisable**](docs/AuthApi.md#twoStepAuthDisable) | **POST** /v1.0/auth/2fa/disable | 2FA disable
*CoreApiV10.AuthApi* | [**twoStepAuthRecoveryCodes**](docs/AuthApi.md#twoStepAuthRecoveryCodes) | **POST** /v1.0/auth/2fa/recoverycodes | 2FA recovery codes
*CoreApiV10.AuthApi* | [**twoStepAuthRecoveryCodesNew**](docs/AuthApi.md#twoStepAuthRecoveryCodesNew) | **POST** /v1.0/auth/2fa/recoverycodes/new | 2FA generate new recovery codes
*CoreApiV10.AuthApi* | [**twoStepAuthStatus**](docs/AuthApi.md#twoStepAuthStatus) | **GET** /v1.0/auth/2fa | 2FA status
*CoreApiV10.AuthApi* | [**updateAuthToken**](docs/AuthApi.md#updateAuthToken) | **POST** /v1.0/auth/token/update | Update auth token
*CoreApiV10.AuthApi* | [**validatePhoneNumber**](docs/AuthApi.md#validatePhoneNumber) | **POST** /v1.0/auth/phone/verify | Verify phone number
*CoreApiV10.BrokersApi* | [**getBrokers**](docs/BrokersApi.md#getBrokers) | **GET** /v1.0/brokers | Get all trade servers
*CoreApiV10.FileApi* | [**get**](docs/FileApi.md#get) | **GET** /v1.0/file/{id} | Download file
*CoreApiV10.FileApi* | [**uploadDocument**](docs/FileApi.md#uploadDocument) | **POST** /v1.0/file/document/upload | Upload document
*CoreApiV10.FileApi* | [**uploadFile**](docs/FileApi.md#uploadFile) | **POST** /v1.0/file/upload | Upload file
*CoreApiV10.FundsApi* | [**addToFavorites**](docs/FundsApi.md#addToFavorites) | **POST** /v1.0/funds/{id}/favorite/add | Add to favorites
*CoreApiV10.FundsApi* | [**getAllAssets**](docs/FundsApi.md#getAllAssets) | **GET** /v1.0/funds/assets | Get all supported assets for funds
*CoreApiV10.FundsApi* | [**getFundAssets**](docs/FundsApi.md#getFundAssets) | **GET** /v1.0/funds/{id}/assets | Fund assets info
*CoreApiV10.FundsApi* | [**getFundDetails**](docs/FundsApi.md#getFundDetails) | **GET** /v1.0/funds/{id} | Funds details
*CoreApiV10.FundsApi* | [**getFundProfitChart**](docs/FundsApi.md#getFundProfitChart) | **GET** /v1.0/funds/{id}/charts/profit | Fund profit chart
*CoreApiV10.FundsApi* | [**getFunds**](docs/FundsApi.md#getFunds) | **GET** /v1.0/funds | Funds list
*CoreApiV10.FundsApi* | [**getProgramBalanceChart**](docs/FundsApi.md#getProgramBalanceChart) | **GET** /v1.0/funds/{id}/charts/balance | Fund balance chart
*CoreApiV10.FundsApi* | [**getProgramSets**](docs/FundsApi.md#getProgramSets) | **GET** /v1.0/funds/sets | Fund sets
*CoreApiV10.FundsApi* | [**removeFromFavorites**](docs/FundsApi.md#removeFromFavorites) | **POST** /v1.0/funds/{id}/favorite/remove | Remove from favorites
*CoreApiV10.InvestorApi* | [**cancelRequest**](docs/InvestorApi.md#cancelRequest) | **POST** /v1.0/investor/programs/requests/{id}/cancel | Cancel investment program/fund request
*CoreApiV10.InvestorApi* | [**cancelRequest_0**](docs/InvestorApi.md#cancelRequest_0) | **POST** /v1.0/investor/funds/requests/{id}/cancel | Cancel investment program/fund request
*CoreApiV10.InvestorApi* | [**fundInvest**](docs/InvestorApi.md#fundInvest) | **POST** /v1.0/investor/funds/{id}/invest/{amount} | Investing into the fund
*CoreApiV10.InvestorApi* | [**fundInvestInfo**](docs/InvestorApi.md#fundInvestInfo) | **GET** /v1.0/investor/funds/{id}/invest/info/{currency} | Data for investing into the fund
*CoreApiV10.InvestorApi* | [**fundWithdraw**](docs/InvestorApi.md#fundWithdraw) | **POST** /v1.0/investor/funds/{id}/withdraw/{percent} | Withdraw from fund. Percent is % of investor total money.
*CoreApiV10.InvestorApi* | [**fundWithdrawInfo**](docs/InvestorApi.md#fundWithdrawInfo) | **GET** /v1.0/investor/funds/{id}/withdraw/info/{currency} | Data for withdrawal from fund
*CoreApiV10.InvestorApi* | [**getDashboard**](docs/InvestorApi.md#getDashboard) | **GET** /v1.0/investor | Summary dashboard info
*CoreApiV10.InvestorApi* | [**getFunds**](docs/InvestorApi.md#getFunds) | **GET** /v1.0/investor/funds | Funds list
*CoreApiV10.InvestorApi* | [**getPortfolioChart**](docs/InvestorApi.md#getPortfolioChart) | **GET** /v1.0/investor/portfolio/chart | Portfolio charts
*CoreApiV10.InvestorApi* | [**getPortfolioEvents**](docs/InvestorApi.md#getPortfolioEvents) | **GET** /v1.0/investor/portfolio/events | Portfolio events
*CoreApiV10.InvestorApi* | [**getProgramRequests**](docs/InvestorApi.md#getProgramRequests) | **GET** /v1.0/investor/programs/{id}/requests/{skip}/{take} | Get program/fund requests
*CoreApiV10.InvestorApi* | [**getProgramRequests_0**](docs/InvestorApi.md#getProgramRequests_0) | **GET** /v1.0/investor/funds/{id}/requests/{skip}/{take} | Get program/fund requests
*CoreApiV10.InvestorApi* | [**getPrograms**](docs/InvestorApi.md#getPrograms) | **GET** /v1.0/investor/programs | Dashboard program list
*CoreApiV10.InvestorApi* | [**getRequests**](docs/InvestorApi.md#getRequests) | **GET** /v1.0/investor/requests/{skip}/{take} | Get all requests
*CoreApiV10.InvestorApi* | [**investInfo**](docs/InvestorApi.md#investInfo) | **GET** /v1.0/investor/programs/{id}/invest/info/{currency} | Data for investing into the program
*CoreApiV10.InvestorApi* | [**programInvest**](docs/InvestorApi.md#programInvest) | **POST** /v1.0/investor/programs/{id}/invest/{amount} | Investing into the program
*CoreApiV10.InvestorApi* | [**programWithdraw**](docs/InvestorApi.md#programWithdraw) | **POST** /v1.0/investor/programs/{id}/withdraw/{amount} | Withdraw from investment program
*CoreApiV10.InvestorApi* | [**programWithdrawInfo**](docs/InvestorApi.md#programWithdrawInfo) | **GET** /v1.0/investor/programs/{id}/withdraw/info/{currency} | Data for withdrawal from investment program
*CoreApiV10.InvestorApi* | [**reinvestOff**](docs/InvestorApi.md#reinvestOff) | **POST** /v1.0/investor/programs/{id}/reinvest/off | Disable reinvesting
*CoreApiV10.InvestorApi* | [**reinvestOn**](docs/InvestorApi.md#reinvestOn) | **POST** /v1.0/investor/programs/{id}/reinvest/on | Enable reinvesting
*CoreApiV10.KycApi* | [**kycCallback**](docs/KycApi.md#kycCallback) | **POST** /v1.0/kyc/callback | 
*CoreApiV10.ManagerApi* | [**cancelRequest**](docs/ManagerApi.md#cancelRequest) | **POST** /v1.0/manager/programs/requests/{id}/cancel | Cancel investment program/fund request
*CoreApiV10.ManagerApi* | [**cancelRequest_0**](docs/ManagerApi.md#cancelRequest_0) | **POST** /v1.0/manager/funds/requests/{id}/cancel | Cancel investment program/fund request
*CoreApiV10.ManagerApi* | [**closeCurrentPeriod**](docs/ManagerApi.md#closeCurrentPeriod) | **POST** /v1.0/manager/programs/{id}/period/close | Close current period
*CoreApiV10.ManagerApi* | [**closeInvestmentProgram**](docs/ManagerApi.md#closeInvestmentProgram) | **POST** /v1.0/manager/programs/{id}/close | Close existing investment program/fund
*CoreApiV10.ManagerApi* | [**closeInvestmentProgram_0**](docs/ManagerApi.md#closeInvestmentProgram_0) | **POST** /v1.0/manager/funds/{id}/close | Close existing investment program/fund
*CoreApiV10.ManagerApi* | [**createFund**](docs/ManagerApi.md#createFund) | **POST** /v1.0/manager/funds/create | Create fund
*CoreApiV10.ManagerApi* | [**createProgram**](docs/ManagerApi.md#createProgram) | **POST** /v1.0/manager/programs/create | Create an investment program
*CoreApiV10.ManagerApi* | [**fundInvest**](docs/ManagerApi.md#fundInvest) | **POST** /v1.0/manager/funds/{id}/invest/{amount} | Deposit
*CoreApiV10.ManagerApi* | [**fundInvestInfo**](docs/ManagerApi.md#fundInvestInfo) | **GET** /v1.0/manager/funds/{id}/invest/info/{currency} | Data for investing into the fund
*CoreApiV10.ManagerApi* | [**fundWithdraw**](docs/ManagerApi.md#fundWithdraw) | **POST** /v1.0/manager/funds/{id}/withdraw/{percent} | Withdraw from fund. Percent is % of investor total money.
*CoreApiV10.ManagerApi* | [**fundWithdrawInfo**](docs/ManagerApi.md#fundWithdrawInfo) | **GET** /v1.0/manager/funds/{id}/withdraw/info/{currency} | Data for withdrawal from fund
*CoreApiV10.ManagerApi* | [**getFundInvestment**](docs/ManagerApi.md#getFundInvestment) | **GET** /v1.0/manager/funds/investment/amount | Get GVT investment to create fund
*CoreApiV10.ManagerApi* | [**getProgramInvestment**](docs/ManagerApi.md#getProgramInvestment) | **GET** /v1.0/manager/programs/investment/amount | Get GVT investment to create program
*CoreApiV10.ManagerApi* | [**getProgramRequests**](docs/ManagerApi.md#getProgramRequests) | **GET** /v1.0/manager/programs/{id}/requests/{skip}/{take} | Get investment program/fund requests
*CoreApiV10.ManagerApi* | [**getProgramRequests_0**](docs/ManagerApi.md#getProgramRequests_0) | **GET** /v1.0/manager/funds/{id}/requests/{skip}/{take} | Get investment program/fund requests
*CoreApiV10.ManagerApi* | [**getRequests**](docs/ManagerApi.md#getRequests) | **GET** /v1.0/manager/requests/{skip}/{take} | Get all requests
*CoreApiV10.ManagerApi* | [**investInfo**](docs/ManagerApi.md#investInfo) | **GET** /v1.0/manager/programs/{id}/invest/info/{currency} | Data for investing into the program
*CoreApiV10.ManagerApi* | [**manager**](docs/ManagerApi.md#manager) | **GET** /v1.0/manager | Manager dashboard
*CoreApiV10.ManagerApi* | [**managerDetails**](docs/ManagerApi.md#managerDetails) | **GET** /v1.0/manager/{id}/details | Manager details
*CoreApiV10.ManagerApi* | [**managerEvents**](docs/ManagerApi.md#managerEvents) | **GET** /v1.0/manager/events | Manager events
*CoreApiV10.ManagerApi* | [**managerFunds**](docs/ManagerApi.md#managerFunds) | **GET** /v1.0/manager/funds | Manager funds
*CoreApiV10.ManagerApi* | [**managerProfile**](docs/ManagerApi.md#managerProfile) | **GET** /v1.0/manager/{id} | Manager profile
*CoreApiV10.ManagerApi* | [**managerPrograms**](docs/ManagerApi.md#managerPrograms) | **GET** /v1.0/manager/programs | Manager programs
*CoreApiV10.ManagerApi* | [**programInvest**](docs/ManagerApi.md#programInvest) | **POST** /v1.0/manager/programs/{id}/invest/{amount} | Deposit
*CoreApiV10.ManagerApi* | [**programWithdraw**](docs/ManagerApi.md#programWithdraw) | **POST** /v1.0/manager/programs/{id}/withdraw/{amount} | Withdraw from program
*CoreApiV10.ManagerApi* | [**programWithdrawInfo**](docs/ManagerApi.md#programWithdrawInfo) | **GET** /v1.0/manager/programs/{id}/withdraw/info/{currency} | Data for withdrawal from investment program
*CoreApiV10.ManagerApi* | [**updateInvestmentProgram**](docs/ManagerApi.md#updateInvestmentProgram) | **POST** /v1.0/manager/programs/{id}/update | Update investment program/fund details
*CoreApiV10.ManagerApi* | [**updateInvestmentProgram_0**](docs/ManagerApi.md#updateInvestmentProgram_0) | **POST** /v1.0/manager/funds/{id}/update | Update investment program/fund details
*CoreApiV10.NotificationsApi* | [**addNotificationsSettings**](docs/NotificationsApi.md#addNotificationsSettings) | **POST** /v1.0/notifications/settings/add | Add new setting
*CoreApiV10.NotificationsApi* | [**enableDisableSettings**](docs/NotificationsApi.md#enableDisableSettings) | **POST** /v1.0/notifications/settings/{id}/{enable} | Enable/disable setting
*CoreApiV10.NotificationsApi* | [**getNewNotificationsCount**](docs/NotificationsApi.md#getNewNotificationsCount) | **GET** /v1.0/notifications/new | Unread notifications count
*CoreApiV10.NotificationsApi* | [**getNotifications**](docs/NotificationsApi.md#getNotifications) | **GET** /v1.0/notifications | User notifications
*CoreApiV10.NotificationsApi* | [**getNotificationsFundSettings**](docs/NotificationsApi.md#getNotificationsFundSettings) | **GET** /v1.0/notifications/settings/funds/{id} | User settings for fund
*CoreApiV10.NotificationsApi* | [**getNotificationsManagerSettings**](docs/NotificationsApi.md#getNotificationsManagerSettings) | **GET** /v1.0/notifications/settings/managers/{id} | User settings for manager
*CoreApiV10.NotificationsApi* | [**getNotificationsProgramSettings**](docs/NotificationsApi.md#getNotificationsProgramSettings) | **GET** /v1.0/notifications/settings/programs/{id} | User settings for program
*CoreApiV10.NotificationsApi* | [**getNotificationsSettings**](docs/NotificationsApi.md#getNotificationsSettings) | **GET** /v1.0/notifications/settings | User settings
*CoreApiV10.NotificationsApi* | [**removeNotificationsSettings**](docs/NotificationsApi.md#removeNotificationsSettings) | **POST** /v1.0/notifications/settings/remove/{id} | Remove setting
*CoreApiV10.PlatformApi* | [**getPlatformStatistic**](docs/PlatformApi.md#getPlatformStatistic) | **GET** /v1.0/platform/statistic | Platform statistic
*CoreApiV10.PlatformApi* | [**getPlatformStatus**](docs/PlatformApi.md#getPlatformStatus) | **GET** /v1.0/platform/info | Platform info
*CoreApiV10.ProfileApi* | [**profileFull**](docs/ProfileApi.md#profileFull) | **GET** /v1.0/profile | Get full profile
*CoreApiV10.ProfileApi* | [**profileHeader**](docs/ProfileApi.md#profileHeader) | **GET** /v1.0/profile/header | Get header profile
*CoreApiV10.ProfileApi* | [**removeAvatar**](docs/ProfileApi.md#removeAvatar) | **POST** /v1.0/profile/avatar/remove | Remove avatar
*CoreApiV10.ProfileApi* | [**updateAvatar**](docs/ProfileApi.md#updateAvatar) | **POST** /v1.0/profile/avatar/update/{fileId} | Update avatar
*CoreApiV10.ProfileApi* | [**updatePersonalDetails**](docs/ProfileApi.md#updatePersonalDetails) | **POST** /v1.0/profile/personal/update | Update user personal details
*CoreApiV10.ProfileApi* | [**updateProfile**](docs/ProfileApi.md#updateProfile) | **POST** /v1.0/profile/update | Update profile
*CoreApiV10.ProfileApi* | [**verificationToken**](docs/ProfileApi.md#verificationToken) | **POST** /v1.0/profile/verification/token | 
*CoreApiV10.ProgramsApi* | [**addToFavorites**](docs/ProgramsApi.md#addToFavorites) | **POST** /v1.0/programs/{id}/favorite/add | Add to favorites
*CoreApiV10.ProgramsApi* | [**getProgramBalanceChart**](docs/ProgramsApi.md#getProgramBalanceChart) | **GET** /v1.0/programs/{id}/charts/balance | Program balance chart
*CoreApiV10.ProgramsApi* | [**getProgramDetails**](docs/ProgramsApi.md#getProgramDetails) | **GET** /v1.0/programs/{id} | Program details
*CoreApiV10.ProgramsApi* | [**getProgramProfitChart**](docs/ProgramsApi.md#getProgramProfitChart) | **GET** /v1.0/programs/{id}/charts/profit | Program profit chart
*CoreApiV10.ProgramsApi* | [**getProgramSets**](docs/ProgramsApi.md#getProgramSets) | **GET** /v1.0/programs/sets | Programs sets
*CoreApiV10.ProgramsApi* | [**getProgramTrades**](docs/ProgramsApi.md#getProgramTrades) | **GET** /v1.0/programs/{id}/trades | Trade history
*CoreApiV10.ProgramsApi* | [**getPrograms**](docs/ProgramsApi.md#getPrograms) | **GET** /v1.0/programs | Programs list
*CoreApiV10.ProgramsApi* | [**removeFromFavorites**](docs/ProgramsApi.md#removeFromFavorites) | **POST** /v1.0/programs/{id}/favorite/remove | Remove from favorites
*CoreApiV10.RateApi* | [**getRate**](docs/RateApi.md#getRate) | **GET** /v1.0/rate/{from}/{to} | Get rate
*CoreApiV10.RateApi* | [**getRateExchange**](docs/RateApi.md#getRateExchange) | **GET** /v1.0/rate/{exchange}/{from}/{to} | Get rate
*CoreApiV10.RateApi* | [**getRates**](docs/RateApi.md#getRates) | **GET** /v1.0/rate | Get rates
*CoreApiV10.SearchApi* | [**getPrograms**](docs/SearchApi.md#getPrograms) | **GET** /v1.0/search | Program / fund / manager search
*CoreApiV10.WalletApi* | [**cancelWithdrawalRequest**](docs/WalletApi.md#cancelWithdrawalRequest) | **POST** /v1.0/wallet/withdraw/request/cancel/{txId} | 
*CoreApiV10.WalletApi* | [**confirmWithdrawalRequestByCode**](docs/WalletApi.md#confirmWithdrawalRequestByCode) | **POST** /v1.0/wallet/withdraw/request/confirm | 
*CoreApiV10.WalletApi* | [**createWithdrawalRequest**](docs/WalletApi.md#createWithdrawalRequest) | **POST** /v1.0/wallet/withdraw/request/new | 
*CoreApiV10.WalletApi* | [**getUserAddress**](docs/WalletApi.md#getUserAddress) | **GET** /v1.0/wallet/addresses | 
*CoreApiV10.WalletApi* | [**getUserWithdrawalSummary**](docs/WalletApi.md#getUserWithdrawalSummary) | **GET** /v1.0/wallet/withdraw/info | 
*CoreApiV10.WalletApi* | [**getWalletPendingTransactions**](docs/WalletApi.md#getWalletPendingTransactions) | **GET** /v1.0/wallet/transactions/pending | Wallet pending transactions
*CoreApiV10.WalletApi* | [**getWalletSummary**](docs/WalletApi.md#getWalletSummary) | **GET** /v1.0/wallet/{currency} | Wallet summary
*CoreApiV10.WalletApi* | [**getWalletTransactions**](docs/WalletApi.md#getWalletTransactions) | **GET** /v1.0/wallet/transactions | Wallet transactions
*CoreApiV10.WalletApi* | [**resendWithdrawalRequestEmail**](docs/WalletApi.md#resendWithdrawalRequestEmail) | **POST** /v1.0/wallet/withdraw/request/resend/{txId} | 


## Documentation for Models

 - [CoreApiV10.AmountWithCurrency](docs/AmountWithCurrency.md)
 - [CoreApiV10.AndroidAppVersion](docs/AndroidAppVersion.md)
 - [CoreApiV10.AndroidVersion](docs/AndroidVersion.md)
 - [CoreApiV10.AssetSelection](docs/AssetSelection.md)
 - [CoreApiV10.AssetsValue](docs/AssetsValue.md)
 - [CoreApiV10.BalanceChartElement](docs/BalanceChartElement.md)
 - [CoreApiV10.BlockchainInfo](docs/BlockchainInfo.md)
 - [CoreApiV10.Broker](docs/Broker.md)
 - [CoreApiV10.BrokerAccountType](docs/BrokerAccountType.md)
 - [CoreApiV10.BrokersInfo](docs/BrokersInfo.md)
 - [CoreApiV10.ChangePasswordViewModel](docs/ChangePasswordViewModel.md)
 - [CoreApiV10.ChartSimple](docs/ChartSimple.md)
 - [CoreApiV10.CreateWithdrawalRequestModel](docs/CreateWithdrawalRequestModel.md)
 - [CoreApiV10.DashboardChartValue](docs/DashboardChartValue.md)
 - [CoreApiV10.DashboardPortfolioEvent](docs/DashboardPortfolioEvent.md)
 - [CoreApiV10.DashboardPortfolioEvents](docs/DashboardPortfolioEvents.md)
 - [CoreApiV10.DashboardProgramDetails](docs/DashboardProgramDetails.md)
 - [CoreApiV10.DashboardSummary](docs/DashboardSummary.md)
 - [CoreApiV10.ErrorMessage](docs/ErrorMessage.md)
 - [CoreApiV10.ErrorViewModel](docs/ErrorViewModel.md)
 - [CoreApiV10.Facet](docs/Facet.md)
 - [CoreApiV10.ForgotPasswordViewModel](docs/ForgotPasswordViewModel.md)
 - [CoreApiV10.FundAssetInfo](docs/FundAssetInfo.md)
 - [CoreApiV10.FundAssetPart](docs/FundAssetPart.md)
 - [CoreApiV10.FundAssetPartWithIcon](docs/FundAssetPartWithIcon.md)
 - [CoreApiV10.FundAssetPercent](docs/FundAssetPercent.md)
 - [CoreApiV10.FundAssetsListInfo](docs/FundAssetsListInfo.md)
 - [CoreApiV10.FundBalanceChart](docs/FundBalanceChart.md)
 - [CoreApiV10.FundDetails](docs/FundDetails.md)
 - [CoreApiV10.FundDetailsFull](docs/FundDetailsFull.md)
 - [CoreApiV10.FundDetailsListStatistic](docs/FundDetailsListStatistic.md)
 - [CoreApiV10.FundInvestInfo](docs/FundInvestInfo.md)
 - [CoreApiV10.FundNotificationSettingList](docs/FundNotificationSettingList.md)
 - [CoreApiV10.FundProfitChart](docs/FundProfitChart.md)
 - [CoreApiV10.FundStatistic](docs/FundStatistic.md)
 - [CoreApiV10.FundWithdrawInfo](docs/FundWithdrawInfo.md)
 - [CoreApiV10.FundsList](docs/FundsList.md)
 - [CoreApiV10.IOsAppVersion](docs/IOsAppVersion.md)
 - [CoreApiV10.KycCallback](docs/KycCallback.md)
 - [CoreApiV10.LoginViewModel](docs/LoginViewModel.md)
 - [CoreApiV10.ManagerDashboard](docs/ManagerDashboard.md)
 - [CoreApiV10.ManagerFundWithdrawInfo](docs/ManagerFundWithdrawInfo.md)
 - [CoreApiV10.ManagerNotificationSettingList](docs/ManagerNotificationSettingList.md)
 - [CoreApiV10.ManagerOverview](docs/ManagerOverview.md)
 - [CoreApiV10.ManagerPortfolioEvent](docs/ManagerPortfolioEvent.md)
 - [CoreApiV10.ManagerPortfolioEvents](docs/ManagerPortfolioEvents.md)
 - [CoreApiV10.ManagerProfile](docs/ManagerProfile.md)
 - [CoreApiV10.ManagerProfileDetails](docs/ManagerProfileDetails.md)
 - [CoreApiV10.ManagerProgramWithdrawInfo](docs/ManagerProgramWithdrawInfo.md)
 - [CoreApiV10.ManagersList](docs/ManagersList.md)
 - [CoreApiV10.NewFundRequest](docs/NewFundRequest.md)
 - [CoreApiV10.NewProgramRequest](docs/NewProgramRequest.md)
 - [CoreApiV10.NotificationList](docs/NotificationList.md)
 - [CoreApiV10.NotificationSettingList](docs/NotificationSettingList.md)
 - [CoreApiV10.NotificationSettingViewModel](docs/NotificationSettingViewModel.md)
 - [CoreApiV10.NotificationViewModel](docs/NotificationViewModel.md)
 - [CoreApiV10.OrderModel](docs/OrderModel.md)
 - [CoreApiV10.OtherAssetsValue](docs/OtherAssetsValue.md)
 - [CoreApiV10.PasswordModel](docs/PasswordModel.md)
 - [CoreApiV10.PeriodDate](docs/PeriodDate.md)
 - [CoreApiV10.PersonalFundDetailsFull](docs/PersonalFundDetailsFull.md)
 - [CoreApiV10.PersonalProgramDetailsFull](docs/PersonalProgramDetailsFull.md)
 - [CoreApiV10.PlatformAsset](docs/PlatformAsset.md)
 - [CoreApiV10.PlatformAssets](docs/PlatformAssets.md)
 - [CoreApiV10.PlatformCurrency](docs/PlatformCurrency.md)
 - [CoreApiV10.PlatformInfo](docs/PlatformInfo.md)
 - [CoreApiV10.PlatformStatistic](docs/PlatformStatistic.md)
 - [CoreApiV10.ProfileFullViewModel](docs/ProfileFullViewModel.md)
 - [CoreApiV10.ProfileHeaderViewModel](docs/ProfileHeaderViewModel.md)
 - [CoreApiV10.ProfilePublic](docs/ProfilePublic.md)
 - [CoreApiV10.ProgramBalanceChart](docs/ProgramBalanceChart.md)
 - [CoreApiV10.ProgramBalanceChartElement](docs/ProgramBalanceChartElement.md)
 - [CoreApiV10.ProgramDetails](docs/ProgramDetails.md)
 - [CoreApiV10.ProgramDetailsFull](docs/ProgramDetailsFull.md)
 - [CoreApiV10.ProgramDetailsListStatistic](docs/ProgramDetailsListStatistic.md)
 - [CoreApiV10.ProgramInfo](docs/ProgramInfo.md)
 - [CoreApiV10.ProgramInvestInfo](docs/ProgramInvestInfo.md)
 - [CoreApiV10.ProgramNotificationSettingList](docs/ProgramNotificationSettingList.md)
 - [CoreApiV10.ProgramProfitChart](docs/ProgramProfitChart.md)
 - [CoreApiV10.ProgramRequest](docs/ProgramRequest.md)
 - [CoreApiV10.ProgramRequests](docs/ProgramRequests.md)
 - [CoreApiV10.ProgramSets](docs/ProgramSets.md)
 - [CoreApiV10.ProgramStatistic](docs/ProgramStatistic.md)
 - [CoreApiV10.ProgramUpdate](docs/ProgramUpdate.md)
 - [CoreApiV10.ProgramWithdrawInfo](docs/ProgramWithdrawInfo.md)
 - [CoreApiV10.ProgramsInfo](docs/ProgramsInfo.md)
 - [CoreApiV10.ProgramsList](docs/ProgramsList.md)
 - [CoreApiV10.RateItem](docs/RateItem.md)
 - [CoreApiV10.RatesModel](docs/RatesModel.md)
 - [CoreApiV10.RatesModelRates](docs/RatesModelRates.md)
 - [CoreApiV10.RecoveryCode](docs/RecoveryCode.md)
 - [CoreApiV10.RecoveryCodesViewModel](docs/RecoveryCodesViewModel.md)
 - [CoreApiV10.RegisterInvestorViewModel](docs/RegisterInvestorViewModel.md)
 - [CoreApiV10.RegisterManagerViewModel](docs/RegisterManagerViewModel.md)
 - [CoreApiV10.ResendConfirmationViewModel](docs/ResendConfirmationViewModel.md)
 - [CoreApiV10.ResetPasswordViewModel](docs/ResetPasswordViewModel.md)
 - [CoreApiV10.Review](docs/Review.md)
 - [CoreApiV10.SearchViewModel](docs/SearchViewModel.md)
 - [CoreApiV10.TradesViewModel](docs/TradesViewModel.md)
 - [CoreApiV10.TwoFactorAuthenticator](docs/TwoFactorAuthenticator.md)
 - [CoreApiV10.TwoFactorAuthenticatorConfirm](docs/TwoFactorAuthenticatorConfirm.md)
 - [CoreApiV10.TwoFactorCodeModel](docs/TwoFactorCodeModel.md)
 - [CoreApiV10.TwoFactorStatus](docs/TwoFactorStatus.md)
 - [CoreApiV10.UpdatePersonalDetailViewModel](docs/UpdatePersonalDetailViewModel.md)
 - [CoreApiV10.UpdateProfileViewModel](docs/UpdateProfileViewModel.md)
 - [CoreApiV10.UploadResult](docs/UploadResult.md)
 - [CoreApiV10.ValueChartBar](docs/ValueChartBar.md)
 - [CoreApiV10.WalletInfo](docs/WalletInfo.md)
 - [CoreApiV10.WalletPendingTransaction](docs/WalletPendingTransaction.md)
 - [CoreApiV10.WalletPendingTransactionsViewModel](docs/WalletPendingTransactionsViewModel.md)
 - [CoreApiV10.WalletSummary](docs/WalletSummary.md)
 - [CoreApiV10.WalletTransaction](docs/WalletTransaction.md)
 - [CoreApiV10.WalletTransactionsViewModel](docs/WalletTransactionsViewModel.md)
 - [CoreApiV10.WalletWithdrawalInfo](docs/WalletWithdrawalInfo.md)
 - [CoreApiV10.WalletsInfo](docs/WalletsInfo.md)
 - [CoreApiV10.WithdrawalInfo](docs/WithdrawalInfo.md)
 - [CoreApiV10.WithdrawalSummary](docs/WithdrawalSummary.md)


## Documentation for Authorization

 All endpoints do not require authorization.


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

var authorization = "authorization_example"; // {String} JWT access token

var opts = { 
  'model': new CoreApiV10.TwoFactorAuthenticatorConfirm() // {TwoFactorAuthenticatorConfirm} 
};
api.v10Auth2faConfirmPost(authorization, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CoreApiV10.AuthApi* | [**v10Auth2faConfirmPost**](docs/AuthApi.md#v10Auth2faConfirmPost) | **POST** /v1.0/auth/2fa/confirm | 2FA confirm
*CoreApiV10.AuthApi* | [**v10Auth2faCreatePost**](docs/AuthApi.md#v10Auth2faCreatePost) | **POST** /v1.0/auth/2fa/create | 2FA create
*CoreApiV10.AuthApi* | [**v10Auth2faDisablePost**](docs/AuthApi.md#v10Auth2faDisablePost) | **POST** /v1.0/auth/2fa/disable | 2FA disable
*CoreApiV10.AuthApi* | [**v10Auth2faGet**](docs/AuthApi.md#v10Auth2faGet) | **GET** /v1.0/auth/2fa | 2FA status
*CoreApiV10.AuthApi* | [**v10Auth2faRecoverycodesNewPost**](docs/AuthApi.md#v10Auth2faRecoverycodesNewPost) | **POST** /v1.0/auth/2fa/recoverycodes/new | 2FA generate new recovery codes
*CoreApiV10.AuthApi* | [**v10Auth2faRecoverycodesPost**](docs/AuthApi.md#v10Auth2faRecoverycodesPost) | **POST** /v1.0/auth/2fa/recoverycodes | 2FA recovery codes
*CoreApiV10.AuthApi* | [**v10AuthPasswordChangePost**](docs/AuthApi.md#v10AuthPasswordChangePost) | **POST** /v1.0/auth/password/change | Change password
*CoreApiV10.AuthApi* | [**v10AuthPasswordForgotInvestorPost**](docs/AuthApi.md#v10AuthPasswordForgotInvestorPost) | **POST** /v1.0/auth/password/forgot/investor | Forgot password for investor
*CoreApiV10.AuthApi* | [**v10AuthPasswordForgotManagerPost**](docs/AuthApi.md#v10AuthPasswordForgotManagerPost) | **POST** /v1.0/auth/password/forgot/manager | Forgot password for manager
*CoreApiV10.AuthApi* | [**v10AuthPasswordResetPost**](docs/AuthApi.md#v10AuthPasswordResetPost) | **POST** /v1.0/auth/password/reset | Reset password
*CoreApiV10.AuthApi* | [**v10AuthPhoneCodePost**](docs/AuthApi.md#v10AuthPhoneCodePost) | **POST** /v1.0/auth/phone/code | Request phone number verification code
*CoreApiV10.AuthApi* | [**v10AuthPhoneVerifyPost**](docs/AuthApi.md#v10AuthPhoneVerifyPost) | **POST** /v1.0/auth/phone/verify | Verify phone number
*CoreApiV10.AuthApi* | [**v10AuthResendconfirmationlinkPost**](docs/AuthApi.md#v10AuthResendconfirmationlinkPost) | **POST** /v1.0/auth/resendconfirmationlink | Resend Confirmation Link
*CoreApiV10.AuthApi* | [**v10AuthSigninInvestorPost**](docs/AuthApi.md#v10AuthSigninInvestorPost) | **POST** /v1.0/auth/signin/investor | Authorize
*CoreApiV10.AuthApi* | [**v10AuthSigninManagerPost**](docs/AuthApi.md#v10AuthSigninManagerPost) | **POST** /v1.0/auth/signin/manager | Authorize
*CoreApiV10.AuthApi* | [**v10AuthSignupConfirmPost**](docs/AuthApi.md#v10AuthSignupConfirmPost) | **POST** /v1.0/auth/signup/confirm | Confirm email after registration
*CoreApiV10.AuthApi* | [**v10AuthSignupInvestorPost**](docs/AuthApi.md#v10AuthSignupInvestorPost) | **POST** /v1.0/auth/signup/investor | New investor registration
*CoreApiV10.AuthApi* | [**v10AuthSignupManagerPost**](docs/AuthApi.md#v10AuthSignupManagerPost) | **POST** /v1.0/auth/signup/manager | New manager registration
*CoreApiV10.AuthApi* | [**v10AuthTokenDevicesLogoutPost**](docs/AuthApi.md#v10AuthTokenDevicesLogoutPost) | **POST** /v1.0/auth/token/devices/logout | Logout from another devices
*CoreApiV10.AuthApi* | [**v10AuthTokenUpdatePost**](docs/AuthApi.md#v10AuthTokenUpdatePost) | **POST** /v1.0/auth/token/update | Update auth token
*CoreApiV10.BrokersApi* | [**v10BrokersGet**](docs/BrokersApi.md#v10BrokersGet) | **GET** /v1.0/brokers | Get all trade servers
*CoreApiV10.FileApi* | [**v10FileByIdGet**](docs/FileApi.md#v10FileByIdGet) | **GET** /v1.0/file/{id} | Download file
*CoreApiV10.FileApi* | [**v10FileUploadPost**](docs/FileApi.md#v10FileUploadPost) | **POST** /v1.0/file/upload | Upload file
*CoreApiV10.FundsApi* | [**v10FundsAssetsGet**](docs/FundsApi.md#v10FundsAssetsGet) | **GET** /v1.0/funds/assets | Get all supported assets for funds
*CoreApiV10.FundsApi* | [**v10FundsByIdFavoriteAddPost**](docs/FundsApi.md#v10FundsByIdFavoriteAddPost) | **POST** /v1.0/funds/{id}/favorite/add | Add to favorites
*CoreApiV10.FundsApi* | [**v10FundsByIdFavoriteRemovePost**](docs/FundsApi.md#v10FundsByIdFavoriteRemovePost) | **POST** /v1.0/funds/{id}/favorite/remove | Remove from favorites
*CoreApiV10.FundsApi* | [**v10FundsByIdGet**](docs/FundsApi.md#v10FundsByIdGet) | **GET** /v1.0/funds/{id} | Funds details
*CoreApiV10.FundsApi* | [**v10FundsByIdProfitchartGet**](docs/FundsApi.md#v10FundsByIdProfitchartGet) | **GET** /v1.0/funds/{id}/profitchart | Fund profit chart
*CoreApiV10.FundsApi* | [**v10FundsByIdRebalancingGet**](docs/FundsApi.md#v10FundsByIdRebalancingGet) | **GET** /v1.0/funds/{id}/rebalancing | Rebalancing history
*CoreApiV10.FundsApi* | [**v10FundsGet**](docs/FundsApi.md#v10FundsGet) | **GET** /v1.0/funds | Funds list
*CoreApiV10.InvestorApi* | [**v10InvestorFundsByIdInvestByAmountPost**](docs/InvestorApi.md#v10InvestorFundsByIdInvestByAmountPost) | **POST** /v1.0/investor/funds/{id}/invest/{amount} | Investing into the fund
*CoreApiV10.InvestorApi* | [**v10InvestorFundsByIdInvestInfoByCurrencyGet**](docs/InvestorApi.md#v10InvestorFundsByIdInvestInfoByCurrencyGet) | **GET** /v1.0/investor/funds/{id}/invest/info/{currency} | Data for investing into the fund
*CoreApiV10.InvestorApi* | [**v10InvestorFundsByIdRequestsBySkipByTakeGet**](docs/InvestorApi.md#v10InvestorFundsByIdRequestsBySkipByTakeGet) | **GET** /v1.0/investor/funds/{id}/requests/{skip}/{take} | Get program/fund requests
*CoreApiV10.InvestorApi* | [**v10InvestorFundsByIdWithdrawByAmountPost**](docs/InvestorApi.md#v10InvestorFundsByIdWithdrawByAmountPost) | **POST** /v1.0/investor/funds/{id}/withdraw/{amount} | Withdrawal from investment program/fund
*CoreApiV10.InvestorApi* | [**v10InvestorFundsByIdWithdrawInfoByCurrencyGet**](docs/InvestorApi.md#v10InvestorFundsByIdWithdrawInfoByCurrencyGet) | **GET** /v1.0/investor/funds/{id}/withdraw/info/{currency} | Data for withdrawal from fund
*CoreApiV10.InvestorApi* | [**v10InvestorFundsGet**](docs/InvestorApi.md#v10InvestorFundsGet) | **GET** /v1.0/investor/funds | Funds list
*CoreApiV10.InvestorApi* | [**v10InvestorFundsRequestsByIdCancelPost**](docs/InvestorApi.md#v10InvestorFundsRequestsByIdCancelPost) | **POST** /v1.0/investor/funds/requests/{id}/cancel | Cancel investment program/fund request
*CoreApiV10.InvestorApi* | [**v10InvestorGet**](docs/InvestorApi.md#v10InvestorGet) | **GET** /v1.0/investor | Summary dashboard info
*CoreApiV10.InvestorApi* | [**v10InvestorPortfolioChartGet**](docs/InvestorApi.md#v10InvestorPortfolioChartGet) | **GET** /v1.0/investor/portfolio/chart | Portfolio charts
*CoreApiV10.InvestorApi* | [**v10InvestorPortfolioEventsGet**](docs/InvestorApi.md#v10InvestorPortfolioEventsGet) | **GET** /v1.0/investor/portfolio/events | Portfolio events
*CoreApiV10.InvestorApi* | [**v10InvestorProgramsByIdInvestByAmountPost**](docs/InvestorApi.md#v10InvestorProgramsByIdInvestByAmountPost) | **POST** /v1.0/investor/programs/{id}/invest/{amount} | Investing into the program
*CoreApiV10.InvestorApi* | [**v10InvestorProgramsByIdInvestInfoByCurrencyGet**](docs/InvestorApi.md#v10InvestorProgramsByIdInvestInfoByCurrencyGet) | **GET** /v1.0/investor/programs/{id}/invest/info/{currency} | Data for investing into the program
*CoreApiV10.InvestorApi* | [**v10InvestorProgramsByIdReinvestOffPost**](docs/InvestorApi.md#v10InvestorProgramsByIdReinvestOffPost) | **POST** /v1.0/investor/programs/{id}/reinvest/off | Disable reinvesting
*CoreApiV10.InvestorApi* | [**v10InvestorProgramsByIdReinvestOnPost**](docs/InvestorApi.md#v10InvestorProgramsByIdReinvestOnPost) | **POST** /v1.0/investor/programs/{id}/reinvest/on | Enable reinvesting
*CoreApiV10.InvestorApi* | [**v10InvestorProgramsByIdRequestsBySkipByTakeGet**](docs/InvestorApi.md#v10InvestorProgramsByIdRequestsBySkipByTakeGet) | **GET** /v1.0/investor/programs/{id}/requests/{skip}/{take} | Get program/fund requests
*CoreApiV10.InvestorApi* | [**v10InvestorProgramsByIdWithdrawByAmountPost**](docs/InvestorApi.md#v10InvestorProgramsByIdWithdrawByAmountPost) | **POST** /v1.0/investor/programs/{id}/withdraw/{amount} | Withdrawal from investment program/fund
*CoreApiV10.InvestorApi* | [**v10InvestorProgramsByIdWithdrawInfoByCurrencyGet**](docs/InvestorApi.md#v10InvestorProgramsByIdWithdrawInfoByCurrencyGet) | **GET** /v1.0/investor/programs/{id}/withdraw/info/{currency} | Data for withdrawal from investment program
*CoreApiV10.InvestorApi* | [**v10InvestorProgramsGet**](docs/InvestorApi.md#v10InvestorProgramsGet) | **GET** /v1.0/investor/programs | Dashboard program list
*CoreApiV10.InvestorApi* | [**v10InvestorProgramsRequestsByIdCancelPost**](docs/InvestorApi.md#v10InvestorProgramsRequestsByIdCancelPost) | **POST** /v1.0/investor/programs/requests/{id}/cancel | Cancel investment program/fund request
*CoreApiV10.InvestorApi* | [**v10InvestorRequestsBySkipByTakeGet**](docs/InvestorApi.md#v10InvestorRequestsBySkipByTakeGet) | **GET** /v1.0/investor/requests/{skip}/{take} | Get all requests
*CoreApiV10.ManagersApi* | [**v10ManagersByIdGet**](docs/ManagersApi.md#v10ManagersByIdGet) | **GET** /v1.0/managers/{id} | Manager profile
*CoreApiV10.ManagersApi* | [**v10ManagersFundsByIdAssetsUpdatePost**](docs/ManagersApi.md#v10ManagersFundsByIdAssetsUpdatePost) | **POST** /v1.0/managers/funds/{id}/assets/update | Update fund assets parts
*CoreApiV10.ManagersApi* | [**v10ManagersFundsByIdClosePost**](docs/ManagersApi.md#v10ManagersFundsByIdClosePost) | **POST** /v1.0/managers/funds/{id}/close | Close existing investment program/fund
*CoreApiV10.ManagersApi* | [**v10ManagersFundsByIdRequestsBySkipByTakeGet**](docs/ManagersApi.md#v10ManagersFundsByIdRequestsBySkipByTakeGet) | **GET** /v1.0/managers/funds/{id}/requests/{skip}/{take} | Get investment program/fund requests
*CoreApiV10.ManagersApi* | [**v10ManagersFundsByIdUpdatePost**](docs/ManagersApi.md#v10ManagersFundsByIdUpdatePost) | **POST** /v1.0/managers/funds/{id}/update | Update investment program/fund details
*CoreApiV10.ManagersApi* | [**v10ManagersFundsCreatePost**](docs/ManagersApi.md#v10ManagersFundsCreatePost) | **POST** /v1.0/managers/funds/create | Create fund
*CoreApiV10.ManagersApi* | [**v10ManagersFundsInvestmentAmountGet**](docs/ManagersApi.md#v10ManagersFundsInvestmentAmountGet) | **GET** /v1.0/managers/funds/investment/amount | Get GVT investment to create fund
*CoreApiV10.ManagersApi* | [**v10ManagersFundsRequestsByIdCancelPost**](docs/ManagersApi.md#v10ManagersFundsRequestsByIdCancelPost) | **POST** /v1.0/managers/funds/requests/{id}/cancel | Cancel investment program/fund request
*CoreApiV10.ManagersApi* | [**v10ManagersProgramsByIdClosePost**](docs/ManagersApi.md#v10ManagersProgramsByIdClosePost) | **POST** /v1.0/managers/programs/{id}/close | Close existing investment program/fund
*CoreApiV10.ManagersApi* | [**v10ManagersProgramsByIdPeriodClosePost**](docs/ManagersApi.md#v10ManagersProgramsByIdPeriodClosePost) | **POST** /v1.0/managers/programs/{id}/period/close | Close current period
*CoreApiV10.ManagersApi* | [**v10ManagersProgramsByIdRequestsBySkipByTakeGet**](docs/ManagersApi.md#v10ManagersProgramsByIdRequestsBySkipByTakeGet) | **GET** /v1.0/managers/programs/{id}/requests/{skip}/{take} | Get investment program/fund requests
*CoreApiV10.ManagersApi* | [**v10ManagersProgramsByIdUpdatePost**](docs/ManagersApi.md#v10ManagersProgramsByIdUpdatePost) | **POST** /v1.0/managers/programs/{id}/update | Update investment program/fund details
*CoreApiV10.ManagersApi* | [**v10ManagersProgramsCreatePost**](docs/ManagersApi.md#v10ManagersProgramsCreatePost) | **POST** /v1.0/managers/programs/create | Create an investment program
*CoreApiV10.ManagersApi* | [**v10ManagersProgramsInvestmentAmountGet**](docs/ManagersApi.md#v10ManagersProgramsInvestmentAmountGet) | **GET** /v1.0/managers/programs/investment/amount | Get GVT investment to create program
*CoreApiV10.ManagersApi* | [**v10ManagersProgramsRequestsByIdCancelPost**](docs/ManagersApi.md#v10ManagersProgramsRequestsByIdCancelPost) | **POST** /v1.0/managers/programs/requests/{id}/cancel | Cancel investment program/fund request
*CoreApiV10.NotificationsApi* | [**v10NotificationsGet**](docs/NotificationsApi.md#v10NotificationsGet) | **GET** /v1.0/notifications | User notifications
*CoreApiV10.NotificationsApi* | [**v10NotificationsNewGet**](docs/NotificationsApi.md#v10NotificationsNewGet) | **GET** /v1.0/notifications/new | Unread notifications count
*CoreApiV10.NotificationsApi* | [**v10NotificationsSettingsAddPost**](docs/NotificationsApi.md#v10NotificationsSettingsAddPost) | **POST** /v1.0/notifications/settings/add | Add new setting
*CoreApiV10.NotificationsApi* | [**v10NotificationsSettingsGet**](docs/NotificationsApi.md#v10NotificationsSettingsGet) | **GET** /v1.0/notifications/settings | User settings
*CoreApiV10.NotificationsApi* | [**v10NotificationsSettingsRemoveByIdPost**](docs/NotificationsApi.md#v10NotificationsSettingsRemoveByIdPost) | **POST** /v1.0/notifications/settings/remove/{id} | Remove setting
*CoreApiV10.PlatformApi* | [**v10PlatformInfoGet**](docs/PlatformApi.md#v10PlatformInfoGet) | **GET** /v1.0/platform/info | Platform info
*CoreApiV10.ProfileApi* | [**v10ProfileGet**](docs/ProfileApi.md#v10ProfileGet) | **GET** /v1.0/profile | Get full profile
*CoreApiV10.ProfileApi* | [**v10ProfileHeaderGet**](docs/ProfileApi.md#v10ProfileHeaderGet) | **GET** /v1.0/profile/header | Get header profile
*CoreApiV10.ProfileApi* | [**v10ProfileUpdatePost**](docs/ProfileApi.md#v10ProfileUpdatePost) | **POST** /v1.0/profile/update | Update profile
*CoreApiV10.ProgramsApi* | [**v10ProgramsByIdChartsProfitGet**](docs/ProgramsApi.md#v10ProgramsByIdChartsProfitGet) | **GET** /v1.0/programs/{id}/charts/profit | Program profit chart
*CoreApiV10.ProgramsApi* | [**v10ProgramsByIdFavoriteAddPost**](docs/ProgramsApi.md#v10ProgramsByIdFavoriteAddPost) | **POST** /v1.0/programs/{id}/favorite/add | Add to favorites
*CoreApiV10.ProgramsApi* | [**v10ProgramsByIdFavoriteRemovePost**](docs/ProgramsApi.md#v10ProgramsByIdFavoriteRemovePost) | **POST** /v1.0/programs/{id}/favorite/remove | Remove from favorites
*CoreApiV10.ProgramsApi* | [**v10ProgramsByIdGet**](docs/ProgramsApi.md#v10ProgramsByIdGet) | **GET** /v1.0/programs/{id} | Program details
*CoreApiV10.ProgramsApi* | [**v10ProgramsByIdTradesGet**](docs/ProgramsApi.md#v10ProgramsByIdTradesGet) | **GET** /v1.0/programs/{id}/trades | Trade history
*CoreApiV10.ProgramsApi* | [**v10ProgramsGet**](docs/ProgramsApi.md#v10ProgramsGet) | **GET** /v1.0/programs | Programs list
*CoreApiV10.ProgramsApi* | [**v10ProgramsSetsGet**](docs/ProgramsApi.md#v10ProgramsSetsGet) | **GET** /v1.0/programs/sets | Programs sets
*CoreApiV10.RateApi* | [**v10RateByFromByToGet**](docs/RateApi.md#v10RateByFromByToGet) | **GET** /v1.0/rate/{from}/{to} | Get rate
*CoreApiV10.RateApi* | [**v10RateGet**](docs/RateApi.md#v10RateGet) | **GET** /v1.0/rate | Get rates
*CoreApiV10.WalletApi* | [**v10WalletAddressesGet**](docs/WalletApi.md#v10WalletAddressesGet) | **GET** /v1.0/wallet/addresses | 
*CoreApiV10.WalletApi* | [**v10WalletByCurrencyGet**](docs/WalletApi.md#v10WalletByCurrencyGet) | **GET** /v1.0/wallet/{currency} | Wallet summary
*CoreApiV10.WalletApi* | [**v10WalletTransactionsGet**](docs/WalletApi.md#v10WalletTransactionsGet) | **GET** /v1.0/wallet/transactions | Wallet transactions
*CoreApiV10.WalletApi* | [**v10WalletWithdrawInfoGet**](docs/WalletApi.md#v10WalletWithdrawInfoGet) | **GET** /v1.0/wallet/withdraw/info | 
*CoreApiV10.WalletApi* | [**v10WalletWithdrawRequestCancelByTxIdPost**](docs/WalletApi.md#v10WalletWithdrawRequestCancelByTxIdPost) | **POST** /v1.0/wallet/withdraw/request/cancel/{txId} | 
*CoreApiV10.WalletApi* | [**v10WalletWithdrawRequestConfirmPost**](docs/WalletApi.md#v10WalletWithdrawRequestConfirmPost) | **POST** /v1.0/wallet/withdraw/request/confirm | 
*CoreApiV10.WalletApi* | [**v10WalletWithdrawRequestNewPost**](docs/WalletApi.md#v10WalletWithdrawRequestNewPost) | **POST** /v1.0/wallet/withdraw/request/new | 
*CoreApiV10.WalletApi* | [**v10WalletWithdrawRequestResendByTxIdPost**](docs/WalletApi.md#v10WalletWithdrawRequestResendByTxIdPost) | **POST** /v1.0/wallet/withdraw/request/resend/{txId} | 


## Documentation for Models

 - [CoreApiV10.AmountWithCurrency](docs/AmountWithCurrency.md)
 - [CoreApiV10.AndroidAppVersion](docs/AndroidAppVersion.md)
 - [CoreApiV10.AndroidVersion](docs/AndroidVersion.md)
 - [CoreApiV10.AssetsPartsChangeRequest](docs/AssetsPartsChangeRequest.md)
 - [CoreApiV10.AssetsValue](docs/AssetsValue.md)
 - [CoreApiV10.Broker](docs/Broker.md)
 - [CoreApiV10.BrokerAccountType](docs/BrokerAccountType.md)
 - [CoreApiV10.BrokersInfo](docs/BrokersInfo.md)
 - [CoreApiV10.ChangePasswordViewModel](docs/ChangePasswordViewModel.md)
 - [CoreApiV10.ChartProgramDetails](docs/ChartProgramDetails.md)
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
 - [CoreApiV10.FundAssetPartDetails](docs/FundAssetPartDetails.md)
 - [CoreApiV10.FundAssetPartWithIcon](docs/FundAssetPartWithIcon.md)
 - [CoreApiV10.FundAssetPercent](docs/FundAssetPercent.md)
 - [CoreApiV10.FundChart](docs/FundChart.md)
 - [CoreApiV10.FundDetails](docs/FundDetails.md)
 - [CoreApiV10.FundDetailsFull](docs/FundDetailsFull.md)
 - [CoreApiV10.FundDetailsListStatistic](docs/FundDetailsListStatistic.md)
 - [CoreApiV10.FundInvestInfo](docs/FundInvestInfo.md)
 - [CoreApiV10.FundStatistic](docs/FundStatistic.md)
 - [CoreApiV10.FundWithdrawInfo](docs/FundWithdrawInfo.md)
 - [CoreApiV10.FundsList](docs/FundsList.md)
 - [CoreApiV10.IOsAppVersion](docs/IOsAppVersion.md)
 - [CoreApiV10.LoginViewModel](docs/LoginViewModel.md)
 - [CoreApiV10.ManagerNotificationSettingList](docs/ManagerNotificationSettingList.md)
 - [CoreApiV10.ManagerProfile](docs/ManagerProfile.md)
 - [CoreApiV10.NewFundRequest](docs/NewFundRequest.md)
 - [CoreApiV10.NewProgramRequest](docs/NewProgramRequest.md)
 - [CoreApiV10.NotificationList](docs/NotificationList.md)
 - [CoreApiV10.NotificationSettingList](docs/NotificationSettingList.md)
 - [CoreApiV10.NotificationSettingViewModel](docs/NotificationSettingViewModel.md)
 - [CoreApiV10.NotificationViewModel](docs/NotificationViewModel.md)
 - [CoreApiV10.OefAssetPart](docs/OefAssetPart.md)
 - [CoreApiV10.OrderModel](docs/OrderModel.md)
 - [CoreApiV10.PasswordModel](docs/PasswordModel.md)
 - [CoreApiV10.PersonalFundDetailsFull](docs/PersonalFundDetailsFull.md)
 - [CoreApiV10.PersonalProgramDetailsFull](docs/PersonalProgramDetailsFull.md)
 - [CoreApiV10.PersonalProgramDetailsList](docs/PersonalProgramDetailsList.md)
 - [CoreApiV10.PlatformAsset](docs/PlatformAsset.md)
 - [CoreApiV10.PlatformAssets](docs/PlatformAssets.md)
 - [CoreApiV10.PlatformInfo](docs/PlatformInfo.md)
 - [CoreApiV10.ProfileFullViewModel](docs/ProfileFullViewModel.md)
 - [CoreApiV10.ProfileHeaderViewModel](docs/ProfileHeaderViewModel.md)
 - [CoreApiV10.ProfilePublic](docs/ProfilePublic.md)
 - [CoreApiV10.ProgramChart](docs/ProgramChart.md)
 - [CoreApiV10.ProgramDetails](docs/ProgramDetails.md)
 - [CoreApiV10.ProgramDetailsFull](docs/ProgramDetailsFull.md)
 - [CoreApiV10.ProgramDetailsListStatistic](docs/ProgramDetailsListStatistic.md)
 - [CoreApiV10.ProgramInvestInfo](docs/ProgramInvestInfo.md)
 - [CoreApiV10.ProgramNotificationSettingList](docs/ProgramNotificationSettingList.md)
 - [CoreApiV10.ProgramRequest](docs/ProgramRequest.md)
 - [CoreApiV10.ProgramRequests](docs/ProgramRequests.md)
 - [CoreApiV10.ProgramSets](docs/ProgramSets.md)
 - [CoreApiV10.ProgramStatistic](docs/ProgramStatistic.md)
 - [CoreApiV10.ProgramUpdate](docs/ProgramUpdate.md)
 - [CoreApiV10.ProgramWithdrawInfo](docs/ProgramWithdrawInfo.md)
 - [CoreApiV10.ProgramsList](docs/ProgramsList.md)
 - [CoreApiV10.RateItem](docs/RateItem.md)
 - [CoreApiV10.RatesModel](docs/RatesModel.md)
 - [CoreApiV10.RatesModelRates](docs/RatesModelRates.md)
 - [CoreApiV10.RebalancesViewModel](docs/RebalancesViewModel.md)
 - [CoreApiV10.RebalancingModel](docs/RebalancingModel.md)
 - [CoreApiV10.RecoveryCode](docs/RecoveryCode.md)
 - [CoreApiV10.RecoveryCodesViewModel](docs/RecoveryCodesViewModel.md)
 - [CoreApiV10.RegisterInvestorViewModel](docs/RegisterInvestorViewModel.md)
 - [CoreApiV10.RegisterManagerViewModel](docs/RegisterManagerViewModel.md)
 - [CoreApiV10.ResendConfirmationViewModel](docs/ResendConfirmationViewModel.md)
 - [CoreApiV10.ResetPasswordViewModel](docs/ResetPasswordViewModel.md)
 - [CoreApiV10.StatisticProgramDetails](docs/StatisticProgramDetails.md)
 - [CoreApiV10.TradesViewModel](docs/TradesViewModel.md)
 - [CoreApiV10.TwoFactorAuthenticator](docs/TwoFactorAuthenticator.md)
 - [CoreApiV10.TwoFactorAuthenticatorConfirm](docs/TwoFactorAuthenticatorConfirm.md)
 - [CoreApiV10.TwoFactorCodeModel](docs/TwoFactorCodeModel.md)
 - [CoreApiV10.TwoFactorStatus](docs/TwoFactorStatus.md)
 - [CoreApiV10.UpdateProfileViewModel](docs/UpdateProfileViewModel.md)
 - [CoreApiV10.UploadResult](docs/UploadResult.md)
 - [CoreApiV10.ValueChartBar](docs/ValueChartBar.md)
 - [CoreApiV10.WalletInfo](docs/WalletInfo.md)
 - [CoreApiV10.WalletSummary](docs/WalletSummary.md)
 - [CoreApiV10.WalletTransaction](docs/WalletTransaction.md)
 - [CoreApiV10.WalletTransactionsViewModel](docs/WalletTransactionsViewModel.md)
 - [CoreApiV10.WalletWithdrawalInfo](docs/WalletWithdrawalInfo.md)
 - [CoreApiV10.WalletsInfo](docs/WalletsInfo.md)
 - [CoreApiV10.WithdrawalSummary](docs/WithdrawalSummary.md)


## Documentation for Authorization

 All endpoints do not require authorization.


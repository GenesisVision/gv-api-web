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
api.authorize(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://localhost/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CoreApiV10.AuthApi* | [**authorize**](docs/AuthApi.md#authorize) | **POST** /v1.0/auth/signin | Authorize
*CoreApiV10.AuthApi* | [**changePassword**](docs/AuthApi.md#changePassword) | **POST** /v1.0/auth/password/change | Change password
*CoreApiV10.AuthApi* | [**confirmEmail**](docs/AuthApi.md#confirmEmail) | **POST** /v1.0/auth/signup/confirm | Confirm email after registration
*CoreApiV10.AuthApi* | [**confirmTwoStepAuth**](docs/AuthApi.md#confirmTwoStepAuth) | **POST** /v1.0/auth/2fa/confirm | 2FA confirm
*CoreApiV10.AuthApi* | [**createTwoStepAuth**](docs/AuthApi.md#createTwoStepAuth) | **POST** /v1.0/auth/2fa/create | 2FA create
*CoreApiV10.AuthApi* | [**createTwoStepAuthRecoveryCodes**](docs/AuthApi.md#createTwoStepAuthRecoveryCodes) | **POST** /v1.0/auth/2fa/recoverycodes/new | 2FA generate new recovery codes
*CoreApiV10.AuthApi* | [**disableTwoStepAuth**](docs/AuthApi.md#disableTwoStepAuth) | **POST** /v1.0/auth/2fa/disable | 2FA disable
*CoreApiV10.AuthApi* | [**forgotPassword**](docs/AuthApi.md#forgotPassword) | **POST** /v1.0/auth/password/forgot | Forgot password for investor
*CoreApiV10.AuthApi* | [**getTwoStepAuthRecoveryCodes**](docs/AuthApi.md#getTwoStepAuthRecoveryCodes) | **POST** /v1.0/auth/2fa/recoverycodes | 2FA recovery codes
*CoreApiV10.AuthApi* | [**getTwoStepAuthStatus**](docs/AuthApi.md#getTwoStepAuthStatus) | **GET** /v1.0/auth/2fa | 2FA status
*CoreApiV10.AuthApi* | [**logoutFromAnotherDevices**](docs/AuthApi.md#logoutFromAnotherDevices) | **POST** /v1.0/auth/token/devices/logout | Logout from another devices
*CoreApiV10.AuthApi* | [**register**](docs/AuthApi.md#register) | **POST** /v1.0/auth/signup | New registration
*CoreApiV10.AuthApi* | [**requestPhoneNumberVerificationCode**](docs/AuthApi.md#requestPhoneNumberVerificationCode) | **POST** /v1.0/auth/phone/code | Get phone number verification code
*CoreApiV10.AuthApi* | [**resendConfirmationLink**](docs/AuthApi.md#resendConfirmationLink) | **POST** /v1.0/auth/resendconfirmationlink | Resend Confirmation Link
*CoreApiV10.AuthApi* | [**resetPassword**](docs/AuthApi.md#resetPassword) | **POST** /v1.0/auth/password/reset | Reset password
*CoreApiV10.AuthApi* | [**updateAuthToken**](docs/AuthApi.md#updateAuthToken) | **POST** /v1.0/auth/token/update | Update auth token
*CoreApiV10.AuthApi* | [**validatePhoneNumber**](docs/AuthApi.md#validatePhoneNumber) | **POST** /v1.0/auth/phone/verify | Verify phone number
*CoreApiV10.BrokersApi* | [**getBrokers**](docs/BrokersApi.md#getBrokers) | **GET** /v1.0/brokers | Get all trade servers
*CoreApiV10.BrokersApi* | [**getBrokersForProgram**](docs/BrokersApi.md#getBrokersForProgram) | **GET** /v1.0/brokers/{programId} | Get trade servers for program
*CoreApiV10.FileApi* | [**getFile**](docs/FileApi.md#getFile) | **GET** /v1.0/file/{id} | Download file
*CoreApiV10.FileApi* | [**uploadFile**](docs/FileApi.md#uploadFile) | **POST** /v1.0/file/upload | Upload file
*CoreApiV10.FundsApi* | [**addToFavorites**](docs/FundsApi.md#addToFavorites) | **POST** /v1.0/funds/{id}/favorite/add | Add to favorites
*CoreApiV10.FundsApi* | [**getAllAssets**](docs/FundsApi.md#getAllAssets) | **GET** /v1.0/funds/assets | Get all supported assets for funds
*CoreApiV10.FundsApi* | [**getFundAssets**](docs/FundsApi.md#getFundAssets) | **GET** /v1.0/funds/{id}/assets | Fund assets info
*CoreApiV10.FundsApi* | [**getFundBalanceChart**](docs/FundsApi.md#getFundBalanceChart) | **GET** /v1.0/funds/{id}/charts/balance | Fund balance chart
*CoreApiV10.FundsApi* | [**getFundDetails**](docs/FundsApi.md#getFundDetails) | **GET** /v1.0/funds/{id} | Funds details
*CoreApiV10.FundsApi* | [**getFundProfitChart**](docs/FundsApi.md#getFundProfitChart) | **GET** /v1.0/funds/{id}/charts/profit | Fund profit chart
*CoreApiV10.FundsApi* | [**getFunds**](docs/FundsApi.md#getFunds) | **GET** /v1.0/funds | Funds list
*CoreApiV10.FundsApi* | [**getProgramSets**](docs/FundsApi.md#getProgramSets) | **GET** /v1.0/funds/sets | Fund sets
*CoreApiV10.FundsApi* | [**getReallocationsHistory**](docs/FundsApi.md#getReallocationsHistory) | **GET** /v1.0/funds/{id}/reallocations | Get history of asset part update requests.
*CoreApiV10.FundsApi* | [**removeFromFavorites**](docs/FundsApi.md#removeFromFavorites) | **POST** /v1.0/funds/{id}/favorite/remove | Remove from favorites
*CoreApiV10.InvestorApi* | [**cancelRequest**](docs/InvestorApi.md#cancelRequest) | **POST** /v1.0/investor/programs/requests/{id}/cancel | Cancel investment program request
*CoreApiV10.InvestorApi* | [**getDashboard**](docs/InvestorApi.md#getDashboard) | **GET** /v1.0/investor | Summary dashboard info
*CoreApiV10.InvestorApi* | [**getEvents**](docs/InvestorApi.md#getEvents) | **GET** /v1.0/investor/investments/events | Events
*CoreApiV10.InvestorApi* | [**getFundInvestInfo**](docs/InvestorApi.md#getFundInvestInfo) | **GET** /v1.0/investor/funds/{id}/invest/info/{currency} | Data for investing into the fund
*CoreApiV10.InvestorApi* | [**getFundWithdrawInfo**](docs/InvestorApi.md#getFundWithdrawInfo) | **GET** /v1.0/investor/funds/{id}/withdraw/info/{currency} | Data for withdrawal from fund
*CoreApiV10.InvestorApi* | [**getFunds**](docs/InvestorApi.md#getFunds) | **GET** /v1.0/investor/funds | Dashboard funds list
*CoreApiV10.InvestorApi* | [**getPortfolioChart**](docs/InvestorApi.md#getPortfolioChart) | **GET** /v1.0/investor/portfolio/chart | Portfolio charts
*CoreApiV10.InvestorApi* | [**getProgramInvestInfo**](docs/InvestorApi.md#getProgramInvestInfo) | **GET** /v1.0/investor/programs/{id}/invest/info/{currency} | Data for investing into the program
*CoreApiV10.InvestorApi* | [**getProgramRequests**](docs/InvestorApi.md#getProgramRequests) | **GET** /v1.0/investor/programs/{id}/requests/{skip}/{take} | Get program/fund requests
*CoreApiV10.InvestorApi* | [**getProgramRequests_0**](docs/InvestorApi.md#getProgramRequests_0) | **GET** /v1.0/investor/funds/{id}/requests/{skip}/{take} | Get program/fund requests
*CoreApiV10.InvestorApi* | [**getProgramWithdrawInfo**](docs/InvestorApi.md#getProgramWithdrawInfo) | **GET** /v1.0/investor/programs/{id}/withdraw/info/{currency} | Data for withdrawal from investment program
*CoreApiV10.InvestorApi* | [**getPrograms**](docs/InvestorApi.md#getPrograms) | **GET** /v1.0/investor/programs | Dashboard program list
*CoreApiV10.InvestorApi* | [**getRequests**](docs/InvestorApi.md#getRequests) | **GET** /v1.0/investor/requests/{skip}/{take} | Get all requests
*CoreApiV10.InvestorApi* | [**getSignalPrograms**](docs/InvestorApi.md#getSignalPrograms) | **GET** /v1.0/investor/signals | Dashboard signal providers list
*CoreApiV10.InvestorApi* | [**investIntoFund**](docs/InvestorApi.md#investIntoFund) | **POST** /v1.0/investor/funds/{id}/invest/{amount} | Investing into the fund.  Invest in GVT if currency is empty
*CoreApiV10.InvestorApi* | [**investIntoProgram**](docs/InvestorApi.md#investIntoProgram) | **POST** /v1.0/investor/programs/{id}/invest/{amount} | Investing into the program.  Invest in GVT if currency is empty
*CoreApiV10.InvestorApi* | [**switchReinvestOff**](docs/InvestorApi.md#switchReinvestOff) | **POST** /v1.0/investor/programs/{id}/reinvest/off | Disable reinvesting
*CoreApiV10.InvestorApi* | [**switchReinvestOn**](docs/InvestorApi.md#switchReinvestOn) | **POST** /v1.0/investor/programs/{id}/reinvest/on | Enable reinvesting
*CoreApiV10.InvestorApi* | [**withdrawFromFund**](docs/InvestorApi.md#withdrawFromFund) | **POST** /v1.0/investor/funds/{id}/withdraw/{percent} | Withdraw from fund. Percent is % of investor total money.  Withdraw in GVT if currency is empty
*CoreApiV10.InvestorApi* | [**withdrawFromProgram**](docs/InvestorApi.md#withdrawFromProgram) | **POST** /v1.0/investor/programs/{id}/withdraw/multi | Withdraw from investment program in program currency
*CoreApiV10.InvestorApi* | [**withdrawFromProgram_0**](docs/InvestorApi.md#withdrawFromProgram_0) | **POST** /v1.0/investor/programs/{id}/withdraw/multi/{amount} | Withdraw from investment program in program currency
*CoreApiV10.ManagerApi* | [**cancelChangeBroker**](docs/ManagerApi.md#cancelChangeBroker) | **POST** /v1.0/manager/programs/broker/change/cancel | Cancel changing broker in existing program
*CoreApiV10.ManagerApi* | [**cancelRequest**](docs/ManagerApi.md#cancelRequest) | **POST** /v1.0/manager/programs/requests/{id}/cancel | Cancel investment program/fund request
*CoreApiV10.ManagerApi* | [**cancelRequest_0**](docs/ManagerApi.md#cancelRequest_0) | **POST** /v1.0/manager/funds/requests/{id}/cancel | Cancel investment program/fund request
*CoreApiV10.ManagerApi* | [**changeBroker**](docs/ManagerApi.md#changeBroker) | **POST** /v1.0/manager/programs/broker/change | Change broker in existing program
*CoreApiV10.ManagerApi* | [**changeProgramPassword**](docs/ManagerApi.md#changeProgramPassword) | **POST** /v1.0/manager/programs/{id}/password/change | Change program password
*CoreApiV10.ManagerApi* | [**closeCurrentPeriod**](docs/ManagerApi.md#closeCurrentPeriod) | **POST** /v1.0/manager/programs/{id}/period/close | Close current period
*CoreApiV10.ManagerApi* | [**closeFund**](docs/ManagerApi.md#closeFund) | **POST** /v1.0/manager/funds/{id}/close | Close existing fund
*CoreApiV10.ManagerApi* | [**closeInvestmentProgram**](docs/ManagerApi.md#closeInvestmentProgram) | **POST** /v1.0/manager/programs/{id}/close | Close existing investment program
*CoreApiV10.ManagerApi* | [**confirmProgram2FA**](docs/ManagerApi.md#confirmProgram2FA) | **POST** /v1.0/manager/programs/2fa/confirm | Confirm 2FA for program if required (for brokers like Huobi)
*CoreApiV10.ManagerApi* | [**createFund**](docs/ManagerApi.md#createFund) | **POST** /v1.0/manager/funds/create | Create fund
*CoreApiV10.ManagerApi* | [**createProgram**](docs/ManagerApi.md#createProgram) | **POST** /v1.0/manager/programs/create | Create an investment program
*CoreApiV10.ManagerApi* | [**getEvents**](docs/ManagerApi.md#getEvents) | **GET** /v1.0/manager/investments/events | Events
*CoreApiV10.ManagerApi* | [**getFundInvestInfo**](docs/ManagerApi.md#getFundInvestInfo) | **GET** /v1.0/manager/funds/{id}/invest/info/{currency} | Data for investing into the fund
*CoreApiV10.ManagerApi* | [**getFundInvestment**](docs/ManagerApi.md#getFundInvestment) | **GET** /v1.0/manager/funds/investment/amount | Get GVT investment to create fund
*CoreApiV10.ManagerApi* | [**getFundWithdrawInfo**](docs/ManagerApi.md#getFundWithdrawInfo) | **GET** /v1.0/manager/funds/{id}/withdraw/info/{currency} | Data for withdrawal from fund
*CoreApiV10.ManagerApi* | [**getLevelsCalculator**](docs/ManagerApi.md#getLevelsCalculator) | **GET** /v1.0/manager/programs/{id}/levels/info | Get program data for levels calculator
*CoreApiV10.ManagerApi* | [**getManagerAssets**](docs/ManagerApi.md#getManagerAssets) | **GET** /v1.0/manager/assets | Manager assets list
*CoreApiV10.ManagerApi* | [**getManagerDetails**](docs/ManagerApi.md#getManagerDetails) | **GET** /v1.0/manager/{id}/details | Manager details
*CoreApiV10.ManagerApi* | [**getManagerFunds**](docs/ManagerApi.md#getManagerFunds) | **GET** /v1.0/manager/funds | Manager funds
*CoreApiV10.ManagerApi* | [**getManagerProfile**](docs/ManagerApi.md#getManagerProfile) | **GET** /v1.0/manager/{id} | Manager profile
*CoreApiV10.ManagerApi* | [**getManagerPrograms**](docs/ManagerApi.md#getManagerPrograms) | **GET** /v1.0/manager/programs | Manager programs
*CoreApiV10.ManagerApi* | [**getProgram2FA**](docs/ManagerApi.md#getProgram2FA) | **GET** /v1.0/manager/programs/2fa/get | Get 2FA for program if needed
*CoreApiV10.ManagerApi* | [**getProgramInvestInfo**](docs/ManagerApi.md#getProgramInvestInfo) | **GET** /v1.0/manager/programs/{id}/invest/info/{currency} | Data for investing into the program
*CoreApiV10.ManagerApi* | [**getProgramInvestment**](docs/ManagerApi.md#getProgramInvestment) | **GET** /v1.0/manager/programs/investment/amount | Get investment amount to create program
*CoreApiV10.ManagerApi* | [**getProgramRequests**](docs/ManagerApi.md#getProgramRequests) | **GET** /v1.0/manager/programs/{id}/requests/{skip}/{take} | Get investment program/fund requests
*CoreApiV10.ManagerApi* | [**getProgramRequests_0**](docs/ManagerApi.md#getProgramRequests_0) | **GET** /v1.0/manager/funds/{id}/requests/{skip}/{take} | Get investment program/fund requests
*CoreApiV10.ManagerApi* | [**getProgramWithdrawInfo**](docs/ManagerApi.md#getProgramWithdrawInfo) | **GET** /v1.0/manager/programs/{id}/withdraw/info/{currency} | Data for withdrawal from investment program
*CoreApiV10.ManagerApi* | [**getRequests**](docs/ManagerApi.md#getRequests) | **GET** /v1.0/manager/requests/{skip}/{take} | Get all requests
*CoreApiV10.ManagerApi* | [**investIntoFund**](docs/ManagerApi.md#investIntoFund) | **POST** /v1.0/manager/funds/{id}/invest/{amount} | Deposit.  Invest in GVT if currency is empty
*CoreApiV10.ManagerApi* | [**investIntoProgram**](docs/ManagerApi.md#investIntoProgram) | **POST** /v1.0/manager/programs/{id}/invest/{amount} | Deposit  Invest in GVT if currency is empty
*CoreApiV10.ManagerApi* | [**updateFundAssets**](docs/ManagerApi.md#updateFundAssets) | **POST** /v1.0/manager/funds/{id}/assets/update | Update fund assets parts
*CoreApiV10.ManagerApi* | [**updateInvestmentProgram**](docs/ManagerApi.md#updateInvestmentProgram) | **POST** /v1.0/manager/programs/{id}/update | Update investment program/fund details
*CoreApiV10.ManagerApi* | [**updateInvestmentProgram_0**](docs/ManagerApi.md#updateInvestmentProgram_0) | **POST** /v1.0/manager/funds/{id}/update | Update investment program/fund details
*CoreApiV10.ManagerApi* | [**updateProgramSignalSettings**](docs/ManagerApi.md#updateProgramSignalSettings) | **POST** /v1.0/manager/signal/create | Make manager&#39;s program signal provider
*CoreApiV10.ManagerApi* | [**updateProgramSignalSettings_0**](docs/ManagerApi.md#updateProgramSignalSettings_0) | **POST** /v1.0/manager/signal/edit | Make manager&#39;s program signal provider
*CoreApiV10.ManagerApi* | [**withdrawFromFund**](docs/ManagerApi.md#withdrawFromFund) | **POST** /v1.0/manager/funds/{id}/withdraw/{percent} | Withdraw from fund. Percent is % of manager total money.  Withdraw in GVT if currency is empty
*CoreApiV10.ManagerApi* | [**withdrawFromProgram**](docs/ManagerApi.md#withdrawFromProgram) | **POST** /v1.0/manager/programs/{id}/withdraw/multi/{amount} | Withdraw from investment program in program currency
*CoreApiV10.NotificationsApi* | [**addNotificationsSettings**](docs/NotificationsApi.md#addNotificationsSettings) | **POST** /v1.0/notifications/settings/add | Add new setting
*CoreApiV10.NotificationsApi* | [**getNewNotificationsCount**](docs/NotificationsApi.md#getNewNotificationsCount) | **GET** /v1.0/notifications/new | Unread notifications count
*CoreApiV10.NotificationsApi* | [**getNotifications**](docs/NotificationsApi.md#getNotifications) | **GET** /v1.0/notifications | User notifications
*CoreApiV10.NotificationsApi* | [**getNotificationsFundSettings**](docs/NotificationsApi.md#getNotificationsFundSettings) | **GET** /v1.0/notifications/settings/funds/{id} | User settings for fund
*CoreApiV10.NotificationsApi* | [**getNotificationsManagerSettings**](docs/NotificationsApi.md#getNotificationsManagerSettings) | **GET** /v1.0/notifications/settings/managers/{id} | User settings for manager
*CoreApiV10.NotificationsApi* | [**getNotificationsProgramSettings**](docs/NotificationsApi.md#getNotificationsProgramSettings) | **GET** /v1.0/notifications/settings/programs/{id} | User settings for program
*CoreApiV10.NotificationsApi* | [**getNotificationsSettings**](docs/NotificationsApi.md#getNotificationsSettings) | **GET** /v1.0/notifications/settings | User settings
*CoreApiV10.NotificationsApi* | [**readNotification**](docs/NotificationsApi.md#readNotification) | **POST** /v1.0/notifications/{id}/read | Read notification
*CoreApiV10.NotificationsApi* | [**removeNotificationsSettings**](docs/NotificationsApi.md#removeNotificationsSettings) | **POST** /v1.0/notifications/settings/remove/{id} | Remove setting
*CoreApiV10.NotificationsApi* | [**toggleNotificationSettings**](docs/NotificationsApi.md#toggleNotificationSettings) | **POST** /v1.0/notifications/settings/{id}/{enable} | Enable/disable setting
*CoreApiV10.PlatformApi* | [**getCaptchaModel**](docs/PlatformApi.md#getCaptchaModel) | **GET** /v1.0/platform/riskcontrol | Platform captcha details
*CoreApiV10.PlatformApi* | [**getLevelsParams**](docs/PlatformApi.md#getLevelsParams) | **GET** /v1.0/platform/levels/parameters | Investment programs levels parameters
*CoreApiV10.PlatformApi* | [**getPlatformDate**](docs/PlatformApi.md#getPlatformDate) | **POST** /v1.0/platform/date | Server date
*CoreApiV10.PlatformApi* | [**getPlatformStatistic**](docs/PlatformApi.md#getPlatformStatistic) | **GET** /v1.0/platform/statistic | Platform statistic
*CoreApiV10.PlatformApi* | [**getPlatformStatus**](docs/PlatformApi.md#getPlatformStatus) | **GET** /v1.0/platform/info | Platform info
*CoreApiV10.PlatformApi* | [**getProgramsLevels**](docs/PlatformApi.md#getProgramsLevels) | **GET** /v1.0/platform/levels | Investment programs levels
*CoreApiV10.ProfileApi* | [**addExternalKey**](docs/ProfileApi.md#addExternalKey) | **POST** /v1.0/profile/keys/add | Add external exchange key
*CoreApiV10.ProfileApi* | [**deleteExternalKey**](docs/ProfileApi.md#deleteExternalKey) | **POST** /v1.0/profile/keys/delete | Delete external exchange key
*CoreApiV10.ProfileApi* | [**getExternalKey**](docs/ProfileApi.md#getExternalKey) | **GET** /v1.0/profile/keys | Get external exchange keys
*CoreApiV10.ProfileApi* | [**getProfileFull**](docs/ProfileApi.md#getProfileFull) | **GET** /v1.0/profile | Get full profile
*CoreApiV10.ProfileApi* | [**getProfileHeader**](docs/ProfileApi.md#getProfileHeader) | **GET** /v1.0/profile/header | Get header profile
*CoreApiV10.ProfileApi* | [**getSocialLinks**](docs/ProfileApi.md#getSocialLinks) | **GET** /v1.0/profile/sociallinks | Get social links
*CoreApiV10.ProfileApi* | [**getVerificationToken**](docs/ProfileApi.md#getVerificationToken) | **POST** /v1.0/profile/verification/token | 
*CoreApiV10.ProfileApi* | [**removeAvatar**](docs/ProfileApi.md#removeAvatar) | **POST** /v1.0/profile/avatar/remove | Remove avatar
*CoreApiV10.ProfileApi* | [**updateAvatar**](docs/ProfileApi.md#updateAvatar) | **POST** /v1.0/profile/avatar/update/{fileId} | Update avatar
*CoreApiV10.ProfileApi* | [**updateFcmToken**](docs/ProfileApi.md#updateFcmToken) | **POST** /v1.0/profile/push/token | 
*CoreApiV10.ProfileApi* | [**updatePersonalDetails**](docs/ProfileApi.md#updatePersonalDetails) | **POST** /v1.0/profile/personal/update | Update user personal details
*CoreApiV10.ProfileApi* | [**updateProfile**](docs/ProfileApi.md#updateProfile) | **POST** /v1.0/profile/update | Update profile
*CoreApiV10.ProfileApi* | [**updateSocialLinks**](docs/ProfileApi.md#updateSocialLinks) | **POST** /v1.0/profile/sociallinks/update | Add or update social links
*CoreApiV10.ProgramsApi* | [**addToFavorites**](docs/ProgramsApi.md#addToFavorites) | **POST** /v1.0/programs/{id}/favorite/add | Add to favorites
*CoreApiV10.ProgramsApi* | [**exportProgramPeriods**](docs/ProgramsApi.md#exportProgramPeriods) | **GET** /v1.0/programs/{id}/periods/export | Export periods
*CoreApiV10.ProgramsApi* | [**exportProgramPeriodsFinStatistic**](docs/ProgramsApi.md#exportProgramPeriodsFinStatistic) | **GET** /v1.0/programs/{id}/periods/export/statistic | Export period financial statistic
*CoreApiV10.ProgramsApi* | [**exportTrades**](docs/ProgramsApi.md#exportTrades) | **GET** /v1.0/programs/{id}/trades/export | Export trades
*CoreApiV10.ProgramsApi* | [**getProgramBalanceChart**](docs/ProgramsApi.md#getProgramBalanceChart) | **GET** /v1.0/programs/{id}/charts/balance | Program balance chart
*CoreApiV10.ProgramsApi* | [**getProgramDetails**](docs/ProgramsApi.md#getProgramDetails) | **GET** /v1.0/programs/{id} | Program details
*CoreApiV10.ProgramsApi* | [**getProgramOpenTrades**](docs/ProgramsApi.md#getProgramOpenTrades) | **GET** /v1.0/programs/{id}/trades/open | Open positions
*CoreApiV10.ProgramsApi* | [**getProgramPeriods**](docs/ProgramsApi.md#getProgramPeriods) | **GET** /v1.0/programs/{id}/periods | Program periods
*CoreApiV10.ProgramsApi* | [**getProgramProfitChart**](docs/ProgramsApi.md#getProgramProfitChart) | **GET** /v1.0/programs/{id}/charts/profit | Program profit chart
*CoreApiV10.ProgramsApi* | [**getProgramSets**](docs/ProgramsApi.md#getProgramSets) | **GET** /v1.0/programs/sets | Programs sets
*CoreApiV10.ProgramsApi* | [**getProgramSubscribers**](docs/ProgramsApi.md#getProgramSubscribers) | **GET** /v1.0/programs/{id}/subscribers | Signal subscribers
*CoreApiV10.ProgramsApi* | [**getProgramTrades**](docs/ProgramsApi.md#getProgramTrades) | **GET** /v1.0/programs/{id}/trades | Trade history
*CoreApiV10.ProgramsApi* | [**getPrograms**](docs/ProgramsApi.md#getPrograms) | **GET** /v1.0/programs | Programs list
*CoreApiV10.ProgramsApi* | [**removeFromFavorites**](docs/ProgramsApi.md#removeFromFavorites) | **POST** /v1.0/programs/{id}/favorite/remove | Remove from favorites
*CoreApiV10.RateApi* | [**getRate**](docs/RateApi.md#getRate) | **GET** /v1.0/rate/{from}/{to} | Get rate
*CoreApiV10.RateApi* | [**getRateExchange**](docs/RateApi.md#getRateExchange) | **GET** /v1.0/rate/{exchange}/{from}/{to} | Get rate by exchange
*CoreApiV10.RateApi* | [**getRates**](docs/RateApi.md#getRates) | **GET** /v1.0/rate | Get rates
*CoreApiV10.SearchApi* | [**search**](docs/SearchApi.md#search) | **GET** /v1.0/search | Program / fund / manager search
*CoreApiV10.SignalApi* | [**attachSlaveToMaster**](docs/SignalApi.md#attachSlaveToMaster) | **POST** /v1.0/signal/attach/{id} | Subscribe to programs signals
*CoreApiV10.SignalApi* | [**closeTrade**](docs/SignalApi.md#closeTrade) | **POST** /v1.0/signal/trades/{id}/close | Close signal trade
*CoreApiV10.SignalApi* | [**detachSlaveFromMaster**](docs/SignalApi.md#detachSlaveFromMaster) | **POST** /v1.0/signal/detach/{id} | Unsubscribe from program signals
*CoreApiV10.SignalApi* | [**getCopytradingAccounts**](docs/SignalApi.md#getCopytradingAccounts) | **GET** /v1.0/signal/accounts | Get copytrading accounts
*CoreApiV10.SignalApi* | [**getOpenSignalTrades**](docs/SignalApi.md#getOpenSignalTrades) | **GET** /v1.0/signal/trades/open | Get investors signals open trades
*CoreApiV10.SignalApi* | [**getSignalTrades**](docs/SignalApi.md#getSignalTrades) | **GET** /v1.0/signal/trades | Get investors signals trades history
*CoreApiV10.SignalApi* | [**getSignalTradingLog**](docs/SignalApi.md#getSignalTradingLog) | **GET** /v1.0/signal/trades/log | Get investors signals trading log
*CoreApiV10.SignalApi* | [**getSlaveAttachInfo**](docs/SignalApi.md#getSlaveAttachInfo) | **GET** /v1.0/signal/attach/{id}/info | Get subscribe to programs signals info
*CoreApiV10.SignalApi* | [**updateSubscriptionSettings**](docs/SignalApi.md#updateSubscriptionSettings) | **POST** /v1.0/signal/{id}/update | Update signal subscription settings
*CoreApiV10.WalletApi* | [**cancelWithdrawalRequest**](docs/WalletApi.md#cancelWithdrawalRequest) | **POST** /v1.0/wallet/withdraw/request/cancel/{txId} | 
*CoreApiV10.WalletApi* | [**confirmWithdrawalRequestByCode**](docs/WalletApi.md#confirmWithdrawalRequestByCode) | **POST** /v1.0/wallet/withdraw/request/confirm | 
*CoreApiV10.WalletApi* | [**createWithdrawalRequest**](docs/WalletApi.md#createWithdrawalRequest) | **POST** /v1.0/wallet/withdraw/request/new | 
*CoreApiV10.WalletApi* | [**getGMCommissionData**](docs/WalletApi.md#getGMCommissionData) | **GET** /v1.0/wallet/fee/gvtholding | GenesisMarkets commission data
*CoreApiV10.WalletApi* | [**getMultiWalletTransactions**](docs/WalletApi.md#getMultiWalletTransactions) | **GET** /v1.0/wallet/multi/transactions | Multi wallet transactions
*CoreApiV10.WalletApi* | [**getTransactionDetails**](docs/WalletApi.md#getTransactionDetails) | **GET** /v1.0/wallet/transaction/{id} | Get transaction details
*CoreApiV10.WalletApi* | [**getUserWithdrawalSummary**](docs/WalletApi.md#getUserWithdrawalSummary) | **GET** /v1.0/wallet/withdraw/info | 
*CoreApiV10.WalletApi* | [**getWalletExternalTransactions**](docs/WalletApi.md#getWalletExternalTransactions) | **GET** /v1.0/wallet/multi/transactions/external | Wallet pending transactions
*CoreApiV10.WalletApi* | [**getWalletMultiAvailable**](docs/WalletApi.md#getWalletMultiAvailable) | **GET** /v1.0/wallet/multi/{currency}/available | Multi wallet available
*CoreApiV10.WalletApi* | [**getWalletMultiSummary**](docs/WalletApi.md#getWalletMultiSummary) | **GET** /v1.0/wallet/multi/{currency} | Multi wallet summary
*CoreApiV10.WalletApi* | [**resendWithdrawalRequestEmail**](docs/WalletApi.md#resendWithdrawalRequestEmail) | **POST** /v1.0/wallet/withdraw/request/resend/{txId} | 
*CoreApiV10.WalletApi* | [**switchPayFeeInGvtOff**](docs/WalletApi.md#switchPayFeeInGvtOff) | **POST** /v1.0/wallet/paygvtfee/off | Disable paying platform fees with GVT
*CoreApiV10.WalletApi* | [**switchPayFeeInGvtOn**](docs/WalletApi.md#switchPayFeeInGvtOn) | **POST** /v1.0/wallet/paygvtfee/on | Enable paying platform fees with GVT
*CoreApiV10.WalletApi* | [**transfer**](docs/WalletApi.md#transfer) | **POST** /v1.0/wallet/transfer | Transfer money
*CoreApiV10.WalletApi* | [**updateDepositWallets**](docs/WalletApi.md#updateDepositWallets) | **POST** /v1.0/wallet/deposit/update | Update deposit wallets


## Documentation for Models

 - [CoreApiV10.AmountWithCurrency](docs/AmountWithCurrency.md)
 - [CoreApiV10.AndroidAppVersion](docs/AndroidAppVersion.md)
 - [CoreApiV10.AndroidVersion](docs/AndroidVersion.md)
 - [CoreApiV10.AssetDetails](docs/AssetDetails.md)
 - [CoreApiV10.AssetsValue](docs/AssetsValue.md)
 - [CoreApiV10.AttachToSignalProvider](docs/AttachToSignalProvider.md)
 - [CoreApiV10.AttachToSignalProviderInfo](docs/AttachToSignalProviderInfo.md)
 - [CoreApiV10.BalanceChartElementOld](docs/BalanceChartElementOld.md)
 - [CoreApiV10.BrokerAccountTypeOld](docs/BrokerAccountTypeOld.md)
 - [CoreApiV10.BrokerDetails](docs/BrokerDetails.md)
 - [CoreApiV10.BrokerOld](docs/BrokerOld.md)
 - [CoreApiV10.BrokersInfoOld](docs/BrokersInfoOld.md)
 - [CoreApiV10.BrokersProgramInfoOld](docs/BrokersProgramInfoOld.md)
 - [CoreApiV10.CaptchaCheckResult](docs/CaptchaCheckResult.md)
 - [CoreApiV10.CaptchaDetails](docs/CaptchaDetails.md)
 - [CoreApiV10.ChangeBrokerProgramRequest](docs/ChangeBrokerProgramRequest.md)
 - [CoreApiV10.ChangePasswordViewModel](docs/ChangePasswordViewModel.md)
 - [CoreApiV10.ChartSimple](docs/ChartSimple.md)
 - [CoreApiV10.ConvertingDetails](docs/ConvertingDetails.md)
 - [CoreApiV10.CopyTradingAccountInfo](docs/CopyTradingAccountInfo.md)
 - [CoreApiV10.CopyTradingAccountsList](docs/CopyTradingAccountsList.md)
 - [CoreApiV10.CreateWithdrawalRequestModel](docs/CreateWithdrawalRequestModel.md)
 - [CoreApiV10.DashboardChartValue](docs/DashboardChartValue.md)
 - [CoreApiV10.DashboardProgramDetails](docs/DashboardProgramDetails.md)
 - [CoreApiV10.DashboardSummary](docs/DashboardSummary.md)
 - [CoreApiV10.DetachFromSignalProvider](docs/DetachFromSignalProvider.md)
 - [CoreApiV10.EnumsOld](docs/EnumsOld.md)
 - [CoreApiV10.ErrorMessage](docs/ErrorMessage.md)
 - [CoreApiV10.ErrorViewModel](docs/ErrorViewModel.md)
 - [CoreApiV10.EventFiltersOld](docs/EventFiltersOld.md)
 - [CoreApiV10.EventInvestorItemFiltersOld](docs/EventInvestorItemFiltersOld.md)
 - [CoreApiV10.EventItemFiltersOld](docs/EventItemFiltersOld.md)
 - [CoreApiV10.ExternalKeyAddViewModel](docs/ExternalKeyAddViewModel.md)
 - [CoreApiV10.ExternalKeyViewModel](docs/ExternalKeyViewModel.md)
 - [CoreApiV10.ExternalKeysViewModel](docs/ExternalKeysViewModel.md)
 - [CoreApiV10.ExternalTransactionDetails](docs/ExternalTransactionDetails.md)
 - [CoreApiV10.FcmTokenViewModel](docs/FcmTokenViewModel.md)
 - [CoreApiV10.FeeDetails](docs/FeeDetails.md)
 - [CoreApiV10.FilterModelOld](docs/FilterModelOld.md)
 - [CoreApiV10.ForgotPasswordViewModel](docs/ForgotPasswordViewModel.md)
 - [CoreApiV10.FundAssetInfo](docs/FundAssetInfo.md)
 - [CoreApiV10.FundAssetPart](docs/FundAssetPart.md)
 - [CoreApiV10.FundAssetPartWithIcon](docs/FundAssetPartWithIcon.md)
 - [CoreApiV10.FundAssetPercent](docs/FundAssetPercent.md)
 - [CoreApiV10.FundAssetsListInfo](docs/FundAssetsListInfo.md)
 - [CoreApiV10.FundAssetsState](docs/FundAssetsState.md)
 - [CoreApiV10.FundBalanceChartOld](docs/FundBalanceChartOld.md)
 - [CoreApiV10.FundDetailsFull](docs/FundDetailsFull.md)
 - [CoreApiV10.FundDetailsListStatistic](docs/FundDetailsListStatistic.md)
 - [CoreApiV10.FundDetailsOld](docs/FundDetailsOld.md)
 - [CoreApiV10.FundEquityChartElementOld](docs/FundEquityChartElementOld.md)
 - [CoreApiV10.FundFacet](docs/FundFacet.md)
 - [CoreApiV10.FundFiltersOld](docs/FundFiltersOld.md)
 - [CoreApiV10.FundInvestInfo](docs/FundInvestInfo.md)
 - [CoreApiV10.FundNotificationSettingList](docs/FundNotificationSettingList.md)
 - [CoreApiV10.FundProfitChartOld](docs/FundProfitChartOld.md)
 - [CoreApiV10.FundSets](docs/FundSets.md)
 - [CoreApiV10.FundStatistic](docs/FundStatistic.md)
 - [CoreApiV10.FundWithdrawInfo](docs/FundWithdrawInfo.md)
 - [CoreApiV10.FundsListOld](docs/FundsListOld.md)
 - [CoreApiV10.GeeTestDetails](docs/GeeTestDetails.md)
 - [CoreApiV10.GeeTestResult](docs/GeeTestResult.md)
 - [CoreApiV10.IOsAppVersion](docs/IOsAppVersion.md)
 - [CoreApiV10.IdModel](docs/IdModel.md)
 - [CoreApiV10.InternalTransferRequest](docs/InternalTransferRequest.md)
 - [CoreApiV10.InvestmentEventItemViewModel](docs/InvestmentEventItemViewModel.md)
 - [CoreApiV10.InvestmentEventViewModel](docs/InvestmentEventViewModel.md)
 - [CoreApiV10.InvestmentEventViewModels](docs/InvestmentEventViewModels.md)
 - [CoreApiV10.LevelInfo](docs/LevelInfo.md)
 - [CoreApiV10.LevelsParamsInfo](docs/LevelsParamsInfo.md)
 - [CoreApiV10.LoginViewModel](docs/LoginViewModel.md)
 - [CoreApiV10.ManagerAssets](docs/ManagerAssets.md)
 - [CoreApiV10.ManagerFinancialStatistic](docs/ManagerFinancialStatistic.md)
 - [CoreApiV10.ManagerFundWithdrawInfo](docs/ManagerFundWithdrawInfo.md)
 - [CoreApiV10.ManagerNotificationSettingList](docs/ManagerNotificationSettingList.md)
 - [CoreApiV10.ManagerOverview](docs/ManagerOverview.md)
 - [CoreApiV10.ManagerProfile](docs/ManagerProfile.md)
 - [CoreApiV10.ManagerProfileDetails](docs/ManagerProfileDetails.md)
 - [CoreApiV10.ManagerProgramCreateResult](docs/ManagerProgramCreateResult.md)
 - [CoreApiV10.ManagerProgramWithdrawInfo](docs/ManagerProgramWithdrawInfo.md)
 - [CoreApiV10.ManagerSimpleFund](docs/ManagerSimpleFund.md)
 - [CoreApiV10.ManagerSimpleProgram](docs/ManagerSimpleProgram.md)
 - [CoreApiV10.ManagersList](docs/ManagersList.md)
 - [CoreApiV10.MigrationRequest](docs/MigrationRequest.md)
 - [CoreApiV10.MultiWalletExternalTransaction](docs/MultiWalletExternalTransaction.md)
 - [CoreApiV10.MultiWalletExternalTransactionsViewModel](docs/MultiWalletExternalTransactionsViewModel.md)
 - [CoreApiV10.MultiWalletFiltersOld](docs/MultiWalletFiltersOld.md)
 - [CoreApiV10.MultiWalletTransaction](docs/MultiWalletTransaction.md)
 - [CoreApiV10.MultiWalletTransactionsViewModel](docs/MultiWalletTransactionsViewModel.md)
 - [CoreApiV10.NewFundRequest](docs/NewFundRequest.md)
 - [CoreApiV10.NewProgramRequest](docs/NewProgramRequest.md)
 - [CoreApiV10.NotificationList](docs/NotificationList.md)
 - [CoreApiV10.NotificationSettingList](docs/NotificationSettingList.md)
 - [CoreApiV10.NotificationSettingViewModel](docs/NotificationSettingViewModel.md)
 - [CoreApiV10.NotificationViewModel](docs/NotificationViewModel.md)
 - [CoreApiV10.OrderModel](docs/OrderModel.md)
 - [CoreApiV10.OrderModelSignalData](docs/OrderModelSignalData.md)
 - [CoreApiV10.OrderProgramData](docs/OrderProgramData.md)
 - [CoreApiV10.OrderSignalFee](docs/OrderSignalFee.md)
 - [CoreApiV10.OrderSignalModel](docs/OrderSignalModel.md)
 - [CoreApiV10.OrderSignalProgramInfo](docs/OrderSignalProgramInfo.md)
 - [CoreApiV10.OtherAssetsValue](docs/OtherAssetsValue.md)
 - [CoreApiV10.PasswordModel](docs/PasswordModel.md)
 - [CoreApiV10.PeriodDate](docs/PeriodDate.md)
 - [CoreApiV10.PersonalFundDetailsFull](docs/PersonalFundDetailsFull.md)
 - [CoreApiV10.PersonalProgramDetailsFull](docs/PersonalProgramDetailsFull.md)
 - [CoreApiV10.PersonalSignalDetailsFull](docs/PersonalSignalDetailsFull.md)
 - [CoreApiV10.PlatformAsset](docs/PlatformAsset.md)
 - [CoreApiV10.PlatformAssets](docs/PlatformAssets.md)
 - [CoreApiV10.PlatformCurrencyOld](docs/PlatformCurrencyOld.md)
 - [CoreApiV10.PlatformInfoOld](docs/PlatformInfoOld.md)
 - [CoreApiV10.PlatformStatisticOld](docs/PlatformStatisticOld.md)
 - [CoreApiV10.PowDetails](docs/PowDetails.md)
 - [CoreApiV10.PowResult](docs/PowResult.md)
 - [CoreApiV10.ProfileFullViewModel](docs/ProfileFullViewModel.md)
 - [CoreApiV10.ProfileHeaderViewModel](docs/ProfileHeaderViewModel.md)
 - [CoreApiV10.ProfilePublic](docs/ProfilePublic.md)
 - [CoreApiV10.ProgramBalanceChartElementOld](docs/ProgramBalanceChartElementOld.md)
 - [CoreApiV10.ProgramBalanceChartOld](docs/ProgramBalanceChartOld.md)
 - [CoreApiV10.ProgramDetailsFullOld](docs/ProgramDetailsFullOld.md)
 - [CoreApiV10.ProgramDetailsListStatistic](docs/ProgramDetailsListStatistic.md)
 - [CoreApiV10.ProgramDetailsOld](docs/ProgramDetailsOld.md)
 - [CoreApiV10.ProgramFacet](docs/ProgramFacet.md)
 - [CoreApiV10.ProgramFiltersOld](docs/ProgramFiltersOld.md)
 - [CoreApiV10.ProgramInvestInfoOld](docs/ProgramInvestInfoOld.md)
 - [CoreApiV10.ProgramLevelInfo](docs/ProgramLevelInfo.md)
 - [CoreApiV10.ProgramMinimumDepositOld](docs/ProgramMinimumDepositOld.md)
 - [CoreApiV10.ProgramNotificationSettingList](docs/ProgramNotificationSettingList.md)
 - [CoreApiV10.ProgramPeriodViewModel](docs/ProgramPeriodViewModel.md)
 - [CoreApiV10.ProgramPeriodsViewModel](docs/ProgramPeriodsViewModel.md)
 - [CoreApiV10.ProgramProfitChartOld](docs/ProgramProfitChartOld.md)
 - [CoreApiV10.ProgramPwdUpdate](docs/ProgramPwdUpdate.md)
 - [CoreApiV10.ProgramRequestOld](docs/ProgramRequestOld.md)
 - [CoreApiV10.ProgramRequestsOld](docs/ProgramRequestsOld.md)
 - [CoreApiV10.ProgramSets](docs/ProgramSets.md)
 - [CoreApiV10.ProgramStatistic](docs/ProgramStatistic.md)
 - [CoreApiV10.ProgramTag](docs/ProgramTag.md)
 - [CoreApiV10.ProgramTransactionDetails](docs/ProgramTransactionDetails.md)
 - [CoreApiV10.ProgramUpdate](docs/ProgramUpdate.md)
 - [CoreApiV10.ProgramWithdrawInfo](docs/ProgramWithdrawInfo.md)
 - [CoreApiV10.ProgramsInfoOld](docs/ProgramsInfoOld.md)
 - [CoreApiV10.ProgramsLevelsInfo](docs/ProgramsLevelsInfo.md)
 - [CoreApiV10.ProgramsListOld](docs/ProgramsListOld.md)
 - [CoreApiV10.RateItem](docs/RateItem.md)
 - [CoreApiV10.RatesModel](docs/RatesModel.md)
 - [CoreApiV10.RatesModelRates](docs/RatesModelRates.md)
 - [CoreApiV10.ReallocationModel](docs/ReallocationModel.md)
 - [CoreApiV10.ReallocationsViewModel](docs/ReallocationsViewModel.md)
 - [CoreApiV10.RecoveryCode](docs/RecoveryCode.md)
 - [CoreApiV10.RecoveryCodesViewModel](docs/RecoveryCodesViewModel.md)
 - [CoreApiV10.RegisterViewModel](docs/RegisterViewModel.md)
 - [CoreApiV10.ResendConfirmationViewModel](docs/ResendConfirmationViewModel.md)
 - [CoreApiV10.ResetPasswordViewModel](docs/ResetPasswordViewModel.md)
 - [CoreApiV10.SearchViewModel](docs/SearchViewModel.md)
 - [CoreApiV10.SignalDataMaster](docs/SignalDataMaster.md)
 - [CoreApiV10.SignalDetails](docs/SignalDetails.md)
 - [CoreApiV10.SignalFee](docs/SignalFee.md)
 - [CoreApiV10.SignalProviderSubscribers](docs/SignalProviderSubscribers.md)
 - [CoreApiV10.SignalSubscriber](docs/SignalSubscriber.md)
 - [CoreApiV10.SignalSubscription](docs/SignalSubscription.md)
 - [CoreApiV10.SignalTradingEvent](docs/SignalTradingEvent.md)
 - [CoreApiV10.SignalTradingEvents](docs/SignalTradingEvents.md)
 - [CoreApiV10.SignalsList](docs/SignalsList.md)
 - [CoreApiV10.SocialLinkViewModel](docs/SocialLinkViewModel.md)
 - [CoreApiV10.SocialLinksViewModel](docs/SocialLinksViewModel.md)
 - [CoreApiV10.TradesSignalViewModel](docs/TradesSignalViewModel.md)
 - [CoreApiV10.TradesViewModel](docs/TradesViewModel.md)
 - [CoreApiV10.TransactionDetails](docs/TransactionDetails.md)
 - [CoreApiV10.TwoFactorAuthenticator](docs/TwoFactorAuthenticator.md)
 - [CoreApiV10.TwoFactorAuthenticatorConfirm](docs/TwoFactorAuthenticatorConfirm.md)
 - [CoreApiV10.TwoFactorCodeModel](docs/TwoFactorCodeModel.md)
 - [CoreApiV10.TwoFactorStatus](docs/TwoFactorStatus.md)
 - [CoreApiV10.UpdatePersonalDetailViewModel](docs/UpdatePersonalDetailViewModel.md)
 - [CoreApiV10.UpdateProfileViewModel](docs/UpdateProfileViewModel.md)
 - [CoreApiV10.UpdateSocialLinkViewModel](docs/UpdateSocialLinkViewModel.md)
 - [CoreApiV10.UploadResult](docs/UploadResult.md)
 - [CoreApiV10.UserCommissionData](docs/UserCommissionData.md)
 - [CoreApiV10.ValueChartBar](docs/ValueChartBar.md)
 - [CoreApiV10.WalletBaseData](docs/WalletBaseData.md)
 - [CoreApiV10.WalletData](docs/WalletData.md)
 - [CoreApiV10.WalletDeposit](docs/WalletDeposit.md)
 - [CoreApiV10.WalletDepositSummary](docs/WalletDepositSummary.md)
 - [CoreApiV10.WalletMultiAvailable](docs/WalletMultiAvailable.md)
 - [CoreApiV10.WalletMultiSummary](docs/WalletMultiSummary.md)
 - [CoreApiV10.WalletWithdrawalInfo](docs/WalletWithdrawalInfo.md)
 - [CoreApiV10.WalletsGrandTotal](docs/WalletsGrandTotal.md)
 - [CoreApiV10.WithdrawalSummary](docs/WithdrawalSummary.md)


## Documentation for Authorization

 All endpoints do not require authorization.


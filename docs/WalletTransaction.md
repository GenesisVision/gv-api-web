# CoreApiV10.WalletTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**amount** | **Number** |  | [optional] 
**amountConverted** | **Number** |  | [optional] 
**_date** | **Date** |  | [optional] 
**_number** | **Number** |  | [optional] 
**sourceId** | **String** |  | [optional] 
**sourceType** | **String** |  | [optional] 
**sourceCurrency** | **String** |  | [optional] 
**sourceProgramInfo** | [**ProgramInfo**](ProgramInfo.md) |  | [optional] 
**sourceBlockchainInfo** | [**BlockchainInfo**](BlockchainInfo.md) |  | [optional] 
**sourceWithdrawalInfo** | [**WithdrawalInfo**](WithdrawalInfo.md) |  | [optional] 
**action** | **String** |  | [optional] 
**information** | **String** |  | [optional] 
**destinationId** | **String** |  | [optional] 
**destinationType** | **String** |  | [optional] 
**destinationCurrency** | **String** |  | [optional] 
**destinationProgramInfo** | [**ProgramInfo**](ProgramInfo.md) |  | [optional] 
**destinationBlockchainInfo** | [**BlockchainInfo**](BlockchainInfo.md) |  | [optional] 
**destinationWithdrawalInfo** | [**WithdrawalInfo**](WithdrawalInfo.md) |  | [optional] 


<a name="SourceTypeEnum"></a>
## Enum: SourceTypeEnum


* `Wallet` (value: `"Wallet"`)

* `Program` (value: `"Program"`)

* `Fund` (value: `"Fund"`)

* `ProgramRequest` (value: `"ProgramRequest"`)

* `FundRequest` (value: `"FundRequest"`)

* `WithdrawalRequest` (value: `"WithdrawalRequest"`)

* `PaymentTransaction` (value: `"PaymentTransaction"`)

* `Blockchain` (value: `"Blockchain"`)

* `GenesisVisionPlatform` (value: `"GenesisVisionPlatform"`)




<a name="SourceCurrencyEnum"></a>
## Enum: SourceCurrencyEnum


* `Undefined` (value: `"Undefined"`)

* `GVT` (value: `"GVT"`)

* `ETH` (value: `"ETH"`)

* `BTC` (value: `"BTC"`)

* `ADA` (value: `"ADA"`)

* `USDT` (value: `"USDT"`)

* `XRP` (value: `"XRP"`)

* `BCH` (value: `"BCH"`)

* `LTC` (value: `"LTC"`)

* `DOGE` (value: `"DOGE"`)

* `BNB` (value: `"BNB"`)

* `USD` (value: `"USD"`)

* `EUR` (value: `"EUR"`)




<a name="ActionEnum"></a>
## Enum: ActionEnum


* `Transfer` (value: `"Transfer"`)

* `ProgramOpen` (value: `"ProgramOpen"`)

* `ProgramProfit` (value: `"ProgramProfit"`)

* `ProgramInvest` (value: `"ProgramInvest"`)

* `ProgramWithdrawal` (value: `"ProgramWithdrawal"`)

* `ProgramRefundPartialExecution` (value: `"ProgramRefundPartialExecution"`)

* `ProgramRefundClose` (value: `"ProgramRefundClose"`)

* `ProgramRequestInvest` (value: `"ProgramRequestInvest"`)

* `ProgramRequestWithdrawal` (value: `"ProgramRequestWithdrawal"`)

* `ProgramRequestCancel` (value: `"ProgramRequestCancel"`)

* `PayingFee` (value: `"PayingFee"`)




<a name="DestinationTypeEnum"></a>
## Enum: DestinationTypeEnum


* `Wallet` (value: `"Wallet"`)

* `Program` (value: `"Program"`)

* `Fund` (value: `"Fund"`)

* `ProgramRequest` (value: `"ProgramRequest"`)

* `FundRequest` (value: `"FundRequest"`)

* `WithdrawalRequest` (value: `"WithdrawalRequest"`)

* `PaymentTransaction` (value: `"PaymentTransaction"`)

* `Blockchain` (value: `"Blockchain"`)

* `GenesisVisionPlatform` (value: `"GenesisVisionPlatform"`)




<a name="DestinationCurrencyEnum"></a>
## Enum: DestinationCurrencyEnum


* `Undefined` (value: `"Undefined"`)

* `GVT` (value: `"GVT"`)

* `ETH` (value: `"ETH"`)

* `BTC` (value: `"BTC"`)

* `ADA` (value: `"ADA"`)

* `USDT` (value: `"USDT"`)

* `XRP` (value: `"XRP"`)

* `BCH` (value: `"BCH"`)

* `LTC` (value: `"LTC"`)

* `DOGE` (value: `"DOGE"`)

* `BNB` (value: `"BNB"`)

* `USD` (value: `"USD"`)

* `EUR` (value: `"EUR"`)





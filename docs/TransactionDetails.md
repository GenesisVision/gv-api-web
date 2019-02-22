# CoreApiV10.TransactionDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | [optional] 
**programDetails** | [**ProgramTransactionDetails**](ProgramTransactionDetails.md) |  | [optional] 
**convertingDetails** | [**ConvertingDetails**](ConvertingDetails.md) |  | [optional] 
**externalTransactionDetails** | [**ExternalTransactionDetails**](ExternalTransactionDetails.md) |  | [optional] 
**status** | **String** |  | [optional] 
**currency** | **String** |  | [optional] 
**currencyName** | **String** |  | [optional] 
**currencyLogo** | **String** |  | [optional] 
**gvCommission** | **Number** |  | [optional] 
**gvCommissionPercent** | **Number** |  | [optional] 
**amount** | **Number** |  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `Investing` (value: `"Investing"`)

* `Withdrawal` (value: `"Withdrawal"`)

* `ExternalWithdrawal` (value: `"ExternalWithdrawal"`)

* `ExternalDeposit` (value: `"ExternalDeposit"`)

* `Converting` (value: `"Converting"`)

* `Open` (value: `"Open"`)

* `Close` (value: `"Close"`)

* `Profit` (value: `"Profit"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `Done` (value: `"Done"`)

* `Pending` (value: `"Pending"`)

* `Canceled` (value: `"Canceled"`)

* `Error` (value: `"Error"`)




<a name="CurrencyEnum"></a>
## Enum: CurrencyEnum


* `BTC` (value: `"BTC"`)

* `GVT` (value: `"GVT"`)

* `Undefined` (value: `"Undefined"`)

* `ETH` (value: `"ETH"`)

* `ADA` (value: `"ADA"`)

* `USDT` (value: `"USDT"`)

* `XRP` (value: `"XRP"`)

* `BCH` (value: `"BCH"`)

* `LTC` (value: `"LTC"`)

* `DOGE` (value: `"DOGE"`)

* `BNB` (value: `"BNB"`)

* `USD` (value: `"USD"`)

* `EUR` (value: `"EUR"`)





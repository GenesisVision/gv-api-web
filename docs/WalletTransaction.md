# CoreApi.WalletTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**type** | **String** |  | [optional] 
**amount** | **Number** |  | [optional] 
**_date** | **Date** |  | [optional] 
**walletId** | **String** |  | [optional] 
**currency** | **String** |  | [optional] 
**investmentProgram** | [**InvestmentProgramTxInfo**](InvestmentProgramTxInfo.md) |  | [optional] 
**investmentProgramRequest** | [**InvestmentProgramRequestTxInfo**](InvestmentProgramRequestTxInfo.md) |  | [optional] 
**paymentTx** | [**PaymentTxInfo**](PaymentTxInfo.md) |  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `Deposit` (value: `"Deposit"`)

* `Withdraw` (value: `"Withdraw"`)

* `OpenProgram` (value: `"OpenProgram"`)

* `InvestToProgram` (value: `"InvestToProgram"`)

* `WithdrawFromProgram` (value: `"WithdrawFromProgram"`)

* `ProfitFromProgram` (value: `"ProfitFromProgram"`)

* `CancelInvestmentRequest` (value: `"CancelInvestmentRequest"`)

* `PartialInvestmentExecutionRefund` (value: `"PartialInvestmentExecutionRefund"`)

* `ClosingProgramRefund` (value: `"ClosingProgramRefund"`)




<a name="CurrencyEnum"></a>
## Enum: CurrencyEnum


* `Undefined` (value: `"Undefined"`)

* `GVT` (value: `"GVT"`)

* `ETH` (value: `"ETH"`)

* `BTC` (value: `"BTC"`)

* `ADA` (value: `"ADA"`)

* `USD` (value: `"USD"`)

* `EUR` (value: `"EUR"`)





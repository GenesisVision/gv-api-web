# CoreApiV10.ProgramRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**programId** | **String** |  | [optional] 
**_date** | **Date** |  | [optional] 
**value** | **Number** |  | [optional] 
**valueGvt** | **Number** |  | [optional] 
**withdrawAll** | **Boolean** |  | [optional] 
**feeEntry** | **Number** |  | [optional] 
**feeExit** | **Number** |  | [optional] 
**currency** | **String** |  | [optional] 
**fundWithdrawPercent** | **Number** | Used only in fund withdraw request | [optional] 
**type** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**logo** | **String** |  | [optional] 
**title** | **String** |  | [optional] 
**color** | **String** |  | [optional] 
**canCancelRequest** | **Boolean** |  | [optional] 
**programType** | **String** |  | [optional] 


<a name="CurrencyEnum"></a>
## Enum: CurrencyEnum


* `USDT` (value: `"USDT"`)

* `Undefined` (value: `"Undefined"`)

* `GVT` (value: `"GVT"`)

* `ETH` (value: `"ETH"`)

* `BTC` (value: `"BTC"`)

* `ADA` (value: `"ADA"`)

* `XRP` (value: `"XRP"`)

* `BCH` (value: `"BCH"`)

* `LTC` (value: `"LTC"`)

* `DOGE` (value: `"DOGE"`)

* `BNB` (value: `"BNB"`)

* `USD` (value: `"USD"`)

* `EUR` (value: `"EUR"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `Invest` (value: `"Invest"`)

* `Withdrawal` (value: `"Withdrawal"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `New` (value: `"New"`)

* `Executed` (value: `"Executed"`)

* `Cancelled` (value: `"Cancelled"`)




<a name="ProgramTypeEnum"></a>
## Enum: ProgramTypeEnum


* `Program` (value: `"Program"`)

* `Fund` (value: `"Fund"`)





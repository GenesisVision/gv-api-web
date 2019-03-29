# CoreApiV10.ProgramDetailsFull

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **String** |  | [optional] 
**level** | **Number** |  | [optional] 
**periodDuration** | **Number** |  | [optional] 
**periodStarts** | **Date** |  | [optional] 
**periodEnds** | **Date** |  | [optional] 
**entryFee** | **Number** |  | [optional] 
**entryFeeSelected** | **Number** |  | [optional] 
**entryFeeCurrent** | **Number** |  | [optional] 
**successFee** | **Number** |  | [optional] 
**stopOutLevel** | **Number** |  | [optional] 
**isReinvesting** | **Boolean** |  | [optional] 
**isSignalProgram** | **Boolean** |  | [optional] 
**signalSuccessFee** | **Number** |  | [optional] 
**signalSubscriptionFee** | **Number** |  | [optional] 
**availableInvestment** | **Number** | In GVT | [optional] 
**availableInvestmentBase** | **Number** | In account currency | [optional] 
**statistic** | [**ProgramStatistic**](ProgramStatistic.md) |  | [optional] 
**rating** | [**ProgramDetailsRating**](ProgramDetailsRating.md) |  | [optional] 
**personalProgramDetails** | [**PersonalProgramDetailsFull**](PersonalProgramDetailsFull.md) | Fields for authorized user | [optional] 
**tags** | [**[ProgramTag]**](ProgramTag.md) |  | [optional] 
**id** | **String** |  | [optional] 
**logo** | **String** |  | [optional] 
**url** | **String** |  | [optional] 
**color** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**title** | **String** |  | [optional] 
**ipfsHash** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**manager** | [**ProfilePublic**](ProfilePublic.md) |  | [optional] 


<a name="CurrencyEnum"></a>
## Enum: CurrencyEnum


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




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `None` (value: `"None"`)

* `Pending` (value: `"Pending"`)

* `ErrorCreating` (value: `"ErrorCreating"`)

* `Active` (value: `"Active"`)

* `Closed` (value: `"Closed"`)

* `Archived` (value: `"Archived"`)

* `ClosedDueToInactivity` (value: `"ClosedDueToInactivity"`)





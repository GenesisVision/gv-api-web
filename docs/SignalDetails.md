# CoreApiV10.SignalDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**statistic** | [**ProgramDetailsListStatistic**](ProgramDetailsListStatistic.md) |  | [optional] 
**personalDetails** | [**PersonalSignalDetailsFull**](PersonalSignalDetailsFull.md) |  | [optional] 
**currency** | **String** |  | [optional] 
**level** | **Number** |  | [optional] 
**tags** | [**[ProgramTag]**](ProgramTag.md) |  | [optional] 
**subscribers** | **Number** |  | [optional] 
**id** | **String** |  | [optional] 
**logo** | **String** |  | [optional] 
**url** | **String** |  | [optional] 
**color** | **String** |  | [optional] 
**title** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**creationDate** | **Date** |  | [optional] 
**manager** | [**ProfilePublic**](ProfilePublic.md) |  | [optional] 
**chart** | [**[ChartSimple]**](ChartSimple.md) |  | [optional] 


<a name="CurrencyEnum"></a>
## Enum: CurrencyEnum


* `BTC` (value: `"BTC"`)

* `ETH` (value: `"ETH"`)

* `USDT` (value: `"USDT"`)

* `GVT` (value: `"GVT"`)

* `Undefined` (value: `"Undefined"`)

* `ADA` (value: `"ADA"`)

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





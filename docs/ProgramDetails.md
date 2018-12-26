# CoreApiV10.ProgramDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **String** |  | [optional] 
**level** | **Number** |  | [optional] 
**periodDuration** | **Number** |  | [optional] 
**periodStarts** | **Date** |  | [optional] 
**periodEnds** | **Date** |  | [optional] 
**availableInvestment** | **Number** |  | [optional] 
**statistic** | [**ProgramDetailsListStatistic**](ProgramDetailsListStatistic.md) |  | [optional] 
**rating** | [**ProgramDetailsRating**](ProgramDetailsRating.md) |  | [optional] 
**personalDetails** | [**PersonalProgramDetailsFull**](PersonalProgramDetailsFull.md) | Fields for authorized user | [optional] 
**id** | **String** |  | [optional] 
**logo** | **String** |  | [optional] 
**url** | **String** |  | [optional] 
**color** | **String** |  | [optional] 
**title** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**manager** | [**ProfilePublic**](ProfilePublic.md) |  | [optional] 
**chart** | [**[ChartSimple]**](ChartSimple.md) |  | [optional] 
**dashboardAssetsDetails** | [**DashboardProgramDetails**](DashboardProgramDetails.md) | Fields for dashboard | [optional] 


<a name="CurrencyEnum"></a>
## Enum: CurrencyEnum


* `GVT` (value: `"GVT"`)

* `Undefined` (value: `"Undefined"`)

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





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
**id** | **String** |  | [optional] 
**logo** | **String** |  | [optional] 
**url** | **String** |  | [optional] 
**title** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**manager** | [**ProfilePublic**](ProfilePublic.md) |  | [optional] 
**chart** | [**[ChartSimple]**](ChartSimple.md) |  | [optional] 
**personalProgramDetails** | [**PersonalProgramDetailsList**](PersonalProgramDetailsList.md) | Fields for authorized user | [optional] 
**dashboardProgramDetails** | [**DashboardProgramDetails**](DashboardProgramDetails.md) | Fields for dashboard | [optional] 


<a name="CurrencyEnum"></a>
## Enum: CurrencyEnum


* `ETH` (value: `"ETH"`)

* `GVT` (value: `"GVT"`)

* `Undefined` (value: `"Undefined"`)

* `BTC` (value: `"BTC"`)

* `ADA` (value: `"ADA"`)

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





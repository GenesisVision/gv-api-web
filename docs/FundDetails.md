# CoreApiV10.FundDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalAssetsCount** | **Number** |  | [optional] 
**topFundAssets** | [**[FundAssetPercent]**](FundAssetPercent.md) |  | [optional] 
**statistic** | [**FundDetailsListStatistic**](FundDetailsListStatistic.md) |  | [optional] 
**personalDetails** | [**PersonalFundDetailsList**](PersonalFundDetailsList.md) | Fields for authorized user | [optional] 
**id** | **String** |  | [optional] 
**logo** | **String** |  | [optional] 
**url** | **String** |  | [optional] 
**title** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**manager** | [**ProfilePublic**](ProfilePublic.md) |  | [optional] 
**chart** | [**[ChartSimple]**](ChartSimple.md) |  | [optional] 
**dashboardAssetsDetails** | [**DashboardProgramDetails**](DashboardProgramDetails.md) | Fields for dashboard | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `None` (value: `"None"`)

* `Pending` (value: `"Pending"`)

* `ErrorCreating` (value: `"ErrorCreating"`)

* `Active` (value: `"Active"`)

* `Closed` (value: `"Closed"`)

* `Archived` (value: `"Archived"`)

* `ClosedDueToInactivity` (value: `"ClosedDueToInactivity"`)





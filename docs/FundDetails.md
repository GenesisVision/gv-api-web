# CoreApiV10.FundDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalAssetsCount** | **Number** |  | [optional] 
**topFundAssets** | [**[FundAssetPercent]**](FundAssetPercent.md) |  | [optional] 
**statistic** | [**FundDetailsListStatistic**](FundDetailsListStatistic.md) |  | [optional] 
**personalDetails** | [**PersonalFundDetailsFull**](PersonalFundDetailsFull.md) | Fields for authorized user | [optional] 
**dashboardAssetsDetails** | [**DashboardProgramDetails**](DashboardProgramDetails.md) | Fields for dashboard | [optional] 
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


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `None` (value: `"None"`)

* `Pending` (value: `"Pending"`)

* `ErrorCreating` (value: `"ErrorCreating"`)

* `Active` (value: `"Active"`)

* `Closed` (value: `"Closed"`)

* `Archived` (value: `"Archived"`)

* `ClosedDueToInactivity` (value: `"ClosedDueToInactivity"`)





# CoreApiV10.FundDetailsFull

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entryFee** | **Number** |  | [optional] 
**exitFee** | **Number** |  | [optional] 
**managementFee** | **Number** |  | [optional] 
**currentAssets** | [**[FundAssetPartWithIcon]**](FundAssetPartWithIcon.md) |  | [optional] 
**statistic** | [**FundStatistic**](FundStatistic.md) |  | [optional] 
**personalFundDetails** | [**PersonalFundDetailsFull**](PersonalFundDetailsFull.md) | Fields for authorized user | [optional] 
**id** | **String** |  | [optional] 
**logo** | **String** |  | [optional] 
**url** | **String** |  | [optional] 
**color** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**title** | **String** |  | [optional] 
**ipfsHash** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**manager** | [**ProfilePublic**](ProfilePublic.md) |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `None` (value: `"None"`)

* `Pending` (value: `"Pending"`)

* `ErrorCreating` (value: `"ErrorCreating"`)

* `Active` (value: `"Active"`)

* `Closed` (value: `"Closed"`)

* `Archived` (value: `"Archived"`)

* `ClosedDueToInactivity` (value: `"ClosedDueToInactivity"`)





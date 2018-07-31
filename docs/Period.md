# CoreApiV10.Period

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**_number** | **Number** |  | [optional] 
**dateFrom** | **Date** |  | [optional] 
**dateTo** | **Date** |  | [optional] 
**status** | **String** |  | [optional] 
**startBalance** | **Number** |  | [optional] 
**managerStartBalance** | **Number** |  | [optional] 
**managerStartShare** | **Number** |  | [optional] 
**processStatus** | **String** |  | [optional] 
**investmentRequest** | [**[InvestmentProgramRequest]**](InvestmentProgramRequest.md) |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `Planned` (value: `"Planned"`)

* `InProccess` (value: `"InProccess"`)

* `Closed` (value: `"Closed"`)




<a name="ProcessStatusEnum"></a>
## Enum: ProcessStatusEnum


* `None` (value: `"None"`)

* `AccrueProfitsDone` (value: `"AccrueProfitsDone"`)

* `ReevaluateManagerTokenDone` (value: `"ReevaluateManagerTokenDone"`)

* `ProcessInvestmentRequestsDone` (value: `"ProcessInvestmentRequestsDone"`)

* `ClosePeriodDone` (value: `"ClosePeriodDone"`)





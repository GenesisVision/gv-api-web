# CoreApi.InvestmentProgram

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**title** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**level** | **Number** |  | [optional] 
**logo** | **String** |  | [optional] 
**isEnabled** | **Boolean** |  | [optional] 
**balance** | **Number** |  | [optional] 
**currency** | **String** |  | [optional] 
**tradesCount** | **Number** |  | [optional] 
**investorsCount** | **Number** |  | [optional] 
**periodDuration** | **Number** |  | [optional] 
**startOfPeriod** | **Date** |  | [optional] 
**endOfPeriod** | **Date** |  | [optional] 
**profitAvg** | **Number** |  | [optional] 
**profitTotal** | **Number** |  | [optional] 
**profitAvgPercent** | **Number** |  | [optional] 
**profitTotalPercent** | **Number** |  | [optional] 
**profitTotalChange** | **String** |  | [optional] 
**availableInvestment** | **Number** |  | [optional] 
**feeSuccess** | **Number** |  | [optional] 
**feeManagement** | **Number** |  | [optional] 
**chart** | [**[Chart]**](Chart.md) |  | [optional] 
**equityChart** | [**[ChartByDate]**](ChartByDate.md) |  | [optional] 
**manager** | [**ProfilePublicViewModel**](ProfilePublicViewModel.md) |  | [optional] 
**freeTokens** | [**FreeTokens**](FreeTokens.md) |  | [optional] 
**hasNewRequests** | **Boolean** |  | [optional] 
**isInvestEnable** | **Boolean** |  | [optional] 
**isOwnProgram** | **Boolean** |  | [optional] 
**canCloseProgram** | **Boolean** |  | [optional] 
**isFavorite** | **Boolean** |  | [optional] 


<a name="CurrencyEnum"></a>
## Enum: CurrencyEnum


* `Undefined` (value: `"Undefined"`)

* `GVT` (value: `"GVT"`)

* `ETH` (value: `"ETH"`)

* `BTC` (value: `"BTC"`)

* `ADA` (value: `"ADA"`)

* `USD` (value: `"USD"`)

* `EUR` (value: `"EUR"`)




<a name="ProfitTotalChangeEnum"></a>
## Enum: ProfitTotalChangeEnum


* `Unchanged` (value: `"Unchanged"`)

* `Up` (value: `"Up"`)

* `Down` (value: `"Down"`)





# CoreApi.InvestmentProgramDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**title** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**level** | **Number** |  | [optional] 
**login** | **String** |  | [optional] 
**logo** | **String** |  | [optional] 
**balance** | **Number** |  | [optional] 
**ownBalance** | **Number** |  | [optional] 
**currency** | **String** |  | [optional] 
**investedTokens** | **Number** |  | [optional] 
**investedAmount** | **Number** |  | [optional] 
**profitFromProgram** | **Number** |  | [optional] 
**tradesCount** | **Number** |  | [optional] 
**investorsCount** | **Number** |  | [optional] 
**periodDuration** | **Number** |  | [optional] 
**programStartDate** | **Date** |  | [optional] 
**programEndDate** | **Date** |  | [optional] 
**startOfPeriod** | **Date** |  | [optional] 
**endOfPeriod** | **Date** |  | [optional] 
**profitAvg** | **Number** |  | [optional] 
**profitTotal** | **Number** |  | [optional] 
**profitAvgPercent** | **Number** |  | [optional] 
**profitTotalPercent** | **Number** |  | [optional] 
**profitTotalChange** | **String** |  | [optional] 
**volumeTotal** | **Number** |  | [optional] 
**volumeAvg** | **Number** |  | [optional] 
**volumeTotalChange** | **String** |  | [optional] 
**availableInvestment** | **Number** |  | [optional] 
**feeSuccess** | **Number** |  | [optional] 
**feeManagement** | **Number** |  | [optional] 
**ipfsHash** | **String** |  | [optional] 
**tradeIpfsHash** | **String** |  | [optional] 
**isEnabled** | **Boolean** |  | [optional] 
**minAccountBalanceUsd** | **Number** |  | [optional] 
**minAccountBalance** | **Number** |  | [optional] 
**chart** | [**[Chart]**](Chart.md) |  | [optional] 
**brokerTitle** | **String** |  | [optional] 
**brokerTradeServerTitle** | **String** |  | [optional] 
**token** | [**Token**](Token.md) |  | [optional] 
**manager** | [**ProfilePublicViewModel**](ProfilePublicViewModel.md) |  | [optional] 
**profitDiagram** | [**PeriodProfitDiagram**](PeriodProfitDiagram.md) |  | [optional] 
**freeTokens** | [**FreeTokens**](FreeTokens.md) |  | [optional] 
**hasNewRequests** | **Boolean** |  | [optional] 
**isHistoryEnable** | **Boolean** |  | [optional] 
**isInvestEnable** | **Boolean** |  | [optional] 
**isWithdrawEnable** | **Boolean** |  | [optional] 
**isOwnProgram** | **Boolean** |  | [optional] 
**canCloseProgram** | **Boolean** |  | [optional] 
**canClosePeriod** | **Boolean** |  | [optional] 
**isFavorite** | **Boolean** |  | [optional] 
**isTournament** | **Boolean** |  | [optional] 
**roundNumber** | **Number** |  | [optional] 
**place** | **Number** |  | [optional] 


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




<a name="VolumeTotalChangeEnum"></a>
## Enum: VolumeTotalChangeEnum


* `Unchanged` (value: `"Unchanged"`)

* `Up` (value: `"Up"`)

* `Down` (value: `"Down"`)





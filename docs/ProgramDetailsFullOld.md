# CoreApiV10.ProgramDetailsFullOld

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **String** |  | [optional] 
**level** | **Number** |  | [optional] 
**levelProgress** | **Number** |  | [optional] 
**periodDuration** | **Number** |  | [optional] 
**periodStarts** | **Date** |  | [optional] 
**periodEnds** | **Date** |  | [optional] 
**entryFeeSelected** | **Number** |  | [optional] 
**entryFeeCurrent** | **Number** |  | [optional] 
**successFeeSelected** | **Number** |  | [optional] 
**successFeeCurrent** | **Number** |  | [optional] 
**stopOutLevelSelected** | **Number** |  | [optional] 
**stopOutLevelCurrent** | **Number** |  | [optional] 
**isReinvesting** | **Boolean** |  | [optional] 
**isSignalProgram** | **Boolean** |  | [optional] 
**signalSuccessFee** | **Number** |  | [optional] 
**signalVolumeFee** | **Number** |  | [optional] 
**leverageMin** | **Number** |  | [optional] 
**leverageMax** | **Number** |  | [optional] 
**ageDays** | **Number** |  | [optional] 
**genesisRatio** | **Number** |  | [optional] 
**investmentScale** | **Number** |  | [optional] 
**volumeScale** | **Number** |  | [optional] 
**tradesDelay** | **String** |  | [optional] 
**availableInvestmentBase** | **Number** | In account currency | [optional] 
**availableInvestmentLimit** | **Number** |  | [optional] 
**totalAvailableInvestment** | **Number** |  | [optional] 
**brokerDetails** | [**BrokerDetailsOld**](BrokerDetailsOld.md) |  | [optional] 
**statistic** | [**ProgramStatistic**](ProgramStatistic.md) |  | [optional] 
**personalProgramDetails** | [**PersonalProgramDetailsFullOld**](PersonalProgramDetailsFullOld.md) | Fields for authorized user | [optional] 
**tags** | [**[ProgramTag]**](ProgramTag.md) |  | [optional] 
**id** | **String** |  | [optional] 
**logo** | **String** |  | [optional] 
**url** | **String** |  | [optional] 
**color** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**title** | **String** |  | [optional] 
**ipfsHash** | **String** |  | [optional] 
**creationDate** | **Date** |  | [optional] 
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




<a name="TradesDelayEnum"></a>
## Enum: TradesDelayEnum


* `None` (value: `"None"`)

* `FiveMinutes` (value: `"FiveMinutes"`)

* `FifteenMinutes` (value: `"FifteenMinutes"`)

* `ThirtyMinutes` (value: `"ThirtyMinutes"`)

* `OneHour` (value: `"OneHour"`)

* `SixHours` (value: `"SixHours"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `None` (value: `"None"`)

* `Pending` (value: `"Pending"`)

* `ErrorCreating` (value: `"ErrorCreating"`)

* `Active` (value: `"Active"`)

* `Closed` (value: `"Closed"`)

* `Archived` (value: `"Archived"`)

* `ClosedDueToInactivity` (value: `"ClosedDueToInactivity"`)





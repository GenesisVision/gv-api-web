# CoreApiV10.OrderSignalModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providers** | [**[OrderSignalProgramInfo]**](OrderSignalProgramInfo.md) |  | [optional] 
**totalCommission** | **Number** |  | [optional] 
**totalCommissionByType** | [**[FeeDetails]**](FeeDetails.md) |  | [optional] 
**tradingAccountId** | **String** |  | [optional] 
**currency** | **String** |  | [optional] 
**id** | **String** |  | [optional] 
**login** | **String** |  | [optional] 
**ticket** | **String** |  | [optional] 
**symbol** | **String** |  | [optional] 
**volume** | **Number** |  | [optional] 
**profit** | **Number** |  | [optional] 
**direction** | **String** |  | [optional] 
**_date** | **Date** |  | [optional] 
**price** | **Number** |  | [optional] 
**priceCurrent** | **Number** |  | [optional] 
**entry** | **String** |  | [optional] 
**baseVolume** | **Number** | Volume in account currency. Only filled when trade have zero commission (for paying fees with GVT) | [optional] 
**originalCommission** | **Number** | Huobi: sell - quote currency (right), buy - base symbol currency (left) | [optional] 
**originalCommissionCurrency** | **String** |  | [optional] 
**commission** | **Number** | In account currency | [optional] 
**swap** | **Number** |  | [optional] 
**showOriginalCommission** | **Boolean** |  | [optional] 
**signalData** | [**OrderModelSignalData**](OrderModelSignalData.md) | For signals | [optional] 


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




<a name="DirectionEnum"></a>
## Enum: DirectionEnum


* `Buy` (value: `"Buy"`)

* `Sell` (value: `"Sell"`)

* `Balance` (value: `"Balance"`)

* `Credit` (value: `"Credit"`)

* `Undefined` (value: `"Undefined"`)

* `ManualBalancing` (value: `"ManualBalancing"`)




<a name="EntryEnum"></a>
## Enum: EntryEnum


* `In` (value: `"In"`)

* `Out` (value: `"Out"`)

* `InOut` (value: `"InOut"`)

* `OutBy` (value: `"OutBy"`)





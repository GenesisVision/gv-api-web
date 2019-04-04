# CoreApiV10.OrderOpenSignalSlaveModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manager** | [**ProfilePublic**](ProfilePublic.md) |  | [optional] 
**program** | [**OrderProgramData**](OrderProgramData.md) |  | [optional] 
**programId** | **String** |  | [optional] 
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
**commission** | **Number** | Useful for spot markets profit calculation.  Huobi: sell - quote currency, buy - base currency | [optional] 


<a name="DirectionEnum"></a>
## Enum: DirectionEnum


* `Buy` (value: `"Buy"`)

* `Sell` (value: `"Sell"`)

* `Balance` (value: `"Balance"`)

* `Credit` (value: `"Credit"`)

* `Undefined` (value: `"Undefined"`)




<a name="EntryEnum"></a>
## Enum: EntryEnum


* `In` (value: `"In"`)

* `Out` (value: `"Out"`)

* `InOut` (value: `"InOut"`)

* `OutBy` (value: `"OutBy"`)





# CoreApiV10.OrderModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**login** | **String** |  | [optional] 
**ticket** | **String** |  | [optional] 
**symbol** | **String** |  | [optional] 
**volume** | **Number** |  | [optional] 
**profit** | **Number** |  | [optional] 
**direction** | [**TradeDirectionType**](TradeDirectionType.md) |  | [optional] 
**_date** | **Date** |  | [optional] 
**price** | **Number** |  | [optional] 
**priceCurrent** | **Number** |  | [optional] 
**entry** | [**TradeEntryType**](TradeEntryType.md) |  | [optional] 
**baseVolume** | **Number** | Volume in account currency. Only filled when trade have zero commission (for paying fees with GVT) | [optional] 
**originalCommission** | **Number** | Huobi: sell - quote currency (right), buy - base symbol currency (left) | [optional] 
**originalCommissionCurrency** | **String** |  | [optional] 
**commission** | **Number** | In account currency | [optional] 
**swap** | **Number** |  | [optional] 
**showOriginalCommission** | **Boolean** |  | [optional] 
**signalData** | [**OrderModelSignalData**](OrderModelSignalData.md) | For signals | [optional] 



import { ChartSimple } from './ChartSimple';
import { Currency } from './Currency';
import { PeriodDate } from './PeriodDate';
import ApiClient from "../ApiClient";
export class ProgramProfitChartOld {
    constructor(data) {
        this['equityChart'] = data['equityChart'];
        this['totalProfit'] = data['totalProfit'];
        this['timeframeProfit'] = data['timeframeProfit'];
        this['programCurrency'] = data['programCurrency'];
        this['trades'] = data['trades'];
        this['successTradesPercent'] = data['successTradesPercent'];
        this['profitFactor'] = data['profitFactor'];
        this['periods'] = data['periods'];
        this['lastPeriodStarts'] = data['lastPeriodStarts'];
        this['lastPeriodEnds'] = data['lastPeriodEnds'];
        this['tradingVolume'] = data['tradingVolume'];
        this['balance'] = data['balance'];
        this['investors'] = data['investors'];
        this['profitChangePercent'] = data['profitChangePercent'];
        this['sharpeRatio'] = data['sharpeRatio'];
        this['sortinoRatio'] = data['sortinoRatio'];
        this['calmarRatio'] = data['calmarRatio'];
        this['maxDrawdown'] = data['maxDrawdown'];
        this['rate'] = data['rate'];
    }
    static constructFromObject(data) {
        return new ProgramProfitChartOld({
            'equityChart': ApiClient.convertToType(data['equityChart'], [ChartSimple]),
            'totalProfit': ApiClient.convertToType(data['totalProfit'], 'number'),
            'timeframeProfit': ApiClient.convertToType(data['timeframeProfit'], 'number'),
            'programCurrency': Currency.constructFromObject(data['programCurrency']),
            'trades': ApiClient.convertToType(data['trades'], 'number'),
            'successTradesPercent': ApiClient.convertToType(data['successTradesPercent'], 'number'),
            'profitFactor': ApiClient.convertToType(data['profitFactor'], 'number'),
            'periods': ApiClient.convertToType(data['periods'], [PeriodDate]),
            'lastPeriodStarts': ApiClient.convertToType(data['lastPeriodStarts'], 'Date'),
            'lastPeriodEnds': ApiClient.convertToType(data['lastPeriodEnds'], 'Date'),
            'tradingVolume': ApiClient.convertToType(data['tradingVolume'], 'number'),
            'balance': ApiClient.convertToType(data['balance'], 'number'),
            'investors': ApiClient.convertToType(data['investors'], 'number'),
            'profitChangePercent': ApiClient.convertToType(data['profitChangePercent'], 'number'),
            'sharpeRatio': ApiClient.convertToType(data['sharpeRatio'], 'number'),
            'sortinoRatio': ApiClient.convertToType(data['sortinoRatio'], 'number'),
            'calmarRatio': ApiClient.convertToType(data['calmarRatio'], 'number'),
            'maxDrawdown': ApiClient.convertToType(data['maxDrawdown'], 'number'),
            'rate': ApiClient.convertToType(data['rate'], 'number'),
        });
    }
}

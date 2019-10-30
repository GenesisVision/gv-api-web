import { ChartSimple } from './ChartSimple';
import { Currency } from './Currency';
import { PeriodDate } from './PeriodDate';
import ApiClient from "../ApiClient";
export class ProgramProfitChartOld {
    static constructFromObject(data, obj = new ProgramProfitChartOld()) {
        if (data) {
            if (data.hasOwnProperty('equityChart')) {
                obj['equityChart'] = ApiClient.convertToType(data['equityChart'], [ChartSimple]);
            }
            if (data.hasOwnProperty('totalProfit')) {
                obj['totalProfit'] = ApiClient.convertToType(data['totalProfit'], 'number');
            }
            if (data.hasOwnProperty('timeframeProfit')) {
                obj['timeframeProfit'] = ApiClient.convertToType(data['timeframeProfit'], 'number');
            }
            if (data.hasOwnProperty('programCurrency')) {
                obj['programCurrency'] = Currency.constructFromObject(data['programCurrency']);
            }
            if (data.hasOwnProperty('trades')) {
                obj['trades'] = ApiClient.convertToType(data['trades'], 'number');
            }
            if (data.hasOwnProperty('successTradesPercent')) {
                obj['successTradesPercent'] = ApiClient.convertToType(data['successTradesPercent'], 'number');
            }
            if (data.hasOwnProperty('profitFactor')) {
                obj['profitFactor'] = ApiClient.convertToType(data['profitFactor'], 'number');
            }
            if (data.hasOwnProperty('periods')) {
                obj['periods'] = ApiClient.convertToType(data['periods'], [PeriodDate]);
            }
            if (data.hasOwnProperty('lastPeriodStarts')) {
                obj['lastPeriodStarts'] = ApiClient.convertToType(data['lastPeriodStarts'], 'Date');
            }
            if (data.hasOwnProperty('lastPeriodEnds')) {
                obj['lastPeriodEnds'] = ApiClient.convertToType(data['lastPeriodEnds'], 'Date');
            }
            if (data.hasOwnProperty('tradingVolume')) {
                obj['tradingVolume'] = ApiClient.convertToType(data['tradingVolume'], 'number');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'number');
            }
            if (data.hasOwnProperty('investors')) {
                obj['investors'] = ApiClient.convertToType(data['investors'], 'number');
            }
            if (data.hasOwnProperty('profitChangePercent')) {
                obj['profitChangePercent'] = ApiClient.convertToType(data['profitChangePercent'], 'number');
            }
            if (data.hasOwnProperty('sharpeRatio')) {
                obj['sharpeRatio'] = ApiClient.convertToType(data['sharpeRatio'], 'number');
            }
            if (data.hasOwnProperty('sortinoRatio')) {
                obj['sortinoRatio'] = ApiClient.convertToType(data['sortinoRatio'], 'number');
            }
            if (data.hasOwnProperty('calmarRatio')) {
                obj['calmarRatio'] = ApiClient.convertToType(data['calmarRatio'], 'number');
            }
            if (data.hasOwnProperty('maxDrawdown')) {
                obj['maxDrawdown'] = ApiClient.convertToType(data['maxDrawdown'], 'number');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'number');
            }
        }
        return obj;
    }
}

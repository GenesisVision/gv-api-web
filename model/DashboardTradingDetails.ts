/**
 * Core API v2.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { DashboardProfits } from './DashboardProfits';
import { ItemsViewModelInvestmentEventViewModel } from './ItemsViewModelInvestmentEventViewModel';

import ApiClient from "../ApiClient";

export class DashboardTradingDetails { 
    public 'equity': number;
    public 'aum': number;
    public 'total': number;
    public 'profits': DashboardProfits;
    public 'events': ItemsViewModelInvestmentEventViewModel;

    constructor(data: {[key: string]: any}) { 
        this['equity'] = data['equity'];
        this['aum'] = data['aum'];
        this['total'] = data['total'];
        this['profits'] = data['profits'];
        this['events'] = data['events'];
    }

    static constructFromObject(data: {[key: string]: any}): DashboardTradingDetails | undefined {
        if (data) {
            return new DashboardTradingDetails({ 
                'equity': ApiClient.convertToType(data['equity'], 'number'),
                'aum': ApiClient.convertToType(data['aum'], 'number'),
                'total': ApiClient.convertToType(data['total'], 'number'),
                'profits': DashboardProfits.constructFromObject(data['profits']),
                'events': ItemsViewModelInvestmentEventViewModel.constructFromObject(data['events']),
            });
        }
    }
}




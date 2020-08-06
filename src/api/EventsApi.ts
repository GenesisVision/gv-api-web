import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { AssetFilterType } from '../model/AssetFilterType';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { EventGroupType } from '../model/EventGroupType';
import { InvestmentEventLocation } from '../model/InvestmentEventLocation';
import { InvestmentEventType } from '../model/InvestmentEventType';
import { InvestmentEventViewModels } from '../model/InvestmentEventViewModels';

export default class EventsApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    getEvents = (        options: {
            eventLocation?: InvestmentEventLocation,
            assetId?: string,
            from?: Date,
            to?: Date,
            dateFrom?: Date,
            dateTo?: Date,
            eventType?: InvestmentEventType,
            assetType?: AssetFilterType,
            assetsIds?: Array<string>,
            forceFilterByIds?: boolean,
            eventGroup?: EventGroupType,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<InvestmentEventViewModels> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/events", {
    },  {
        EventLocation: options['eventLocation'],
        AssetId: options['assetId'],
        From: options['from'],
        To: options['to'],
        DateFrom: options['dateFrom'],
        DateTo: options['dateTo'],
        EventType: options['eventType'],
        AssetType: options['assetType'],
        AssetsIds: options['assetsIds'],
        ForceFilterByIds: options['forceFilterByIds'],
        EventGroup: options['eventGroup'],
        Skip: options['skip'],
        Take: options['take']
    });
    let body = null;

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
        }
    }).then(handleErrors).then<InvestmentEventViewModels>((response: Response) => {
        return response.json();
    })
    }
}

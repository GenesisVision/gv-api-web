import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
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
            eventType?: InvestmentEventType,
            assetType?: AssetFilterType,
            assetsIds?: Array<string>,
            forceFilterByIds?: boolean,
            eventGroup?: EventGroupType,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<InvestmentEventViewModels> => {
        const {
            eventLocation,
            assetId,
            from,
            to,
            eventType,
            assetType,
            assetsIds,
            forceFilterByIds,
            eventGroup,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/events", {
    })

    const query = buildQueryString(path, {
        EventLocation: eventLocation,
        AssetId: assetId,
        From: from,
        To: to,
        EventType: eventType,
        AssetType: assetType,
        AssetsIds: assetsIds,
        ForceFilterByIds: forceFilterByIds,
        EventGroup: eventGroup,
        Skip: skip,
        Take: take
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<InvestmentEventViewModels>((response: Response) => {
        return response.json();
    })
    }
}
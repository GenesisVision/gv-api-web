import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
import { InvestmentEventViewModels } from '../model/InvestmentEventViewModels';

export default class EventsApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    getEvents = (
        authorization: string,
        options: {
            eventLocation?: string,
            assetId?: string,
            from?: Date,
            to?: Date,
            eventType?: string,
            assetType?: string,
            assetsIds?: Array<string>,
            forceFilterByIds?: boolean,
            eventGroup?: string,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<InvestmentEventViewModels> => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getEvents.');
                }
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
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<InvestmentEventViewModels>((response: Response) => {
        return response.json();
    })
    }
}
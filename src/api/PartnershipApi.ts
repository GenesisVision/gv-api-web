import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
import { ItemsViewModelReferralFriend } from '../model/ItemsViewModelReferralFriend';
import { ItemsViewModelRewardDetails } from '../model/ItemsViewModelRewardDetails';
import { PartnershipDetails } from '../model/PartnershipDetails';

export default class PartnershipApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    exportHistory = (
        authorization: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<string> => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling exportHistory.');
                }
        const {
            dateFrom,
            dateTo,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/partnership/rewards/history/export", {
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
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
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

    getDetails = (
        authorization: string,
        options: {
            currency?: string
        } = {},
        init: RequestInit = {}): Promise<PartnershipDetails> => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getDetails.');
                }
        const {
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/partnership/details", {
    })

    const query = buildQueryString(path, {
        currency: currency
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
    }).then(handleErrors).then<PartnershipDetails>((response: Response) => {
        return response.json();
    })
    }

    getReferrals = (
        authorization: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<ItemsViewModelReferralFriend> => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getReferrals.');
                }
        const {
            dateFrom,
            dateTo,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/partnership/referrals", {
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
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
    }).then(handleErrors).then<ItemsViewModelReferralFriend>((response: Response) => {
        return response.json();
    })
    }

    getRewardsHistory = (
        authorization: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<ItemsViewModelRewardDetails> => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getRewardsHistory.');
                }
        const {
            dateFrom,
            dateTo,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/partnership/rewards/history", {
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
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
    }).then(handleErrors).then<ItemsViewModelRewardDetails>((response: Response) => {
        return response.json();
    })
    }
}
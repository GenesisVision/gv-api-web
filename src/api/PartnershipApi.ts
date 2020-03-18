import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { Currency } from '../model/Currency';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { PartnershipDetails } from '../model/PartnershipDetails';
import { ReferralFriendItemsViewModel } from '../model/ReferralFriendItemsViewModel';
import { RewardDetailsItemsViewModel } from '../model/RewardDetailsItemsViewModel';

export default class PartnershipApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    exportHistory = (        options: {
            dateFrom?: Date,
            dateTo?: Date,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<string> => {
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
        }
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

    getDetails = (        options: {
            currency?: Currency
        } = {},
        init: RequestInit = {}): Promise<PartnershipDetails> => {
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
        }
    }).then(handleErrors).then<PartnershipDetails>((response: Response) => {
        return response.json();
    })
    }

    getReferrals = (        options: {
            dateFrom?: Date,
            dateTo?: Date,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<ReferralFriendItemsViewModel> => {
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
        }
    }).then(handleErrors).then<ReferralFriendItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getRewardsHistory = (        options: {
            dateFrom?: Date,
            dateTo?: Date,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<RewardDetailsItemsViewModel> => {
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
        }
    }).then(handleErrors).then<RewardDetailsItemsViewModel>((response: Response) => {
        return response.json();
    })
    }
}
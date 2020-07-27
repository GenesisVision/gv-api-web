import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
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

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/partnership/rewards/history/export", {
    },  {
        DateFrom: options['dateFrom'],
        DateTo: options['dateTo'],
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
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

    getDetails = (        options: {
            currency?: Currency
        } = {},
        init: RequestInit = {}): Promise<PartnershipDetails> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/partnership/details", {
    },  {
        currency: options['currency']
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

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/partnership/referrals", {
    },  {
        DateFrom: options['dateFrom'],
        DateTo: options['dateTo'],
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

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/partnership/rewards/history", {
    },  {
        DateFrom: options['dateFrom'],
        DateTo: options['dateTo'],
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
    }).then(handleErrors).then<RewardDetailsItemsViewModel>((response: Response) => {
        return response.json();
    })
    }
}

import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { AttachToExternalSignalProviderCommon } from '../model/AttachToExternalSignalProviderCommon';
import { AttachToExternalSignalProviderExt } from '../model/AttachToExternalSignalProviderExt';
import { AttachToSignalProvider } from '../model/AttachToSignalProvider';
import { DetachFromExternalSignalProvider } from '../model/DetachFromExternalSignalProvider';
import { DetachFromSignalProvider } from '../model/DetachFromSignalProvider';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { ItemsViewModelSignalTradingEvent } from '../model/ItemsViewModelSignalTradingEvent';
import { ItemsViewModelTradingAccountDetails } from '../model/ItemsViewModelTradingAccountDetails';
import { TradesSignalViewModel } from '../model/TradesSignalViewModel';

export default class SignalApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    attachSlaveToMasterExternalCommonAccount = (
        id: string,
        authorization: string,
        options: {
            body?: AttachToExternalSignalProviderCommon
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling attachSlaveToMasterExternalCommonAccount.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling attachSlaveToMasterExternalCommonAccount.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/signal/external/attach/{id}/common", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    attachSlaveToMasterExternalPrivateAccount = (
        id: string,
        authorization: string,
        options: {
            body?: AttachToExternalSignalProviderExt
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling attachSlaveToMasterExternalPrivateAccount.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling attachSlaveToMasterExternalPrivateAccount.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/signal/external/attach/{id}/private", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    attachSlaveToMasterInternal = (
        id: string,
        authorization: string,
        options: {
            body?: AttachToSignalProvider
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling attachSlaveToMasterInternal.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling attachSlaveToMasterInternal.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/signal/attach/{id}", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    closeTradeInternal = (
        id: string,
        authorization: string,
        options: {
            assetId?: string
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling closeTradeInternal.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling closeTradeInternal.');
                }
        const {
            assetId
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/signal/trades/{id}/close", {
        id
    })

    const query = buildQueryString(path, {
        assetId: assetId
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    detachSlaveFromMasterExternal = (
        id: string,
        authorization: string,
        options: {
            body?: DetachFromExternalSignalProvider
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling detachSlaveFromMasterExternal.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling detachSlaveFromMasterExternal.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/signal/external/detach/{id}", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    detachSlaveFromMasterInternal = (
        id: string,
        authorization: string,
        options: {
            body?: DetachFromSignalProvider
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling detachSlaveFromMasterInternal.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling detachSlaveFromMasterInternal.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/signal/detach/{id}", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    getOpenSignalTrades = (
        authorization: string,
        options: {
            sorting?: string,
            symbol?: string,
            accountId?: string,
            accountCurrency?: string,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<TradesSignalViewModel> => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getOpenSignalTrades.');
                }
        const {
            sorting,
            symbol,
            accountId,
            accountCurrency,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/signal/trades/open", {
    })

    const query = buildQueryString(path, {
        Sorting: sorting,
        Symbol: symbol,
        AccountId: accountId,
        AccountCurrency: accountCurrency,
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
    }).then(handleErrors).then<TradesSignalViewModel>((response: Response) => {
        return response.json();
    })
    }

    getSignalTradingLog = (
        authorization: string,
        options: {
            accountId?: string,
            accountCurrency?: string,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<ItemsViewModelSignalTradingEvent> => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getSignalTradingLog.');
                }
        const {
            accountId,
            accountCurrency,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/signal/trades/log", {
    })

    const query = buildQueryString(path, {
        AccountId: accountId,
        AccountCurrency: accountCurrency,
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
    }).then(handleErrors).then<ItemsViewModelSignalTradingEvent>((response: Response) => {
        return response.json();
    })
    }

    getSubscriberAccountsForAsset = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<ItemsViewModelTradingAccountDetails> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getSubscriberAccountsForAsset.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getSubscriberAccountsForAsset.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/signal/attach/{id}/accounts", {
        id
    })

    const query = buildQueryString(path, {
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
    }).then(handleErrors).then<ItemsViewModelTradingAccountDetails>((response: Response) => {
        return response.json();
    })
    }

    updateExternalSubscriptionSettings = (
        id: string,
        authorization: string,
        options: {
            body?: AttachToExternalSignalProviderExt
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateExternalSubscriptionSettings.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling updateExternalSubscriptionSettings.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/signal/external/{id}/update", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    updateSubscriptionSettings = (
        id: string,
        authorization: string,
        options: {
            body?: AttachToSignalProvider
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateSubscriptionSettings.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling updateSubscriptionSettings.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/signal/{id}/update", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }
}
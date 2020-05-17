import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { AttachToExternalSignalProviderCommon } from '../model/AttachToExternalSignalProviderCommon';
import { AttachToExternalSignalProviderExt } from '../model/AttachToExternalSignalProviderExt';
import { AttachToSignalProvider } from '../model/AttachToSignalProvider';
import { Currency } from '../model/Currency';
import { DetachFromExternalSignalProvider } from '../model/DetachFromExternalSignalProvider';
import { DetachFromSignalProvider } from '../model/DetachFromSignalProvider';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { SignalTradingEventItemsViewModel } from '../model/SignalTradingEventItemsViewModel';
import { TradingAccountDetailsItemsViewModel } from '../model/TradingAccountDetailsItemsViewModel';

export default class SignalApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    attachSlaveToMasterExternalCommonAccount = (
        id: string,
        options: {
            body?: AttachToExternalSignalProviderCommon
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling attachSlaveToMasterExternalCommonAccount.');
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
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    attachSlaveToMasterExternalPrivateAccount = (
        id: string,
        options: {
            body?: AttachToExternalSignalProviderExt
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling attachSlaveToMasterExternalPrivateAccount.');
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
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    attachSlaveToMasterInternal = (
        id: string,
        options: {
            body?: AttachToSignalProvider
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling attachSlaveToMasterInternal.');
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
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    detachSlaveFromMasterExternal = (
        id: string,
        options: {
            body?: DetachFromExternalSignalProvider
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling detachSlaveFromMasterExternal.');
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
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    detachSlaveFromMasterInternal = (
        id: string,
        options: {
            body?: DetachFromSignalProvider
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling detachSlaveFromMasterInternal.');
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
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    getSignalTradingLog = (        options: {
            accountId?: string,
            accountCurrency?: Currency,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<SignalTradingEventItemsViewModel> => {
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
        }
    }).then(handleErrors).then<SignalTradingEventItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getSubscriberAccountsForAsset = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<TradingAccountDetailsItemsViewModel> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getSubscriberAccountsForAsset.');
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
        }
    }).then(handleErrors).then<TradingAccountDetailsItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    updateExternalSubscriptionSettings = (
        id: string,
        options: {
            body?: AttachToExternalSignalProviderExt
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateExternalSubscriptionSettings.');
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
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    updateSubscriptionSettings = (
        id: string,
        options: {
            body?: AttachToSignalProvider
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateSubscriptionSettings.');
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
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }
}
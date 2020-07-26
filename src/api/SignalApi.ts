import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
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
            checkRequiredParameter(id, "id", "attachSlaveToMasterExternalCommonAccount");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/signal/external/attach/{id}/common", {
        id
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
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
            checkRequiredParameter(id, "id", "attachSlaveToMasterExternalPrivateAccount");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/signal/external/attach/{id}/private", {
        id
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
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
            checkRequiredParameter(id, "id", "attachSlaveToMasterInternal");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/signal/attach/{id}", {
        id
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
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
            checkRequiredParameter(id, "id", "detachSlaveFromMasterExternal");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/signal/external/detach/{id}", {
        id
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
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
            checkRequiredParameter(id, "id", "detachSlaveFromMasterInternal");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/signal/detach/{id}", {
        id
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
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

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/signal/trades/log", {
    },  {
        AccountId: options['accountId'],
        AccountCurrency: options['accountCurrency'],
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
    }).then(handleErrors).then<SignalTradingEventItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getSubscriberAccountsForAsset = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<TradingAccountDetailsItemsViewModel> => {
            checkRequiredParameter(id, "id", "getSubscriberAccountsForAsset");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/signal/attach/{id}/accounts", {
        id
    },  {
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
            checkRequiredParameter(id, "id", "updateExternalSubscriptionSettings");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/signal/external/{id}/update", {
        id
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
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
            checkRequiredParameter(id, "id", "updateSubscriptionSettings");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/signal/{id}/update", {
        id
    },  {
    });
    let body = JSON.stringify(options['body']);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }
}

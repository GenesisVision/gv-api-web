import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { CreateWithdrawalRequestModel } from '../model/CreateWithdrawalRequestModel';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { InternalTransferRequest } from '../model/InternalTransferRequest';
import { ItemsViewModelTransactionViewModel } from '../model/ItemsViewModelTransactionViewModel';
import { UserCommissionData } from '../model/UserCommissionData';
import { WalletDepositSummary } from '../model/WalletDepositSummary';
import { WalletMultiAvailable } from '../model/WalletMultiAvailable';
import { WalletSummary } from '../model/WalletSummary';
import { WithdrawalSummary } from '../model/WithdrawalSummary';

export default class WalletApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    cancelWithdrawalRequest = (
        txId: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (txId === null || txId === undefined) {
                throw new Error('Required parameter txId was null or undefined when calling cancelWithdrawalRequest.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling cancelWithdrawalRequest.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/wallet/withdraw/request/cancel/{txId}", {
        txId
    })

    const query = buildQueryString(path, {
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

    confirmWithdrawalRequestByCode = (        options: {
            requestId?: string,
            code?: string
        } = {},
        init: RequestInit = {}): Promise<Response> => {
        const {
            requestId,
            code
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/wallet/withdraw/request/confirm", {
    })

    const query = buildQueryString(path, {
        requestId: requestId,
        code: code
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
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    createWithdrawalRequest = (
        authorization: string,
        options: {
            body?: CreateWithdrawalRequestModel
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling createWithdrawalRequest.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/wallet/withdraw/request/new", {
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

    getAccountsAvailable = (
        currency: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<WalletMultiAvailable> => {
                if (currency === null || currency === undefined) {
                throw new Error('Required parameter currency was null or undefined when calling getAccountsAvailable.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getAccountsAvailable.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/wallet/accounts/{currency}/available", {
        currency
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
    }).then(handleErrors).then<WalletMultiAvailable>((response: Response) => {
        return response.json();
    })
    }

    getGMCommissionData = (
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<UserCommissionData> => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getGMCommissionData.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/wallet/fee/gvtholding", {
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
    }).then(handleErrors).then<UserCommissionData>((response: Response) => {
        return response.json();
    })
    }

    getTransactionsExternal = (
        authorization: string,
        options: {
            transactionType?: string,
            dateFrom?: Date,
            dateTo?: Date,
            currency?: string,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<ItemsViewModelTransactionViewModel> => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getTransactionsExternal.');
                }
        const {
            transactionType,
            dateFrom,
            dateTo,
            currency,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/wallet/transactions/external", {
    })

    const query = buildQueryString(path, {
        TransactionType: transactionType,
        DateFrom: dateFrom,
        DateTo: dateTo,
        Currency: currency,
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
    }).then(handleErrors).then<ItemsViewModelTransactionViewModel>((response: Response) => {
        return response.json();
    })
    }

    getTransactionsInternal = (
        authorization: string,
        options: {
            transactionType?: string,
            dateFrom?: Date,
            dateTo?: Date,
            currency?: string,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<ItemsViewModelTransactionViewModel> => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getTransactionsInternal.');
                }
        const {
            transactionType,
            dateFrom,
            dateTo,
            currency,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/wallet/transactions/internal", {
    })

    const query = buildQueryString(path, {
        TransactionType: transactionType,
        DateFrom: dateFrom,
        DateTo: dateTo,
        Currency: currency,
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
    }).then(handleErrors).then<ItemsViewModelTransactionViewModel>((response: Response) => {
        return response.json();
    })
    }

    getUserWithdrawalSummary = (
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<WithdrawalSummary> => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getUserWithdrawalSummary.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/wallet/withdraw/info", {
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
    }).then(handleErrors).then<WithdrawalSummary>((response: Response) => {
        return response.json();
    })
    }

    getWalletAvailable = (
        currency: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<WalletMultiAvailable> => {
                if (currency === null || currency === undefined) {
                throw new Error('Required parameter currency was null or undefined when calling getWalletAvailable.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getWalletAvailable.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/wallet/{currency}/available", {
        currency
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
    }).then(handleErrors).then<WalletMultiAvailable>((response: Response) => {
        return response.json();
    })
    }

    getWalletSummary = (
        currency: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<WalletSummary> => {
                if (currency === null || currency === undefined) {
                throw new Error('Required parameter currency was null or undefined when calling getWalletSummary.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getWalletSummary.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/wallet/{currency}", {
        currency
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
    }).then(handleErrors).then<WalletSummary>((response: Response) => {
        return response.json();
    })
    }

    resendWithdrawalRequestEmail = (
        txId: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (txId === null || txId === undefined) {
                throw new Error('Required parameter txId was null or undefined when calling resendWithdrawalRequestEmail.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling resendWithdrawalRequestEmail.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/wallet/withdraw/request/resend/{txId}", {
        txId
    })

    const query = buildQueryString(path, {
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

    switchPayFeeInGvtOff = (
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling switchPayFeeInGvtOff.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/wallet/paygvtfee/off", {
    })

    const query = buildQueryString(path, {
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

    switchPayFeeInGvtOn = (
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling switchPayFeeInGvtOn.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/wallet/paygvtfee/on", {
    })

    const query = buildQueryString(path, {
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

    transfer = (
        authorization: string,
        options: {
            body?: InternalTransferRequest
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling transfer.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/wallet/transfer", {
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

    updateDepositWallets = (
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<WalletDepositSummary> => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling updateDepositWallets.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/wallet/deposit/update", {
    })

    const query = buildQueryString(path, {
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
    }).then(handleErrors).then<WalletDepositSummary>((response: Response) => {
        return response.json();
    })
    }
}
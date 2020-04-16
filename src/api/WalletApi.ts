import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { CreateWithdrawalRequestModel } from '../model/CreateWithdrawalRequestModel';
import { Currency } from '../model/Currency';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { InternalTransferRequest } from '../model/InternalTransferRequest';
import { TransactionExternalType } from '../model/TransactionExternalType';
import { TransactionInternalType } from '../model/TransactionInternalType';
import { TransactionViewModelItemsViewModel } from '../model/TransactionViewModelItemsViewModel';
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
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (txId === null || txId === undefined) {
                throw new Error('Required parameter txId was null or undefined when calling cancelWithdrawalRequest.');
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

    createWithdrawalRequest = (        options: {
            body?: CreateWithdrawalRequestModel
        } = {},
        init: RequestInit = {}): Promise<Response> => {

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
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    getAccountsAvailable = (
        currency: Currency,
        options: {
        } = {},
        init: RequestInit = {}): Promise<WalletMultiAvailable> => {
                if (currency === null || currency === undefined) {
                throw new Error('Required parameter currency was null or undefined when calling getAccountsAvailable.');
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
        }
    }).then(handleErrors).then<WalletMultiAvailable>((response: Response) => {
        return response.json();
    })
    }

    getGMCommissionData = (        options: {
        } = {},
        init: RequestInit = {}): Promise<UserCommissionData> => {

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
        }
    }).then(handleErrors).then<UserCommissionData>((response: Response) => {
        return response.json();
    })
    }

    getTransactionsExternal = (        options: {
            transactionType?: TransactionExternalType,
            dateFrom?: Date,
            dateTo?: Date,
            currency?: Currency,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<TransactionViewModelItemsViewModel> => {
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
        }
    }).then(handleErrors).then<TransactionViewModelItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getTransactionsInternal = (        options: {
            transactionType?: TransactionInternalType,
            dateFrom?: Date,
            dateTo?: Date,
            currency?: Currency,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}): Promise<TransactionViewModelItemsViewModel> => {
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
        }
    }).then(handleErrors).then<TransactionViewModelItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getUserWithdrawalSummary = (        options: {
        } = {},
        init: RequestInit = {}): Promise<WithdrawalSummary> => {

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
        }
    }).then(handleErrors).then<WithdrawalSummary>((response: Response) => {
        return response.json();
    })
    }

    getWalletAvailable = (
        currency: Currency,
        options: {
        } = {},
        init: RequestInit = {}): Promise<WalletMultiAvailable> => {
                if (currency === null || currency === undefined) {
                throw new Error('Required parameter currency was null or undefined when calling getWalletAvailable.');
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
        }
    }).then(handleErrors).then<WalletMultiAvailable>((response: Response) => {
        return response.json();
    })
    }

    getWalletSummary = (
        currency: Currency,
        options: {
        } = {},
        init: RequestInit = {}): Promise<WalletSummary> => {
                if (currency === null || currency === undefined) {
                throw new Error('Required parameter currency was null or undefined when calling getWalletSummary.');
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
        }
    }).then(handleErrors).then<WalletSummary>((response: Response) => {
        return response.json();
    })
    }

    resendWithdrawalRequestEmail = (
        txId: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
                if (txId === null || txId === undefined) {
                throw new Error('Required parameter txId was null or undefined when calling resendWithdrawalRequestEmail.');
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
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    transfer = (        options: {
            body?: InternalTransferRequest
        } = {},
        init: RequestInit = {}): Promise<Response> => {

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
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    updateDepositWallets = (        options: {
        } = {},
        init: RequestInit = {}): Promise<WalletDepositSummary> => {

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
        }
    }).then(handleErrors).then<WalletDepositSummary>((response: Response) => {
        return response.json();
    })
    }
}
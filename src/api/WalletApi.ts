import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
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
            checkRequiredParameter(txId, "txId", "cancelWithdrawalRequest");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/wallet/withdraw/request/cancel/{txId}", {
        txId
    },  {
    });
    let body = null;

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

    confirmWithdrawalRequestByCode = (        options: {
            requestId?: string,
            code?: string
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/wallet/withdraw/request/confirm", {
    },  {
        requestId: options['requestId'],
        code: options['code']
    });
    let body = null;

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

    createWithdrawalRequest = (        options: {
            body?: CreateWithdrawalRequestModel
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/wallet/withdraw/request/new", {
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

    getAccountsAvailable = (
        currency: Currency,
        options: {
        } = {},
        init: RequestInit = {}): Promise<WalletMultiAvailable> => {
            checkRequiredParameter(currency, "currency", "getAccountsAvailable");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/wallet/accounts/{currency}/available", {
        currency
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
    }).then(handleErrors).then<WalletMultiAvailable>((response: Response) => {
        return response.json();
    })
    }

    getGMCommissionData = (        options: {
        } = {},
        init: RequestInit = {}): Promise<UserCommissionData> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/wallet/fee/gvtholding", {
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

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/wallet/transactions/external", {
    },  {
        TransactionType: options['transactionType'],
        DateFrom: options['dateFrom'],
        DateTo: options['dateTo'],
        Currency: options['currency'],
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

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/wallet/transactions/internal", {
    },  {
        TransactionType: options['transactionType'],
        DateFrom: options['dateFrom'],
        DateTo: options['dateTo'],
        Currency: options['currency'],
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
    }).then(handleErrors).then<TransactionViewModelItemsViewModel>((response: Response) => {
        return response.json();
    })
    }

    getUserWithdrawalSummary = (        options: {
        } = {},
        init: RequestInit = {}): Promise<WithdrawalSummary> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/wallet/withdraw/info", {
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
    }).then(handleErrors).then<WithdrawalSummary>((response: Response) => {
        return response.json();
    })
    }

    getWalletAvailable = (
        currency: Currency,
        options: {
        } = {},
        init: RequestInit = {}): Promise<WalletMultiAvailable> => {
            checkRequiredParameter(currency, "currency", "getWalletAvailable");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/wallet/{currency}/available", {
        currency
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
    }).then(handleErrors).then<WalletMultiAvailable>((response: Response) => {
        return response.json();
    })
    }

    getWalletSummary = (
        currency: Currency,
        options: {
        } = {},
        init: RequestInit = {}): Promise<WalletSummary> => {
            checkRequiredParameter(currency, "currency", "getWalletSummary");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/wallet/{currency}", {
        currency
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
    }).then(handleErrors).then<WalletSummary>((response: Response) => {
        return response.json();
    })
    }

    resendWithdrawalRequestEmail = (
        txId: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<Response> => {
            checkRequiredParameter(txId, "txId", "resendWithdrawalRequestEmail");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/wallet/withdraw/request/resend/{txId}", {
        txId
    },  {
    });
    let body = null;

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

    transfer = (        options: {
            body?: InternalTransferRequest
        } = {},
        init: RequestInit = {}): Promise<Response> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/wallet/transfer", {
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

    updateDepositWallets = (        options: {
        } = {},
        init: RequestInit = {}): Promise<WalletDepositSummary> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/wallet/deposit/update", {
    },  {
    });
    let body = null;

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
        }
    }).then(handleErrors).then<WalletDepositSummary>((response: Response) => {
        return response.json();
    })
    }
}

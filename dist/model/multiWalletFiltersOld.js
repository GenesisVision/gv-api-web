import ApiClient from "../ApiClient";
export class MultiWalletFiltersOld {
    constructor() {
    }
    static constructFromObject(data, obj = new MultiWalletFiltersOld()) {
        if (data) {
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = ApiClient.convertToType(data['transactionType'], ['string']);
            }
            if (data.hasOwnProperty('externalTransactionType')) {
                obj['externalTransactionType'] = ApiClient.convertToType(data['externalTransactionType'], ['string']);
            }
        }
        return obj;
    }
}

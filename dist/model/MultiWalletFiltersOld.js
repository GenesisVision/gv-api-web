import ApiClient from "../ApiClient";
export class MultiWalletFiltersOld {
    constructor(data) {
        this['transactionType'] = data['transactionType'];
        this['externalTransactionType'] = data['externalTransactionType'];
    }
    static constructFromObject(data) {
        return new MultiWalletFiltersOld({
            'transactionType': ApiClient.convertToType(data['transactionType'], ['string']),
            'externalTransactionType': ApiClient.convertToType(data['externalTransactionType'], ['string']),
        });
    }
}

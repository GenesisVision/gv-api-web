import ApiClient from "../ApiClient";
export class ExternalTransactionDetails {
    static constructFromObject(data, obj = new ExternalTransactionDetails()) {
        if (data) {
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'string');
            }
            if (data.hasOwnProperty('descriptionUrl')) {
                obj['descriptionUrl'] = ApiClient.convertToType(data['descriptionUrl'], 'string');
            }
            if (data.hasOwnProperty('fromAddress')) {
                obj['fromAddress'] = ApiClient.convertToType(data['fromAddress'], 'string');
            }
            if (data.hasOwnProperty('isEnableActions')) {
                obj['isEnableActions'] = ApiClient.convertToType(data['isEnableActions'], 'boolean');
            }
        }
        return obj;
    }
}

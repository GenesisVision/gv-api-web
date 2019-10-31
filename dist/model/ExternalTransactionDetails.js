import ApiClient from "../ApiClient";
export class ExternalTransactionDetails {
    constructor(data) {
        this['description'] = data['description'];
        this['descriptionUrl'] = data['descriptionUrl'];
        this['fromAddress'] = data['fromAddress'];
        this['isEnableActions'] = data['isEnableActions'];
    }
    static constructFromObject(data) {
        return new ExternalTransactionDetails({
            'description': ApiClient.convertToType(data['description'], 'string'),
            'descriptionUrl': ApiClient.convertToType(data['descriptionUrl'], 'string'),
            'fromAddress': ApiClient.convertToType(data['fromAddress'], 'string'),
            'isEnableActions': ApiClient.convertToType(data['isEnableActions'], 'boolean'),
        });
    }
}

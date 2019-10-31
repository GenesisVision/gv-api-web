import ApiClient from "../ApiClient";
export class UpdatePersonalDetailViewModel {
    constructor(data) {
        this['firstName'] = data['firstName'];
        this['middleName'] = data['middleName'];
        this['lastName'] = data['lastName'];
        this['birthday'] = data['birthday'];
        this['citizenship'] = data['citizenship'];
        this['gender'] = data['gender'];
        this['documentId'] = data['documentId'];
        this['phoneNumber'] = data['phoneNumber'];
        this['country'] = data['country'];
        this['city'] = data['city'];
        this['address'] = data['address'];
        this['index'] = data['index'];
    }
    static constructFromObject(data) {
        if (data) {
            return new UpdatePersonalDetailViewModel({
                'firstName': ApiClient.convertToType(data['firstName'], 'string'),
                'middleName': ApiClient.convertToType(data['middleName'], 'string'),
                'lastName': ApiClient.convertToType(data['lastName'], 'string'),
                'birthday': ApiClient.convertToType(data['birthday'], 'Date'),
                'citizenship': ApiClient.convertToType(data['citizenship'], 'string'),
                'gender': ApiClient.convertToType(data['gender'], 'boolean'),
                'documentId': ApiClient.convertToType(data['documentId'], 'string'),
                'phoneNumber': ApiClient.convertToType(data['phoneNumber'], 'string'),
                'country': ApiClient.convertToType(data['country'], 'string'),
                'city': ApiClient.convertToType(data['city'], 'string'),
                'address': ApiClient.convertToType(data['address'], 'string'),
                'index': ApiClient.convertToType(data['index'], 'string'),
            });
        }
    }
}

import ApiClient from "../ApiClient";
export class UpdatePersonalDetailViewModel {
    constructor() {
    }
    static constructFromObject(data, obj = new UpdatePersonalDetailViewModel()) {
        if (data) {
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'string');
            }
            if (data.hasOwnProperty('middleName')) {
                obj['middleName'] = ApiClient.convertToType(data['middleName'], 'string');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'string');
            }
            if (data.hasOwnProperty('birthday')) {
                obj['birthday'] = ApiClient.convertToType(data['birthday'], 'Date');
            }
            if (data.hasOwnProperty('citizenship')) {
                obj['citizenship'] = ApiClient.convertToType(data['citizenship'], 'string');
            }
            if (data.hasOwnProperty('gender')) {
                obj['gender'] = ApiClient.convertToType(data['gender'], 'boolean');
            }
            if (data.hasOwnProperty('documentId')) {
                obj['documentId'] = ApiClient.convertToType(data['documentId'], 'string');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'string');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'string');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'string');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'string');
            }
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'string');
            }
        }
        return obj;
    }
}

import { UserVerificationStatus } from './UserVerificationStatus';
import ApiClient from "../ApiClient";
export class ProfileFullViewModel {
    constructor(data) {
        this['id'] = data['id'];
        this['email'] = data['email'];
        this['firstName'] = data['firstName'];
        this['middleName'] = data['middleName'];
        this['lastName'] = data['lastName'];
        this['country'] = data['country'];
        this['city'] = data['city'];
        this['address'] = data['address'];
        this['phone'] = data['phone'];
        this['phoneNumberConfirmed'] = data['phoneNumberConfirmed'];
        this['birthday'] = data['birthday'];
        this['gender'] = data['gender'];
        this['avatar'] = data['avatar'];
        this['about'] = data['about'];
        this['userName'] = data['userName'];
        this['index'] = data['index'];
        this['citizenship'] = data['citizenship'];
        this['refUrl'] = data['refUrl'];
        this['verificationStatus'] = data['verificationStatus'];
    }
    static constructFromObject(data) {
        return new ProfileFullViewModel({
            'id': ApiClient.convertToType(data['id'], 'string'),
            'email': ApiClient.convertToType(data['email'], 'string'),
            'firstName': ApiClient.convertToType(data['firstName'], 'string'),
            'middleName': ApiClient.convertToType(data['middleName'], 'string'),
            'lastName': ApiClient.convertToType(data['lastName'], 'string'),
            'country': ApiClient.convertToType(data['country'], 'string'),
            'city': ApiClient.convertToType(data['city'], 'string'),
            'address': ApiClient.convertToType(data['address'], 'string'),
            'phone': ApiClient.convertToType(data['phone'], 'string'),
            'phoneNumberConfirmed': ApiClient.convertToType(data['phoneNumberConfirmed'], 'boolean'),
            'birthday': ApiClient.convertToType(data['birthday'], 'Date'),
            'gender': ApiClient.convertToType(data['gender'], 'boolean'),
            'avatar': ApiClient.convertToType(data['avatar'], 'string'),
            'about': ApiClient.convertToType(data['about'], 'string'),
            'userName': ApiClient.convertToType(data['userName'], 'string'),
            'index': ApiClient.convertToType(data['index'], 'string'),
            'citizenship': ApiClient.convertToType(data['citizenship'], 'string'),
            'refUrl': ApiClient.convertToType(data['refUrl'], 'string'),
            'verificationStatus': UserVerificationStatus.constructFromObject(data['verificationStatus']),
        });
    }
}

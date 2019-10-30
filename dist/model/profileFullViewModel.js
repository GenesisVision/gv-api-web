import { UserVerificationStatus } from './userVerificationStatus';
import ApiClient from "../ApiClient";
export class ProfileFullViewModel {
    constructor() {
    }
    static constructFromObject(data, obj = new ProfileFullViewModel()) {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'string');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'string');
            }
            if (data.hasOwnProperty('middleName')) {
                obj['middleName'] = ApiClient.convertToType(data['middleName'], 'string');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'string');
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
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'string');
            }
            if (data.hasOwnProperty('phoneNumberConfirmed')) {
                obj['phoneNumberConfirmed'] = ApiClient.convertToType(data['phoneNumberConfirmed'], 'boolean');
            }
            if (data.hasOwnProperty('birthday')) {
                obj['birthday'] = ApiClient.convertToType(data['birthday'], 'Date');
            }
            if (data.hasOwnProperty('gender')) {
                obj['gender'] = ApiClient.convertToType(data['gender'], 'boolean');
            }
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = ApiClient.convertToType(data['avatar'], 'string');
            }
            if (data.hasOwnProperty('about')) {
                obj['about'] = ApiClient.convertToType(data['about'], 'string');
            }
            if (data.hasOwnProperty('userName')) {
                obj['userName'] = ApiClient.convertToType(data['userName'], 'string');
            }
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'string');
            }
            if (data.hasOwnProperty('citizenship')) {
                obj['citizenship'] = ApiClient.convertToType(data['citizenship'], 'string');
            }
            if (data.hasOwnProperty('refUrl')) {
                obj['refUrl'] = ApiClient.convertToType(data['refUrl'], 'string');
            }
            if (data.hasOwnProperty('verificationStatus')) {
                obj['verificationStatus'] = UserVerificationStatus.constructFromObject(data['verificationStatus']);
            }
        }
        return obj;
    }
}

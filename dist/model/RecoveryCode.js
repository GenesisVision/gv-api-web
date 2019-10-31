import ApiClient from "../ApiClient";
export class RecoveryCode {
    constructor(data) {
        this['code'] = data['code'];
        this['isActive'] = data['isActive'];
    }
    static constructFromObject(data) {
        return new RecoveryCode({
            'code': ApiClient.convertToType(data['code'], 'string'),
            'isActive': ApiClient.convertToType(data['isActive'], 'boolean'),
        });
    }
}

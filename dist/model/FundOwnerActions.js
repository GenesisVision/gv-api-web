import ApiClient from "../ApiClient";
export class FundOwnerActions {
    constructor(data) {
        this['canClose'] = data['canClose'];
        this['canReallocate'] = data['canReallocate'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundOwnerActions({
                'canClose': ApiClient.convertToType(data['canClose'], 'boolean'),
                'canReallocate': ApiClient.convertToType(data['canReallocate'], 'boolean'),
            });
        }
    }
}

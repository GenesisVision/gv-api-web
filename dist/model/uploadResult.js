import ApiClient from "../ApiClient";
export class UploadResult {
    constructor() {
    }
    static constructFromObject(data, obj = new UploadResult()) {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
        }
        return obj;
    }
}

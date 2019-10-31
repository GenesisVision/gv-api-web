import ApiClient from "../ApiClient";
export class UploadResult {
    constructor(data) {
        this['id'] = data['id'];
    }
    static constructFromObject(data) {
        return new UploadResult({
            'id': ApiClient.convertToType(data['id'], 'string'),
        });
    }
}

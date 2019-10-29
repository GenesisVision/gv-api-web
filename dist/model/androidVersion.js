import ApiClient from "../ApiClient";
export class AndroidVersion {
    constructor() {
    }
    static constructFromObject(data, obj = new AndroidVersion()) {
        if (data) {
            if (data.hasOwnProperty('versionCode')) {
                obj['versionCode'] = ApiClient.convertToType(data['versionCode'], 'string');
            }
            if (data.hasOwnProperty('versionName')) {
                obj['versionName'] = ApiClient.convertToType(data['versionName'], 'string');
            }
        }
        return obj;
    }
}

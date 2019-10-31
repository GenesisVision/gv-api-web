import ApiClient from "../ApiClient";
export class AndroidVersion {
    constructor(data) {
        this['versionCode'] = data['versionCode'];
        this['versionName'] = data['versionName'];
    }
    static constructFromObject(data) {
        return new AndroidVersion({
            'versionCode': ApiClient.convertToType(data['versionCode'], 'string'),
            'versionName': ApiClient.convertToType(data['versionName'], 'string'),
        });
    }
}

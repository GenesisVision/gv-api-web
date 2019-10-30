import ApiClient from "../ApiClient";
export class IOsAppVersion {
    static constructFromObject(data, obj = new IOsAppVersion()) {
        if (data) {
            if (data.hasOwnProperty('minVersion')) {
                obj['minVersion'] = ApiClient.convertToType(data['minVersion'], 'string');
            }
            if (data.hasOwnProperty('lastVersion')) {
                obj['lastVersion'] = ApiClient.convertToType(data['lastVersion'], 'string');
            }
        }
        return obj;
    }
}

import ApiClient from "../ApiClient";
export class IOsAppVersion {
    constructor(data) {
        this['minVersion'] = data['minVersion'];
        this['lastVersion'] = data['lastVersion'];
    }
    static constructFromObject(data) {
        return new IOsAppVersion({
            'minVersion': ApiClient.convertToType(data['minVersion'], 'string'),
            'lastVersion': ApiClient.convertToType(data['lastVersion'], 'string'),
        });
    }
}

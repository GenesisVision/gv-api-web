import ApiClient from "../ApiClient";
export class SiteMapInfo {
    constructor(data) {
        this['programs'] = data['programs'];
        this['funds'] = data['funds'];
        this['follow'] = data['follow'];
        this['users'] = data['users'];
        this['actives'] = data['actives'];
    }
    static constructFromObject(data) {
        if (data) {
            return new SiteMapInfo({
                'programs': ApiClient.convertToType(data['programs'], ['string']),
                'funds': ApiClient.convertToType(data['funds'], ['string']),
                'follow': ApiClient.convertToType(data['follow'], ['string']),
                'users': ApiClient.convertToType(data['users'], ['string']),
                'actives': ApiClient.convertToType(data['actives'], ['string']),
            });
        }
    }
}

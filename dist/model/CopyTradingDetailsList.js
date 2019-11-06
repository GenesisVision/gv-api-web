import { Currency } from './Currency';
import { PersonalCopyTradingAccountInfo } from './PersonalCopyTradingAccountInfo';
import { ProfilePublicShort } from './ProfilePublicShort';
import { ProgramTag } from './ProgramTag';
import ApiClient from "../ApiClient";
export class CopyTradingDetailsList {
    constructor(data) {
        this['id'] = data['id'];
        this['title'] = data['title'];
        this['description'] = data['description'];
        this['logo'] = data['logo'];
        this['creationDate'] = data['creationDate'];
        this['currency'] = data['currency'];
        this['subscribersCount'] = data['subscribersCount'];
        this['tradesCount'] = data['tradesCount'];
        this['status'] = data['status'];
        this['owner'] = data['owner'];
        this['personalDetails'] = data['personalDetails'];
        this['tags'] = data['tags'];
    }
    static constructFromObject(data) {
        if (data) {
            return new CopyTradingDetailsList({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'creationDate': ApiClient.convertToType(data['creationDate'], 'Date'),
                'currency': Currency.constructFromObject(data['currency']),
                'subscribersCount': ApiClient.convertToType(data['subscribersCount'], 'number'),
                'tradesCount': ApiClient.convertToType(data['tradesCount'], 'number'),
                'status': ApiClient.convertToType(data['status'], 'string'),
                'owner': ProfilePublicShort.constructFromObject(data['owner']),
                'personalDetails': PersonalCopyTradingAccountInfo.constructFromObject(data['personalDetails']),
                'tags': ApiClient.convertToType(data['tags'], [ProgramTag]),
            });
        }
    }
}

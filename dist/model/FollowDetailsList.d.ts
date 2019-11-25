import { Currency } from './Currency';
import { PersonalFollowDetailsList } from './PersonalFollowDetailsList';
import { ProfilePublicShort } from './ProfilePublicShort';
import { ProfitChart } from './ProfitChart';
import { Tag } from './Tag';
export declare class FollowDetailsList {
    'id': string;
    'title': string;
    'description': string;
    'logo': string;
    'creationDate': Date;
    'currency': Currency;
    'subscribersCount': number;
    'tradesCount': number;
    'status': string;
    'url': string;
    'color': string;
    'owner': ProfilePublicShort;
    'statistic': ProfitChart;
    'personalDetails': PersonalFollowDetailsList;
    'tags': Array<Tag>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FollowDetailsList | undefined;
}

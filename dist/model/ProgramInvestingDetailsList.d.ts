import { AmountWithCurrency } from './AmountWithCurrency';
import { BrokerDetails } from './BrokerDetails';
import { Currency } from './Currency';
import { PersonalInvestingProgramDetailsList } from './PersonalInvestingProgramDetailsList';
import { ProfilePublicShort } from './ProfilePublicShort';
import { ProfitChart } from './ProfitChart';
import { Tag } from './Tag';
export declare class ProgramInvestingDetailsList {
    'id': string;
    'logo': string;
    'url': string;
    'color': string;
    'title': string;
    'creationDate': Date;
    'currency': Currency;
    'level': number;
    'levelProgress': number;
    'periodDuration': number;
    'investorsCount': number;
    'periodStarts': Date;
    'periodEnds': Date;
    'owner': ProfilePublicShort;
    'brokerDetails': BrokerDetails;
    'personalDetails': PersonalInvestingProgramDetailsList;
    'tags': Array<Tag>;
    'statistic': ProfitChart;
    'balance': AmountWithCurrency;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramInvestingDetailsList | undefined;
}

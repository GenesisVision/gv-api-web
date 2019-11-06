import { AmountWithCurrency } from './AmountWithCurrency';
import { Currency } from './Currency';
import { PersonalProgramDetailsList } from './PersonalProgramDetailsList';
import { ProfilePublicShort } from './ProfilePublicShort';
import { ProfitChart } from './ProfitChart';
import { ProgramTag } from './ProgramTag';
export declare class ProgramDetailsList {
    'id': string;
    'logo': string;
    'url': string;
    'description': string;
    'color': string;
    'title': string;
    'creationDate': Date;
    'currency': Currency;
    'level': number;
    'levelProgress': number;
    'periodDuration': number;
    'availableToInvest': number;
    'investorsCount': number;
    'periodStarts': Date;
    'periodEnds': Date;
    'status': string;
    'owner': ProfilePublicShort;
    'personalDetails': PersonalProgramDetailsList;
    'tags': Array<ProgramTag>;
    'chart': ProfitChart;
    'balance': AmountWithCurrency;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramDetailsList | undefined;
}

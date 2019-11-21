import { AmountWithCurrency } from './AmountWithCurrency';
import { Currency } from './Currency';
import { PersonalInvestingProgramDetailsList } from './PersonalInvestingProgramDetailsList';
import { ProfilePublicShort } from './ProfilePublicShort';
import { ProfitChart } from './ProfitChart';
import { ProgramTag } from './ProgramTag';
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
    'personalDetails': PersonalInvestingProgramDetailsList;
    'tags': Array<ProgramTag>;
    'statistic': ProfitChart;
    'balance': AmountWithCurrency;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramInvestingDetailsList | undefined;
}

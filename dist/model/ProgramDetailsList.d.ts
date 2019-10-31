import { Currency } from './Currency';
import { PersonalProgramDetailsList } from './PersonalProgramDetailsList';
import { ProfitChart } from './ProfitChart';
import { ProgramTag } from './ProgramTag';
export declare class ProgramDetailsList {
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
    'availableToInvest': number;
    'personalDetails': PersonalProgramDetailsList;
    'tags': Array<ProgramTag>;
    'chart': ProfitChart;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramDetailsList | undefined;
}

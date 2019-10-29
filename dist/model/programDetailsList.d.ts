import { Currency } from './currency';
import { PersonalProgramDetailsList } from './personalProgramDetailsList';
import { ProfitChart } from './profitChart';
import { ProgramTag } from './programTag';
export declare class ProgramDetailsList {
    'id'?: string;
    'logo'?: string;
    'url'?: string;
    'color'?: string;
    'title'?: string;
    'creationDate'?: Date;
    'currency'?: Currency;
    'level'?: number;
    'levelProgress'?: number;
    'periodDuration'?: number;
    'availableToInvest'?: number;
    'personalDetails'?: PersonalProgramDetailsList;
    'tags'?: [ProgramTag];
    'chart'?: ProfitChart;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramDetailsList): ProgramDetailsList;
}

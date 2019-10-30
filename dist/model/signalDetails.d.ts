import { ChartSimple } from './chartSimple';
import { Currency } from './currency';
import { InvestmentProgramStatus } from './investmentProgramStatus';
import { PersonalSignalDetailsFull } from './personalSignalDetailsFull';
import { ProfilePublic } from './profilePublic';
import { ProgramTag } from './programTag';
export declare class SignalDetails {
    'personalDetails'?: PersonalSignalDetailsFull;
    'currency'?: Currency;
    'level'?: number;
    'levelProgress'?: number;
    'tags'?: [ProgramTag];
    'subscribers'?: number;
    'id'?: string;
    'logo'?: string;
    'url'?: string;
    'color'?: string;
    'title'?: string;
    'description'?: string;
    'status'?: InvestmentProgramStatus;
    'creationDate'?: Date;
    'manager'?: ProfilePublic;
    'chart'?: [ChartSimple];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: SignalDetails): SignalDetails;
}

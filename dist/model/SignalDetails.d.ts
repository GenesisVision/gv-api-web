import { ChartSimple } from './ChartSimple';
import { Currency } from './Currency';
import { InvestmentProgramStatus } from './InvestmentProgramStatus';
import { PersonalSignalDetailsFull } from './PersonalSignalDetailsFull';
import { ProfilePublic } from './ProfilePublic';
import { ProgramTag } from './ProgramTag';
export declare class SignalDetails {
    'personalDetails': PersonalSignalDetailsFull;
    'currency': Currency;
    'level': number;
    'levelProgress': number;
    'tags': Array<ProgramTag>;
    'subscribers': number;
    'id': string;
    'logo': string;
    'url': string;
    'color': string;
    'title': string;
    'description': string;
    'status': InvestmentProgramStatus;
    'creationDate': Date;
    'manager': ProfilePublic;
    'chart': Array<ChartSimple>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): SignalDetails | undefined;
}

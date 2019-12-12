import { Currency } from './Currency';
import { PersonalProgramDetails } from './PersonalProgramDetails';
import { TradesDelay } from './TradesDelay';
export declare class ProgramDetailsFull {
    'currency': Currency;
    'level': number;
    'levelProgress': number;
    'periodDuration': number;
    'periodStarts': Date;
    'periodEnds': Date;
    'tradesDelay': TradesDelay;
    'ageDays': number;
    'leverageMin': number;
    'leverageMax': number;
    'genesisRatio': number;
    'investmentScale': number;
    'volumeScale': number;
    'hasTrades': boolean;
    'entryFeeSelected': number;
    'entryFeeCurrent': number;
    'successFeeSelected': number;
    'successFeeCurrent': number;
    'stopOutLevelSelected': number;
    'stopOutLevelCurrent': number;
    'availableInvestmentBase': number;
    'availableInvestmentLimit': number;
    'totalAvailableInvestment': number;
    'personalDetails': PersonalProgramDetails;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramDetailsFull | undefined;
}

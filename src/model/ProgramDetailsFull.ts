import { PersonalProgramDetails } from './PersonalProgramDetails';
import { TradesDelay } from './TradesDelay';

export interface ProgramDetailsFull {
    level: number;
    levelProgress: number;
    periodDuration: number;
    periodStarts: Date;
    periodEnds: Date;
    tradesDelay: TradesDelay;
    ageDays: number;
    genesisRatio: number;
    investmentScale: number;
    volumeScale: number;
    entryFeeSelected: number;
    entryFeeCurrent: number;
    successFeeSelected: number;
    successFeeCurrent: number;
    stopOutLevelSelected: number;
    stopOutLevelCurrent: number;
    availableInvestmentBase: number;
    availableInvestmentLimit: number;
    totalAvailableInvestment: number;
    personalDetails: PersonalProgramDetails;
}


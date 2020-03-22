import { Currency } from './Currency';

export interface ProgramFollowDetailsFullTradingAccountDetails {
    id: string;
    login: string;
    currency: Currency;
    leverageMin: number;
    leverageMax: number;
    balance: number;
}


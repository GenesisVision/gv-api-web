import { Currency } from './Currency';

export interface WalletBaseData {
    id: string;
    title: string;
    logoUrl: string;
    currency: Currency;
    available: number;
    rate: number;
}


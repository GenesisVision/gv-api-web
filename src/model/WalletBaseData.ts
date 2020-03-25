import { Currency } from './Currency';

export interface WalletBaseData {
    id: string;
    title: string;
    logo: string;
    currency: Currency;
    available: number;
    rate: number;
}


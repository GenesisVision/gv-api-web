import { ExchangeAccountType } from './ExchangeAccountType';
import { Tag } from './Tag';

export interface ExchangeInfo {
    name: string;
    description: string;
    logoUrl: string;
    terms: string;
    assets: string;
    fee: number;
    readonly isKycRequired: boolean;
    accountTypes: Array<ExchangeAccountType>;
    tags: Array<Tag>;
}


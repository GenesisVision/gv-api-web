import { BrokerAccountType } from './BrokerAccountType';
import { Tag } from './Tag';

export interface Broker {
    name: string;
    description: string;
    logo: string;
    terms: string;
    assets: string;
    fee: number;
    readonly leverageMin: number;
    readonly leverageMax: number;
    readonly isKycRequired: boolean;
    accountTypes: Array<BrokerAccountType>;
    tags: Array<Tag>;
}


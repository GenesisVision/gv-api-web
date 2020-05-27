import { ChangeState } from './ChangeState';
import { Currency } from './Currency';

export interface SocialPostPlatformAsset {
    hasPrice: boolean;
    price: number;
    priceCurrency: Currency;
    change24Percent: number;
    changeState: ChangeState;
    id: string;
    name: string;
    asset: string;
    description: string;
    logoUrl: string;
    color: string;
    url: string;
}


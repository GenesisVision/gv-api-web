import { AssetType } from './AssetType';

export interface OrderProgramData {
    title: string;
    level: number;
    levelProgress: number;
    color: string;
    url: string;
    logo: string;
    logoUrl: string;
    type: AssetType;
}


import { AssetTypeExt } from './AssetTypeExt';

export interface AssetPublicDetails {
    title: string;
    description: string;
    logo: string;
    logoUrl: string;
    url: string;
    color: string;
    index: number;
    creationDate: Date;
    status: string;
    isOwnAsset: boolean;
    typeExt: AssetTypeExt;
    systemUrl: string;
}


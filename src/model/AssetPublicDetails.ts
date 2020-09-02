import { AssetTypeExt } from './AssetTypeExt';

export interface AssetPublicDetails {
    title: string;
    description: string;
    logo: string;
    logoUrl: string;
    url: string;
    color: string;
    creationDate: Date;
    status: string;
    isOwnAsset: boolean;
    typeExt: AssetTypeExt;
    systemUrl: string;
}


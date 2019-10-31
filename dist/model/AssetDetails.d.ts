import { AssetType } from './AssetType';
export declare class AssetDetails {
    'id': string;
    'logo': string;
    'color': string;
    'title': string;
    'url': string;
    'assetType': AssetType;
    'levelProgress': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AssetDetails | undefined;
}

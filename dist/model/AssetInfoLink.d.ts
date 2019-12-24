import { AssetInfoLinkType } from './AssetInfoLinkType';
export declare class AssetInfoLink {
    'url': string;
    'logo': string;
    'name': string;
    'type': AssetInfoLinkType;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AssetInfoLink | undefined;
}

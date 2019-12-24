import { AssetInfoLink } from './AssetInfoLink';
import { Tag } from './Tag';
export declare class AssetInfo {
    'name': string;
    'symbol': string;
    'logo': string;
    'description': string;
    'chartSymbol': string;
    'tags': Array<Tag>;
    'socialLinks': Array<AssetInfoLink>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AssetInfo | undefined;
}

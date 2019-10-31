import { AssetFilterType } from './AssetFilterType';
export declare class AssetsValue {
    'type': AssetFilterType;
    'id': string;
    'title': string;
    'avatar': string;
    'color': string;
    'value': number;
    'changePercent': number;
    'changeValue': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AssetsValue;
}

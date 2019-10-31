import { AssetsValue } from './AssetsValue';
import { OtherAssetsValue } from './OtherAssetsValue';
export declare class ValueChartBar {
    'value': number;
    'date': Date;
    'topAssets': Array<AssetsValue>;
    'otherAssetsValue': OtherAssetsValue;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ValueChartBar;
}

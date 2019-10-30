import { AssetsValue } from './assetsValue';
import { OtherAssetsValue } from './otherAssetsValue';
export declare class ValueChartBar {
    'value'?: number;
    'date'?: Date;
    'topAssets'?: Array<AssetsValue>;
    'otherAssetsValue'?: OtherAssetsValue;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ValueChartBar): ValueChartBar;
}

import { AssetsValue } from './AssetsValue';
import { OtherAssetsValue } from './OtherAssetsValue';
export declare class ValueChartBar {
    'value'?: number;
    'date'?: Date;
    'topAssets'?: Array<AssetsValue>;
    'otherAssetsValue'?: OtherAssetsValue;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ValueChartBar): ValueChartBar;
}

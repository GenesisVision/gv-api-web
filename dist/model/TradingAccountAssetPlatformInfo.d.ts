import { TradingAccountMinCreateAmount } from './TradingAccountMinCreateAmount';
export declare class TradingAccountAssetPlatformInfo {
    'minAmounts': Array<TradingAccountMinCreateAmount>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): TradingAccountAssetPlatformInfo | undefined;
}

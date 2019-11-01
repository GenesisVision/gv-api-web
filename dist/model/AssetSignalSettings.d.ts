export declare class AssetSignalSettings {
    'signalSuccessFee': number;
    'signalVolumeFee': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AssetSignalSettings | undefined;
}

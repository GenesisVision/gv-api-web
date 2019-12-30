export declare class AssetSignalSettings {
    'signalSuccessFee': number;
    'signalVolumeFee': number;
    'isActive': boolean;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AssetSignalSettings | undefined;
}

export declare class FollowCreateAssetPlatformInfo {
    'minVolumeFee': number;
    'maxVolumeFee': number;
    'minSuccessFee': number;
    'maxSuccessFee': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FollowCreateAssetPlatformInfo | undefined;
}

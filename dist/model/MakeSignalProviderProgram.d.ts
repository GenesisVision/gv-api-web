export declare class MakeSignalProviderProgram {
    'assetId': string;
    'periodLength': number;
    'stopOutLevel': number;
    'investmentLimit': number;
    'entryFee': number;
    'successFee': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): MakeSignalProviderProgram | undefined;
}

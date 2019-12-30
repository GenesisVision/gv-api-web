export declare class MakeSignalProviderProgram {
    'id': string;
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

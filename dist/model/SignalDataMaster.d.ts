export declare class SignalDataMaster {
    'login': string;
    'share': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): SignalDataMaster;
}

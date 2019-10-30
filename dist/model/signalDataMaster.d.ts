export declare class SignalDataMaster {
    'login'?: string;
    'share'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: SignalDataMaster): SignalDataMaster;
}

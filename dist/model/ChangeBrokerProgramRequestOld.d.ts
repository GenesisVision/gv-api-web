export declare class ChangeBrokerProgramRequestOld {
    'programId': string;
    'newBrokerAccountTypeId': string;
    'newLeverage': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ChangeBrokerProgramRequestOld | undefined;
}

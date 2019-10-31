export declare class ChangeBrokerProgramRequest {
    'newBrokerAccountTypeId': string;
    'newLeverage': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ChangeBrokerProgramRequest | undefined;
}

export declare class ChangeBrokerProgramRequest {
    'newBrokerAccountTypeId'?: string;
    'newLeverage'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ChangeBrokerProgramRequest): ChangeBrokerProgramRequest;
}

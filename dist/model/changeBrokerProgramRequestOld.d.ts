export declare class ChangeBrokerProgramRequestOld {
    'programId'?: string;
    'newBrokerAccountTypeId'?: string;
    'newLeverage'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ChangeBrokerProgramRequestOld): ChangeBrokerProgramRequestOld;
}

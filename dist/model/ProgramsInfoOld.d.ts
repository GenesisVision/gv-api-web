export declare class ProgramsInfoOld {
    'managerProgramInvestment': number;
    'managerProgramInvestmentUSD': number;
    'managerProgramInvestmentUSDT': number;
    'managerProgramInvestmentBTC': number;
    'managerProgramInvestmentETH': number;
    'managerMaxEntryFee': number;
    'managerMaxSuccessFee': number;
    'managerFundInvestment': number;
    'managerMaxExitFee': number;
    'managerMaxSignalVolumeFee': number;
    'managerMinSignalVolumeFee': number;
    'managerMaxSignalSuccessFee': number;
    'managerMinSignalSuccessFee': number;
    'periods': Array<number>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramsInfoOld;
}

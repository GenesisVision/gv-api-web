export declare class ProgramInvestInfoOld {
    'periodEnds'?: Date;
    'availableToInvestBase'?: number;
    'title'?: string;
    'programCurrencyMinInvestment'?: number;
    'entryFee'?: number;
    'gvCommission'?: number;
    'rate'?: number;
    'isOwnProgram'?: boolean;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramInvestInfoOld): ProgramInvestInfoOld;
}

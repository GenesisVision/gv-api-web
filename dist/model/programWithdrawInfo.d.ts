export declare class ProgramWithdrawInfo {
    'periodEnds'?: Date;
    'title'?: string;
    'availableToWithdraw'?: number;
    'isOwner'?: boolean;
    'withheldInvestment'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramWithdrawInfo): ProgramWithdrawInfo;
}

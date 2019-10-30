export declare class ManagerProgramWithdrawInfoOld {
    'withheldInvestment'?: number;
    'periodEnds'?: Date;
    'title'?: string;
    'availableToWithdraw'?: number;
    'rate'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ManagerProgramWithdrawInfoOld): ManagerProgramWithdrawInfoOld;
}

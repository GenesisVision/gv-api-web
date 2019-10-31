export declare class ManagerProgramWithdrawInfoOld {
    'withheldInvestment': number;
    'periodEnds': Date;
    'title': string;
    'availableToWithdraw': number;
    'rate': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ManagerProgramWithdrawInfoOld;
}

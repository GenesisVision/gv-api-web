export declare class ProgramWithdrawInfo {
    'periodEnds': Date;
    'title': string;
    'availableToWithdraw': number;
    'isOwner': boolean;
    'withheldInvestment': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramWithdrawInfo | undefined;
}

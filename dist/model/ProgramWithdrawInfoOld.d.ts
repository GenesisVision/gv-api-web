export declare class ProgramWithdrawInfoOld {
    'periodEnds': Date;
    'title': string;
    'availableToWithdraw': number;
    'rate': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramWithdrawInfoOld | undefined;
}

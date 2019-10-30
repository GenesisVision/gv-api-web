import { FundDetailsOld } from './fundDetailsOld';
export declare class FundsListOld {
    'funds'?: [FundDetailsOld];
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundsListOld): FundsListOld;
}

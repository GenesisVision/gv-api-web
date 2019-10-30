import { FundDetailsOld } from './FundDetailsOld';
export declare class FundsListOld {
    'funds'?: Array<FundDetailsOld>;
    'total'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: FundsListOld): FundsListOld;
}

import { FundDetailsOld } from './FundDetailsOld';
export declare class FundsListOld {
    'funds': Array<FundDetailsOld>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundsListOld | undefined;
}

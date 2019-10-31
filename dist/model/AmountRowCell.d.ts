import { AmountItem } from './AmountItem';
export declare class AmountRowCell {
    'first': AmountItem;
    'second': AmountItem;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AmountRowCell | undefined;
}

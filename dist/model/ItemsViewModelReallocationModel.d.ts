import { ReallocationModel } from './ReallocationModel';
export declare class ItemsViewModelReallocationModel {
    'items': Array<ReallocationModel>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ItemsViewModelReallocationModel | undefined;
}

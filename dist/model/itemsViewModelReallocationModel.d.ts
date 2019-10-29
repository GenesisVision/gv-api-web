import { ReallocationModel } from './reallocationModel';
export declare class ItemsViewModelReallocationModel {
    'items'?: [ReallocationModel];
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ItemsViewModelReallocationModel): ItemsViewModelReallocationModel;
}

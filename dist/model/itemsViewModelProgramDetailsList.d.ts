import { ProgramDetailsList } from './programDetailsList';
export declare class ItemsViewModelProgramDetailsList {
    'items'?: [ProgramDetailsList];
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ItemsViewModelProgramDetailsList): ItemsViewModelProgramDetailsList;
}

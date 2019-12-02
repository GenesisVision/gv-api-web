import { ProgramDetailsList } from './ProgramDetailsList';
export declare class ItemsViewModelProgramDetailsList {
    'items': Array<ProgramDetailsList>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ItemsViewModelProgramDetailsList | undefined;
}

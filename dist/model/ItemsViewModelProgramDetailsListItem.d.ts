import { ProgramDetailsListItem } from './ProgramDetailsListItem';
export declare class ItemsViewModelProgramDetailsListItem {
    'items': Array<ProgramDetailsListItem>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ItemsViewModelProgramDetailsListItem | undefined;
}

import { ProgramTag } from './programTag';
export declare class ProgramFiltersOld {
    'programTags'?: [ProgramTag];
    'actionType'?: [string];
    'customNotificationType'?: [string];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramFiltersOld): ProgramFiltersOld;
}

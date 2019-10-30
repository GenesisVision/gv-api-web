import { ProgramTag } from './programTag';
export declare class ProgramFiltersOld {
    'programTags'?: Array<ProgramTag>;
    'actionType'?: Array<string>;
    'customNotificationType'?: Array<string>;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramFiltersOld): ProgramFiltersOld;
}

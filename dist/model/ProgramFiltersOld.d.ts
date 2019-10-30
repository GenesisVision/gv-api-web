import { ProgramTag } from './ProgramTag';
export declare class ProgramFiltersOld {
    'programTags'?: Array<ProgramTag>;
    'actionType'?: Array<string>;
    'customNotificationType'?: Array<string>;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramFiltersOld): ProgramFiltersOld;
}

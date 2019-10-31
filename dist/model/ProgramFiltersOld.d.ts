import { ProgramTag } from './ProgramTag';
export declare class ProgramFiltersOld {
    'programTags': Array<ProgramTag>;
    'actionType': Array<string>;
    'customNotificationType': Array<string>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramFiltersOld | undefined;
}

import { LevelInfo } from './levelInfo';
export declare class ProgramsLevelsInfo {
    'levels'?: [LevelInfo];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramsLevelsInfo): ProgramsLevelsInfo;
}

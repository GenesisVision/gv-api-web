import { LevelInfo } from './levelInfo';
export declare class ProgramsLevelsInfo {
    'levels'?: Array<LevelInfo>;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramsLevelsInfo): ProgramsLevelsInfo;
}

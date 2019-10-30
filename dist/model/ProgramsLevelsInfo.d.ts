import { LevelInfo } from './LevelInfo';
export declare class ProgramsLevelsInfo {
    'levels'?: Array<LevelInfo>;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramsLevelsInfo): ProgramsLevelsInfo;
}

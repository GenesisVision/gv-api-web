import { LevelInfo } from './LevelInfo';
export declare class ProgramsLevelsInfo {
    'levels': Array<LevelInfo>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramsLevelsInfo | undefined;
}

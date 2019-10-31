import { LevelInfo } from './LevelInfo';
import ApiClient from "../ApiClient";
export class ProgramsLevelsInfo {
    constructor(data) {
        this['levels'] = data['levels'];
    }
    static constructFromObject(data) {
        return new ProgramsLevelsInfo({
            'levels': ApiClient.convertToType(data['levels'], [LevelInfo]),
        });
    }
}

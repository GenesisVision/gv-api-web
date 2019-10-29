import { LevelInfo } from './levelInfo';
import ApiClient from "../ApiClient";
export class ProgramsLevelsInfo {
    constructor() {
    }
    static constructFromObject(data, obj = new ProgramsLevelsInfo()) {
        if (data) {
            if (data.hasOwnProperty('levels')) {
                obj['levels'] = ApiClient.convertToType(data['levels'], [LevelInfo]);
            }
        }
        return obj;
    }
}

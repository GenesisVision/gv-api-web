import { LevelInfo } from './LevelInfo';
import ApiClient from "../ApiClient";
export class ProgramsLevelsInfo {
    static constructFromObject(data, obj = new ProgramsLevelsInfo()) {
        if (data) {
            if (data.hasOwnProperty('levels')) {
                obj['levels'] = ApiClient.convertToType(data['levels'], [LevelInfo]);
            }
        }
        return obj;
    }
}

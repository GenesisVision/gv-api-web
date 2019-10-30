import { ProgramTag } from './ProgramTag';
import ApiClient from "../ApiClient";
export class ProgramFiltersOld {
    static constructFromObject(data, obj = new ProgramFiltersOld()) {
        if (data) {
            if (data.hasOwnProperty('programTags')) {
                obj['programTags'] = ApiClient.convertToType(data['programTags'], [ProgramTag]);
            }
            if (data.hasOwnProperty('actionType')) {
                obj['actionType'] = ApiClient.convertToType(data['actionType'], ['string']);
            }
            if (data.hasOwnProperty('customNotificationType')) {
                obj['customNotificationType'] = ApiClient.convertToType(data['customNotificationType'], ['string']);
            }
        }
        return obj;
    }
}

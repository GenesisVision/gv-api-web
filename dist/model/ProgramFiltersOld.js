import { ProgramTag } from './ProgramTag';
import ApiClient from "../ApiClient";
export class ProgramFiltersOld {
    constructor(data) {
        this['programTags'] = data['programTags'];
        this['actionType'] = data['actionType'];
        this['customNotificationType'] = data['customNotificationType'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramFiltersOld({
                'programTags': ApiClient.convertToType(data['programTags'], [ProgramTag]),
                'actionType': ApiClient.convertToType(data['actionType'], ['string']),
                'customNotificationType': ApiClient.convertToType(data['customNotificationType'], ['string']),
            });
        }
    }
}

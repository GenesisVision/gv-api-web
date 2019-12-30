import { UpdateSocialLinkViewModel } from './UpdateSocialLinkViewModel';
import ApiClient from "../ApiClient";
export class UpdateSocialLinksViewModel {
    constructor(data) {
        this['links'] = data['links'];
    }
    static constructFromObject(data) {
        if (data) {
            return new UpdateSocialLinksViewModel({
                'links': ApiClient.convertToType(data['links'], [UpdateSocialLinkViewModel]),
            });
        }
    }
}

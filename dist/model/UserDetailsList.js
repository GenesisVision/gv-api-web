import { SocialLinkViewModel } from './SocialLinkViewModel';
import { Tag } from './Tag';
import ApiClient from "../ApiClient";
export class UserDetailsList {
    constructor(data) {
        this['userId'] = data['userId'];
        this['username'] = data['username'];
        this['avatar'] = data['avatar'];
        this['url'] = data['url'];
        this['socialLinks'] = data['socialLinks'];
        this['tags'] = data['tags'];
        this['regDate'] = data['regDate'];
        this['assetsUnderManagement'] = data['assetsUnderManagement'];
        this['investorsCount'] = data['investorsCount'];
        this['followersCount'] = data['followersCount'];
        this['profit'] = data['profit'];
    }
    static constructFromObject(data) {
        if (data) {
            return new UserDetailsList({
                'userId': ApiClient.convertToType(data['userId'], 'string'),
                'username': ApiClient.convertToType(data['username'], 'string'),
                'avatar': ApiClient.convertToType(data['avatar'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'socialLinks': ApiClient.convertToType(data['socialLinks'], [SocialLinkViewModel]),
                'tags': ApiClient.convertToType(data['tags'], [Tag]),
                'regDate': ApiClient.convertToType(data['regDate'], 'Date'),
                'assetsUnderManagement': ApiClient.convertToType(data['assetsUnderManagement'], 'number'),
                'investorsCount': ApiClient.convertToType(data['investorsCount'], 'number'),
                'followersCount': ApiClient.convertToType(data['followersCount'], 'number'),
                'profit': ApiClient.convertToType(data['profit'], 'number'),
            });
        }
    }
}

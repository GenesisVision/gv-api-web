import ApiClient from "../ApiClient";
export class ButtonAction {
    constructor(data) {
        this['title'] = data['title'];
        this['url'] = data['url'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ButtonAction({
                'title': ApiClient.convertToType(data['title'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
            });
        }
    }
}

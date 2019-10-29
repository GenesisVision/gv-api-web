import ApiClient from "../ApiClient";
export class ProgramTag {
    constructor() {
    }
    static constructFromObject(data, obj = new ProgramTag()) {
        if (data) {
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'string');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'string');
            }
        }
        return obj;
    }
}

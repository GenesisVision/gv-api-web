import ApiClient from "../ApiClient";
export class ProgramTag {
    constructor(data) {
        this['name'] = data['name'];
        this['color'] = data['color'];
    }
    static constructFromObject(data) {
        return new ProgramTag({
            'name': ApiClient.convertToType(data['name'], 'string'),
            'color': ApiClient.convertToType(data['color'], 'string'),
        });
    }
}

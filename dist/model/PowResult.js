import ApiClient from "../ApiClient";
export class PowResult {
    constructor(data) {
        this['prefix'] = data['prefix'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PowResult({
                'prefix': ApiClient.convertToType(data['prefix'], 'string'),
            });
        }
    }
}

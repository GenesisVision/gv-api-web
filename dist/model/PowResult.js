import ApiClient from "../ApiClient";
export class PowResult {
    static constructFromObject(data, obj = new PowResult()) {
        if (data) {
            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = ApiClient.convertToType(data['prefix'], 'string');
            }
        }
        return obj;
    }
}

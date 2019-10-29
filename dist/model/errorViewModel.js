import { ErrorCodes } from './errorCodes';
import { ErrorMessage } from './errorMessage';
import ApiClient from "../ApiClient";
export class ErrorViewModel {
    constructor() {
    }
    static constructFromObject(data, obj = new ErrorViewModel()) {
        if (data) {
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [ErrorMessage]);
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ErrorCodes.constructFromObject(data['code']);
            }
        }
        return obj;
    }
}

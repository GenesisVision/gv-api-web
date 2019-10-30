import { ErrorCodes } from './ErrorCodes';
import { ErrorMessage } from './ErrorMessage';
import ApiClient from "../ApiClient";
export class ErrorViewModel {
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

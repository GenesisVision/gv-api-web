import { ErrorCodes } from './ErrorCodes';
import { ErrorMessage } from './ErrorMessage';
import ApiClient from "../ApiClient";
export class ErrorViewModel {
    constructor(data) {
        this['errors'] = data['errors'];
        this['code'] = data['code'];
    }
    static constructFromObject(data) {
        return new ErrorViewModel({
            'errors': ApiClient.convertToType(data['errors'], [ErrorMessage]),
            'code': ErrorCodes.constructFromObject(data['code']),
        });
    }
}

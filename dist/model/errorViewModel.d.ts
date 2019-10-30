import { ErrorCodes } from './errorCodes';
import { ErrorMessage } from './errorMessage';
export declare class ErrorViewModel {
    'errors'?: [ErrorMessage];
    'code'?: ErrorCodes;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ErrorViewModel): ErrorViewModel;
}

import { ErrorCodes } from './ErrorCodes';
import { ErrorMessage } from './ErrorMessage';
export declare class ErrorViewModel {
    'errors'?: Array<ErrorMessage>;
    'code'?: ErrorCodes;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ErrorViewModel): ErrorViewModel;
}

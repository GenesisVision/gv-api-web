import { ErrorCodes } from './ErrorCodes';
import { ErrorMessage } from './ErrorMessage';
export declare class ErrorViewModel {
    'errors': Array<ErrorMessage>;
    'code': ErrorCodes;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ErrorViewModel | undefined;
}

import { ErrorCodes } from './ErrorCodes';
import { ErrorMessage } from './ErrorMessage';

export interface ErrorViewModel {
    errors: Array<ErrorMessage>;
    code: ErrorCodes;
}


import { ErrorCodes } from './ErrorCodes';
import { ErrorMessage } from './ErrorMessage';

export interface ErrorViewModelWithToken {
    errors: Array<ErrorMessage>;
    code: ErrorCodes;
    tempToken: string;
}


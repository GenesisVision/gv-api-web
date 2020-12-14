import { ErrorCodes } from './ErrorCodes';
import { ErrorMessage } from './ErrorMessage';
import { ModelObject } from './ModelObject';

export interface ErrorViewModel {
    errors: Array<ErrorMessage>;
    code: ErrorCodes;
    data: ModelObject;
}


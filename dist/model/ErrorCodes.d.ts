import { GenericFabric } from "../constructFromObject";
export declare type ErrorCodes = 'InternalServerError' | 'ValidationError' | 'RequiresTwoFactor' | 'WrongCaptcha';
export declare const ErrorCodes: {
    constructFromObject: GenericFabric<ErrorCodes>;
};

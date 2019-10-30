export declare class ResetPasswordViewModel {
    'userId': string;
    'code': string;
    'password': string;
    'confirmPassword'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ResetPasswordViewModel): ResetPasswordViewModel;
}

export declare class ResetPasswordViewModel {
    'userId'?: string;
    'code'?: string;
    'password'?: string;
    'confirmPassword'?: string;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ResetPasswordViewModel): ResetPasswordViewModel;
}

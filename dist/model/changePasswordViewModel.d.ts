export declare class ChangePasswordViewModel {
    'oldPassword': string;
    'password': string;
    'confirmPassword'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ChangePasswordViewModel): ChangePasswordViewModel;
}

export declare class ChangePasswordViewModel {
    'oldPassword': string;
    'password': string;
    'confirmPassword': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ChangePasswordViewModel;
}

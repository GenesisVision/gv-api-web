export declare class ResetPasswordViewModel {
    'userId': string;
    'code': string;
    'password': string;
    'confirmPassword': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ResetPasswordViewModel;
}

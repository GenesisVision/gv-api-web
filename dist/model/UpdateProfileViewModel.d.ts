export declare class UpdateProfileViewModel {
    'userName': string;
    'about': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): UpdateProfileViewModel | undefined;
}

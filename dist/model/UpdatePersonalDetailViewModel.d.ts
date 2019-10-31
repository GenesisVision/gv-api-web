export declare class UpdatePersonalDetailViewModel {
    'firstName': string;
    'middleName': string;
    'lastName': string;
    'birthday': Date;
    'citizenship': string;
    'gender': boolean;
    'documentId': string;
    'phoneNumber': string;
    'country': string;
    'city': string;
    'address': string;
    'index': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): UpdatePersonalDetailViewModel;
}

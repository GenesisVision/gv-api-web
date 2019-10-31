export declare class AndroidVersion {
    'versionCode': string;
    'versionName': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AndroidVersion;
}

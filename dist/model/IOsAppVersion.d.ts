export declare class IOsAppVersion {
    'minVersion': string;
    'lastVersion': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): IOsAppVersion;
}

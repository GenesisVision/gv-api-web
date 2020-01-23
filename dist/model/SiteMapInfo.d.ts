export declare class SiteMapInfo {
    'programs': Array<string>;
    'funds': Array<string>;
    'follow': Array<string>;
    'users': Array<string>;
    'actives': Array<string>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): SiteMapInfo | undefined;
}

export declare class ProgramFollowDetailsFullPublicDetails {
    'title': string;
    'description': string;
    'logo': string;
    'url': string;
    'color': string;
    'creationDate': Date;
    'status': string;
    'isOwnAsset': boolean;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramFollowDetailsFullPublicDetails | undefined;
}

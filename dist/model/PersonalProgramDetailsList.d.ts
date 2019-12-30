export declare class PersonalProgramDetailsList {
    'isOwnAsset': boolean;
    'isFavorite': boolean;
    'isReinvest': boolean;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PersonalProgramDetailsList | undefined;
}

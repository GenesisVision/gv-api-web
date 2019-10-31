export declare class PersonalProgramDetailsList {
    'isOwnProgram': boolean;
    'isFavorite': boolean;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PersonalProgramDetailsList | undefined;
}

export declare class ManagerSimpleProgram {
    'level': number;
    'levelProgress': number;
    'id': string;
    'title': string;
    'color': string;
    'logo': string;
    'url': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ManagerSimpleProgram | undefined;
}

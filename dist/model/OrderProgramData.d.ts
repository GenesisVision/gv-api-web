export declare class OrderProgramData {
    'title': string;
    'level': number;
    'levelProgress': number;
    'color': string;
    'url': string;
    'logo': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): OrderProgramData;
}

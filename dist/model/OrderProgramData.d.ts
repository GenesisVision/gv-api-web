export declare class OrderProgramData {
    'title'?: string;
    'level'?: number;
    'levelProgress'?: number;
    'color'?: string;
    'url'?: string;
    'logo'?: string;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: OrderProgramData): OrderProgramData;
}

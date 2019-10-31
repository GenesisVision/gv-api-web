export declare class ButtonAction {
    'title': string;
    'url': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ButtonAction | undefined;
}

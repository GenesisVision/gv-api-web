import { PlatformEventType } from './PlatformEventType';
export declare class PlatformEvent {
    'title': string;
    'text': string;
    'icon': string;
    'assetUrl': string;
    'userUrl': string;
    'value': string;
    'date': Date;
    'type': PlatformEventType;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PlatformEvent | undefined;
}

import { PlatformUrlType } from './PlatformUrlType';
export declare class PlatformUrlInfo {
    'type': PlatformUrlType;
    'url': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PlatformUrlInfo | undefined;
}

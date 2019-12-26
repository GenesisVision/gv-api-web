import { PlatformEvent } from './PlatformEvent';
export declare class PlatformEvents {
    'events': Array<PlatformEvent>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PlatformEvents | undefined;
}

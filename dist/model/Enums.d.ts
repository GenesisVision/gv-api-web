import { EventFilters } from './EventFilters';
export declare class Enums {
    'event': EventFilters;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): Enums | undefined;
}

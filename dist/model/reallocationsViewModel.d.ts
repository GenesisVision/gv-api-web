import { ReallocationModel } from './reallocationModel';
export declare class ReallocationsViewModel {
    'reallocations'?: [ReallocationModel];
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ReallocationsViewModel): ReallocationsViewModel;
}

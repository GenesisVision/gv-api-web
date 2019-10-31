import { ReallocationModel } from './ReallocationModel';
export declare class ReallocationsViewModel {
    'reallocations': Array<ReallocationModel>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ReallocationsViewModel;
}

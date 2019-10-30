import { ReallocationModel } from './ReallocationModel';
export declare class ReallocationsViewModel {
    'reallocations'?: Array<ReallocationModel>;
    'total'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ReallocationsViewModel): ReallocationsViewModel;
}

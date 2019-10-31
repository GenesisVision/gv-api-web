import { ManagerSimpleFund } from './ManagerSimpleFund';
import { ManagerSimpleProgram } from './ManagerSimpleProgram';
export declare class ManagerAssets {
    'programs': Array<ManagerSimpleProgram>;
    'funds': Array<ManagerSimpleFund>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ManagerAssets;
}

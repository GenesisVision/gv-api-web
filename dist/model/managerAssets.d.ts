import { ManagerSimpleFund } from './managerSimpleFund';
import { ManagerSimpleProgram } from './managerSimpleProgram';
export declare class ManagerAssets {
    'programs'?: [ManagerSimpleProgram];
    'funds'?: [ManagerSimpleFund];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ManagerAssets): ManagerAssets;
}

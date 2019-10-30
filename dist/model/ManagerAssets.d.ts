import { ManagerSimpleFund } from './ManagerSimpleFund';
import { ManagerSimpleProgram } from './ManagerSimpleProgram';
export declare class ManagerAssets {
    'programs'?: Array<ManagerSimpleProgram>;
    'funds'?: Array<ManagerSimpleFund>;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ManagerAssets): ManagerAssets;
}

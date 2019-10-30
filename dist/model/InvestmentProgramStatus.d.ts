import { GenericFabric } from "../constructFromObject";
export declare type InvestmentProgramStatus = 'None' | 'Pending' | 'ErrorCreating' | 'Active' | 'Closed' | 'Archived' | 'ClosedDueToInactivity';
export declare const InvestmentProgramStatus: {
    constructFromObject: GenericFabric<InvestmentProgramStatus>;
};

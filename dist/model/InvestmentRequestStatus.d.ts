import { GenericFabric } from "../constructFromObject";
export declare type InvestmentRequestStatus = 'New' | 'Executed' | 'Cancelled' | 'Pending';
export declare const InvestmentRequestStatus: {
    constructFromObject: GenericFabric<InvestmentRequestStatus>;
};

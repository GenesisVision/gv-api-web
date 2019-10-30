import { GenericFabric } from "../constructFromObject";
export declare type FeeType = 'Undefined' | 'GvProgramEntry' | 'GvProgramSuccess' | 'GvProgramSuccessSum' | 'GvFundEntry' | 'GvGmGvtHolderFee' | 'GvGmRegularFee' | 'ManagerProgramEntry' | 'ManagerProgramSuccess' | 'ManagerProgramSuccessSum' | 'ManagerFundEntry' | 'ManagerFundExit' | 'GvWithdrawal' | 'ManagerSignalMasterSuccessFee' | 'ManagerSignalMasterVolumeFee' | 'GvSignalSuccessFee' | 'GvFundTrade';
export declare const FeeType: {
    constructFromObject: GenericFabric<FeeType>;
};

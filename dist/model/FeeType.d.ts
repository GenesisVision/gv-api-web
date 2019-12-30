import { GenericFabric } from "../constructFromObject";
export declare type FeeType = 'GvWithdrawal' | 'Undefined' | 'GvProgramEntry' | 'GvProgramSuccess' | 'GvProgramSuccessSum' | 'GvFundEntry' | 'GvGmGvtHolderFee' | 'GvGmRegularFee' | 'ManagerProgramEntry' | 'ManagerProgramSuccess' | 'ManagerProgramSuccessSum' | 'ManagerFundEntry' | 'ManagerFundExit' | 'ManagerSignalMasterSuccessFee' | 'ManagerSignalMasterVolumeFee' | 'GvSignalSuccessFee' | 'GvSignalVolumeFee' | 'GvFundTrade';
export declare const FeeType: {
    constructFromObject: GenericFabric<FeeType>;
};

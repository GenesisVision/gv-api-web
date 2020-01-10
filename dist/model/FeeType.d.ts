import { GenericFabric } from "../constructFromObject";
export declare type FeeType = 'ManagerFundExit' | 'ManagerFundEntry' | 'Undefined' | 'GvProgramEntry' | 'GvProgramSuccess' | 'GvProgramSuccessSum' | 'GvFundEntry' | 'GvGmGvtHolderFee' | 'GvGmRegularFee' | 'ManagerProgramEntry' | 'ManagerProgramSuccess' | 'ManagerProgramSuccessSum' | 'GvWithdrawal' | 'ManagerSignalMasterSuccessFee' | 'ManagerSignalMasterVolumeFee' | 'GvSignalSuccessFee' | 'GvSignalVolumeFee' | 'GvFundTrade';
export declare const FeeType: {
    constructFromObject: GenericFabric<FeeType>;
};

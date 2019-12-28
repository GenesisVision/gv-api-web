import { GenericFabric } from "../constructFromObject";
export declare type FeeType = 'GvProgramEntry' | 'Undefined' | 'GvProgramSuccess' | 'GvProgramSuccessSum' | 'GvFundEntry' | 'GvGmGvtHolderFee' | 'GvGmRegularFee' | 'ManagerProgramEntry' | 'ManagerProgramSuccess' | 'ManagerProgramSuccessSum' | 'ManagerFundEntry' | 'ManagerFundExit' | 'GvWithdrawal' | 'ManagerSignalMasterSuccessFee' | 'ManagerSignalMasterVolumeFee' | 'GvSignalSuccessFee' | 'GvSignalVolumeFee' | 'GvFundTrade';
export declare const FeeType: {
    constructFromObject: GenericFabric<FeeType>;
};

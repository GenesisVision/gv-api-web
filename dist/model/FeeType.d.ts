import { GenericFabric } from "../constructFromObject";
export declare type FeeType = 'GvFundEntry' | 'ManagerFundEntry' | 'GvProgramEntry' | 'ManagerProgramEntry' | 'Undefined' | 'GvProgramSuccess' | 'GvProgramSuccessSum' | 'GvGmGvtHolderFee' | 'GvGmRegularFee' | 'ManagerProgramSuccess' | 'ManagerProgramSuccessSum' | 'ManagerFundExit' | 'GvWithdrawal' | 'ManagerSignalMasterSuccessFee' | 'ManagerSignalMasterVolumeFee' | 'GvSignalSuccessFee' | 'GvSignalVolumeFee' | 'GvFundTrade';
export declare const FeeType: {
    constructFromObject: GenericFabric<FeeType>;
};

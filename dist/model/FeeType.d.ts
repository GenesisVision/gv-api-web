import { GenericFabric } from "../constructFromObject";
export declare type FeeType = 'ManagerFundEntry' | 'Undefined' | 'GvProgramEntry' | 'GvProgramSuccess' | 'GvProgramSuccessSum' | 'GvFundEntry' | 'GvGmGvtHolderFee' | 'GvGmRegularFee' | 'ManagerProgramEntry' | 'ManagerProgramSuccess' | 'ManagerProgramSuccessSum' | 'ManagerFundExit' | 'GvWithdrawal' | 'ManagerSignalMasterSuccessFee' | 'ManagerSignalMasterVolumeFee' | 'GvSignalSuccessFee' | 'GvSignalVolumeFee' | 'GvFundTrade';
export declare const FeeType: {
    constructFromObject: GenericFabric<FeeType>;
};

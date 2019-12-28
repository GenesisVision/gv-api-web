import { GenericFabric } from "../constructFromObject";
export declare type FeeType = 'GvGmGvtHolderFee' | 'ManagerSignalMasterVolumeFee' | 'GvProgramSuccess' | 'ManagerProgramSuccess' | 'GvProgramEntry' | 'ManagerProgramEntry' | 'GvFundEntry' | 'Undefined' | 'GvProgramSuccessSum' | 'GvGmRegularFee' | 'ManagerProgramSuccessSum' | 'ManagerFundEntry' | 'ManagerFundExit' | 'GvWithdrawal' | 'ManagerSignalMasterSuccessFee' | 'GvSignalSuccessFee' | 'GvSignalVolumeFee' | 'GvFundTrade';
export declare const FeeType: {
    constructFromObject: GenericFabric<FeeType>;
};

import { GenericFabric } from "../constructFromObject";
export declare type TransferRequestType = 'Undefined' | 'Wallet' | 'CopyTradingAccount' | 'GenesisVisionPlatform' | 'SignalProviderSettings' | 'Program' | 'Fund' | 'PaymentTransaction' | 'ProgramRequest' | 'FundRequest' | 'ExternalCommonAccount';
export declare const TransferRequestType: {
    constructFromObject: GenericFabric<TransferRequestType>;
};

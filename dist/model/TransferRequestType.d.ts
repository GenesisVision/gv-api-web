import { GenericFabric } from "../constructFromObject";
export declare type TransferRequestType = 'Undefined' | 'Wallet' | 'TradingAccount' | 'GenesisVisionPlatform' | 'SignalProviderSettings' | 'Program' | 'Fund' | 'PaymentTransaction' | 'ProgramRequest' | 'FundRequest' | 'ExternalCommonAccount' | 'PendingTradingAccount';
export declare const TransferRequestType: {
    constructFromObject: GenericFabric<TransferRequestType>;
};

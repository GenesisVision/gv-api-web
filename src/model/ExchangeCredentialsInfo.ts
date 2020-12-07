import { ExchangeCredentialsIpInfo } from './ExchangeCredentialsIpInfo';

export interface ExchangeCredentialsInfo {
    apiKey: string;
    apiSecret: string;
    id: string;
    title: string;
    isEnabled: boolean;
    isTradingEnabled: boolean;
    dateCreate: Date;
    dateRemove: Date;
    allowedIps: Array<ExchangeCredentialsIpInfo>;
}



export interface CreateApiKeyModel {
    allowedIps: Array<string>;
    isTradingEnabled: boolean;
    twoFactorCode: string;
    title: string;
}


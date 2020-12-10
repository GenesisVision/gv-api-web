
export interface CreateApiKeyModel {
    isIpRestrict: boolean;
    allowedIps: Array<string>;
    isTradingEnabled: boolean;
    twoFactorCode: string;
    title: string;
}



export interface EditApiKeyRestrictionsModel {
    isIpRestrict: boolean;
    allowedIps: Array<string>;
    isTradingEnabled: boolean;
    twoFactorCode: string;
}


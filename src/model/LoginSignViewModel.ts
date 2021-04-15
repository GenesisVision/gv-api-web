
export interface LoginSignViewModel {
    address: string;
    readonly addressLowered: string;
    messageId: string;
    signature: string;
    client: string;
    twoFactorCode: string;
    recoveryCode: string;
}


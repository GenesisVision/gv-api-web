export interface ProgramFollowDetailsFullTradingAccountDetails {
    id: string;
    login: string;
    currency: CurrencyEnum;
    leverageMin: number;
    leverageMax: number;
    balance: number;
}

type CurrencyEnum = 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';

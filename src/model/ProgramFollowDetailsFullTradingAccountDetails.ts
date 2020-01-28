export interface ProgramFollowDetailsFullTradingAccountDetails {
    id: string;
    login: string;
    currency: CurrencyEnum;
    leverageMin: number;
    leverageMax: number;
    balance: number;
}

type CurrencyEnum = 'USD' | 'BTC' | 'ETH' | 'USDT' | 'Undefined' | 'GVT' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';

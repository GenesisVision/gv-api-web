export interface ProgramFollowDetailsFullTradingAccountDetails {
    id: string;
    login: string;
    currency: CurrencyEnum;
    leverageMin: number;
    leverageMax: number;
    balance: number;
}

type CurrencyEnum = 'USDT' | 'USD' | 'BTC' | 'ETH' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';

export interface ProgramFollowDetailsFullTradingAccountDetails {
    id: string;
    login: string;
    currency: CurrencyEnum;
    leverageMin: number;
    leverageMax: number;
    balance: number;
}

type CurrencyEnum = 'USD' | 'USDT' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';

import { BrokerTradeServerType } from './BrokerTradeServerType';

export interface BrokerDetails {
    id: string;
    logoUrl: string;
    name: string;
    type: BrokerTradeServerType;
    isKycRequired: boolean;
    showSwaps: boolean;
    showTickets: boolean;
    showCommissionRebate: boolean;
    isSignalsAvailable: boolean;
    isKycRequiredSometime: boolean;
    showSwapsSometime: boolean;
    showTicketsSometime: boolean;
    showCommissionRebateSometime: boolean;
}


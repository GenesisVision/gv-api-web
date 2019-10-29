export declare class BrokerDetails {
    'logo'?: string;
    'name'?: string;
    'isKycRequired'?: boolean;
    'showSwaps'?: boolean;
    'showTickets'?: boolean;
    'showCommissionRebate'?: boolean;
    'isKycRequiredSometime'?: boolean;
    'showSwapsSometime'?: boolean;
    'showTicketsSometime'?: boolean;
    'showCommissionRebateSometime'?: boolean;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: BrokerDetails): BrokerDetails;
}

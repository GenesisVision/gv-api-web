export declare class BrokerDetailsOld {
    'logo'?: string;
    'name'?: string;
    'isForex'?: boolean;
    'showSwaps'?: boolean;
    'showTickets'?: boolean;
    'showCommissionRebate'?: boolean;
    'isForexSometime'?: boolean;
    'showSwapsSometime'?: boolean;
    'showTicketsSometime'?: boolean;
    'showCommissionRebateSometime'?: boolean;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: BrokerDetailsOld): BrokerDetailsOld;
}

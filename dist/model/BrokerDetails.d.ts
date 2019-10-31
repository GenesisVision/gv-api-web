export declare class BrokerDetails {
    'logo': string;
    'name': string;
    'isKycRequired': boolean;
    'showSwaps': boolean;
    'showTickets': boolean;
    'showCommissionRebate': boolean;
    'isKycRequiredSometime': boolean;
    'showSwapsSometime': boolean;
    'showTicketsSometime': boolean;
    'showCommissionRebateSometime': boolean;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): BrokerDetails | undefined;
}

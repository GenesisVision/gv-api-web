import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { BrokersInfoOld } from "../model/brokersInfoOld";
import { BrokersProgramInfoOld } from "../model/brokersProgramInfoOld";
export declare class BrokersService {
    apiClient: ApiClient;
    constructor(apiClient?: ApiClient);
    getBrokers(): CancelablePromise<BrokersInfoOld>;
    private getBrokersWithHttpInfo;
    getBrokersForProgram(programId: string): CancelablePromise<BrokersProgramInfoOld>;
    private getBrokersForProgramWithHttpInfo;
}

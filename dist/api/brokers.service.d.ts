import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { BrokersInfo } from "../model/brokersInfo";
import { BrokersProgramInfo } from "../model/brokersProgramInfo";
export declare class BrokersService {
    apiClient: ApiClient;
    constructor(apiClient?: ApiClient);
    getBrokers(): CancelablePromise<BrokersInfo>;
    private getBrokersWithHttpInfo;
    getBrokersForProgram(programId: string): CancelablePromise<BrokersProgramInfo>;
    private getBrokersForProgramWithHttpInfo;
}

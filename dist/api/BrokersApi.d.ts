import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { BrokersInfo } from "../model/BrokersInfo";
import { BrokersProgramInfo } from "../model/BrokersProgramInfo";
export declare class BrokersApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getBrokers(): CancelablePromise<BrokersInfo>;
    private getBrokersWithHttpInfo;
    getBrokersForProgram(programId: string): CancelablePromise<BrokersProgramInfo>;
    private getBrokersForProgramWithHttpInfo;
}

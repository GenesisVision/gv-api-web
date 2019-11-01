import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { BrokersInfoOld } from "../model/BrokersInfoOld";
import { BrokersProgramInfoOld } from "../model/BrokersProgramInfoOld";
export declare class BrokersApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getBrokers(): CancelablePromise<BrokersInfoOld>;
    private getBrokersWithHttpInfo;
    getBrokersForProgram(programId: string): CancelablePromise<BrokersProgramInfoOld>;
    private getBrokersForProgramWithHttpInfo;
}

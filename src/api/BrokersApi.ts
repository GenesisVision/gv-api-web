import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { BrokersInfo } from '../model/BrokersInfo';
import { BrokersProgramInfo } from '../model/BrokersProgramInfo';
import { ErrorViewModel } from '../model/ErrorViewModel';

export default class BrokersApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  getBrokers = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<BrokersInfo> => {
    
    return generateMethod<Promise<BrokersInfo>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/brokers",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getBrokersDemo = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<BrokersInfo> => {
    
    return generateMethod<Promise<BrokersInfo>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/brokers/demo",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getBrokersExternal = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<BrokersInfo> => {
    
    return generateMethod<Promise<BrokersInfo>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/brokers/external",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getBrokersForProgram = (
    programId: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<BrokersProgramInfo> => {
    
    return generateMethod<Promise<BrokersProgramInfo>>({
        init,
        pathParams: {  programId  },
        apiClient: this.apiClient,
        path: "/v2.0/brokers/{programId}",
        
        returnType: "structure",
        method: "GET",
    })
  };
}

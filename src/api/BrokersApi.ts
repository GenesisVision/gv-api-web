import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { BrokersInfo } from '../model/BrokersInfo';
import { BrokersProgramInfo } from '../model/BrokersProgramInfo';
import { ErrorViewModel } from '../model/ErrorViewModel';

export default class BrokersApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    getBrokers = (        options: {
        } = {},
        init: RequestInit = {}): Promise<BrokersInfo> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/brokers", {
    },  {
    });
    let body = null;

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
        }
    }).then(handleErrors).then<BrokersInfo>((response: Response) => {
        return response.json();
    })
    }

    getBrokersDemo = (        options: {
        } = {},
        init: RequestInit = {}): Promise<BrokersInfo> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/brokers/demo", {
    },  {
    });
    let body = null;

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
        }
    }).then(handleErrors).then<BrokersInfo>((response: Response) => {
        return response.json();
    })
    }

    getBrokersExternal = (        options: {
        } = {},
        init: RequestInit = {}): Promise<BrokersInfo> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/brokers/external", {
    },  {
    });
    let body = null;

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
        }
    }).then(handleErrors).then<BrokersInfo>((response: Response) => {
        return response.json();
    })
    }

    getBrokersForProgram = (
        programId: string,
        options: {
        } = {},
        init: RequestInit = {}): Promise<BrokersProgramInfo> => {
            checkRequiredParameter(programId, "programId", "getBrokersForProgram");

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/brokers/{programId}", {
        programId
    },  {
    });
    let body = null;

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            ...init.headers,
            "Content-Type": "application/json",
        }
    }).then(handleErrors).then<BrokersProgramInfo>((response: Response) => {
        return response.json();
    })
    }
}

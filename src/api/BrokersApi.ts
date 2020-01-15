import ApiClient from "../apiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
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
        init: RequestInit = {}) => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/brokers", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<BrokersInfo>((response: Response) => {
        return response.json();
    })
    }

    getBrokersDemo = (        options: {
        } = {},
        init: RequestInit = {}) => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/brokers/demo", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<BrokersInfo>((response: Response) => {
        return response.json();
    })
    }

    getBrokersExternal = (        options: {
        } = {},
        init: RequestInit = {}) => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/brokers/external", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<BrokersInfo>((response: Response) => {
        return response.json();
    })
    }

    getBrokersForProgram = (
        programId: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (programId === null || programId === undefined) {
                throw new Error('Required parameter programId was null or undefined when calling getBrokersForProgram.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/brokers/{programId}", {
        programId
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = null;


    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
        }
    }).then(handleErrors).then<BrokersProgramInfo>((response: Response) => {
        return response.json();
    })
    }
}
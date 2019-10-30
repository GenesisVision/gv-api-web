/// <reference types="node" />
import superagent, { SuperAgentRequest, SuperAgentStatic } from "superagent";
import https from "https";
import CancelablePromise from "./cancelable-promise/CancelablePromise";
export declare type CallApiResponse<T> = {
    data: T;
    response: superagent.Response;
};
export default class ApiClient {
    agent?: SuperAgentStatic;
    basePath: string;
    authentications: {
        [key: string]: any;
    };
    defaultHeaders: {};
    timeout: number;
    cache: boolean;
    enableCookies: boolean;
    requestAgent: https.Agent | null;
    static instance: ApiClient;
    constructor();
    paramToString(param: Date | number | string | boolean): string;
    buildUrl(path: string, pathParams: {
        [key: string]: Date | string | number | boolean;
    }): string;
    isJsonMime(contentType: string): boolean;
    jsonPreferredMime(contentTypes: string[]): string;
    isFileParam(param: any): boolean;
    normalizeParams(params?: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
    static CollectionFormatEnum: {
        CSV: string;
        SSV: string;
        TSV: string;
        PIPES: string;
        MULTI: string;
    };
    buildCollectionParam(param?: any[], collectionFormat?: string): string | null | string[];
    applyAuthToRequest(request: SuperAgentRequest, authNames: string[]): void;
    deserialize(response?: superagent.Response, returnType?: any): any;
    callApi<T>(path: string, httpMethod: "GET" | "POST" | "PUT" | "DELETE", pathParams: {
        [key: string]: number | string | Date | boolean;
    }, queryParams: {
        [key: string]: any;
    }, headerParams: {
        [key: string]: any;
    }, formParams: {
        [key: string]: any;
    }, bodyParam: string | Object | null | undefined, authNames: string[], contentTypes: string[], accepts: string[], returnType: any): CancelablePromise<CallApiResponse<T>>;
    static parseDate(str: string): Date;
    static convertToType(data: any, type: 'boolean' | 'integer' | 'number' | 'string' | 'Date' | 'Blob' | object | any): any;
    static constructFromObject(data: any, obj: any, itemType: any): void;
}

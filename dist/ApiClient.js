import superagent from "superagent";
import querystring from "querystring";
import CancelablePromise from "./cancelable-promise/CancelablePromise";
export default class ApiClient {
    constructor() {
        this.basePath = 'https://localhost/api'.replace(/\/+$/, '');
        this.authentications = {};
        this.defaultHeaders = {};
        this.timeout = 60000;
        this.cache = true;
        this.enableCookies = false;
        this.basePath = 'https://localhost/api'.replace(/\/+$/, '');
        this.authentications = {};
        this.defaultHeaders = {};
        this.timeout = 60000;
        this.cache = true;
        this.enableCookies = false;
        if (typeof window === 'undefined') {
            this.agent = superagent.agent();
        }
        this.requestAgent = null;
    }
    paramToString(param) {
        if (param === undefined || param === null) {
            return '';
        }
        if (param instanceof Date) {
            return param.toJSON();
        }
        return param.toString();
    }
    buildUrl(path, pathParams) {
        if (!path.match(/^\//)) {
            path = '/' + path;
        }
        let url = this.basePath + path;
        url = url.replace(/{([\w-]+)}/g, (fullMatch, key) => {
            let value;
            if (pathParams.hasOwnProperty(key)) {
                value = this.paramToString(pathParams[key]);
            }
            else {
                value = fullMatch;
            }
            return encodeURIComponent(value);
        });
        return url;
    }
    isJsonMime(contentType) {
        return Boolean(contentType != null && contentType.match(/^application\/json(;.*)?$/i));
    }
    jsonPreferredMime(contentTypes) {
        for (let i = 0; i < contentTypes.length; i++) {
            if (this.isJsonMime(contentTypes[i])) {
                return contentTypes[i];
            }
        }
        return contentTypes[0];
    }
    isFileParam(param) {
        if (typeof require === 'function') {
            let fs;
            try {
                fs = require('fs');
            }
            catch (err) {
            }
            if (fs && fs.ReadStream && param instanceof fs.ReadStream) {
                return true;
            }
        }
        if (typeof Buffer === 'function' && param instanceof Buffer) {
            return true;
        }
        if (typeof Blob === 'function' && param instanceof Blob) {
            return true;
        }
        return !!(typeof File === 'function' && param instanceof File);
    }
    normalizeParams(params) {
        const newParams = {};
        for (let key in params) {
            if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null) {
                const value = params[key];
                if (this.isFileParam(value) || Array.isArray(value)) {
                    newParams[key] = value;
                }
                else {
                    newParams[key] = this.paramToString(value);
                }
            }
        }
        return newParams;
    }
    buildCollectionParam(param, collectionFormat) {
        if (param === null || param === undefined) {
            return null;
        }
        switch (collectionFormat) {
            case 'csv':
                return param.map(this.paramToString).join(',');
            case 'ssv':
                return param.map(this.paramToString).join(' ');
            case 'tsv':
                return param.map(this.paramToString).join('\t');
            case 'pipes':
                return param.map(this.paramToString).join('|');
            case 'multi':
                return param.map(this.paramToString);
            default:
                throw new Error('Unknown collection format: ' + collectionFormat);
        }
    }
    applyAuthToRequest(request, authNames) {
        authNames.forEach((authName) => {
            const auth = this.authentications[authName];
            switch (auth.type) {
                case 'basic':
                    if (auth.username || auth.password) {
                        request.auth(auth.username || '', auth.password || '');
                    }
                    break;
                case 'apiKey':
                    if (auth.apiKey) {
                        const data = {};
                        if (auth.apiKeyPrefix) {
                            data[auth.name] = auth.apiKeyPrefix + ' ' + auth.apiKey;
                        }
                        else {
                            data[auth.name] = auth.apiKey;
                        }
                        if (auth['in'] === 'header') {
                            request.set(data);
                        }
                        else {
                            request.query(data);
                        }
                    }
                    break;
                case 'oauth2':
                    if (auth.accessToken) {
                        request.set({ 'Authorization': 'Bearer ' + auth.accessToken });
                    }
                    break;
                default:
                    throw new Error('Unknown authentication type: ' + auth.type);
            }
        });
    }
    deserialize(response, returnType) {
        if (response == null || returnType == null || response.status == 204) {
            return null;
        }
        var data = response.body;
        if (data == null || (typeof data === 'object' && typeof data.length === 'undefined' && !Object.keys(data).length) && typeof data.slice === 'undefined') {
            data = response.text;
        }
        return ApiClient.convertToType(data, returnType);
    }
    callApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts, returnType) {
        const url = this.buildUrl(path, pathParams);
        const request = superagent(httpMethod, url);
        this.applyAuthToRequest(request, authNames);
        if (httpMethod.toUpperCase() === 'GET' && !this.cache) {
            queryParams['_'] = new Date().getTime();
        }
        request.query(this.normalizeParams(queryParams));
        request.set(this.defaultHeaders).set(this.normalizeParams(headerParams));
        if (this.requestAgent) {
            request.agent(this.requestAgent);
        }
        request.timeout(this.timeout);
        var contentType = this.jsonPreferredMime(contentTypes);
        if (contentType) {
            if (contentType != 'multipart/form-data') {
                request.type(contentType);
            }
        }
        else if (!request.header['Content-Type']) {
            request.type('application/json');
        }
        if (contentType === 'application/x-www-form-urlencoded') {
            request.send(querystring.stringify(this.normalizeParams(formParams)));
        }
        else if (contentType == 'multipart/form-data') {
            var _formParams = this.normalizeParams(formParams);
            for (var key in _formParams) {
                if (_formParams.hasOwnProperty(key)) {
                    if (this.isFileParam(_formParams[key])) {
                        request.attach(key, _formParams[key]);
                    }
                    else {
                        request.field(key, _formParams[key]);
                    }
                }
            }
        }
        else if (bodyParam) {
            request.send(bodyParam);
        }
        var accept = this.jsonPreferredMime(accepts);
        if (accept) {
            request.accept(accept);
        }
        if (returnType === 'Blob') {
            request.responseType('blob');
        }
        else if (returnType === 'String') {
            request.responseType('string');
        }
        if (this.enableCookies) {
            if (typeof window === 'undefined' && this.agent !== undefined) {
                this.agent.attachCookies(request);
            }
            else {
                request.withCredentials();
            }
        }
        return new CancelablePromise((resolve, reject) => {
            request.end((error, response) => {
                if (error) {
                    reject(error);
                }
                else {
                    try {
                        const data = this.deserialize(response, returnType);
                        if (this.enableCookies && typeof window === 'undefined' && this.agent !== undefined) {
                            this.agent.saveCookies(response);
                        }
                        resolve({ data, response });
                    }
                    catch (err) {
                        reject(err);
                    }
                }
            });
        }, () => request.abort());
    }
    static parseDate(str) {
        return new Date(str.replace(/T/i, ' '));
    }
    static convertToType(data, type) {
        if (data === null || data === undefined)
            return data;
        switch (type) {
            case 'boolean':
                return Boolean(data);
            case 'integer':
                return parseInt(data, 10);
            case 'number':
                return parseFloat(data);
            case 'string':
                return String(data);
            case 'Date':
                return ApiClient.parseDate(String(data));
            case 'Blob':
                return data;
            default:
                if (type === Object) {
                    return data;
                }
                else if (typeof type === 'function') {
                    return type.constructFromObject(data);
                }
                else if (Array.isArray(type)) {
                    var itemType = type[0];
                    return data.map((item) => {
                        return ApiClient.convertToType(item, itemType);
                    });
                }
                else if (typeof type === 'object') {
                    var keyType, valueType;
                    for (let k in type) {
                        if (type.hasOwnProperty(k)) {
                            keyType = k;
                            valueType = type[k];
                            break;
                        }
                    }
                    var result = {};
                    for (var k in data) {
                        if (data.hasOwnProperty(k)) {
                            var key = ApiClient.convertToType(k, keyType);
                            result[key] = ApiClient.convertToType(data[k], valueType);
                        }
                    }
                    return result;
                }
                else {
                    return data;
                }
        }
    }
    static constructFromObject(data, obj, itemType) {
        if (Array.isArray(data)) {
            for (let i = 0; i < data.length; i++) {
                if (data.hasOwnProperty(i))
                    obj[i] = ApiClient.convertToType(data[i], itemType);
            }
        }
        else {
            for (var k in data) {
                if (data.hasOwnProperty(k))
                    obj[k] = ApiClient.convertToType(data[k], itemType);
            }
        }
    }
}
ApiClient.CollectionFormatEnum = {
    CSV: ',',
    SSV: ' ',
    TSV: '\t',
    PIPES: '|',
    MULTI: 'multi'
};
ApiClient.instance = new ApiClient();

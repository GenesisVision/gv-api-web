import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
import { UploadResult } from '../model/UploadResult';

export default class FileApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    getFile = (
        id: string,
        options: {
            quality?: string
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getFile.');
                }
        const {
            quality
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/file/{id}", {
        id
    })

    const query = buildQueryString(path, {
        quality: quality
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
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

    uploadFile = (
        uploadedFile: File,
        options: {
            authorization?: string
        } = {},
        init: RequestInit = {}) => {
                if (uploadedFile === null || uploadedFile === undefined) {
                throw new Error('Required parameter uploadedFile was null or undefined when calling uploadFile.');
                }
        const {
            authorization
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/file/upload", {
    })

    const query = buildQueryString(path, {
    })

    let contentType = "application/json";
    let body = null;

    body = new FormData();
    contentType = "multipart/form-data";
    body.append("uploadedFile", uploadedFile);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<UploadResult>((response: Response) => {
        return response.json();
    })
    }
}
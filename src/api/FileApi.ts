import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
import { UploadResult } from '../model/UploadResult';

export default class FileApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    uploadFile = (        options: {
            uploadedFile?: File
        } = {},
        init: RequestInit = {}): Promise<UploadResult> => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/file/upload", {
    })

    const query = buildQueryString(path, {
    })

    let body = null;

    body = new FormData();
    if (options['uploadedFile'] !== undefined) {
        body.append("uploadedFile", options['uploadedFile']);
    }

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            ...init.headers,
        }
    }).then(handleErrors).then<UploadResult>((response: Response) => {
        return response.json();
    })
    }
}
import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
import { ImageLocation } from '../model/ImageLocation';
import { UploadResult } from '../model/UploadResult';

export default class FileApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    uploadFile = (        options: {
            uploadedFile?: File,
            location?: ImageLocation
        } = {},
        init: RequestInit = {}): Promise<UploadResult> => {

    const query = buildPathAndQuery(this.apiClient.apiUrl, "/v2.0/file/upload", {
    },  {
        location: options['location']
    });
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

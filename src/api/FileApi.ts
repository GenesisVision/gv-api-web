import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
import { ImageLocation } from '../model/ImageLocation';
import { UploadResult } from '../model/UploadResult';

export default class FileApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  uploadFile = (
    options: {
      uploadedFile?: File,
      location?: ImageLocation
      } = {},
    init: RequestInit = {}): Promise<UploadResult> => {
    const formParams = new FormData();
    if (options['uploadedFile'] !== undefined) {
      formParams.append("uploadedFile", options['uploadedFile']);
    }
    
    return generateMethod<Promise<UploadResult>>({
        init,
        queryParams: {  location: options['location']  },
        apiClient: this.apiClient,
        path: "/v2.0/file/upload",
        formParams,
        
        returnType: "structure",
        method: "POST",
    })
  };
}

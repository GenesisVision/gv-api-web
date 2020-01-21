import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
import { UploadResult } from '../model/UploadResult';

export default class FileApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetFile
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/file/{id}
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), quality(string)]
        Key: baseName Value = File
        Key: isListContainer Value = false
        Key: imports Value = []
        Key: pathParams Value = [id(string)]
        Key: isCollectionFormatMulti Value = false
        Key: formParams Value = []
        Key: hasCookieParams Value = false
        Key: hasAuthMethods Value = false
        Key: isBinary Value = false
        Key: isUuid Value = false
        Key: isRestfulUpdate Value = false
        Key: returnContainer Value = 
        Key: tags Value = [class Tag {
    name: file
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = 
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = 
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@d7cfbbd]
        Key: isNumeric Value = false
        Key: produces Value = 
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = 
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [quality(string)]
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = GET
        Key: hasConsumes Value = false
        Key: hasProduces Value = false
        Key: hasRequiredParams Value = true
        Key: hasReference Value = false
        Key: hasExamples Value = false
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = true
        Key: requiredParams Value = [id(string)]
        Key: nickname Value = getFile
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getfile
        Key: operationId Value = getFile
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_file
        Key: consumes Value = 
        Key: summary Value = Download file
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-get-method&#x3D;true, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;false, x-has-params&#x3D;true, x-has-optional-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = true
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = 
        Key: discriminator Value = 
        Key: testPath Value = 
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

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

    let body = null;

    let contentType = "application/json";

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

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = UploadFile
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/file/upload
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [uploadedFile(File), Authorization(string)]
        Key: baseName Value = File
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, UploadResult]
        Key: pathParams Value = []
        Key: isCollectionFormatMulti Value = false
        Key: formParams Value = [uploadedFile(File)]
        Key: hasCookieParams Value = false
        Key: hasAuthMethods Value = false
        Key: isBinary Value = false
        Key: isUuid Value = false
        Key: isRestfulUpdate Value = false
        Key: returnContainer Value = 
        Key: tags Value = [class Tag {
    name: file
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = UploadResult
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@3ab028a8]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = UploadResult
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = true
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = []
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = POST
        Key: hasConsumes Value = true
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = true
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [uploadedFile(File)]
        Key: nickname Value = uploadFile
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = uploadfile
        Key: operationId Value = uploadFile
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = upload_file
        Key: consumes Value = [{hasMore&#x3D;null, mediaType&#x3D;multipart/form-data}]
        Key: summary Value = Upload file
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-has-reference&#x3D;true, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-more&#x3D;false, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-has-optional-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-update&#x3D;false, x-has-produces&#x3D;true, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = true
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/file/upload
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

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

    let body = null;

    body = new FormData();
    body.append("uploadedFile", uploadedFile);

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<UploadResult>((response: Response) => {
        return response.json();
    })
    }
}
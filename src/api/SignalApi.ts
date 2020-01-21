import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { AttachToExternalSignalProviderCommon } from '../model/AttachToExternalSignalProviderCommon';
import { AttachToExternalSignalProviderExt } from '../model/AttachToExternalSignalProviderExt';
import { AttachToSignalProvider } from '../model/AttachToSignalProvider';
import { DetachFromExternalSignalProvider } from '../model/DetachFromExternalSignalProvider';
import { DetachFromSignalProvider } from '../model/DetachFromSignalProvider';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { ItemsViewModelSignalTradingEvent } from '../model/ItemsViewModelSignalTradingEvent';
import { ItemsViewModelTradingAccountDetails } from '../model/ItemsViewModelTradingAccountDetails';
import { TradesSignalViewModel } from '../model/TradesSignalViewModel';

export default class SignalApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = true
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = AttachSlaveToMasterExternalCommonAccount
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/signal/external/attach/{id}/common
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), body(AttachToExternalSignalProviderCommon)]
        Key: baseName Value = Signal
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, AttachToExternalSignalProviderCommon]
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
    name: signal
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@73f09127]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = 
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = []
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = POST
        Key: hasConsumes Value = true
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = false
        Key: hasExamples Value = false
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [id(string), Authorization(string)]
        Key: nickname Value = attachSlaveToMasterExternalCommonAccount
        Key: bodyParam Value = body(AttachToExternalSignalProviderCommon)
        Key: operationIdLowerCase Value = attachslavetomasterexternalcommonaccount
        Key: operationId Value = attachSlaveToMasterExternalCommonAccount
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = attach_slave_to_master_external_common_account
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = Subscribe to external signal using common account
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-codegen-request-body-name&#x3D;model, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(AttachToExternalSignalProviderCommon)]
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = 
        Key: discriminator Value = 
        Key: testPath Value = 
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    attachSlaveToMasterExternalCommonAccount = (
        id: string,
        authorization: string,
        options: {
            body?: AttachToExternalSignalProviderCommon
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling attachSlaveToMasterExternalCommonAccount.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling attachSlaveToMasterExternalCommonAccount.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/signal/external/attach/{id}/common", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = true
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = AttachSlaveToMasterExternalPrivateAccount
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/signal/external/attach/{id}/private
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), body(AttachToExternalSignalProviderExt)]
        Key: baseName Value = Signal
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, AttachToExternalSignalProviderExt]
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
    name: signal
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@549027e2]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = 
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = []
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = POST
        Key: hasConsumes Value = true
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = false
        Key: hasExamples Value = false
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [id(string), Authorization(string)]
        Key: nickname Value = attachSlaveToMasterExternalPrivateAccount
        Key: bodyParam Value = body(AttachToExternalSignalProviderExt)
        Key: operationIdLowerCase Value = attachslavetomasterexternalprivateaccount
        Key: operationId Value = attachSlaveToMasterExternalPrivateAccount
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = attach_slave_to_master_external_private_account
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = Subscribe to external signal account
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-codegen-request-body-name&#x3D;model, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(AttachToExternalSignalProviderExt)]
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = 
        Key: discriminator Value = 
        Key: testPath Value = 
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    attachSlaveToMasterExternalPrivateAccount = (
        id: string,
        authorization: string,
        options: {
            body?: AttachToExternalSignalProviderExt
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling attachSlaveToMasterExternalPrivateAccount.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling attachSlaveToMasterExternalPrivateAccount.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/signal/external/attach/{id}/private", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = true
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = AttachSlaveToMasterInternal
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/signal/attach/{id}
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), body(AttachToSignalProvider)]
        Key: baseName Value = Signal
        Key: isListContainer Value = false
        Key: imports Value = [AttachToSignalProvider, ErrorViewModel]
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
    name: signal
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@5dea2b04]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = 
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = []
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = POST
        Key: hasConsumes Value = true
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = false
        Key: hasExamples Value = false
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [id(string), Authorization(string)]
        Key: nickname Value = attachSlaveToMasterInternal
        Key: bodyParam Value = body(AttachToSignalProvider)
        Key: operationIdLowerCase Value = attachslavetomasterinternal
        Key: operationId Value = attachSlaveToMasterInternal
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = attach_slave_to_master_internal
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = Subscribe to signal provider
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-codegen-request-body-name&#x3D;model, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(AttachToSignalProvider)]
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = 
        Key: discriminator Value = 
        Key: testPath Value = 
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    attachSlaveToMasterInternal = (
        id: string,
        authorization: string,
        options: {
            body?: AttachToSignalProvider
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling attachSlaveToMasterInternal.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling attachSlaveToMasterInternal.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/signal/attach/{id}", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = CloseTradeInternal
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/signal/trades/{id}/close
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), assetId(string)]
        Key: baseName Value = Signal
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel]
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
    name: signal
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@551d534c]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = 
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [assetId(string)]
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = POST
        Key: hasConsumes Value = false
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = false
        Key: hasExamples Value = false
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = true
        Key: requiredParams Value = [id(string), Authorization(string)]
        Key: nickname Value = closeTradeInternal
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = closetradeinternal
        Key: operationId Value = closeTradeInternal
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = close_trade_internal
        Key: consumes Value = 
        Key: summary Value = Close signal trade
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-has-optional-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
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
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    closeTradeInternal = (
        id: string,
        authorization: string,
        options: {
            assetId?: string
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling closeTradeInternal.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling closeTradeInternal.');
                }
        const {
            assetId
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/signal/trades/{id}/close", {
        id
    })

    const query = buildQueryString(path, {
        assetId: assetId
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = true
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = DetachSlaveFromMasterExternal
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/signal/external/detach/{id}
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), body(DetachFromExternalSignalProvider)]
        Key: baseName Value = Signal
        Key: isListContainer Value = false
        Key: imports Value = [DetachFromExternalSignalProvider, ErrorViewModel]
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
    name: signal
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@22938961]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = 
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = []
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = POST
        Key: hasConsumes Value = true
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = false
        Key: hasExamples Value = false
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [id(string), Authorization(string)]
        Key: nickname Value = detachSlaveFromMasterExternal
        Key: bodyParam Value = body(DetachFromExternalSignalProvider)
        Key: operationIdLowerCase Value = detachslavefrommasterexternal
        Key: operationId Value = detachSlaveFromMasterExternal
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = detach_slave_from_master_external
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = 
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-codegen-request-body-name&#x3D;model, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(DetachFromExternalSignalProvider)]
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = 
        Key: discriminator Value = 
        Key: testPath Value = 
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    detachSlaveFromMasterExternal = (
        id: string,
        authorization: string,
        options: {
            body?: DetachFromExternalSignalProvider
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling detachSlaveFromMasterExternal.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling detachSlaveFromMasterExternal.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/signal/external/detach/{id}", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = true
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = DetachSlaveFromMasterInternal
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/signal/detach/{id}
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), body(DetachFromSignalProvider)]
        Key: baseName Value = Signal
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, DetachFromSignalProvider]
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
    name: signal
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@77e905e6]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = 
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = []
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = POST
        Key: hasConsumes Value = true
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = false
        Key: hasExamples Value = false
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [id(string), Authorization(string)]
        Key: nickname Value = detachSlaveFromMasterInternal
        Key: bodyParam Value = body(DetachFromSignalProvider)
        Key: operationIdLowerCase Value = detachslavefrommasterinternal
        Key: operationId Value = detachSlaveFromMasterInternal
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = detach_slave_from_master_internal
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = Unsubscribe from signal provider
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-codegen-request-body-name&#x3D;model, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(DetachFromSignalProvider)]
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = 
        Key: discriminator Value = 
        Key: testPath Value = 
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    detachSlaveFromMasterInternal = (
        id: string,
        authorization: string,
        options: {
            body?: DetachFromSignalProvider
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling detachSlaveFromMasterInternal.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling detachSlaveFromMasterInternal.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/signal/detach/{id}", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetOpenSignalTrades
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/signal/trades/open
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), Sorting(string), Symbol(string), AccountId(string), AccountCurrency(string), Skip(number), Take(number)]
        Key: baseName Value = Signal
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, TradesSignalViewModel]
        Key: pathParams Value = []
        Key: isCollectionFormatMulti Value = false
        Key: formParams Value = []
        Key: hasCookieParams Value = false
        Key: hasAuthMethods Value = false
        Key: isBinary Value = false
        Key: isUuid Value = false
        Key: isRestfulUpdate Value = false
        Key: returnContainer Value = 
        Key: tags Value = [class Tag {
    name: signal
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = TradesSignalViewModel
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;total&quot; : 7,
  &quot;showSwaps&quot; : true,
  &quot;showTickets&quot; : true,
  &quot;items&quot; : [ {
    &quot;date&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;originalCommissionCurrency&quot; : &quot;originalCommissionCurrency&quot;,
    &quot;symbol&quot; : &quot;symbol&quot;,
    &quot;ticket&quot; : &quot;ticket&quot;,
    &quot;swap&quot; : 1.4894159098541704,
    &quot;originalCommission&quot; : 1.2315135367772556,
    &quot;totalCommission&quot; : 7.061401241503109,
    &quot;login&quot; : &quot;login&quot;,
    &quot;volume&quot; : 9.301444243932576,
    &quot;totalCommissionByType&quot; : [ {
      &quot;amount&quot; : 9.301444243932576,
      &quot;description&quot; : &quot;description&quot;,
      &quot;title&quot; : &quot;title&quot;,
      &quot;type&quot; : &quot;Undefined&quot;
    }, {
      &quot;amount&quot; : 9.301444243932576,
      &quot;description&quot; : &quot;description&quot;,
      &quot;title&quot; : &quot;title&quot;,
      &quot;type&quot; : &quot;Undefined&quot;
    } ],
    &quot;priceCurrent&quot; : 4.145608029883936,
    &quot;entry&quot; : &quot;In&quot;,
    &quot;price&quot; : 2.027123023002322,
    &quot;showOriginalCommission&quot; : true,
    &quot;tradingAccountId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;profitCurrency&quot; : &quot;profitCurrency&quot;,
    &quot;commission&quot; : 1.0246457001441578,
    &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;baseVolume&quot; : 7.386281948385884,
    &quot;signalData&quot; : {
      &quot;masters&quot; : [ {
        &quot;share&quot; : 6.84685269835264,
        &quot;login&quot; : &quot;login&quot;
      }, {
        &quot;share&quot; : 6.84685269835264,
        &quot;login&quot; : &quot;login&quot;
      } ]
    },
    &quot;profit&quot; : 3.616076749251911,
    &quot;providers&quot; : [ {
      &quot;volume&quot; : 1.4658129805029452,
      &quot;firstOrderDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
      &quot;fees&quot; : [ {
        &quot;amount&quot; : 2.3021358869347655,
        &quot;currency&quot; : &quot;BTC&quot;,
        &quot;type&quot; : &quot;Undefined&quot;
      }, {
        &quot;amount&quot; : 2.3021358869347655,
        &quot;currency&quot; : &quot;BTC&quot;,
        &quot;type&quot; : &quot;Undefined&quot;
      } ],
      &quot;manager&quot; : {
        &quot;socialLinks&quot; : [ {
          &quot;name&quot; : &quot;name&quot;,
          &quot;logo&quot; : &quot;logo&quot;,
          &quot;type&quot; : &quot;Undefined&quot;,
          &quot;value&quot; : &quot;value&quot;,
          &quot;url&quot; : &quot;url&quot;
        }, {
          &quot;name&quot; : &quot;name&quot;,
          &quot;logo&quot; : &quot;logo&quot;,
          &quot;type&quot; : &quot;Undefined&quot;,
          &quot;value&quot; : &quot;value&quot;,
          &quot;url&quot; : &quot;url&quot;
        } ],
        &quot;registrationDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
        &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
        &quot;avatar&quot; : &quot;avatar&quot;,
        &quot;url&quot; : &quot;url&quot;,
        &quot;username&quot; : &quot;username&quot;
      },
      &quot;priceOpenAvg&quot; : 5.962133916683182,
      &quot;program&quot; : {
        &quot;color&quot; : &quot;color&quot;,
        &quot;level&quot; : 0,
        &quot;logo&quot; : &quot;logo&quot;,
        &quot;title&quot; : &quot;title&quot;,
        &quot;type&quot; : &quot;None&quot;,
        &quot;url&quot; : &quot;url&quot;,
        &quot;levelProgress&quot; : 6.027456183070403
      },
      &quot;profit&quot; : 5.637376656633329,
      &quot;programId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;
    }, {
      &quot;volume&quot; : 1.4658129805029452,
      &quot;firstOrderDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
      &quot;fees&quot; : [ {
        &quot;amount&quot; : 2.3021358869347655,
        &quot;currency&quot; : &quot;BTC&quot;,
        &quot;type&quot; : &quot;Undefined&quot;
      }, {
        &quot;amount&quot; : 2.3021358869347655,
        &quot;currency&quot; : &quot;BTC&quot;,
        &quot;type&quot; : &quot;Undefined&quot;
      } ],
      &quot;manager&quot; : {
        &quot;socialLinks&quot; : [ {
          &quot;name&quot; : &quot;name&quot;,
          &quot;logo&quot; : &quot;logo&quot;,
          &quot;type&quot; : &quot;Undefined&quot;,
          &quot;value&quot; : &quot;value&quot;,
          &quot;url&quot; : &quot;url&quot;
        }, {
          &quot;name&quot; : &quot;name&quot;,
          &quot;logo&quot; : &quot;logo&quot;,
          &quot;type&quot; : &quot;Undefined&quot;,
          &quot;value&quot; : &quot;value&quot;,
          &quot;url&quot; : &quot;url&quot;
        } ],
        &quot;registrationDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
        &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
        &quot;avatar&quot; : &quot;avatar&quot;,
        &quot;url&quot; : &quot;url&quot;,
        &quot;username&quot; : &quot;username&quot;
      },
      &quot;priceOpenAvg&quot; : 5.962133916683182,
      &quot;program&quot; : {
        &quot;color&quot; : &quot;color&quot;,
        &quot;level&quot; : 0,
        &quot;logo&quot; : &quot;logo&quot;,
        &quot;title&quot; : &quot;title&quot;,
        &quot;type&quot; : &quot;None&quot;,
        &quot;url&quot; : &quot;url&quot;,
        &quot;levelProgress&quot; : 6.027456183070403
      },
      &quot;profit&quot; : 5.637376656633329,
      &quot;programId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;
    } ],
    &quot;direction&quot; : &quot;Buy&quot;
  }, {
    &quot;date&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;originalCommissionCurrency&quot; : &quot;originalCommissionCurrency&quot;,
    &quot;symbol&quot; : &quot;symbol&quot;,
    &quot;ticket&quot; : &quot;ticket&quot;,
    &quot;swap&quot; : 1.4894159098541704,
    &quot;originalCommission&quot; : 1.2315135367772556,
    &quot;totalCommission&quot; : 7.061401241503109,
    &quot;login&quot; : &quot;login&quot;,
    &quot;volume&quot; : 9.301444243932576,
    &quot;totalCommissionByType&quot; : [ {
      &quot;amount&quot; : 9.301444243932576,
      &quot;description&quot; : &quot;description&quot;,
      &quot;title&quot; : &quot;title&quot;,
      &quot;type&quot; : &quot;Undefined&quot;
    }, {
      &quot;amount&quot; : 9.301444243932576,
      &quot;description&quot; : &quot;description&quot;,
      &quot;title&quot; : &quot;title&quot;,
      &quot;type&quot; : &quot;Undefined&quot;
    } ],
    &quot;priceCurrent&quot; : 4.145608029883936,
    &quot;entry&quot; : &quot;In&quot;,
    &quot;price&quot; : 2.027123023002322,
    &quot;showOriginalCommission&quot; : true,
    &quot;tradingAccountId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;profitCurrency&quot; : &quot;profitCurrency&quot;,
    &quot;commission&quot; : 1.0246457001441578,
    &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;baseVolume&quot; : 7.386281948385884,
    &quot;signalData&quot; : {
      &quot;masters&quot; : [ {
        &quot;share&quot; : 6.84685269835264,
        &quot;login&quot; : &quot;login&quot;
      }, {
        &quot;share&quot; : 6.84685269835264,
        &quot;login&quot; : &quot;login&quot;
      } ]
    },
    &quot;profit&quot; : 3.616076749251911,
    &quot;providers&quot; : [ {
      &quot;volume&quot; : 1.4658129805029452,
      &quot;firstOrderDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
      &quot;fees&quot; : [ {
        &quot;amount&quot; : 2.3021358869347655,
        &quot;currency&quot; : &quot;BTC&quot;,
        &quot;type&quot; : &quot;Undefined&quot;
      }, {
        &quot;amount&quot; : 2.3021358869347655,
        &quot;currency&quot; : &quot;BTC&quot;,
        &quot;type&quot; : &quot;Undefined&quot;
      } ],
      &quot;manager&quot; : {
        &quot;socialLinks&quot; : [ {
          &quot;name&quot; : &quot;name&quot;,
          &quot;logo&quot; : &quot;logo&quot;,
          &quot;type&quot; : &quot;Undefined&quot;,
          &quot;value&quot; : &quot;value&quot;,
          &quot;url&quot; : &quot;url&quot;
        }, {
          &quot;name&quot; : &quot;name&quot;,
          &quot;logo&quot; : &quot;logo&quot;,
          &quot;type&quot; : &quot;Undefined&quot;,
          &quot;value&quot; : &quot;value&quot;,
          &quot;url&quot; : &quot;url&quot;
        } ],
        &quot;registrationDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
        &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
        &quot;avatar&quot; : &quot;avatar&quot;,
        &quot;url&quot; : &quot;url&quot;,
        &quot;username&quot; : &quot;username&quot;
      },
      &quot;priceOpenAvg&quot; : 5.962133916683182,
      &quot;program&quot; : {
        &quot;color&quot; : &quot;color&quot;,
        &quot;level&quot; : 0,
        &quot;logo&quot; : &quot;logo&quot;,
        &quot;title&quot; : &quot;title&quot;,
        &quot;type&quot; : &quot;None&quot;,
        &quot;url&quot; : &quot;url&quot;,
        &quot;levelProgress&quot; : 6.027456183070403
      },
      &quot;profit&quot; : 5.637376656633329,
      &quot;programId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;
    }, {
      &quot;volume&quot; : 1.4658129805029452,
      &quot;firstOrderDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
      &quot;fees&quot; : [ {
        &quot;amount&quot; : 2.3021358869347655,
        &quot;currency&quot; : &quot;BTC&quot;,
        &quot;type&quot; : &quot;Undefined&quot;
      }, {
        &quot;amount&quot; : 2.3021358869347655,
        &quot;currency&quot; : &quot;BTC&quot;,
        &quot;type&quot; : &quot;Undefined&quot;
      } ],
      &quot;manager&quot; : {
        &quot;socialLinks&quot; : [ {
          &quot;name&quot; : &quot;name&quot;,
          &quot;logo&quot; : &quot;logo&quot;,
          &quot;type&quot; : &quot;Undefined&quot;,
          &quot;value&quot; : &quot;value&quot;,
          &quot;url&quot; : &quot;url&quot;
        }, {
          &quot;name&quot; : &quot;name&quot;,
          &quot;logo&quot; : &quot;logo&quot;,
          &quot;type&quot; : &quot;Undefined&quot;,
          &quot;value&quot; : &quot;value&quot;,
          &quot;url&quot; : &quot;url&quot;
        } ],
        &quot;registrationDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
        &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
        &quot;avatar&quot; : &quot;avatar&quot;,
        &quot;url&quot; : &quot;url&quot;,
        &quot;username&quot; : &quot;username&quot;
      },
      &quot;priceOpenAvg&quot; : 5.962133916683182,
      &quot;program&quot; : {
        &quot;color&quot; : &quot;color&quot;,
        &quot;level&quot; : 0,
        &quot;logo&quot; : &quot;logo&quot;,
        &quot;title&quot; : &quot;title&quot;,
        &quot;type&quot; : &quot;None&quot;,
        &quot;url&quot; : &quot;url&quot;,
        &quot;levelProgress&quot; : 6.027456183070403
      },
      &quot;profit&quot; : 5.637376656633329,
      &quot;programId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;
    } ],
    &quot;direction&quot; : &quot;Buy&quot;
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@7b57b214]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = TradesSignalViewModel
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [Sorting(string), Symbol(string), AccountId(string), AccountCurrency(string), Skip(number), Take(number)]
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = GET
        Key: hasConsumes Value = false
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = true
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = true
        Key: requiredParams Value = [Authorization(string)]
        Key: nickname Value = getOpenSignalTrades
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getopensignaltrades
        Key: operationId Value = getOpenSignalTrades
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_open_signal_trades
        Key: consumes Value = 
        Key: summary Value = Get investors signals open trades
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-get-method&#x3D;true, x-has-reference&#x3D;true, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-params&#x3D;true, x-has-optional-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-update&#x3D;false, x-has-produces&#x3D;true, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = true
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/signal/trades/open
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getOpenSignalTrades = (
        authorization: string,
        options: {
            sorting?: string,
            symbol?: string,
            accountId?: string,
            accountCurrency?: string,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getOpenSignalTrades.');
                }
        const {
            sorting,
            symbol,
            accountId,
            accountCurrency,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/signal/trades/open", {
    })

    const query = buildQueryString(path, {
        Sorting: sorting,
        Symbol: symbol,
        AccountId: accountId,
        AccountCurrency: accountCurrency,
        Skip: skip,
        Take: take
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<TradesSignalViewModel>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetSignalTradingLog
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/signal/trades/log
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), AccountId(string), AccountCurrency(string), Skip(number), Take(number)]
        Key: baseName Value = Signal
        Key: isListContainer Value = false
        Key: imports Value = [ItemsViewModelSignalTradingEvent, ErrorViewModel]
        Key: pathParams Value = []
        Key: isCollectionFormatMulti Value = false
        Key: formParams Value = []
        Key: hasCookieParams Value = false
        Key: hasAuthMethods Value = false
        Key: isBinary Value = false
        Key: isUuid Value = false
        Key: isRestfulUpdate Value = false
        Key: returnContainer Value = 
        Key: tags Value = [class Tag {
    name: signal
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = ItemsViewModelSignalTradingEvent
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;total&quot; : 0,
  &quot;items&quot; : [ {
    &quot;date&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;message&quot; : &quot;message&quot;
  }, {
    &quot;date&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;message&quot; : &quot;message&quot;
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@446f0901]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = ItemsViewModelSignalTradingEvent
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [AccountId(string), AccountCurrency(string), Skip(number), Take(number)]
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = GET
        Key: hasConsumes Value = false
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = false
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = true
        Key: requiredParams Value = [Authorization(string)]
        Key: nickname Value = getSignalTradingLog
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getsignaltradinglog
        Key: operationId Value = getSignalTradingLog
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_signal_trading_log
        Key: consumes Value = 
        Key: summary Value = Get investors signals trading log
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-get-method&#x3D;true, x-has-reference&#x3D;false, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-params&#x3D;true, x-has-optional-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-update&#x3D;false, x-has-produces&#x3D;true, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = true
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/signal/trades/log
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getSignalTradingLog = (
        authorization: string,
        options: {
            accountId?: string,
            accountCurrency?: string,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getSignalTradingLog.');
                }
        const {
            accountId,
            accountCurrency,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/signal/trades/log", {
    })

    const query = buildQueryString(path, {
        AccountId: accountId,
        AccountCurrency: accountCurrency,
        Skip: skip,
        Take: take
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<ItemsViewModelSignalTradingEvent>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetSubscriberAccountsForAsset
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/signal/attach/{id}/accounts
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string)]
        Key: baseName Value = Signal
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, ItemsViewModelTradingAccountDetails]
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
    name: signal
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = ItemsViewModelTradingAccountDetails
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;total&quot; : 0,
  &quot;items&quot; : [ {
    &quot;apiKey&quot; : &quot;apiKey&quot;,
    &quot;currency&quot; : &quot;BTC&quot;,
    &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;login&quot; : &quot;login&quot;,
    &quot;asset&quot; : {
      &quot;programDetails&quot; : {
        &quot;level&quot; : 0,
        &quot;levelProgress&quot; : 6.027456183070403
      },
      &quot;color&quot; : &quot;color&quot;,
      &quot;logo&quot; : &quot;logo&quot;,
      &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;title&quot; : &quot;title&quot;,
      &quot;url&quot; : &quot;url&quot;,
      &quot;assetType&quot; : &quot;None&quot;
    }
  }, {
    &quot;apiKey&quot; : &quot;apiKey&quot;,
    &quot;currency&quot; : &quot;BTC&quot;,
    &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;login&quot; : &quot;login&quot;,
    &quot;asset&quot; : {
      &quot;programDetails&quot; : {
        &quot;level&quot; : 0,
        &quot;levelProgress&quot; : 6.027456183070403
      },
      &quot;color&quot; : &quot;color&quot;,
      &quot;logo&quot; : &quot;logo&quot;,
      &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;title&quot; : &quot;title&quot;,
      &quot;url&quot; : &quot;url&quot;,
      &quot;assetType&quot; : &quot;None&quot;
    }
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@7a89486c]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = ItemsViewModelTradingAccountDetails
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = []
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = GET
        Key: hasConsumes Value = false
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = false
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [id(string), Authorization(string)]
        Key: nickname Value = getSubscriberAccountsForAsset
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getsubscriberaccountsforasset
        Key: operationId Value = getSubscriberAccountsForAsset
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_subscriber_accounts_for_asset
        Key: consumes Value = 
        Key: summary Value = Get subscriber accounts for subscribe to signal provider (common method for all signals)
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-get-method&#x3D;true, x-has-reference&#x3D;false, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = 
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getSubscriberAccountsForAsset = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getSubscriberAccountsForAsset.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getSubscriberAccountsForAsset.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/signal/attach/{id}/accounts", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = null;

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "GET",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<ItemsViewModelTradingAccountDetails>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = true
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = UpdateExternalSubscriptionSettings
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/signal/external/{id}/update
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), body(AttachToExternalSignalProviderExt)]
        Key: baseName Value = Signal
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, AttachToExternalSignalProviderExt]
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
    name: signal
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@4570a4ee]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = 
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = []
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = POST
        Key: hasConsumes Value = true
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = false
        Key: hasExamples Value = false
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [id(string), Authorization(string)]
        Key: nickname Value = updateExternalSubscriptionSettings
        Key: bodyParam Value = body(AttachToExternalSignalProviderExt)
        Key: operationIdLowerCase Value = updateexternalsubscriptionsettings
        Key: operationId Value = updateExternalSubscriptionSettings
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = update_external_subscription_settings
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = Update signal subscription settings
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-codegen-request-body-name&#x3D;model, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(AttachToExternalSignalProviderExt)]
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = 
        Key: discriminator Value = 
        Key: testPath Value = 
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    updateExternalSubscriptionSettings = (
        id: string,
        authorization: string,
        options: {
            body?: AttachToExternalSignalProviderExt
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateExternalSubscriptionSettings.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling updateExternalSubscriptionSettings.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/signal/external/{id}/update", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = true
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = UpdateSubscriptionSettings
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/signal/{id}/update
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), body(AttachToSignalProvider)]
        Key: baseName Value = Signal
        Key: isListContainer Value = false
        Key: imports Value = [AttachToSignalProvider, ErrorViewModel]
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
    name: signal
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@3716946]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = 
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = []
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = POST
        Key: hasConsumes Value = true
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = false
        Key: hasExamples Value = false
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [id(string), Authorization(string)]
        Key: nickname Value = updateSubscriptionSettings
        Key: bodyParam Value = body(AttachToSignalProvider)
        Key: operationIdLowerCase Value = updatesubscriptionsettings
        Key: operationId Value = updateSubscriptionSettings
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = update_subscription_settings
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = Update signal subscription settings
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-more&#x3D;false, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-update&#x3D;false, x-codegen-request-body-name&#x3D;model, x-has-produces&#x3D;true, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(AttachToSignalProvider)]
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = 
        Key: discriminator Value = 
        Key: testPath Value = 
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    updateSubscriptionSettings = (
        id: string,
        authorization: string,
        options: {
            body?: AttachToSignalProvider
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateSubscriptionSettings.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling updateSubscriptionSettings.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/signal/{id}/update", {
        id
    })

    const query = buildQueryString(path, {
    })

    let body = JSON.stringify(options['body']);

    let contentType = "application/json";

    return this.apiClient.fetch(query, {
        ...init,
        method: "POST",
        body,
        headers: {
            "Content-Type": contentType,
            Authorization: authorization || ""
        }
    }).then(handleErrors).then< Response >((response: Response) => {
        return response;
    })
    }
}
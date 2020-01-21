import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { ChangeBrokerProgramRequest } from '../model/ChangeBrokerProgramRequest';
import { CreateSignalProvider } from '../model/CreateSignalProvider';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { FundAssetPart } from '../model/FundAssetPart';
import { MakeSignalProviderProgram } from '../model/MakeSignalProviderProgram';
import { MakeTradingAccountProgram } from '../model/MakeTradingAccountProgram';
import { MakeTradingAccountSignalProvider } from '../model/MakeTradingAccountSignalProvider';
import { NewExternalTradingAccountRequest } from '../model/NewExternalTradingAccountRequest';
import { NewFundRequest } from '../model/NewFundRequest';
import { NewTradingAccountRequest } from '../model/NewTradingAccountRequest';
import { ProgramLevelInfo } from '../model/ProgramLevelInfo';
import { ProgramUpdate } from '../model/ProgramUpdate';
import { TradingAccountCreateResult } from '../model/TradingAccountCreateResult';
import { TradingAccountDemoDeposit } from '../model/TradingAccountDemoDeposit';
import { TradingAccountPwdUpdate } from '../model/TradingAccountPwdUpdate';
import { TwoFactorAuthenticator } from '../model/TwoFactorAuthenticator';
import { TwoFactorCodeModel } from '../model/TwoFactorCodeModel';

export default class AssetsApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = CancelChangeBroker
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/assets/programs/{id}/broker/change/cancel
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string)]
        Key: baseName Value = Assets
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
    name: assets
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@7782cdc8]
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
        Key: hasConsumes Value = false
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = false
        Key: hasExamples Value = false
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [id(string), Authorization(string)]
        Key: nickname Value = cancelChangeBroker
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = cancelchangebroker
        Key: operationId Value = cancelChangeBroker
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = cancel_change_broker
        Key: consumes Value = 
        Key: summary Value = Cancel changing broker in existing program
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
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

    cancelChangeBroker = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling cancelChangeBroker.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling cancelChangeBroker.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/{id}/broker/change/cancel", {
        id
    })

    const query = buildQueryString(path, {
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
        Key: operationIdCamelCase Value = ChangeBroker
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/assets/programs/{id}/broker/change
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), body(ChangeBrokerProgramRequest)]
        Key: baseName Value = Assets
        Key: isListContainer Value = false
        Key: imports Value = [ChangeBrokerProgramRequest, ErrorViewModel]
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
    name: assets
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@c02dd4e]
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
        Key: nickname Value = changeBroker
        Key: bodyParam Value = body(ChangeBrokerProgramRequest)
        Key: operationIdLowerCase Value = changebroker
        Key: operationId Value = changeBroker
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = change_broker
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = Change broker in existing program
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-codegen-request-body-name&#x3D;request, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(ChangeBrokerProgramRequest)]
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

    changeBroker = (
        id: string,
        authorization: string,
        options: {
            body?: ChangeBrokerProgramRequest
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling changeBroker.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling changeBroker.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/{id}/broker/change", {
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
        Key: operationIdCamelCase Value = ChangeTradingAccountPassword
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/assets/tradingaccounts/{id}/password/change
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), body(TradingAccountPwdUpdate)]
        Key: baseName Value = Assets
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, TradingAccountPwdUpdate]
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
    name: assets
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@34c461db]
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
        Key: nickname Value = changeTradingAccountPassword
        Key: bodyParam Value = body(TradingAccountPwdUpdate)
        Key: operationIdLowerCase Value = changetradingaccountpassword
        Key: operationId Value = changeTradingAccountPassword
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = change_trading_account_password
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = Change trading account password
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-codegen-request-body-name&#x3D;model, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(TradingAccountPwdUpdate)]
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

    changeTradingAccountPassword = (
        id: string,
        authorization: string,
        options: {
            body?: TradingAccountPwdUpdate
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling changeTradingAccountPassword.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling changeTradingAccountPassword.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/tradingaccounts/{id}/password/change", {
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
        Key: operationIdCamelCase Value = CloseCurrentPeriod
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/assets/programs/{id}/period/close
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string)]
        Key: baseName Value = Assets
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
    name: assets
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@74a360ed]
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
        Key: hasConsumes Value = false
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = false
        Key: hasExamples Value = false
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [id(string), Authorization(string)]
        Key: nickname Value = closeCurrentPeriod
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = closecurrentperiod
        Key: operationId Value = closeCurrentPeriod
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = close_current_period
        Key: consumes Value = 
        Key: summary Value = Close current period
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
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

    closeCurrentPeriod = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling closeCurrentPeriod.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling closeCurrentPeriod.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/{id}/period/close", {
        id
    })

    const query = buildQueryString(path, {
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
        Key: operationIdCamelCase Value = CloseFund
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/assets/funds/{id}/close
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), body(TwoFactorCodeModel)]
        Key: baseName Value = Assets
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, TwoFactorCodeModel]
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
    name: assets
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@27012095]
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
        Key: nickname Value = closeFund
        Key: bodyParam Value = body(TwoFactorCodeModel)
        Key: operationIdLowerCase Value = closefund
        Key: operationId Value = closeFund
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = close_fund
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = Close existing fund
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-codegen-request-body-name&#x3D;model, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(TwoFactorCodeModel)]
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

    closeFund = (
        id: string,
        authorization: string,
        options: {
            body?: TwoFactorCodeModel
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling closeFund.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling closeFund.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/funds/{id}/close", {
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
        Key: operationIdCamelCase Value = CloseInvestmentProgram
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/assets/programs/{id}/close
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), body(TwoFactorCodeModel)]
        Key: baseName Value = Assets
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, TwoFactorCodeModel]
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
    name: assets
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@7a2a8a08]
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
        Key: nickname Value = closeInvestmentProgram
        Key: bodyParam Value = body(TwoFactorCodeModel)
        Key: operationIdLowerCase Value = closeinvestmentprogram
        Key: operationId Value = closeInvestmentProgram
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = close_investment_program
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = Close existing investment program
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-codegen-request-body-name&#x3D;model, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(TwoFactorCodeModel)]
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

    closeInvestmentProgram = (
        id: string,
        authorization: string,
        options: {
            body?: TwoFactorCodeModel
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling closeInvestmentProgram.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling closeInvestmentProgram.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/{id}/close", {
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
        Key: operationIdCamelCase Value = CloseTradingAccount
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/assets/tradingaccounts/{id}/close
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string)]
        Key: baseName Value = Assets
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
    name: assets
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@5c9f42c9]
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
        Key: hasConsumes Value = false
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = false
        Key: hasExamples Value = false
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [id(string), Authorization(string)]
        Key: nickname Value = closeTradingAccount
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = closetradingaccount
        Key: operationId Value = closeTradingAccount
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = close_trading_account
        Key: consumes Value = 
        Key: summary Value = Close trading account
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
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

    closeTradingAccount = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling closeTradingAccount.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling closeTradingAccount.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/tradingaccounts/{id}/close", {
        id
    })

    const query = buildQueryString(path, {
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
        Key: operationIdCamelCase Value = ConfirmProgram2FA
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/assets/programs/{id}/2fa/confirm
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), body(TwoFactorCodeModel)]
        Key: baseName Value = Assets
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, TwoFactorCodeModel]
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
    name: assets
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@724bf998]
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
        Key: nickname Value = confirmProgram2FA
        Key: bodyParam Value = body(TwoFactorCodeModel)
        Key: operationIdLowerCase Value = confirmprogram2fa
        Key: operationId Value = confirmProgram2FA
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = confirm_program2_fa
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = Confirm 2FA for program if required (for brokers like Huobi)
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-codegen-request-body-name&#x3D;model, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(TwoFactorCodeModel)]
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

    confirmProgram2FA = (
        id: string,
        authorization: string,
        options: {
            body?: TwoFactorCodeModel
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling confirmProgram2FA.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling confirmProgram2FA.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/{id}/2fa/confirm", {
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
        Key: operationIdCamelCase Value = CreateExternalTradingAccount
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/assets/tradingaccounts/external/create
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), body(NewExternalTradingAccountRequest)]
        Key: baseName Value = Assets
        Key: isListContainer Value = false
        Key: imports Value = [TradingAccountCreateResult, ErrorViewModel, NewExternalTradingAccountRequest]
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
    name: assets
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = TradingAccountCreateResult
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;twoFactor&quot; : {
    &quot;sharedKey&quot; : &quot;sharedKey&quot;,
    &quot;authenticatorUri&quot; : &quot;authenticatorUri&quot;
  },
  &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
  &quot;twoFactorRequired&quot; : true
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@612df127]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = TradingAccountCreateResult
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
        Key: hasReference Value = true
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [Authorization(string)]
        Key: nickname Value = createExternalTradingAccount
        Key: bodyParam Value = body(NewExternalTradingAccountRequest)
        Key: operationIdLowerCase Value = createexternaltradingaccount
        Key: operationId Value = createExternalTradingAccount
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = create_external_trading_account
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = Create external trading account
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-has-reference&#x3D;true, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-update&#x3D;false, x-codegen-request-body-name&#x3D;request, x-has-produces&#x3D;true, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(NewExternalTradingAccountRequest)]
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/assets/tradingaccounts/external/create
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    createExternalTradingAccount = (
        authorization: string,
        options: {
            body?: NewExternalTradingAccountRequest
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling createExternalTradingAccount.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/tradingaccounts/external/create", {
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
    }).then(handleErrors).then<TradingAccountCreateResult>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = true
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = CreateFund
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/assets/funds/create
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), body(NewFundRequest)]
        Key: baseName Value = Assets
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, NewFundRequest]
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
    name: assets
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@2e6d9a97]
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
        Key: requiredParams Value = [Authorization(string)]
        Key: nickname Value = createFund
        Key: bodyParam Value = body(NewFundRequest)
        Key: operationIdLowerCase Value = createfund
        Key: operationId Value = createFund
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = create_fund
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = Create fund
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-codegen-request-body-name&#x3D;request, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(NewFundRequest)]
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = 
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/assets/funds/create
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    createFund = (
        authorization: string,
        options: {
            body?: NewFundRequest
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling createFund.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/funds/create", {
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
        Key: operationIdCamelCase Value = CreateTradingAccount
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/assets/tradingaccounts/create
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), body(NewTradingAccountRequest)]
        Key: baseName Value = Assets
        Key: isListContainer Value = false
        Key: imports Value = [NewTradingAccountRequest, TradingAccountCreateResult, ErrorViewModel]
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
    name: assets
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = TradingAccountCreateResult
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;twoFactor&quot; : {
    &quot;sharedKey&quot; : &quot;sharedKey&quot;,
    &quot;authenticatorUri&quot; : &quot;authenticatorUri&quot;
  },
  &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
  &quot;twoFactorRequired&quot; : true
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@1f45edaa]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = TradingAccountCreateResult
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
        Key: hasReference Value = true
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [Authorization(string)]
        Key: nickname Value = createTradingAccount
        Key: bodyParam Value = body(NewTradingAccountRequest)
        Key: operationIdLowerCase Value = createtradingaccount
        Key: operationId Value = createTradingAccount
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = create_trading_account
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = Create trading account
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-has-reference&#x3D;true, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-update&#x3D;false, x-codegen-request-body-name&#x3D;request, x-has-produces&#x3D;true, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(NewTradingAccountRequest)]
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/assets/tradingaccounts/create
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    createTradingAccount = (
        authorization: string,
        options: {
            body?: NewTradingAccountRequest
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling createTradingAccount.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/tradingaccounts/create", {
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
    }).then(handleErrors).then<TradingAccountCreateResult>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetLevelsCalculator
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/assets/programs/{id}/levels/info
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string)]
        Key: baseName Value = Assets
        Key: isListContainer Value = false
        Key: imports Value = [ProgramLevelInfo, ErrorViewModel]
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
    name: assets
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = ProgramLevelInfo
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;weightedVolumeScale&quot; : 5.637376656633329,
  &quot;isKycPassed&quot; : true,
  &quot;investmentScale&quot; : 7.061401241503109,
  &quot;level&quot; : 0,
  &quot;levelProgressPercent&quot; : 6.027456183070403,
  &quot;genesisRatio&quot; : 1.4658129805029452,
  &quot;programAge&quot; : 5.962133916683182,
  &quot;managerBalance&quot; : 2.3021358869347655,
  &quot;totalAvailableToInvest&quot; : 9.301444243932576
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@64fb19db]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = ProgramLevelInfo
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
        Key: hasReference Value = true
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [id(string), Authorization(string)]
        Key: nickname Value = getLevelsCalculator
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getlevelscalculator
        Key: operationId Value = getLevelsCalculator
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_levels_calculator
        Key: consumes Value = 
        Key: summary Value = Get program data for levels calculator
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-get-method&#x3D;true, x-has-reference&#x3D;true, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
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

    getLevelsCalculator = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getLevelsCalculator.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getLevelsCalculator.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/{id}/levels/info", {
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
    }).then(handleErrors).then<ProgramLevelInfo>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetProgram2FA
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/assets/programs/{id}/2fa/get
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string)]
        Key: baseName Value = Assets
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, TwoFactorAuthenticator]
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
    name: assets
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = TwoFactorAuthenticator
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;sharedKey&quot; : &quot;sharedKey&quot;,
  &quot;authenticatorUri&quot; : &quot;authenticatorUri&quot;
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@54e38053]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = TwoFactorAuthenticator
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
        Key: hasReference Value = true
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = [id(string), Authorization(string)]
        Key: nickname Value = getProgram2FA
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getprogram2fa
        Key: operationId Value = getProgram2FA
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_program2_fa
        Key: consumes Value = 
        Key: summary Value = Get 2FA for program if needed
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-get-method&#x3D;true, x-has-reference&#x3D;true, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
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

    getProgram2FA = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getProgram2FA.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getProgram2FA.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/{id}/2fa/get", {
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
    }).then(handleErrors).then<TwoFactorAuthenticator>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = true
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = MakeAccountProgram
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/assets/programs/fromaccount/create
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), body(MakeTradingAccountProgram)]
        Key: baseName Value = Assets
        Key: isListContainer Value = false
        Key: imports Value = [MakeTradingAccountProgram, ErrorViewModel]
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
    name: assets
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@2bc4845c]
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
        Key: requiredParams Value = [Authorization(string)]
        Key: nickname Value = makeAccountProgram
        Key: bodyParam Value = body(MakeTradingAccountProgram)
        Key: operationIdLowerCase Value = makeaccountprogram
        Key: operationId Value = makeAccountProgram
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = make_account_program
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = Create an investment program
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-codegen-request-body-name&#x3D;request, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(MakeTradingAccountProgram)]
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = 
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/assets/programs/fromaccount/create
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    makeAccountProgram = (
        authorization: string,
        options: {
            body?: MakeTradingAccountProgram
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling makeAccountProgram.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/fromaccount/create", {
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
        Key: operationIdCamelCase Value = MakeAccountSignalProvider
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/assets/signal/create
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), body(MakeTradingAccountSignalProvider)]
        Key: baseName Value = Assets
        Key: isListContainer Value = false
        Key: imports Value = [MakeTradingAccountSignalProvider, ErrorViewModel]
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
    name: assets
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@9d3527c]
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
        Key: requiredParams Value = [Authorization(string)]
        Key: nickname Value = makeAccountSignalProvider
        Key: bodyParam Value = body(MakeTradingAccountSignalProvider)
        Key: operationIdLowerCase Value = makeaccountsignalprovider
        Key: operationId Value = makeAccountSignalProvider
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = make_account_signal_provider
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = Make account signal provider
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-codegen-request-body-name&#x3D;request, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(MakeTradingAccountSignalProvider)]
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = 
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/assets/signal/create
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    makeAccountSignalProvider = (
        authorization: string,
        options: {
            body?: MakeTradingAccountSignalProvider
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling makeAccountSignalProvider.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/signal/create", {
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
        Key: operationIdCamelCase Value = MakeDemoTradingAccountDeposit
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/assets/tradingaccounts/{id}/demo/deposit
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), body(TradingAccountDemoDeposit)]
        Key: baseName Value = Assets
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, TradingAccountDemoDeposit]
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
    name: assets
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@705d88e9]
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
        Key: nickname Value = makeDemoTradingAccountDeposit
        Key: bodyParam Value = body(TradingAccountDemoDeposit)
        Key: operationIdLowerCase Value = makedemotradingaccountdeposit
        Key: operationId Value = makeDemoTradingAccountDeposit
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = make_demo_trading_account_deposit
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = Make demo trading account deposit
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-codegen-request-body-name&#x3D;model, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(TradingAccountDemoDeposit)]
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

    makeDemoTradingAccountDeposit = (
        id: string,
        authorization: string,
        options: {
            body?: TradingAccountDemoDeposit
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling makeDemoTradingAccountDeposit.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling makeDemoTradingAccountDeposit.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/tradingaccounts/{id}/demo/deposit", {
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
        Key: operationIdCamelCase Value = MakeExternalAccountSignalProvider
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/assets/tradingaccounts/external/fromaccount/create
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), body(MakeTradingAccountSignalProvider)]
        Key: baseName Value = Assets
        Key: isListContainer Value = false
        Key: imports Value = [MakeTradingAccountSignalProvider, ErrorViewModel]
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
    name: assets
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@61f6a05a]
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
        Key: requiredParams Value = [Authorization(string)]
        Key: nickname Value = makeExternalAccountSignalProvider
        Key: bodyParam Value = body(MakeTradingAccountSignalProvider)
        Key: operationIdLowerCase Value = makeexternalaccountsignalprovider
        Key: operationId Value = makeExternalAccountSignalProvider
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = make_external_account_signal_provider
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = Make external trading account signal provider
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-codegen-request-body-name&#x3D;request, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(MakeTradingAccountSignalProvider)]
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = 
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/assets/tradingaccounts/external/fromaccount/create
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    makeExternalAccountSignalProvider = (
        authorization: string,
        options: {
            body?: MakeTradingAccountSignalProvider
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling makeExternalAccountSignalProvider.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/tradingaccounts/external/fromaccount/create", {
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
        Key: operationIdCamelCase Value = MakeSignalProviderProgram
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/assets/programs/fromsignalprovider/create
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), body(MakeSignalProviderProgram)]
        Key: baseName Value = Assets
        Key: isListContainer Value = false
        Key: imports Value = [MakeSignalProviderProgram, ErrorViewModel]
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
    name: assets
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@7d70764d]
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
        Key: requiredParams Value = [Authorization(string)]
        Key: nickname Value = makeSignalProviderProgram
        Key: bodyParam Value = body(MakeSignalProviderProgram)
        Key: operationIdLowerCase Value = makesignalproviderprogram
        Key: operationId Value = makeSignalProviderProgram
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = make_signal_provider_program
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = Create an investment program
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-codegen-request-body-name&#x3D;request, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(MakeSignalProviderProgram)]
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = 
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/assets/programs/fromsignalprovider/create
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    makeSignalProviderProgram = (
        authorization: string,
        options: {
            body?: MakeSignalProviderProgram
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling makeSignalProviderProgram.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/fromsignalprovider/create", {
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
        Key: operationIdCamelCase Value = UpdateAsset
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/assets/follow/{id}/update
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), body(ProgramUpdate)]
        Key: baseName Value = Assets
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, ProgramUpdate]
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
    name: assets
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@1f5c4f32]
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
        Key: nickname Value = updateAsset
        Key: bodyParam Value = body(ProgramUpdate)
        Key: operationIdLowerCase Value = updateasset
        Key: operationId Value = updateAsset
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = update_asset
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = Update investment program/fund details
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-codegen-request-body-name&#x3D;model, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(ProgramUpdate)]
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

    updateAsset = (
        id: string,
        authorization: string,
        options: {
            body?: ProgramUpdate
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateAsset.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling updateAsset.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/follow/{id}/update", {
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
        Key: operationIdCamelCase Value = UpdateAsset0
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/assets/funds/{id}/update
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), body(ProgramUpdate)]
        Key: baseName Value = Assets
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, ProgramUpdate]
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
    name: assets
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@2af6c425]
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
        Key: nickname Value = updateAsset_1
        Key: bodyParam Value = body(ProgramUpdate)
        Key: operationIdLowerCase Value = updateasset_0
        Key: operationId Value = updateAsset_0
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = update_asset_0
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = Update investment program/fund details
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-codegen-request-body-name&#x3D;model, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(ProgramUpdate)]
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

    updateAsset_0 = (
        id: string,
        authorization: string,
        options: {
            body?: ProgramUpdate
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateAsset_1.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling updateAsset_1.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/funds/{id}/update", {
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
        Key: operationIdCamelCase Value = UpdateAsset1
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/assets/programs/{id}/update
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), body(ProgramUpdate)]
        Key: baseName Value = Assets
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, ProgramUpdate]
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
    name: assets
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@7ed64551]
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
        Key: nickname Value = updateAsset_2
        Key: bodyParam Value = body(ProgramUpdate)
        Key: operationIdLowerCase Value = updateasset_1
        Key: operationId Value = updateAsset_1
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = update_asset_1
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = Update investment program/fund details
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-codegen-request-body-name&#x3D;model, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(ProgramUpdate)]
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

    updateAsset_1 = (
        id: string,
        authorization: string,
        options: {
            body?: ProgramUpdate
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateAsset_2.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling updateAsset_2.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/programs/{id}/update", {
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
        Key: operationIdCamelCase Value = UpdateFundAssets
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/assets/funds/{id}/assets/update
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), body(Array&lt;FundAssetPart&gt;)]
        Key: baseName Value = Assets
        Key: isListContainer Value = false
        Key: imports Value = [FundAssetPart, ErrorViewModel]
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
    name: assets
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@6a86d8]
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
        Key: nickname Value = updateFundAssets
        Key: bodyParam Value = body(Array&lt;FundAssetPart&gt;)
        Key: operationIdLowerCase Value = updatefundassets
        Key: operationId Value = updateFundAssets
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = update_fund_assets
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = Update fund assets parts
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-codegen-request-body-name&#x3D;assets, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(Array&lt;FundAssetPart&gt;)]
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

    updateFundAssets = (
        id: string,
        authorization: string,
        options: {
            body?: Array<FundAssetPart>
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateFundAssets.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling updateFundAssets.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/funds/{id}/assets/update", {
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
        Key: operationIdCamelCase Value = UpdateSignalProviderSettings
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/assets/signal/edit
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), body(CreateSignalProvider)]
        Key: baseName Value = Assets
        Key: isListContainer Value = false
        Key: imports Value = [CreateSignalProvider, ErrorViewModel]
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
    name: assets
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@7db26c38]
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
        Key: requiredParams Value = [Authorization(string)]
        Key: nickname Value = updateSignalProviderSettings
        Key: bodyParam Value = body(CreateSignalProvider)
        Key: operationIdLowerCase Value = updatesignalprovidersettings
        Key: operationId Value = updateSignalProviderSettings
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = update_signal_provider_settings
        Key: consumes Value = [{hasMore&#x3D;true, mediaType&#x3D;application/json-patch+json}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {hasMore&#x3D;true, mediaType&#x3D;text/json}, {hasMore&#x3D;null, mediaType&#x3D;application/_*+json}]
        Key: summary Value = Edit account signal settings
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;true, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-more&#x3D;false, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-update&#x3D;false, x-codegen-request-body-name&#x3D;request, x-has-produces&#x3D;true, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = [body(CreateSignalProvider)]
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = 
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/assets/signal/edit
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    updateSignalProviderSettings = (
        authorization: string,
        options: {
            body?: CreateSignalProvider
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling updateSignalProviderSettings.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/assets/signal/edit", {
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
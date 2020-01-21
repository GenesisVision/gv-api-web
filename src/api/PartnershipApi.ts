import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
import { ItemsViewModelReferralFriend } from '../model/ItemsViewModelReferralFriend';
import { ItemsViewModelRewardDetails } from '../model/ItemsViewModelRewardDetails';
import { PartnershipDetails } from '../model/PartnershipDetails';

export default class PartnershipApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = ExportHistory
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/partnership/rewards/history/export
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), DateFrom(Date), DateTo(Date), Skip(number), Take(number)]
        Key: baseName Value = Partnership
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel]
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
    name: partnership
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = string
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;&quot;&quot;}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@f12b0f4]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = string
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [DateFrom(Date), DateTo(Date), Skip(number), Take(number)]
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
        Key: nickname Value = exportHistory
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = exporthistory
        Key: operationId Value = exportHistory
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = true
        Key: operationIdSnakeCase Value = export_history
        Key: consumes Value = 
        Key: summary Value = Export rewards history.
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
        Key: testPath Value = /v2.0/partnership/rewards/history/export
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    exportHistory = (
        authorization: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling exportHistory.');
                }
        const {
            dateFrom,
            dateTo,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/partnership/rewards/history/export", {
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
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
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetDetails
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/partnership/details
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), currency(string)]
        Key: baseName Value = Partnership
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, PartnershipDetails]
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
    name: partnership
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = PartnershipDetails
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;totalAmount&quot; : 1.4658129805029452,
  &quot;totalReferralsL1&quot; : 0,
  &quot;totalReferralsL2&quot; : 6
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@5a75fee]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = PartnershipDetails
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [currency(string)]
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
        Key: nickname Value = getDetails
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getdetails
        Key: operationId Value = getDetails
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_details
        Key: consumes Value = 
        Key: summary Value = Get partnership details.
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
        Key: testPath Value = /v2.0/partnership/details
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getDetails = (
        authorization: string,
        options: {
            currency?: string
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getDetails.');
                }
        const {
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/partnership/details", {
    })

    const query = buildQueryString(path, {
        currency: currency
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
    }).then(handleErrors).then<PartnershipDetails>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetReferrals
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/partnership/referrals
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), DateFrom(Date), DateTo(Date), Skip(number), Take(number)]
        Key: baseName Value = Partnership
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, ItemsViewModelReferralFriend]
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
    name: partnership
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = ItemsViewModelReferralFriend
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;total&quot; : 0,
  &quot;items&quot; : [ {
    &quot;date&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;emailMask&quot; : &quot;emailMask&quot;
  }, {
    &quot;date&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;emailMask&quot; : &quot;emailMask&quot;
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@38e97195]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = ItemsViewModelReferralFriend
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [DateFrom(Date), DateTo(Date), Skip(number), Take(number)]
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
        Key: nickname Value = getReferrals
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getreferrals
        Key: operationId Value = getReferrals
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_referrals
        Key: consumes Value = 
        Key: summary Value = Get agent friends (referrals and second level referrals).
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
        Key: testPath Value = /v2.0/partnership/referrals
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getReferrals = (
        authorization: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getReferrals.');
                }
        const {
            dateFrom,
            dateTo,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/partnership/referrals", {
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
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
    }).then(handleErrors).then<ItemsViewModelReferralFriend>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetRewardsHistory
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/partnership/rewards/history
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), DateFrom(Date), DateTo(Date), Skip(number), Take(number)]
        Key: baseName Value = Partnership
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, ItemsViewModelRewardDetails]
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
    name: partnership
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = ItemsViewModelRewardDetails
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;total&quot; : 6,
  &quot;items&quot; : [ {
    &quot;date&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;amount&quot; : 0.8008281904610115,
    &quot;currency&quot; : &quot;BTC&quot;
  }, {
    &quot;date&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;amount&quot; : 0.8008281904610115,
    &quot;currency&quot; : &quot;BTC&quot;
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@239a7f48]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = ItemsViewModelRewardDetails
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [DateFrom(Date), DateTo(Date), Skip(number), Take(number)]
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
        Key: nickname Value = getRewardsHistory
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getrewardshistory
        Key: operationId Value = getRewardsHistory
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_rewards_history
        Key: consumes Value = 
        Key: summary Value = Get history of agent rewards.
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-get-method&#x3D;true, x-has-reference&#x3D;false, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-more&#x3D;false, x-has-params&#x3D;true, x-has-optional-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-update&#x3D;false, x-has-produces&#x3D;true, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = true
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/partnership/rewards/history
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getRewardsHistory = (
        authorization: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getRewardsHistory.');
                }
        const {
            dateFrom,
            dateTo,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/partnership/rewards/history", {
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
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
    }).then(handleErrors).then<ItemsViewModelRewardDetails>((response: Response) => {
        return response.json();
    })
    }
}
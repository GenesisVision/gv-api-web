import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { AssetInfo } from '../model/AssetInfo';
import { CaptchaDetails } from '../model/CaptchaDetails';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { LandingInfo } from '../model/LandingInfo';
import { LevelsParamsInfo } from '../model/LevelsParamsInfo';
import { PlatformAssets } from '../model/PlatformAssets';
import { PlatformEvents } from '../model/PlatformEvents';
import { PlatformInfo } from '../model/PlatformInfo';
import { ProgramsLevelsInfo } from '../model/ProgramsLevelsInfo';

export default class PlatformApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetAllPlatformAssets
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/platform/assets
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = []
        Key: baseName Value = Platform
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, PlatformAssets]
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
    name: platform
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = PlatformAssets
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;assets&quot; : [ {
    &quot;mandatoryFundPercent&quot; : 0.8008281904610115,
    &quot;color&quot; : &quot;color&quot;,
    &quot;name&quot; : &quot;name&quot;,
    &quot;icon&quot; : &quot;icon&quot;,
    &quot;description&quot; : &quot;description&quot;,
    &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;asset&quot; : &quot;asset&quot;
  }, {
    &quot;mandatoryFundPercent&quot; : 0.8008281904610115,
    &quot;color&quot; : &quot;color&quot;,
    &quot;name&quot; : &quot;name&quot;,
    &quot;icon&quot; : &quot;icon&quot;,
    &quot;description&quot; : &quot;description&quot;,
    &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;asset&quot; : &quot;asset&quot;
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@756432ae]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = PlatformAssets
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
        Key: hasRequiredParams Value = false
        Key: hasReference Value = true
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = []
        Key: nickname Value = getAllPlatformAssets
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getallplatformassets
        Key: operationId Value = getAllPlatformAssets
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = false
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_all_platform_assets
        Key: consumes Value = 
        Key: summary Value = Get all supported assets for funds
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;false, x-is-restful-show&#x3D;false, x-is-get-method&#x3D;true, x-has-reference&#x3D;true, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/platform/assets
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getAllPlatformAssets = (        options: {
        } = {},
        init: RequestInit = {}) => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/platform/assets", {
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
        }
    }).then(handleErrors).then<PlatformAssets>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetPlatformAssetInfo
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/platform/asset/{asset}
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [asset(string)]
        Key: baseName Value = Platform
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, AssetInfo]
        Key: pathParams Value = [asset(string)]
        Key: isCollectionFormatMulti Value = false
        Key: formParams Value = []
        Key: hasCookieParams Value = false
        Key: hasAuthMethods Value = false
        Key: isBinary Value = false
        Key: isUuid Value = false
        Key: isRestfulUpdate Value = false
        Key: returnContainer Value = 
        Key: tags Value = [class Tag {
    name: platform
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = AssetInfo
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;symbol&quot; : &quot;symbol&quot;,
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
  &quot;name&quot; : &quot;name&quot;,
  &quot;logo&quot; : &quot;logo&quot;,
  &quot;description&quot; : &quot;description&quot;,
  &quot;chartSymbol&quot; : &quot;chartSymbol&quot;,
  &quot;tags&quot; : [ {
    &quot;color&quot; : &quot;color&quot;,
    &quot;name&quot; : &quot;name&quot;
  }, {
    &quot;color&quot; : &quot;color&quot;,
    &quot;name&quot; : &quot;name&quot;
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@5747375]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = AssetInfo
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
        Key: requiredParams Value = [asset(string)]
        Key: nickname Value = getPlatformAssetInfo
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getplatformassetinfo
        Key: operationId Value = getPlatformAssetInfo
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_platform_asset_info
        Key: consumes Value = 
        Key: summary Value = Get asset description
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

    getPlatformAssetInfo = (
        asset: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (asset === null || asset === undefined) {
                throw new Error('Required parameter asset was null or undefined when calling getPlatformAssetInfo.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/platform/asset/{asset}", {
        asset
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
        }
    }).then(handleErrors).then<AssetInfo>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetPlatformDate
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/platform/date
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = []
        Key: baseName Value = Platform
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
    name: platform
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@13011612]
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
        Key: queryParams Value = []
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = POST
        Key: hasConsumes Value = false
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = false
        Key: hasReference Value = false
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = []
        Key: nickname Value = getPlatformDate
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getplatformdate
        Key: operationId Value = getPlatformDate
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = false
        Key: returnTypeIsPrimitive Value = true
        Key: operationIdSnakeCase Value = get_platform_date
        Key: consumes Value = 
        Key: summary Value = Server date
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;false, x-is-restful-show&#x3D;false, x-has-reference&#x3D;false, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/platform/date
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getPlatformDate = (        options: {
        } = {},
        init: RequestInit = {}) => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/platform/date", {
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
        }
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetPlatformEvents
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/platform/events
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [take(number)]
        Key: baseName Value = Platform
        Key: isListContainer Value = false
        Key: imports Value = [PlatformEvents, ErrorViewModel]
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
    name: platform
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = PlatformEvents
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;events&quot; : [ {
    &quot;date&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;color&quot; : &quot;color&quot;,
    &quot;icon&quot; : &quot;icon&quot;,
    &quot;text&quot; : &quot;text&quot;,
    &quot;title&quot; : &quot;title&quot;,
    &quot;type&quot; : &quot;Undefined&quot;,
    &quot;value&quot; : &quot;value&quot;,
    &quot;assetUrl&quot; : &quot;assetUrl&quot;,
    &quot;userUrl&quot; : &quot;userUrl&quot;,
    &quot;assetType&quot; : &quot;None&quot;
  }, {
    &quot;date&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;color&quot; : &quot;color&quot;,
    &quot;icon&quot; : &quot;icon&quot;,
    &quot;text&quot; : &quot;text&quot;,
    &quot;title&quot; : &quot;title&quot;,
    &quot;type&quot; : &quot;Undefined&quot;,
    &quot;value&quot; : &quot;value&quot;,
    &quot;assetUrl&quot; : &quot;assetUrl&quot;,
    &quot;userUrl&quot; : &quot;userUrl&quot;,
    &quot;assetType&quot; : &quot;None&quot;
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@110e920]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = PlatformEvents
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [take(number)]
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = GET
        Key: hasConsumes Value = false
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = false
        Key: hasReference Value = true
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = true
        Key: requiredParams Value = []
        Key: nickname Value = getPlatformEvents
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getplatformevents
        Key: operationId Value = getPlatformEvents
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_platform_events
        Key: consumes Value = 
        Key: summary Value = Get platform events
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-has-required-params&#x3D;false, x-is-restful-show&#x3D;false, x-is-get-method&#x3D;true, x-has-reference&#x3D;true, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-params&#x3D;true, x-has-optional-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-update&#x3D;false, x-has-produces&#x3D;true, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = true
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/platform/events
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getPlatformEvents = (        options: {
            take?: number
        } = {},
        init: RequestInit = {}) => {
        const {
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/platform/events", {
    })

    const query = buildQueryString(path, {
        take: take
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
    }).then(handleErrors).then<PlatformEvents>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetPlatformInfo
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/platform/info
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = []
        Key: baseName Value = Platform
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, PlatformInfo]
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
    name: platform
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = PlatformInfo
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;usersInfo&quot; : {
    &quot;facets&quot; : [ null, null ],
    &quot;tags&quot; : [ null, null ]
  },
  &quot;appVersionInfo&quot; : {
    &quot;android&quot; : {
      &quot;minVersion&quot; : {
        &quot;versionName&quot; : &quot;versionName&quot;,
        &quot;versionCode&quot; : &quot;versionCode&quot;
      }
    },
    &quot;iOS&quot; : {
      &quot;lastVersion&quot; : &quot;lastVersion&quot;,
      &quot;minVersion&quot; : &quot;minVersion&quot;
    }
  },
  &quot;filters&quot; : {
    &quot;walletTransactions&quot; : [ {
      &quot;title&quot; : &quot;title&quot;,
      &quot;key&quot; : &quot;key&quot;
    }, {
      &quot;title&quot; : &quot;title&quot;,
      &quot;key&quot; : &quot;key&quot;
    } ],
    &quot;assets&quot; : [ null, null ],
    &quot;events&quot; : {
      &quot;tradingHistory&quot; : {
        &quot;all&quot; : [ null, null ],
        &quot;fund&quot; : [ null, null ],
        &quot;program&quot; : [ null, null ],
        &quot;follow&quot; : [ null, null ]
      },
      &quot;investmentHistory&quot; : {
        &quot;all&quot; : [ null, null ],
        &quot;fund&quot; : [ null, null ],
        &quot;program&quot; : [ null, null ]
      }
    },
    &quot;walletExternalTransactions&quot; : [ null, null ]
  },
  &quot;commonInfo&quot; : {
    &quot;platformUrls&quot; : [ {
      &quot;type&quot; : &quot;Program&quot;,
      &quot;url&quot; : &quot;url&quot;
    }, {
      &quot;type&quot; : &quot;Program&quot;,
      &quot;url&quot; : &quot;url&quot;
    } ],
    &quot;platformCommission&quot; : {
      &quot;investment&quot; : 4.145608029883936
    },
    &quot;platformCurrencies&quot; : [ {
      &quot;color&quot; : &quot;color&quot;,
      &quot;name&quot; : &quot;name&quot;
    }, {
      &quot;color&quot; : &quot;color&quot;,
      &quot;name&quot; : &quot;name&quot;
    } ]
  },
  &quot;assetInfo&quot; : {
    &quot;programInfo&quot; : {
      &quot;createProgramInfo&quot; : {
        &quot;maxSuccessFee&quot; : 1.4658129805029452,
        &quot;maxEntryFee&quot; : 6.027456183070403
      },
      &quot;availableProgramCurrencies&quot; : [ &quot;availableProgramCurrencies&quot;, &quot;availableProgramCurrencies&quot; ],
      &quot;periods&quot; : [ 0, 0 ],
      &quot;facets&quot; : [ {
        &quot;timeframe&quot; : &quot;Day&quot;,
        &quot;sortType&quot; : &quot;New&quot;,
        &quot;sorting&quot; : &quot;sorting&quot;,
        &quot;description&quot; : &quot;description&quot;,
        &quot;logo&quot; : &quot;logo&quot;,
        &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
        &quot;title&quot; : &quot;title&quot;,
        &quot;url&quot; : &quot;url&quot;
      }, {
        &quot;timeframe&quot; : &quot;Day&quot;,
        &quot;sortType&quot; : &quot;New&quot;,
        &quot;sorting&quot; : &quot;sorting&quot;,
        &quot;description&quot; : &quot;description&quot;,
        &quot;logo&quot; : &quot;logo&quot;,
        &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
        &quot;title&quot; : &quot;title&quot;,
        &quot;url&quot; : &quot;url&quot;
      } ],
      &quot;tags&quot; : [ {
        &quot;color&quot; : &quot;color&quot;,
        &quot;name&quot; : &quot;name&quot;
      }, {
        &quot;color&quot; : &quot;color&quot;,
        &quot;name&quot; : &quot;name&quot;
      } ],
      &quot;minInvestAmounts&quot; : [ {
        &quot;serverType&quot; : &quot;Undefined&quot;,
        &quot;minDepositCreateAsset&quot; : [ {
          &quot;amount&quot; : 9.301444243932576,
          &quot;currency&quot; : &quot;BTC&quot;
        }, {
          &quot;amount&quot; : 9.301444243932576,
          &quot;currency&quot; : &quot;BTC&quot;
        } ],
        &quot;minInvestAmountIntoProgram&quot; : [ null, null ]
      }, {
        &quot;serverType&quot; : &quot;Undefined&quot;,
        &quot;minDepositCreateAsset&quot; : [ {
          &quot;amount&quot; : 9.301444243932576,
          &quot;currency&quot; : &quot;BTC&quot;
        }, {
          &quot;amount&quot; : 9.301444243932576,
          &quot;currency&quot; : &quot;BTC&quot;
        } ],
        &quot;minInvestAmountIntoProgram&quot; : [ null, null ]
      } ]
    },
    &quot;tradingAccountInfo&quot; : {
      &quot;minAmounts&quot; : [ {
        &quot;minDepositCreateAsset&quot; : [ null, null ]
      }, {
        &quot;minDepositCreateAsset&quot; : [ null, null ]
      } ]
    },
    &quot;followInfo&quot; : {
      &quot;createFollowInfo&quot; : {
        &quot;maxSuccessFee&quot; : 2.027123023002322,
        &quot;maxVolumeFee&quot; : 9.301444243932576,
        &quot;minSuccessFee&quot; : 3.616076749251911,
        &quot;minVolumeFee&quot; : 7.061401241503109
      },
      &quot;subscribeFixedCurrencies&quot; : [ &quot;subscribeFixedCurrencies&quot;, &quot;subscribeFixedCurrencies&quot; ],
      &quot;facets&quot; : [ null, null ],
      &quot;tags&quot; : [ null, null ]
    },
    &quot;fundInfo&quot; : {
      &quot;assets&quot; : [ {
        &quot;mandatoryFundPercent&quot; : 0.8008281904610115,
        &quot;color&quot; : &quot;color&quot;,
        &quot;name&quot; : &quot;name&quot;,
        &quot;icon&quot; : &quot;icon&quot;,
        &quot;description&quot; : &quot;description&quot;,
        &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
        &quot;asset&quot; : &quot;asset&quot;
      }, {
        &quot;mandatoryFundPercent&quot; : 0.8008281904610115,
        &quot;color&quot; : &quot;color&quot;,
        &quot;name&quot; : &quot;name&quot;,
        &quot;icon&quot; : &quot;icon&quot;,
        &quot;description&quot; : &quot;description&quot;,
        &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
        &quot;asset&quot; : &quot;asset&quot;
      } ],
      &quot;createFundInfo&quot; : {
        &quot;maxExitFee&quot; : 5.637376656633329,
        &quot;minDeposit&quot; : 2.3021358869347655,
        &quot;maxEntryFee&quot; : 5.962133916683182
      },
      &quot;minInvestAmountIntoFund&quot; : [ null, null ],
      &quot;facets&quot; : [ null, null ]
    }
  }
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@55355aee]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = PlatformInfo
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
        Key: hasRequiredParams Value = false
        Key: hasReference Value = true
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = false
        Key: requiredParams Value = []
        Key: nickname Value = getPlatformInfo
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getplatforminfo
        Key: operationId Value = getPlatformInfo
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = false
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_platform_info
        Key: consumes Value = 
        Key: summary Value = Platform info
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;false, x-is-restful-show&#x3D;false, x-is-get-method&#x3D;true, x-has-reference&#x3D;true, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-produces&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = false
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/platform/info
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getPlatformInfo = (        options: {
        } = {},
        init: RequestInit = {}) => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/platform/info", {
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
        }
    }).then(handleErrors).then<PlatformInfo>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetPlatformLandingInfo
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/platform/landing
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [eventsTake(number), followTake(number), programsTake(number), fundsTake(number), newsTake(number)]
        Key: baseName Value = Platform
        Key: isListContainer Value = false
        Key: imports Value = [LandingInfo, ErrorViewModel]
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
    name: platform
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = LandingInfo
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;news&quot; : [ {
    &quot;date&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;logo&quot; : &quot;logo&quot;,
    &quot;title&quot; : &quot;title&quot;,
    &quot;body&quot; : &quot;body&quot;,
    &quot;url&quot; : &quot;url&quot;,
    &quot;isHot&quot; : true
  }, {
    &quot;date&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;logo&quot; : &quot;logo&quot;,
    &quot;title&quot; : &quot;title&quot;,
    &quot;body&quot; : &quot;body&quot;,
    &quot;url&quot; : &quot;url&quot;,
    &quot;isHot&quot; : true
  } ],
  &quot;follows&quot; : {
    &quot;total&quot; : 6,
    &quot;items&quot; : [ {
      &quot;leverageMin&quot; : 1,
      &quot;brokerId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;color&quot; : &quot;color&quot;,
      &quot;isExternal&quot; : true,
      &quot;subscribersCount&quot; : 7,
      &quot;brokerType&quot; : &quot;Undefined&quot;,
      &quot;description&quot; : &quot;description&quot;,
      &quot;title&quot; : &quot;title&quot;,
      &quot;creationDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
      &quot;url&quot; : &quot;url&quot;,
      &quot;tags&quot; : [ null, null ],
      &quot;tradesCount&quot; : 1,
      &quot;leverageMax&quot; : 1,
      &quot;logo&quot; : &quot;logo&quot;,
      &quot;personalDetails&quot; : {
        &quot;isOwnAsset&quot; : true,
        &quot;isFavorite&quot; : true
      },
      &quot;currency&quot; : &quot;BTC&quot;,
      &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;status&quot; : &quot;status&quot;
    }, {
      &quot;leverageMin&quot; : 1,
      &quot;brokerId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;color&quot; : &quot;color&quot;,
      &quot;isExternal&quot; : true,
      &quot;subscribersCount&quot; : 7,
      &quot;brokerType&quot; : &quot;Undefined&quot;,
      &quot;description&quot; : &quot;description&quot;,
      &quot;title&quot; : &quot;title&quot;,
      &quot;creationDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
      &quot;url&quot; : &quot;url&quot;,
      &quot;tags&quot; : [ null, null ],
      &quot;tradesCount&quot; : 1,
      &quot;leverageMax&quot; : 1,
      &quot;logo&quot; : &quot;logo&quot;,
      &quot;personalDetails&quot; : {
        &quot;isOwnAsset&quot; : true,
        &quot;isFavorite&quot; : true
      },
      &quot;currency&quot; : &quot;BTC&quot;,
      &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;status&quot; : &quot;status&quot;
    } ]
  },
  &quot;funds&quot; : {
    &quot;total&quot; : 4,
    &quot;items&quot; : [ {
      &quot;totalAssetsCount&quot; : 2,
      &quot;color&quot; : &quot;color&quot;,
      &quot;topFundAssets&quot; : [ {
        &quot;name&quot; : &quot;name&quot;,
        &quot;icon&quot; : &quot;icon&quot;,
        &quot;asset&quot; : &quot;asset&quot;,
        &quot;percent&quot; : 1.4658129805029452
      }, {
        &quot;name&quot; : &quot;name&quot;,
        &quot;icon&quot; : &quot;icon&quot;,
        &quot;asset&quot; : &quot;asset&quot;,
        &quot;percent&quot; : 1.4658129805029452
      } ],
      &quot;description&quot; : &quot;description&quot;,
      &quot;title&quot; : &quot;title&quot;,
      &quot;creationDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
      &quot;url&quot; : &quot;url&quot;,
      &quot;logo&quot; : &quot;logo&quot;,
      &quot;personalDetails&quot; : {
        &quot;isOwnAsset&quot; : true,
        &quot;isFavorite&quot; : true
      },
      &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;investorsCount&quot; : 3,
      &quot;status&quot; : &quot;status&quot;
    }, {
      &quot;totalAssetsCount&quot; : 2,
      &quot;color&quot; : &quot;color&quot;,
      &quot;topFundAssets&quot; : [ {
        &quot;name&quot; : &quot;name&quot;,
        &quot;icon&quot; : &quot;icon&quot;,
        &quot;asset&quot; : &quot;asset&quot;,
        &quot;percent&quot; : 1.4658129805029452
      }, {
        &quot;name&quot; : &quot;name&quot;,
        &quot;icon&quot; : &quot;icon&quot;,
        &quot;asset&quot; : &quot;asset&quot;,
        &quot;percent&quot; : 1.4658129805029452
      } ],
      &quot;description&quot; : &quot;description&quot;,
      &quot;title&quot; : &quot;title&quot;,
      &quot;creationDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
      &quot;url&quot; : &quot;url&quot;,
      &quot;logo&quot; : &quot;logo&quot;,
      &quot;personalDetails&quot; : {
        &quot;isOwnAsset&quot; : true,
        &quot;isFavorite&quot; : true
      },
      &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;investorsCount&quot; : 3,
      &quot;status&quot; : &quot;status&quot;
    } ]
  },
  &quot;programs&quot; : {
    &quot;total&quot; : 9,
    &quot;items&quot; : [ {
      &quot;owner&quot; : {
        &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
        &quot;url&quot; : &quot;url&quot;,
        &quot;username&quot; : &quot;username&quot;
      },
      &quot;periodDuration&quot; : 1,
      &quot;brokerId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;statistic&quot; : {
        &quot;drawdown&quot; : 5.637376656633329,
        &quot;chart&quot; : [ {
          &quot;date&quot; : 0,
          &quot;value&quot; : 6.027456183070403
        }, {
          &quot;date&quot; : 0,
          &quot;value&quot; : 6.027456183070403
        } ],
        &quot;profit&quot; : 5.962133916683182
      },
      &quot;color&quot; : &quot;color&quot;,
      &quot;level&quot; : 0,
      &quot;entryFeeCurrent&quot; : 7.061401241503109,
      &quot;description&quot; : &quot;description&quot;,
      &quot;entryFeeSelected&quot; : 2.3021358869347655,
      &quot;title&quot; : &quot;title&quot;,
      &quot;creationDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
      &quot;url&quot; : &quot;url&quot;,
      &quot;periodStarts&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
      &quot;tags&quot; : [ {
        &quot;color&quot; : &quot;color&quot;,
        &quot;name&quot; : &quot;name&quot;
      }, {
        &quot;color&quot; : &quot;color&quot;,
        &quot;name&quot; : &quot;name&quot;
      } ],
      &quot;balance&quot; : {
        &quot;amount&quot; : 9.301444243932576,
        &quot;currency&quot; : &quot;BTC&quot;
      },
      &quot;periodEnds&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
      &quot;logo&quot; : &quot;logo&quot;,
      &quot;availableToInvest&quot; : 5.962133916683182,
      &quot;personalDetails&quot; : {
        &quot;isReinvest&quot; : true,
        &quot;isOwnAsset&quot; : true,
        &quot;isFavorite&quot; : true
      },
      &quot;currency&quot; : &quot;BTC&quot;,
      &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;levelProgress&quot; : 6.027456183070403,
      &quot;investorsCount&quot; : 5,
      &quot;status&quot; : &quot;status&quot;
    }, {
      &quot;owner&quot; : {
        &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
        &quot;url&quot; : &quot;url&quot;,
        &quot;username&quot; : &quot;username&quot;
      },
      &quot;periodDuration&quot; : 1,
      &quot;brokerId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;statistic&quot; : {
        &quot;drawdown&quot; : 5.637376656633329,
        &quot;chart&quot; : [ {
          &quot;date&quot; : 0,
          &quot;value&quot; : 6.027456183070403
        }, {
          &quot;date&quot; : 0,
          &quot;value&quot; : 6.027456183070403
        } ],
        &quot;profit&quot; : 5.962133916683182
      },
      &quot;color&quot; : &quot;color&quot;,
      &quot;level&quot; : 0,
      &quot;entryFeeCurrent&quot; : 7.061401241503109,
      &quot;description&quot; : &quot;description&quot;,
      &quot;entryFeeSelected&quot; : 2.3021358869347655,
      &quot;title&quot; : &quot;title&quot;,
      &quot;creationDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
      &quot;url&quot; : &quot;url&quot;,
      &quot;periodStarts&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
      &quot;tags&quot; : [ {
        &quot;color&quot; : &quot;color&quot;,
        &quot;name&quot; : &quot;name&quot;
      }, {
        &quot;color&quot; : &quot;color&quot;,
        &quot;name&quot; : &quot;name&quot;
      } ],
      &quot;balance&quot; : {
        &quot;amount&quot; : 9.301444243932576,
        &quot;currency&quot; : &quot;BTC&quot;
      },
      &quot;periodEnds&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
      &quot;logo&quot; : &quot;logo&quot;,
      &quot;availableToInvest&quot; : 5.962133916683182,
      &quot;personalDetails&quot; : {
        &quot;isReinvest&quot; : true,
        &quot;isOwnAsset&quot; : true,
        &quot;isFavorite&quot; : true
      },
      &quot;currency&quot; : &quot;BTC&quot;,
      &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;levelProgress&quot; : 6.027456183070403,
      &quot;investorsCount&quot; : 5,
      &quot;status&quot; : &quot;status&quot;
    } ]
  },
  &quot;events&quot; : [ {
    &quot;date&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;color&quot; : &quot;color&quot;,
    &quot;icon&quot; : &quot;icon&quot;,
    &quot;text&quot; : &quot;text&quot;,
    &quot;title&quot; : &quot;title&quot;,
    &quot;type&quot; : &quot;Undefined&quot;,
    &quot;value&quot; : &quot;value&quot;,
    &quot;assetUrl&quot; : &quot;assetUrl&quot;,
    &quot;userUrl&quot; : &quot;userUrl&quot;,
    &quot;assetType&quot; : &quot;None&quot;
  }, {
    &quot;date&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;color&quot; : &quot;color&quot;,
    &quot;icon&quot; : &quot;icon&quot;,
    &quot;text&quot; : &quot;text&quot;,
    &quot;title&quot; : &quot;title&quot;,
    &quot;type&quot; : &quot;Undefined&quot;,
    &quot;value&quot; : &quot;value&quot;,
    &quot;assetUrl&quot; : &quot;assetUrl&quot;,
    &quot;userUrl&quot; : &quot;userUrl&quot;,
    &quot;assetType&quot; : &quot;None&quot;
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@73fc74e6]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = LandingInfo
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [eventsTake(number), followTake(number), programsTake(number), fundsTake(number), newsTake(number)]
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = GET
        Key: hasConsumes Value = false
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = false
        Key: hasReference Value = true
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = true
        Key: requiredParams Value = []
        Key: nickname Value = getPlatformLandingInfo
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getplatformlandinginfo
        Key: operationId Value = getPlatformLandingInfo
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_platform_landing_info
        Key: consumes Value = 
        Key: summary Value = Platform landing info
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-has-required-params&#x3D;false, x-is-restful-show&#x3D;false, x-is-get-method&#x3D;true, x-has-reference&#x3D;true, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-params&#x3D;true, x-has-optional-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-update&#x3D;false, x-has-produces&#x3D;true, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = true
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/platform/landing
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getPlatformLandingInfo = (        options: {
            eventsTake?: number,
            followTake?: number,
            programsTake?: number,
            fundsTake?: number,
            newsTake?: number
        } = {},
        init: RequestInit = {}) => {
        const {
            eventsTake,
            followTake,
            programsTake,
            fundsTake,
            newsTake
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/platform/landing", {
    })

    const query = buildQueryString(path, {
        eventsTake: eventsTake,
        followTake: followTake,
        programsTake: programsTake,
        fundsTake: fundsTake,
        newsTake: newsTake
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
    }).then(handleErrors).then<LandingInfo>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetProgramLevels
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/platform/levels
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [currency(string)]
        Key: baseName Value = Platform
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, ProgramsLevelsInfo]
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
    name: platform
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = ProgramsLevelsInfo
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;levels&quot; : [ {
    &quot;level&quot; : 0,
    &quot;investmentLimit&quot; : 6.027456183070403
  }, {
    &quot;level&quot; : 0,
    &quot;investmentLimit&quot; : 6.027456183070403
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@68d65d0d]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = ProgramsLevelsInfo
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
        Key: hasRequiredParams Value = false
        Key: hasReference Value = true
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = true
        Key: requiredParams Value = []
        Key: nickname Value = getProgramLevels
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getprogramlevels
        Key: operationId Value = getProgramLevels
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_program_levels
        Key: consumes Value = 
        Key: summary Value = Investment programs levels
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-has-required-params&#x3D;false, x-is-restful-show&#x3D;false, x-is-get-method&#x3D;true, x-has-reference&#x3D;true, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-params&#x3D;true, x-has-optional-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-update&#x3D;false, x-has-produces&#x3D;true, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = true
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/platform/levels
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getProgramLevels = (        options: {
            currency?: string
        } = {},
        init: RequestInit = {}) => {
        const {
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/platform/levels", {
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
        }
    }).then(handleErrors).then<ProgramsLevelsInfo>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetProgramLevelsParams
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/platform/levels/parameters
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [currency(string)]
        Key: baseName Value = Platform
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, LevelsParamsInfo]
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
    name: platform
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = LevelsParamsInfo
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;genesisRatioMin&quot; : 5.962133916683182,
  &quot;investmentScaleHighRisk&quot; : 1.2315135367772556,
  &quot;maxAvailableToInvest&quot; : 6.027456183070403,
  &quot;volumeScaleMax&quot; : 9.301444243932576,
  &quot;investmentScaleMax&quot; : 7.386281948385884,
  &quot;genesisRatioMax&quot; : 5.637376656633329,
  &quot;ageByVolumeMax&quot; : 2.027123023002322,
  &quot;unverifiedAvailableToInvest&quot; : 1.4658129805029452,
  &quot;programAgeMax&quot; : 3.616076749251911,
  &quot;minAvailableToInvest&quot; : 0.8008281904610115,
  &quot;volumeScaleMin&quot; : 7.061401241503109,
  &quot;investmentScaleMin&quot; : 4.145608029883936,
  &quot;genesisRatioHighRisk&quot; : 2.3021358869347655
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@6e09e0de]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = LevelsParamsInfo
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
        Key: hasRequiredParams Value = false
        Key: hasReference Value = true
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = true
        Key: requiredParams Value = []
        Key: nickname Value = getProgramLevelsParams
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getprogramlevelsparams
        Key: operationId Value = getProgramLevelsParams
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_program_levels_params
        Key: consumes Value = 
        Key: summary Value = Investment programs levels parameters
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-has-required-params&#x3D;false, x-is-restful-show&#x3D;false, x-is-get-method&#x3D;true, x-has-reference&#x3D;true, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-params&#x3D;true, x-has-optional-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-update&#x3D;false, x-has-produces&#x3D;true, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = true
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/platform/levels/parameters
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getProgramLevelsParams = (        options: {
            currency?: string
        } = {},
        init: RequestInit = {}) => {
        const {
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/platform/levels/parameters", {
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
        }
    }).then(handleErrors).then<LevelsParamsInfo>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetRiskControlInfo
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/platform/riskcontrol
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Route(string), Client(string), Version(string)]
        Key: baseName Value = Platform
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, CaptchaDetails]
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
    name: platform
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = CaptchaDetails
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;route&quot; : &quot;route&quot;,
  &quot;captchaType&quot; : &quot;None&quot;,
  &quot;pow&quot; : {
    &quot;difficulty&quot; : 0,
    &quot;secureAlgorithm&quot; : &quot;Sha256&quot;,
    &quot;nonce&quot; : &quot;nonce&quot;
  },
  &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
  &quot;geeTest&quot; : { }
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@119435db]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = CaptchaDetails
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [Route(string), Client(string), Version(string)]
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
        Key: requiredParams Value = [Route(string)]
        Key: nickname Value = getRiskControlInfo
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getriskcontrolinfo
        Key: operationId Value = getRiskControlInfo
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_risk_control_info
        Key: consumes Value = 
        Key: summary Value = Risk control
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-get-method&#x3D;true, x-has-reference&#x3D;true, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-more&#x3D;false, x-has-params&#x3D;true, x-has-optional-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-update&#x3D;false, x-has-produces&#x3D;true, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = true
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/platform/riskcontrol
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getRiskControlInfo = (
        route: string,
        options: {
            client?: string,
            version?: string
        } = {},
        init: RequestInit = {}) => {
                if (route === null || route === undefined) {
                throw new Error('Required parameter route was null or undefined when calling getRiskControlInfo.');
                }
        const {
            client,
            version
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/platform/riskcontrol", {
    })

    const query = buildQueryString(path, {
        Route: route,
        Client: client,
        Version: version
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
    }).then(handleErrors).then<CaptchaDetails>((response: Response) => {
        return response.json();
    })
    }
}
import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
import { InvestmentEventViewModels } from '../model/InvestmentEventViewModels';

export default class EventsApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetEvents
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/events
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), EventLocation(string), AssetId(string), From(Date), To(Date), EventType(string), AssetType(string), AssetsIds(Array&lt;string&gt;), ForceFilterByIds(boolean), EventGroup(string), Skip(number), Take(number)]
        Key: baseName Value = Events
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, InvestmentEventViewModels]
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
    name: events
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = InvestmentEventViewModels
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;total&quot; : 0,
  &quot;events&quot; : [ {
    &quot;date&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;assetDetails&quot; : {
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
    },
    &quot;amount&quot; : 2.3021358869347655,
    &quot;feesInfo&quot; : [ {
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
    &quot;icon&quot; : &quot;icon&quot;,
    &quot;changeState&quot; : &quot;NotChanged&quot;,
    &quot;extendedInfo&quot; : [ {
      &quot;amount&quot; : 7.061401241503109,
      &quot;currency&quot; : &quot;BTC&quot;,
      &quot;title&quot; : &quot;title&quot;
    }, {
      &quot;amount&quot; : 7.061401241503109,
      &quot;currency&quot; : &quot;BTC&quot;,
      &quot;title&quot; : &quot;title&quot;
    } ],
    &quot;currency&quot; : &quot;BTC&quot;,
    &quot;title&quot; : &quot;title&quot;,
    &quot;totalFeesCurrency&quot; : &quot;BTC&quot;,
    &quot;totalFeesAmount&quot; : 3.616076749251911
  }, {
    &quot;date&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;assetDetails&quot; : {
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
    },
    &quot;amount&quot; : 2.3021358869347655,
    &quot;feesInfo&quot; : [ {
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
    &quot;icon&quot; : &quot;icon&quot;,
    &quot;changeState&quot; : &quot;NotChanged&quot;,
    &quot;extendedInfo&quot; : [ {
      &quot;amount&quot; : 7.061401241503109,
      &quot;currency&quot; : &quot;BTC&quot;,
      &quot;title&quot; : &quot;title&quot;
    }, {
      &quot;amount&quot; : 7.061401241503109,
      &quot;currency&quot; : &quot;BTC&quot;,
      &quot;title&quot; : &quot;title&quot;
    } ],
    &quot;currency&quot; : &quot;BTC&quot;,
    &quot;title&quot; : &quot;title&quot;,
    &quot;totalFeesCurrency&quot; : &quot;BTC&quot;,
    &quot;totalFeesAmount&quot; : 3.616076749251911
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@a77b193]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = InvestmentEventViewModels
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [EventLocation(string), AssetId(string), From(Date), To(Date), EventType(string), AssetType(string), AssetsIds(Array&lt;string&gt;), ForceFilterByIds(boolean), EventGroup(string), Skip(number), Take(number)]
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
        Key: nickname Value = getEvents
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getevents
        Key: operationId Value = getEvents
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_events
        Key: consumes Value = 
        Key: summary Value = Events
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
        Key: testPath Value = /v2.0/events
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getEvents = (
        authorization: string,
        options: {
            eventLocation?: string,
            assetId?: string,
            from?: Date,
            to?: Date,
            eventType?: string,
            assetType?: string,
            assetsIds?: Array<string>,
            forceFilterByIds?: boolean,
            eventGroup?: string,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getEvents.');
                }
        const {
            eventLocation,
            assetId,
            from,
            to,
            eventType,
            assetType,
            assetsIds,
            forceFilterByIds,
            eventGroup,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/events", {
    })

    const query = buildQueryString(path, {
        EventLocation: eventLocation,
        AssetId: assetId,
        From: from,
        To: to,
        EventType: eventType,
        AssetType: assetType,
        AssetsIds: assetsIds,
        ForceFilterByIds: forceFilterByIds,
        EventGroup: eventGroup,
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
    }).then(handleErrors).then<InvestmentEventViewModels>((response: Response) => {
        return response.json();
    })
    }
}
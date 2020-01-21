import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { AbsoluteProfitChart } from '../model/AbsoluteProfitChart';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { FundBalanceChart } from '../model/FundBalanceChart';
import { FundDetailsFull } from '../model/FundDetailsFull';
import { FundProfitPercentCharts } from '../model/FundProfitPercentCharts';
import { ItemsViewModelFundDetailsListItem } from '../model/ItemsViewModelFundDetailsListItem';
import { ItemsViewModelReallocationModel } from '../model/ItemsViewModelReallocationModel';

export default class FundsApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = AddToFavorites
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/funds/{id}/favorite/add
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string)]
        Key: baseName Value = Funds
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
    name: funds
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@1a512b2b]
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
        Key: nickname Value = addToFavorites
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = addtofavorites
        Key: operationId Value = addToFavorites
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = add_to_favorites
        Key: consumes Value = 
        Key: summary Value = Add to favorites
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

    addToFavorites = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling addToFavorites.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling addToFavorites.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/funds/{id}/favorite/add", {
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
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetFundAbsoluteProfitChart
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/funds/{id}/charts/profit/absolute
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), DateFrom(Date), DateTo(Date), MaxPointCount(number), Currency(string)]
        Key: baseName Value = Funds
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, AbsoluteProfitChart]
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
    name: funds
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = AbsoluteProfitChart
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;profit&quot; : 0.8008281904610115,
  &quot;chart&quot; : [ {
    &quot;date&quot; : 0,
    &quot;value&quot; : 6.027456183070403
  }, {
    &quot;date&quot; : 0,
    &quot;value&quot; : 6.027456183070403
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@480cd941]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = AbsoluteProfitChart
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [DateFrom(Date), DateTo(Date), MaxPointCount(number), Currency(string)]
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
        Key: requiredParams Value = [id(string)]
        Key: nickname Value = getFundAbsoluteProfitChart
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getfundabsoluteprofitchart
        Key: operationId Value = getFundAbsoluteProfitChart
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_fund_absolute_profit_chart
        Key: consumes Value = 
        Key: summary Value = Fund absolute profit chart
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
        Key: testPath Value = 
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getFundAbsoluteProfitChart = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: string
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getFundAbsoluteProfitChart.');
                }
        const {
            dateFrom,
            dateTo,
            maxPointCount,
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/funds/{id}/charts/profit/absolute", {
        id
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
        MaxPointCount: maxPointCount,
        Currency: currency
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
    }).then(handleErrors).then<AbsoluteProfitChart>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetFundBalanceChart
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/funds/{id}/charts/balance
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), DateFrom(Date), DateTo(Date), MaxPointCount(number), Currency(string)]
        Key: baseName Value = Funds
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, FundBalanceChart]
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
    name: funds
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = FundBalanceChart
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;balance&quot; : 0.8008281904610115,
  &quot;color&quot; : &quot;color&quot;,
  &quot;chart&quot; : [ {
    &quot;date&quot; : 6,
    &quot;investorsFunds&quot; : 5.962133916683182,
    &quot;managerFunds&quot; : 1.4658129805029452
  }, {
    &quot;date&quot; : 6,
    &quot;investorsFunds&quot; : 5.962133916683182,
    &quot;managerFunds&quot; : 1.4658129805029452
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@70f6e125]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = FundBalanceChart
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [DateFrom(Date), DateTo(Date), MaxPointCount(number), Currency(string)]
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
        Key: requiredParams Value = [id(string)]
        Key: nickname Value = getFundBalanceChart
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getfundbalancechart
        Key: operationId Value = getFundBalanceChart
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_fund_balance_chart
        Key: consumes Value = 
        Key: summary Value = Fund balance chart
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
        Key: testPath Value = 
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getFundBalanceChart = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: string
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getFundBalanceChart.');
                }
        const {
            dateFrom,
            dateTo,
            maxPointCount,
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/funds/{id}/charts/balance", {
        id
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
        MaxPointCount: maxPointCount,
        Currency: currency
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
    }).then(handleErrors).then<FundBalanceChart>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetFundDetails
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/funds/{id}
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), currency(string)]
        Key: baseName Value = Funds
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, FundDetailsFull]
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
    name: funds
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = FundDetailsFull
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;owner&quot; : {
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
  &quot;entryFeeCurrent&quot; : 6.027456183070403,
  &quot;exitFeeSelected&quot; : 1.4658129805029452,
  &quot;assetsStructure&quot; : [ {
    &quot;symbol&quot; : &quot;symbol&quot;,
    &quot;current&quot; : 2.3021358869347655,
    &quot;icon&quot; : &quot;icon&quot;,
    &quot;asset&quot; : &quot;asset&quot;,
    &quot;target&quot; : 5.637376656633329
  }, {
    &quot;symbol&quot; : &quot;symbol&quot;,
    &quot;current&quot; : 2.3021358869347655,
    &quot;icon&quot; : &quot;icon&quot;,
    &quot;asset&quot; : &quot;asset&quot;,
    &quot;target&quot; : 5.637376656633329
  } ],
  &quot;publicInfo&quot; : {
    &quot;typeExt&quot; : &quot;None&quot;,
    &quot;color&quot; : &quot;color&quot;,
    &quot;description&quot; : &quot;description&quot;,
    &quot;logo&quot; : &quot;logo&quot;,
    &quot;isOwnAsset&quot; : true,
    &quot;title&quot; : &quot;title&quot;,
    &quot;creationDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;url&quot; : &quot;url&quot;,
    &quot;status&quot; : &quot;status&quot;
  },
  &quot;exitFeeCurrent&quot; : 5.962133916683182,
  &quot;entryFeeSelected&quot; : 0.8008281904610115,
  &quot;personalDetails&quot; : {
    &quot;exitFeePersonal&quot; : 7.386281948385884,
    &quot;pendingInOutCurrency&quot; : &quot;BTC&quot;,
    &quot;canWithdraw&quot; : true,
    &quot;canInvest&quot; : true,
    &quot;nextReallocationPercents&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;ownerActions&quot; : {
      &quot;canClose&quot; : true,
      &quot;canReallocate&quot; : true
    },
    &quot;pendingOutput&quot; : 3.616076749251911,
    &quot;hasNotifications&quot; : true,
    &quot;pendingInput&quot; : 9.301444243932576,
    &quot;availableReallocationPercents&quot; : 4,
    &quot;value&quot; : 7.061401241503109,
    &quot;withdrawPercent&quot; : 2.027123023002322,
    &quot;isFavorite&quot; : true,
    &quot;isInvested&quot; : true,
    &quot;status&quot; : &quot;Pending&quot;
  },
  &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@6b11c25e]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = FundDetailsFull
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
        Key: requiredParams Value = [id(string)]
        Key: nickname Value = getFundDetails
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getfunddetails
        Key: operationId Value = getFundDetails
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_fund_details
        Key: consumes Value = 
        Key: summary Value = Fund details
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
        Key: testPath Value = 
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getFundDetails = (
        id: string,
        options: {
            authorization?: string,
            currency?: string
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getFundDetails.');
                }
        const {
            authorization,
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/funds/{id}", {
        id
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
    }).then(handleErrors).then<FundDetailsFull>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetFundProfitPercentCharts
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/funds/{id}/charts/profit/percent
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), DateFrom(Date), DateTo(Date), MaxPointCount(number), Currency(string), currencies(Array&lt;any&gt;), chartAssetsCount(number)]
        Key: baseName Value = Funds
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, FundProfitPercentCharts]
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
    name: funds
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = FundProfitPercentCharts
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;statistic&quot; : {
    &quot;calmarRatio&quot; : 2.3021358869347655,
    &quot;balance&quot; : 6.027456183070403,
    &quot;profitPercent&quot; : 1.4658129805029452,
    &quot;maxDrawdown&quot; : 7.061401241503109,
    &quot;sharpeRatio&quot; : 5.962133916683182,
    &quot;creationDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;investors&quot; : 0,
    &quot;sortinoRatio&quot; : 5.637376656633329
  },
  &quot;charts&quot; : [ {
    &quot;color&quot; : &quot;color&quot;,
    &quot;currency&quot; : &quot;BTC&quot;,
    &quot;chart&quot; : [ {
      &quot;date&quot; : 0,
      &quot;value&quot; : 6.027456183070403
    }, {
      &quot;date&quot; : 0,
      &quot;value&quot; : 6.027456183070403
    } ]
  }, {
    &quot;color&quot; : &quot;color&quot;,
    &quot;currency&quot; : &quot;BTC&quot;,
    &quot;chart&quot; : [ {
      &quot;date&quot; : 0,
      &quot;value&quot; : 6.027456183070403
    }, {
      &quot;date&quot; : 0,
      &quot;value&quot; : 6.027456183070403
    } ]
  } ],
  &quot;assets&quot; : [ {
    &quot;date&quot; : 9,
    &quot;assets&quot; : [ {
      &quot;color&quot; : &quot;color&quot;,
      &quot;icon&quot; : &quot;icon&quot;,
      &quot;name&quot; : &quot;name&quot;,
      &quot;asset&quot; : &quot;asset&quot;,
      &quot;percent&quot; : 2.027123023002322
    }, {
      &quot;color&quot; : &quot;color&quot;,
      &quot;icon&quot; : &quot;icon&quot;,
      &quot;name&quot; : &quot;name&quot;,
      &quot;asset&quot; : &quot;asset&quot;,
      &quot;percent&quot; : 2.027123023002322
    } ],
    &quot;value&quot; : 3.616076749251911
  }, {
    &quot;date&quot; : 9,
    &quot;assets&quot; : [ {
      &quot;color&quot; : &quot;color&quot;,
      &quot;icon&quot; : &quot;icon&quot;,
      &quot;name&quot; : &quot;name&quot;,
      &quot;asset&quot; : &quot;asset&quot;,
      &quot;percent&quot; : 2.027123023002322
    }, {
      &quot;color&quot; : &quot;color&quot;,
      &quot;icon&quot; : &quot;icon&quot;,
      &quot;name&quot; : &quot;name&quot;,
      &quot;asset&quot; : &quot;asset&quot;,
      &quot;percent&quot; : 2.027123023002322
    } ],
    &quot;value&quot; : 3.616076749251911
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@788aa464]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = FundProfitPercentCharts
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [DateFrom(Date), DateTo(Date), MaxPointCount(number), Currency(string), currencies(Array&lt;any&gt;), chartAssetsCount(number)]
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
        Key: requiredParams Value = [id(string)]
        Key: nickname Value = getFundProfitPercentCharts
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getfundprofitpercentcharts
        Key: operationId Value = getFundProfitPercentCharts
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_fund_profit_percent_charts
        Key: consumes Value = 
        Key: summary Value = Fund profit percent charts
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
        Key: testPath Value = 
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getFundProfitPercentCharts = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: string,
            currencies?: Array<any>,
            chartAssetsCount?: number
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getFundProfitPercentCharts.');
                }
        const {
            dateFrom,
            dateTo,
            maxPointCount,
            currency,
            currencies,
            chartAssetsCount
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/funds/{id}/charts/profit/percent", {
        id
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
        MaxPointCount: maxPointCount,
        Currency: currency,
        currencies: currencies,
        chartAssetsCount: chartAssetsCount
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
    }).then(handleErrors).then<FundProfitPercentCharts>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetFunds
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/funds
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), Sorting(string), ShowIn(string), Assets(Array&lt;string&gt;), IncludeWithInvestments(boolean), DateFrom(Date), DateTo(Date), ChartPointsCount(number), FacetId(string), Mask(string), OwnerId(string), ShowFavorites(boolean), Skip(number), Take(number)]
        Key: baseName Value = Funds
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, ItemsViewModelFundDetailsListItem]
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
    name: funds
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = ItemsViewModelFundDetailsListItem
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
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
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@56e2bce5]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = ItemsViewModelFundDetailsListItem
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [Sorting(string), ShowIn(string), Assets(Array&lt;string&gt;), IncludeWithInvestments(boolean), DateFrom(Date), DateTo(Date), ChartPointsCount(number), FacetId(string), Mask(string), OwnerId(string), ShowFavorites(boolean), Skip(number), Take(number)]
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = GET
        Key: hasConsumes Value = false
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = false
        Key: hasReference Value = false
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = true
        Key: requiredParams Value = []
        Key: nickname Value = getFunds
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getfunds
        Key: operationId Value = getFunds
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_funds
        Key: consumes Value = 
        Key: summary Value = Funds list
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-has-required-params&#x3D;false, x-is-restful-show&#x3D;false, x-is-get-method&#x3D;true, x-has-reference&#x3D;false, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-params&#x3D;true, x-has-optional-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-update&#x3D;false, x-has-produces&#x3D;true, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = true
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/funds
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getFunds = (        options: {
            authorization?: string,
            sorting?: string,
            showIn?: string,
            assets?: Array<string>,
            includeWithInvestments?: boolean,
            dateFrom?: Date,
            dateTo?: Date,
            chartPointsCount?: number,
            facetId?: string,
            mask?: string,
            ownerId?: string,
            showFavorites?: boolean,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
        const {
            authorization,
            sorting,
            showIn,
            assets,
            includeWithInvestments,
            dateFrom,
            dateTo,
            chartPointsCount,
            facetId,
            mask,
            ownerId,
            showFavorites,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/funds", {
    })

    const query = buildQueryString(path, {
        Sorting: sorting,
        ShowIn: showIn,
        Assets: assets,
        IncludeWithInvestments: includeWithInvestments,
        DateFrom: dateFrom,
        DateTo: dateTo,
        ChartPointsCount: chartPointsCount,
        FacetId: facetId,
        Mask: mask,
        OwnerId: ownerId,
        ShowFavorites: showFavorites,
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
    }).then(handleErrors).then<ItemsViewModelFundDetailsListItem>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetReallocatingHistory
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/funds/{id}/reallocations
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), DateFrom(Date), DateTo(Date), Skip(number), Take(number)]
        Key: baseName Value = Funds
        Key: isListContainer Value = false
        Key: imports Value = [ItemsViewModelReallocationModel, ErrorViewModel]
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
    name: funds
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = ItemsViewModelReallocationModel
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;total&quot; : 0,
  &quot;items&quot; : [ {
    &quot;date&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;parts&quot; : [ {
      &quot;color&quot; : &quot;color&quot;,
      &quot;icon&quot; : &quot;icon&quot;,
      &quot;name&quot; : &quot;name&quot;,
      &quot;asset&quot; : &quot;asset&quot;,
      &quot;percent&quot; : 2.027123023002322
    }, {
      &quot;color&quot; : &quot;color&quot;,
      &quot;icon&quot; : &quot;icon&quot;,
      &quot;name&quot; : &quot;name&quot;,
      &quot;asset&quot; : &quot;asset&quot;,
      &quot;percent&quot; : 2.027123023002322
    } ]
  }, {
    &quot;date&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;parts&quot; : [ {
      &quot;color&quot; : &quot;color&quot;,
      &quot;icon&quot; : &quot;icon&quot;,
      &quot;name&quot; : &quot;name&quot;,
      &quot;asset&quot; : &quot;asset&quot;,
      &quot;percent&quot; : 2.027123023002322
    }, {
      &quot;color&quot; : &quot;color&quot;,
      &quot;icon&quot; : &quot;icon&quot;,
      &quot;name&quot; : &quot;name&quot;,
      &quot;asset&quot; : &quot;asset&quot;,
      &quot;percent&quot; : 2.027123023002322
    } ]
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@115a90d5]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = ItemsViewModelReallocationModel
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
        Key: requiredParams Value = [id(string)]
        Key: nickname Value = getReallocatingHistory
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getreallocatinghistory
        Key: operationId Value = getReallocatingHistory
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_reallocating_history
        Key: consumes Value = 
        Key: summary Value = Get history of asset part update requests
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
        Key: testPath Value = 
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getReallocatingHistory = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getReallocatingHistory.');
                }
        const {
            dateFrom,
            dateTo,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/funds/{id}/reallocations", {
        id
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
        }
    }).then(handleErrors).then<ItemsViewModelReallocationModel>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = RemoveFromFavorites
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/funds/{id}/favorite/remove
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string)]
        Key: baseName Value = Funds
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
    name: funds
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@743cb392]
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
        Key: nickname Value = removeFromFavorites
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = removefromfavorites
        Key: operationId Value = removeFromFavorites
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = remove_from_favorites
        Key: consumes Value = 
        Key: summary Value = Remove from favorites
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-is-restful-update&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-more&#x3D;false, x-has-produces&#x3D;true, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-is-restful&#x3D;false, x-is-restful-create&#x3D;false}
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

    removeFromFavorites = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling removeFromFavorites.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling removeFromFavorites.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/funds/{id}/favorite/remove", {
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
}
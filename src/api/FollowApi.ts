import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { AbsoluteProfitChart } from '../model/AbsoluteProfitChart';
import { AccountBalanceChart } from '../model/AccountBalanceChart';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { ItemsViewModelFollowDetailsListItem } from '../model/ItemsViewModelFollowDetailsListItem';
import { ItemsViewModelSignalSubscription } from '../model/ItemsViewModelSignalSubscription';
import { ProgramFollowDetailsFull } from '../model/ProgramFollowDetailsFull';
import { ProgramProfitPercentCharts } from '../model/ProgramProfitPercentCharts';
import { TradesSignalViewModel } from '../model/TradesSignalViewModel';

export default class FollowApi {
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
        Key: path Value = /v2.0/follow/{id}/favorite/add
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string)]
        Key: baseName Value = Follow
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
    name: follow
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@539ba333]
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/follow/{id}/favorite/add", {
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
        Key: operationIdCamelCase Value = GetAbsoluteProfitChart
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/follow/{id}/charts/profit/absolute
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), DateFrom(Date), DateTo(Date), MaxPointCount(number), Currency(string)]
        Key: baseName Value = Follow
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
    name: follow
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@68d52480]
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
        Key: nickname Value = getAbsoluteProfitChart
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getabsoluteprofitchart
        Key: operationId Value = getAbsoluteProfitChart
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_absolute_profit_chart
        Key: consumes Value = 
        Key: summary Value = Follow absolute profit chart
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

    getAbsoluteProfitChart = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: string
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getAbsoluteProfitChart.');
                }
        const {
            dateFrom,
            dateTo,
            maxPointCount,
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/follow/{id}/charts/profit/absolute", {
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
        Key: operationIdCamelCase Value = GetAssetTrades
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/follow/{id}/trades
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), DateFrom(Date), DateTo(Date), Symbol(string), Sorting(string), AccountId(string), AccountCurrency(string), IsFollow(boolean), Skip(number), Take(number)]
        Key: baseName Value = Follow
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, TradesSignalViewModel]
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
    name: follow
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@542bbe51]
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
        Key: queryParams Value = [DateFrom(Date), DateTo(Date), Symbol(string), Sorting(string), AccountId(string), AccountCurrency(string), IsFollow(boolean), Skip(number), Take(number)]
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
        Key: nickname Value = getAssetTrades
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getassettrades
        Key: operationId Value = getAssetTrades
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_asset_trades
        Key: consumes Value = 
        Key: summary Value = Trade history
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

    getAssetTrades = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            symbol?: string,
            sorting?: string,
            accountId?: string,
            accountCurrency?: string,
            isFollow?: boolean,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getAssetTrades.');
                }
        const {
            dateFrom,
            dateTo,
            symbol,
            sorting,
            accountId,
            accountCurrency,
            isFollow,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/follow/{id}/trades", {
        id
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
        Symbol: symbol,
        Sorting: sorting,
        AccountId: accountId,
        AccountCurrency: accountCurrency,
        IsFollow: isFollow,
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
    }).then(handleErrors).then<TradesSignalViewModel>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetBalanceChart
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/follow/{id}/charts/balance
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), DateFrom(Date), DateTo(Date), MaxPointCount(number), Currency(string)]
        Key: baseName Value = Follow
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, AccountBalanceChart]
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
    name: follow
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = AccountBalanceChart
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;balance&quot; : 0.8008281904610115,
  &quot;color&quot; : &quot;color&quot;,
  &quot;chart&quot; : [ {
    &quot;date&quot; : 0,
    &quot;value&quot; : 6.027456183070403
  }, {
    &quot;date&quot; : 0,
    &quot;value&quot; : 6.027456183070403
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@6df7ff5d]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = AccountBalanceChart
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
        Key: nickname Value = getBalanceChart
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getbalancechart
        Key: operationId Value = getBalanceChart
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_balance_chart
        Key: consumes Value = 
        Key: summary Value = Follow balance chart
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

    getBalanceChart = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: string
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getBalanceChart.');
                }
        const {
            dateFrom,
            dateTo,
            maxPointCount,
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/follow/{id}/charts/balance", {
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
    }).then(handleErrors).then<AccountBalanceChart>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetFollowAssetDetails
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/follow/{id}
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string)]
        Key: baseName Value = Follow
        Key: isListContainer Value = false
        Key: imports Value = [ProgramFollowDetailsFull, ErrorViewModel]
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
    name: follow
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = ProgramFollowDetailsFull
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
  &quot;programDetails&quot; : {
    &quot;periodDuration&quot; : 2,
    &quot;stopOutLevelCurrent&quot; : 6.84685269835264,
    &quot;successFeeSelected&quot; : 1.2315135367772556,
    &quot;level&quot; : 5,
    &quot;genesisRatio&quot; : 9.301444243932576,
    &quot;entryFeeCurrent&quot; : 7.386281948385884,
    &quot;availableInvestmentLimit&quot; : 1.1730742509559433,
    &quot;entryFeeSelected&quot; : 4.145608029883936,
    &quot;tradesDelay&quot; : &quot;None&quot;,
    &quot;availableInvestmentBase&quot; : 7.457744773683766,
    &quot;periodStarts&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;totalAvailableInvestment&quot; : 4.965218492984954,
    &quot;stopOutLevelSelected&quot; : 1.4894159098541704,
    &quot;investmentScale&quot; : 3.616076749251911,
    &quot;successFeeCurrent&quot; : 1.0246457001441578,
    &quot;periodEnds&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;ageDays&quot; : 7.061401241503109,
    &quot;personalDetails&quot; : {
      &quot;canWithdraw&quot; : true,
      &quot;pendingOutputIsWithdrawAll&quot; : true,
      &quot;subscribedAccounts&quot; : 6,
      &quot;canInvest&quot; : true,
      &quot;showTwoFactorButton&quot; : true,
      &quot;pendingOutput&quot; : 9.018348186070783,
      &quot;hasNotifications&quot; : true,
      &quot;pendingInput&quot; : 8.762042012749001,
      &quot;profitPercent&quot; : 9.369310271410669,
      &quot;isReinvest&quot; : true,
      &quot;migration&quot; : {
        &quot;newBroker&quot; : {
          &quot;leverageMin&quot; : 6,
          &quot;leverageMax&quot; : 1,
          &quot;assets&quot; : &quot;assets&quot;,
          &quot;terms&quot; : &quot;terms&quot;,
          &quot;fee&quot; : 0.8008281904610115,
          &quot;name&quot; : &quot;name&quot;,
          &quot;description&quot; : &quot;description&quot;,
          &quot;logo&quot; : &quot;logo&quot;,
          &quot;accountTypes&quot; : [ {
            &quot;name&quot; : &quot;name&quot;,
            &quot;description&quot; : &quot;description&quot;,
            &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
            &quot;isSignalsAvailable&quot; : true,
            &quot;type&quot; : &quot;Undefined&quot;,
            &quot;leverages&quot; : [ 5, 5 ],
            &quot;minimumDepositsAmount&quot; : {
              &quot;key&quot; : 5.637376656633329
            },
            &quot;isDepositRequired&quot; : true,
            &quot;isKycRequired&quot; : true,
            &quot;currencies&quot; : [ &quot;currencies&quot;, &quot;currencies&quot; ]
          }, {
            &quot;name&quot; : &quot;name&quot;,
            &quot;description&quot; : &quot;description&quot;,
            &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
            &quot;isSignalsAvailable&quot; : true,
            &quot;type&quot; : &quot;Undefined&quot;,
            &quot;leverages&quot; : [ 5, 5 ],
            &quot;minimumDepositsAmount&quot; : {
              &quot;key&quot; : 5.637376656633329
            },
            &quot;isDepositRequired&quot; : true,
            &quot;isKycRequired&quot; : true,
            &quot;currencies&quot; : [ &quot;currencies&quot;, &quot;currencies&quot; ]
          } ],
          &quot;isKycRequired&quot; : true,
          &quot;tags&quot; : [ {
            &quot;color&quot; : &quot;color&quot;,
            &quot;name&quot; : &quot;name&quot;
          }, {
            &quot;color&quot; : &quot;color&quot;,
            &quot;name&quot; : &quot;name&quot;
          } ]
        },
        &quot;newLeverage&quot; : 3,
        &quot;dateCreate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;
      },
      &quot;value&quot; : 5.025004791520295,
      &quot;profit&quot; : 9.965781217890562,
      &quot;successFeePersonal&quot; : 6.438423552598547,
      &quot;invested&quot; : 6.683562403749608,
      &quot;isFavorite&quot; : true,
      &quot;isInvested&quot; : true,
      &quot;status&quot; : &quot;Pending&quot;
    },
    &quot;volumeScale&quot; : 2.027123023002322,
    &quot;levelProgress&quot; : 5.637376656633329
  },
  &quot;tradingAccountInfo&quot; : {
    &quot;leverageMin&quot; : 0,
    &quot;leverageMax&quot; : 6,
    &quot;balance&quot; : 1.4658129805029452,
    &quot;currency&quot; : &quot;BTC&quot;,
    &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;login&quot; : &quot;login&quot;
  },
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
  &quot;ownerActions&quot; : {
    &quot;canClose&quot; : true,
    &quot;isEnoughMoneyToCreateProgram&quot; : true,
    &quot;canChangePassword&quot; : true,
    &quot;canEditSignalProviderSettings&quot; : true,
    &quot;canMakeSignalProviderFromPrivateTradingAccount&quot; : true,
    &quot;canMakeSignalProviderFromProgram&quot; : true,
    &quot;canMakeSignalProviderFromPrivateExternalTradingAccount&quot; : true,
    &quot;canTransferMoney&quot; : true,
    &quot;canMakeProgramFromPrivateTradingAccount&quot; : true,
    &quot;canConfirm2FA&quot; : true,
    &quot;canClosePeriod&quot; : true,
    &quot;canMakeProgramFromSignalProvider&quot; : true
  },
  &quot;followDetails&quot; : {
    &quot;tradesCount&quot; : 1,
    &quot;signalSettings&quot; : {
      &quot;signalSuccessFee&quot; : 2.8841621266687802,
      &quot;signalVolumeFee&quot; : 6.778324963048013,
      &quot;isActive&quot; : true
    },
    &quot;subscribersCount&quot; : 6,
    &quot;personalDetails&quot; : {
      &quot;guestActions&quot; : {
        &quot;canSubscribeToExternalSignalPrivateAccount&quot; : true,
        &quot;canSubscribeToExternalSignalCommonAccount&quot; : true,
        &quot;canSubscribeToInternalSignal&quot; : true
      },
      &quot;hasNotifications&quot; : true,
      &quot;subscribedAccounts&quot; : 5,
      &quot;isFavorite&quot; : true
    }
  },
  &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
  &quot;brokerDetails&quot; : {
    &quot;showCommissionRebateSometime&quot; : true,
    &quot;showCommissionRebate&quot; : true,
    &quot;showSwaps&quot; : true,
    &quot;showTicketsSometime&quot; : true,
    &quot;type&quot; : &quot;Undefined&quot;,
    &quot;showTickets&quot; : true,
    &quot;isKycRequired&quot; : true,
    &quot;name&quot; : &quot;name&quot;,
    &quot;logo&quot; : &quot;logo&quot;,
    &quot;showSwapsSometime&quot; : true,
    &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;isSignalsAvailable&quot; : true,
    &quot;isKycRequiredSometime&quot; : true
  },
  &quot;tags&quot; : [ {
    &quot;color&quot; : &quot;color&quot;,
    &quot;name&quot; : &quot;name&quot;
  }, {
    &quot;color&quot; : &quot;color&quot;,
    &quot;name&quot; : &quot;name&quot;
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@637b5beb]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = ProgramFollowDetailsFull
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
        Key: requiredParams Value = [id(string)]
        Key: nickname Value = getFollowAssetDetails
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getfollowassetdetails
        Key: operationId Value = getFollowAssetDetails
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_follow_asset_details
        Key: consumes Value = 
        Key: summary Value = Follow asset details
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

    getFollowAssetDetails = (
        id: string,
        options: {
            authorization?: string
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getFollowAssetDetails.');
                }
        const {
            authorization
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/follow/{id}", {
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
    }).then(handleErrors).then<ProgramFollowDetailsFull>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetFollowAssets
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/follow
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), Sorting(string), ShowIn(string), Tags(Array&lt;string&gt;), DateFrom(Date), DateTo(Date), ChartPointsCount(number), FacetId(string), Mask(string), OwnerId(string), ShowFavorites(boolean), Skip(number), Take(number)]
        Key: baseName Value = Follow
        Key: isListContainer Value = false
        Key: imports Value = [ItemsViewModelFollowDetailsListItem, ErrorViewModel]
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
    name: follow
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = ItemsViewModelFollowDetailsListItem
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
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
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@224b9220]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = ItemsViewModelFollowDetailsListItem
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [Sorting(string), ShowIn(string), Tags(Array&lt;string&gt;), DateFrom(Date), DateTo(Date), ChartPointsCount(number), FacetId(string), Mask(string), OwnerId(string), ShowFavorites(boolean), Skip(number), Take(number)]
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
        Key: nickname Value = getFollowAssets
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getfollowassets
        Key: operationId Value = getFollowAssets
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_follow_assets
        Key: consumes Value = 
        Key: summary Value = Follow assets
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
        Key: testPath Value = /v2.0/follow
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getFollowAssets = (        options: {
            authorization?: string,
            sorting?: string,
            showIn?: string,
            tags?: Array<string>,
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
            tags,
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/follow", {
    })

    const query = buildQueryString(path, {
        Sorting: sorting,
        ShowIn: showIn,
        Tags: tags,
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
    }).then(handleErrors).then<ItemsViewModelFollowDetailsListItem>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetFollowSubscriptionsForAsset
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/follow/{id}/subscriptions
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), onlyActive(boolean)]
        Key: baseName Value = Follow
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, ItemsViewModelSignalSubscription]
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
    name: follow
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = ItemsViewModelSignalSubscription
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;total&quot; : 2,
  &quot;items&quot; : [ {
    &quot;unsubscriptionDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;totalVolume&quot; : 5.637376656633329,
    &quot;hasSignalAccount&quot; : true,
    &quot;isExternal&quot; : true,
    &quot;totalProfit&quot; : 5.962133916683182,
    &quot;fixedCurrency&quot; : &quot;BTC&quot;,
    &quot;fixedVolume&quot; : 1.4658129805029452,
    &quot;openTolerancePercent&quot; : 6.027456183070403,
    &quot;percent&quot; : 0.8008281904610115,
    &quot;mode&quot; : &quot;ByBalance&quot;,
    &quot;subscriptionDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;subscriberInfo&quot; : {
      &quot;tradingAccountId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;tradingAccountLogin&quot; : &quot;tradingAccountLogin&quot;
    },
    &quot;detachMode&quot; : &quot;None&quot;,
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
    },
    &quot;hasActiveSubscription&quot; : true,
    &quot;status&quot; : &quot;status&quot;
  }, {
    &quot;unsubscriptionDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;totalVolume&quot; : 5.637376656633329,
    &quot;hasSignalAccount&quot; : true,
    &quot;isExternal&quot; : true,
    &quot;totalProfit&quot; : 5.962133916683182,
    &quot;fixedCurrency&quot; : &quot;BTC&quot;,
    &quot;fixedVolume&quot; : 1.4658129805029452,
    &quot;openTolerancePercent&quot; : 6.027456183070403,
    &quot;percent&quot; : 0.8008281904610115,
    &quot;mode&quot; : &quot;ByBalance&quot;,
    &quot;subscriptionDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;subscriberInfo&quot; : {
      &quot;tradingAccountId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;tradingAccountLogin&quot; : &quot;tradingAccountLogin&quot;
    },
    &quot;detachMode&quot; : &quot;None&quot;,
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
    },
    &quot;hasActiveSubscription&quot; : true,
    &quot;status&quot; : &quot;status&quot;
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@2b9b790e]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = ItemsViewModelSignalSubscription
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [onlyActive(boolean)]
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = POST
        Key: hasConsumes Value = false
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = false
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = true
        Key: requiredParams Value = [id(string), Authorization(string)]
        Key: nickname Value = getFollowSubscriptionsForAsset
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getfollowsubscriptionsforasset
        Key: operationId Value = getFollowSubscriptionsForAsset
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_follow_subscriptions_for_asset
        Key: consumes Value = 
        Key: summary Value = Get subscriptions to current asset
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-has-reference&#x3D;false, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-has-optional-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-update&#x3D;false, x-has-produces&#x3D;true, x-is-restful-create&#x3D;false}
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
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getFollowSubscriptionsForAsset = (
        id: string,
        authorization: string,
        options: {
            onlyActive?: boolean
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getFollowSubscriptionsForAsset.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getFollowSubscriptionsForAsset.');
                }
        const {
            onlyActive
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/follow/{id}/subscriptions", {
        id
    })

    const query = buildQueryString(path, {
        onlyActive: onlyActive
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
    }).then(handleErrors).then<ItemsViewModelSignalSubscription>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetFollowSubscriptionsForOwnAccount
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/follow/account/own/{id}/subscriptions
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), onlyActive(boolean)]
        Key: baseName Value = Follow
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, ItemsViewModelSignalSubscription]
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
    name: follow
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = ItemsViewModelSignalSubscription
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;total&quot; : 2,
  &quot;items&quot; : [ {
    &quot;unsubscriptionDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;totalVolume&quot; : 5.637376656633329,
    &quot;hasSignalAccount&quot; : true,
    &quot;isExternal&quot; : true,
    &quot;totalProfit&quot; : 5.962133916683182,
    &quot;fixedCurrency&quot; : &quot;BTC&quot;,
    &quot;fixedVolume&quot; : 1.4658129805029452,
    &quot;openTolerancePercent&quot; : 6.027456183070403,
    &quot;percent&quot; : 0.8008281904610115,
    &quot;mode&quot; : &quot;ByBalance&quot;,
    &quot;subscriptionDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;subscriberInfo&quot; : {
      &quot;tradingAccountId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;tradingAccountLogin&quot; : &quot;tradingAccountLogin&quot;
    },
    &quot;detachMode&quot; : &quot;None&quot;,
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
    },
    &quot;hasActiveSubscription&quot; : true,
    &quot;status&quot; : &quot;status&quot;
  }, {
    &quot;unsubscriptionDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;totalVolume&quot; : 5.637376656633329,
    &quot;hasSignalAccount&quot; : true,
    &quot;isExternal&quot; : true,
    &quot;totalProfit&quot; : 5.962133916683182,
    &quot;fixedCurrency&quot; : &quot;BTC&quot;,
    &quot;fixedVolume&quot; : 1.4658129805029452,
    &quot;openTolerancePercent&quot; : 6.027456183070403,
    &quot;percent&quot; : 0.8008281904610115,
    &quot;mode&quot; : &quot;ByBalance&quot;,
    &quot;subscriptionDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;subscriberInfo&quot; : {
      &quot;tradingAccountId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;tradingAccountLogin&quot; : &quot;tradingAccountLogin&quot;
    },
    &quot;detachMode&quot; : &quot;None&quot;,
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
    },
    &quot;hasActiveSubscription&quot; : true,
    &quot;status&quot; : &quot;status&quot;
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@79c46637]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = ItemsViewModelSignalSubscription
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [onlyActive(boolean)]
        Key: isResponseFile Value = false
        Key: isContainer Value = false
        Key: httpMethod Value = POST
        Key: hasConsumes Value = false
        Key: hasProduces Value = true
        Key: hasRequiredParams Value = true
        Key: hasReference Value = false
        Key: hasExamples Value = true
        Key: isBoolean Value = false
        Key: isReadOnly Value = false
        Key: hasQueryParams Value = true
        Key: requiredParams Value = [id(string), Authorization(string)]
        Key: nickname Value = getFollowSubscriptionsForOwnAccount
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getfollowsubscriptionsforownaccount
        Key: operationId Value = getFollowSubscriptionsForOwnAccount
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_follow_subscriptions_for_own_account
        Key: consumes Value = 
        Key: summary Value = Get subscriptions for my trading account
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-has-reference&#x3D;false, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-params&#x3D;true, x-is-post-method&#x3D;true, x-has-optional-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-update&#x3D;false, x-has-produces&#x3D;true, x-is-restful-create&#x3D;false}
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
        Key: isBodyAllowed Value = true
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getFollowSubscriptionsForOwnAccount = (
        id: string,
        authorization: string,
        options: {
            onlyActive?: boolean
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getFollowSubscriptionsForOwnAccount.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getFollowSubscriptionsForOwnAccount.');
                }
        const {
            onlyActive
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/follow/account/own/{id}/subscriptions", {
        id
    })

    const query = buildQueryString(path, {
        onlyActive: onlyActive
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
    }).then(handleErrors).then<ItemsViewModelSignalSubscription>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetProfitPercentCharts
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/follow/{id}/charts/profit/percent
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), DateFrom(Date), DateTo(Date), MaxPointCount(number), Currency(string), currencies(Array&lt;any&gt;)]
        Key: baseName Value = Follow
        Key: isListContainer Value = false
        Key: imports Value = [ProgramProfitPercentCharts, ErrorViewModel]
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
    name: follow
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = ProgramProfitPercentCharts
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;statistic&quot; : {
    &quot;profitFactor&quot; : 2.3021358869347655,
    &quot;calmarRatio&quot; : 4.145608029883936,
    &quot;subscribers&quot; : 6,
    &quot;trades&quot; : 5,
    &quot;maxDrawdown&quot; : 7.386281948385884,
    &quot;investors&quot; : 0,
    &quot;tradingVolume&quot; : 1.4658129805029452,
    &quot;sortinoRatio&quot; : 2.027123023002322,
    &quot;balance&quot; : 7.061401241503109,
    &quot;profitPercent&quot; : 9.301444243932576,
    &quot;successTradesPercent&quot; : 5.637376656633329,
    &quot;lastPeriodEnds&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;sharpeRatio&quot; : 3.616076749251911,
    &quot;lastPeriodStarts&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;
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
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@4059cee7]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = ProgramProfitPercentCharts
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [DateFrom(Date), DateTo(Date), MaxPointCount(number), Currency(string), currencies(Array&lt;any&gt;)]
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
        Key: nickname Value = getProfitPercentCharts
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getprofitpercentcharts
        Key: operationId Value = getProfitPercentCharts
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_profit_percent_charts
        Key: consumes Value = 
        Key: summary Value = Follow profit percent charts
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

    getProfitPercentCharts = (
        id: string,
        options: {
            authorization?: string,
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: string,
            currencies?: Array<any>
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getProfitPercentCharts.');
                }
        const {
            authorization,
            dateFrom,
            dateTo,
            maxPointCount,
            currency,
            currencies
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/follow/{id}/charts/profit/percent", {
        id
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
        MaxPointCount: maxPointCount,
        Currency: currency,
        currencies: currencies
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
    }).then(handleErrors).then<ProgramProfitPercentCharts>((response: Response) => {
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
        Key: path Value = /v2.0/follow/{id}/favorite/remove
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string)]
        Key: baseName Value = Follow
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
    name: follow
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@3efd8e5e]
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/follow/{id}/favorite/remove", {
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
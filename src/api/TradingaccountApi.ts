import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { AbsoluteProfitChart } from '../model/AbsoluteProfitChart';
import { AccountBalanceChart } from '../model/AccountBalanceChart';
import { AccountProfitPercentCharts } from '../model/AccountProfitPercentCharts';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { PrivateTradingAccountFull } from '../model/PrivateTradingAccountFull';
import { TradesSignalViewModel } from '../model/TradesSignalViewModel';
import { TradesViewModel } from '../model/TradesViewModel';

export default class TradingaccountApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = ExportTrades
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/tradingaccount/{id}/trades/export
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), DateFrom(Date), DateTo(Date), Symbol(string), Sorting(string), AccountId(string), AccountCurrency(string), IsFollow(boolean), Skip(number), Take(number)]
        Key: baseName Value = Tradingaccount
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
    name: tradingaccount
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@4f873859]
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
        Key: queryParams Value = [DateFrom(Date), DateTo(Date), Symbol(string), Sorting(string), AccountId(string), AccountCurrency(string), IsFollow(boolean), Skip(number), Take(number)]
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
        Key: requiredParams Value = [id(string), Authorization(string)]
        Key: nickname Value = exportTrades
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = exporttrades
        Key: operationId Value = exportTrades
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = true
        Key: operationIdSnakeCase Value = export_trades
        Key: consumes Value = 
        Key: summary Value = Export trade history
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

    exportTrades = (
        id: string,
        authorization: string,
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
                throw new Error('Required parameter id was null or undefined when calling exportTrades.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling exportTrades.');
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/tradingaccount/{id}/trades/export", {
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
        Key: operationIdCamelCase Value = GetAbsoluteProfitChart
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/tradingaccount/{id}/charts/profit/absolute
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), DateFrom(Date), DateTo(Date), MaxPointCount(number), Currency(string)]
        Key: baseName Value = Tradingaccount
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
    name: tradingaccount
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@473453b6]
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
        Key: requiredParams Value = [id(string), Authorization(string)]
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
        Key: summary Value = Trading account absolute profit chart
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
        authorization: string,
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
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getAbsoluteProfitChart.');
                }
        const {
            dateFrom,
            dateTo,
            maxPointCount,
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/tradingaccount/{id}/charts/profit/absolute", {
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
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<AbsoluteProfitChart>((response: Response) => {
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
        Key: path Value = /v2.0/tradingaccount/{id}/charts/balance
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), DateFrom(Date), DateTo(Date), MaxPointCount(number), Currency(string)]
        Key: baseName Value = Tradingaccount
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
    name: tradingaccount
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@2a4ad777]
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
        Key: requiredParams Value = [id(string), Authorization(string)]
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
        Key: summary Value = Trading account balance chart
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
        authorization: string,
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
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getBalanceChart.');
                }
        const {
            dateFrom,
            dateTo,
            maxPointCount,
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/tradingaccount/{id}/charts/balance", {
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
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<AccountBalanceChart>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetOpenTrades
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/tradingaccount/{id}/trades/open
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), Sorting(string), Symbol(string), AccountId(string), AccountCurrency(string), Skip(number), Take(number)]
        Key: baseName Value = Tradingaccount
        Key: isListContainer Value = false
        Key: imports Value = [TradesViewModel, ErrorViewModel]
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
    name: tradingaccount
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = TradesViewModel
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;total&quot; : 3,
  &quot;showSwaps&quot; : true,
  &quot;showTickets&quot; : true,
  &quot;tradesDelay&quot; : &quot;None&quot;,
  &quot;items&quot; : [ {
    &quot;date&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;originalCommissionCurrency&quot; : &quot;originalCommissionCurrency&quot;,
    &quot;symbol&quot; : &quot;symbol&quot;,
    &quot;ticket&quot; : &quot;ticket&quot;,
    &quot;swap&quot; : 9.301444243932576,
    &quot;originalCommission&quot; : 2.3021358869347655,
    &quot;login&quot; : &quot;login&quot;,
    &quot;volume&quot; : 0.8008281904610115,
    &quot;priceCurrent&quot; : 5.962133916683182,
    &quot;entry&quot; : &quot;In&quot;,
    &quot;price&quot; : 1.4658129805029452,
    &quot;showOriginalCommission&quot; : true,
    &quot;profitCurrency&quot; : &quot;profitCurrency&quot;,
    &quot;commission&quot; : 7.061401241503109,
    &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;baseVolume&quot; : 5.637376656633329,
    &quot;signalData&quot; : {
      &quot;masters&quot; : [ {
        &quot;share&quot; : 6.84685269835264,
        &quot;login&quot; : &quot;login&quot;
      }, {
        &quot;share&quot; : 6.84685269835264,
        &quot;login&quot; : &quot;login&quot;
      } ]
    },
    &quot;profit&quot; : 6.027456183070403,
    &quot;direction&quot; : &quot;Buy&quot;
  }, {
    &quot;date&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;originalCommissionCurrency&quot; : &quot;originalCommissionCurrency&quot;,
    &quot;symbol&quot; : &quot;symbol&quot;,
    &quot;ticket&quot; : &quot;ticket&quot;,
    &quot;swap&quot; : 9.301444243932576,
    &quot;originalCommission&quot; : 2.3021358869347655,
    &quot;login&quot; : &quot;login&quot;,
    &quot;volume&quot; : 0.8008281904610115,
    &quot;priceCurrent&quot; : 5.962133916683182,
    &quot;entry&quot; : &quot;In&quot;,
    &quot;price&quot; : 1.4658129805029452,
    &quot;showOriginalCommission&quot; : true,
    &quot;profitCurrency&quot; : &quot;profitCurrency&quot;,
    &quot;commission&quot; : 7.061401241503109,
    &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;baseVolume&quot; : 5.637376656633329,
    &quot;signalData&quot; : {
      &quot;masters&quot; : [ {
        &quot;share&quot; : 6.84685269835264,
        &quot;login&quot; : &quot;login&quot;
      }, {
        &quot;share&quot; : 6.84685269835264,
        &quot;login&quot; : &quot;login&quot;
      } ]
    },
    &quot;profit&quot; : 6.027456183070403,
    &quot;direction&quot; : &quot;Buy&quot;
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@2084a49d]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = TradesViewModel
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
        Key: requiredParams Value = [id(string), Authorization(string)]
        Key: nickname Value = getOpenTrades
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getopentrades
        Key: operationId Value = getOpenTrades
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_open_trades
        Key: consumes Value = 
        Key: summary Value = Trading account open positions
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

    getOpenTrades = (
        id: string,
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
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getOpenTrades.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getOpenTrades.');
                }
        const {
            sorting,
            symbol,
            accountId,
            accountCurrency,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/tradingaccount/{id}/trades/open", {
        id
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
    }).then(handleErrors).then<TradesViewModel>((response: Response) => {
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
        Key: path Value = /v2.0/tradingaccount/{id}/charts/profit/percent
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), DateFrom(Date), DateTo(Date), MaxPointCount(number), Currency(string), currencies(Array&lt;any&gt;)]
        Key: baseName Value = Tradingaccount
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, AccountProfitPercentCharts]
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
    name: tradingaccount
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = AccountProfitPercentCharts
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;statistic&quot; : {
    &quot;profitFactor&quot; : 5.962133916683182,
    &quot;calmarRatio&quot; : 3.616076749251911,
    &quot;balance&quot; : 5.637376656633329,
    &quot;profitPercent&quot; : 2.3021358869347655,
    &quot;successTradesPercent&quot; : 1.4658129805029452,
    &quot;trades&quot; : 6,
    &quot;maxDrawdown&quot; : 2.027123023002322,
    &quot;sharpeRatio&quot; : 7.061401241503109,
    &quot;tradingVolume&quot; : 0.8008281904610115,
    &quot;sortinoRatio&quot; : 9.301444243932576
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@56b70524]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = AccountProfitPercentCharts
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
        Key: requiredParams Value = [id(string), Authorization(string)]
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
        Key: summary Value = Trading account profit percent charts
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
        authorization: string,
        options: {
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
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getProfitPercentCharts.');
                }
        const {
            dateFrom,
            dateTo,
            maxPointCount,
            currency,
            currencies
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/tradingaccount/{id}/charts/profit/percent", {
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
    }).then(handleErrors).then<AccountProfitPercentCharts>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetTrades
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/tradingaccount/{id}/trades
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), DateFrom(Date), DateTo(Date), Symbol(string), Sorting(string), AccountId(string), AccountCurrency(string), IsFollow(boolean), Skip(number), Take(number)]
        Key: baseName Value = Tradingaccount
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
    name: tradingaccount
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@337b55a7]
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
        Key: requiredParams Value = [id(string), Authorization(string)]
        Key: nickname Value = getTrades
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = gettrades
        Key: operationId Value = getTrades
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_trades
        Key: consumes Value = 
        Key: summary Value = Trading account trades
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

    getTrades = (
        id: string,
        authorization: string,
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
                throw new Error('Required parameter id was null or undefined when calling getTrades.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getTrades.');
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/tradingaccount/{id}/trades", {
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
        Key: operationIdCamelCase Value = GetTradingAccountDetails
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/tradingaccount/{id}
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string)]
        Key: baseName Value = Tradingaccount
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, PrivateTradingAccountFull]
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
    name: tradingaccount
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = PrivateTradingAccountFull
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;tradingAccountInfo&quot; : {
    &quot;leverage&quot; : 0,
    &quot;subscriptions&quot; : 1,
    &quot;apiKey&quot; : &quot;apiKey&quot;,
    &quot;balance&quot; : 6.027456183070403,
    &quot;isExternal&quot; : true,
    &quot;currency&quot; : &quot;BTC&quot;,
    &quot;login&quot; : &quot;login&quot;,
    &quot;type&quot; : &quot;None&quot;
  },
  &quot;publicInfo&quot; : {
    &quot;title&quot; : &quot;title&quot;,
    &quot;creationDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;status&quot; : &quot;Pending&quot;
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
    &quot;canMakeDemoDeposit&quot; : true,
    &quot;canMakeProgramFromPrivateTradingAccount&quot; : true,
    &quot;canConfirm2FA&quot; : true,
    &quot;canMakeProgramFromSignalProvider&quot; : true
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
  }
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@4ff6ddd0]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = PrivateTradingAccountFull
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
        Key: nickname Value = getTradingAccountDetails
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = gettradingaccountdetails
        Key: operationId Value = getTradingAccountDetails
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_trading_account_details
        Key: consumes Value = 
        Key: summary Value = Trading account details
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-has-required-params&#x3D;true, x-is-restful-show&#x3D;false, x-is-get-method&#x3D;true, x-has-reference&#x3D;true, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-more&#x3D;false, x-has-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-update&#x3D;false, x-has-produces&#x3D;true, x-is-restful-create&#x3D;false}
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

    getTradingAccountDetails = (
        id: string,
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getTradingAccountDetails.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getTradingAccountDetails.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/tradingaccount/{id}", {
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
    }).then(handleErrors).then<PrivateTradingAccountFull>((response: Response) => {
        return response.json();
    })
    }
}
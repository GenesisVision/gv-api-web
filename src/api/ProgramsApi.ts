import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { AbsoluteProfitChart } from '../model/AbsoluteProfitChart';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { ItemsViewModelProgramDetailsListItem } from '../model/ItemsViewModelProgramDetailsListItem';
import { ProgramBalanceChart } from '../model/ProgramBalanceChart';
import { ProgramFollowDetailsFull } from '../model/ProgramFollowDetailsFull';
import { ProgramPeriodsViewModel } from '../model/ProgramPeriodsViewModel';
import { ProgramProfitPercentCharts } from '../model/ProgramProfitPercentCharts';
import { SignalProviderSubscribers } from '../model/SignalProviderSubscribers';
import { TradesSignalViewModel } from '../model/TradesSignalViewModel';
import { TradesViewModel } from '../model/TradesViewModel';

export default class ProgramsApi {
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
        Key: path Value = /v2.0/programs/{id}/favorite/add
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string)]
        Key: baseName Value = Programs
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
    name: programs
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@3080cb39]
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/favorite/add", {
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
        Key: operationIdCamelCase Value = ExportProgramPeriods
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/programs/{id}/periods/export
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), DateFrom(Date), DateTo(Date), NumberMin(number), NumberMax(number), Status(string), Skip(number), Take(number)]
        Key: baseName Value = Programs
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
    name: programs
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@d7fad97]
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
        Key: queryParams Value = [DateFrom(Date), DateTo(Date), NumberMin(number), NumberMax(number), Status(string), Skip(number), Take(number)]
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
        Key: nickname Value = exportProgramPeriods
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = exportprogramperiods
        Key: operationId Value = exportProgramPeriods
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = true
        Key: operationIdSnakeCase Value = export_program_periods
        Key: consumes Value = 
        Key: summary Value = Export periods
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

    exportProgramPeriods = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            numberMin?: number,
            numberMax?: number,
            status?: string,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling exportProgramPeriods.');
                }
        const {
            dateFrom,
            dateTo,
            numberMin,
            numberMax,
            status,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/periods/export", {
        id
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
        NumberMin: numberMin,
        NumberMax: numberMax,
        Status: status,
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
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = ExportProgramPeriodsFinStatistic
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/programs/{id}/periods/export/statistic
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), DateFrom(Date), DateTo(Date), NumberMin(number), NumberMax(number), Status(string), Skip(number), Take(number)]
        Key: baseName Value = Programs
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
    name: programs
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@70c547f5]
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
        Key: queryParams Value = [DateFrom(Date), DateTo(Date), NumberMin(number), NumberMax(number), Status(string), Skip(number), Take(number)]
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
        Key: nickname Value = exportProgramPeriodsFinStatistic
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = exportprogramperiodsfinstatistic
        Key: operationId Value = exportProgramPeriodsFinStatistic
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = true
        Key: operationIdSnakeCase Value = export_program_periods_fin_statistic
        Key: consumes Value = 
        Key: summary Value = Export period financial statistic
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

    exportProgramPeriodsFinStatistic = (
        id: string,
        authorization: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            numberMin?: number,
            numberMax?: number,
            status?: string,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling exportProgramPeriodsFinStatistic.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling exportProgramPeriodsFinStatistic.');
                }
        const {
            dateFrom,
            dateTo,
            numberMin,
            numberMax,
            status,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/periods/export/statistic", {
        id
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
        NumberMin: numberMin,
        NumberMax: numberMax,
        Status: status,
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
        Key: operationIdCamelCase Value = ExportProgramTrades
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/programs/{id}/trades/export
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), DateFrom(Date), DateTo(Date), Symbol(string), Sorting(string), AccountId(string), AccountCurrency(string), IsFollow(boolean), Skip(number), Take(number)]
        Key: baseName Value = Programs
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
    name: programs
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@134f0200]
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
        Key: requiredParams Value = [id(string)]
        Key: nickname Value = exportProgramTrades
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = exportprogramtrades
        Key: operationId Value = exportProgramTrades
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = true
        Key: operationIdSnakeCase Value = export_program_trades
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

    exportProgramTrades = (
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
                throw new Error('Required parameter id was null or undefined when calling exportProgramTrades.');
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/trades/export", {
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
    }).then(handleErrors).then<string>((response: Response) => {
        return response.text() as unknown as string;
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
        Key: path Value = /v2.0/programs/{id}/trades
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), DateFrom(Date), DateTo(Date), Symbol(string), Sorting(string), AccountId(string), AccountCurrency(string), IsFollow(boolean), Skip(number), Take(number)]
        Key: baseName Value = Programs
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
    name: programs
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@25a0da53]
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/trades", {
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
        Key: operationIdCamelCase Value = GetProgramAbsoluteProfitChart
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/programs/{id}/charts/profit/absolute
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), DateFrom(Date), DateTo(Date), MaxPointCount(number), Currency(string)]
        Key: baseName Value = Programs
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
    name: programs
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@55c3d865]
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
        Key: nickname Value = getProgramAbsoluteProfitChart
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getprogramabsoluteprofitchart
        Key: operationId Value = getProgramAbsoluteProfitChart
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_program_absolute_profit_chart
        Key: consumes Value = 
        Key: summary Value = Program absolute profit chart
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

    getProgramAbsoluteProfitChart = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: string
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getProgramAbsoluteProfitChart.');
                }
        const {
            dateFrom,
            dateTo,
            maxPointCount,
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/charts/profit/absolute", {
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
        Key: operationIdCamelCase Value = GetProgramBalanceChart
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/programs/{id}/charts/balance
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), DateFrom(Date), DateTo(Date), MaxPointCount(number), Currency(string)]
        Key: baseName Value = Programs
        Key: isListContainer Value = false
        Key: imports Value = [ProgramBalanceChart, ErrorViewModel]
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
    name: programs
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = ProgramBalanceChart
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;balance&quot; : 0.8008281904610115,
  &quot;color&quot; : &quot;color&quot;,
  &quot;programCurrency&quot; : &quot;BTC&quot;,
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@fe3c7c7]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = ProgramBalanceChart
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
        Key: nickname Value = getProgramBalanceChart
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getprogrambalancechart
        Key: operationId Value = getProgramBalanceChart
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_program_balance_chart
        Key: consumes Value = 
        Key: summary Value = Program balance chart
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

    getProgramBalanceChart = (
        id: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            maxPointCount?: number,
            currency?: string
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getProgramBalanceChart.');
                }
        const {
            dateFrom,
            dateTo,
            maxPointCount,
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/charts/balance", {
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
    }).then(handleErrors).then<ProgramBalanceChart>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetProgramDetails
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/programs/{id}
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string)]
        Key: baseName Value = Programs
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
    name: programs
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@64d78b39]
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
        Key: nickname Value = getProgramDetails
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getprogramdetails
        Key: operationId Value = getProgramDetails
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_program_details
        Key: consumes Value = 
        Key: summary Value = Program details
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

    getProgramDetails = (
        id: string,
        options: {
            authorization?: string
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getProgramDetails.');
                }
        const {
            authorization
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}", {
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
        Key: operationIdCamelCase Value = GetProgramOpenTrades
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/programs/{id}/trades/open
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Sorting(string), Symbol(string), AccountId(string), AccountCurrency(string), Skip(number), Take(number)]
        Key: baseName Value = Programs
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
    name: programs
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@4786a7b2]
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
        Key: requiredParams Value = [id(string)]
        Key: nickname Value = getProgramOpenTrades
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getprogramopentrades
        Key: operationId Value = getProgramOpenTrades
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_program_open_trades
        Key: consumes Value = 
        Key: summary Value = Open positions
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

    getProgramOpenTrades = (
        id: string,
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
                throw new Error('Required parameter id was null or undefined when calling getProgramOpenTrades.');
                }
        const {
            sorting,
            symbol,
            accountId,
            accountCurrency,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/trades/open", {
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
        }
    }).then(handleErrors).then<TradesViewModel>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetProgramPeriods
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/programs/{id}/periods
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), DateFrom(Date), DateTo(Date), NumberMin(number), NumberMax(number), Status(string), Skip(number), Take(number)]
        Key: baseName Value = Programs
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, ProgramPeriodsViewModel]
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
    name: programs
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = ProgramPeriodsViewModel
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;total&quot; : 7,
  &quot;periods&quot; : [ {
    &quot;investorsWithdraw&quot; : 2.027123023002322,
    &quot;dateFrom&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;investors&quot; : 5,
    &quot;investorsDeposit&quot; : 3.616076749251911,
    &quot;managerWithdraw&quot; : 7.061401241503109,
    &quot;number&quot; : 6,
    &quot;investorsProfitWithdraw&quot; : 4.145608029883936,
    &quot;managerDeposit&quot; : 2.3021358869347655,
    &quot;balance&quot; : 5.962133916683182,
    &quot;dateTo&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;platformSuccessFee&quot; : 7.386281948385884,
    &quot;periodLength&quot; : 0.8008281904610115,
    &quot;managerCommissionRebate&quot; : 9.301444243932576,
    &quot;profit&quot; : 1.4658129805029452,
    &quot;managerStatistic&quot; : {
      &quot;entryFee&quot; : 1.0246457001441578,
      &quot;balance&quot; : 6.84685269835264,
      &quot;successFee&quot; : 1.2315135367772556,
      &quot;profit&quot; : 1.4894159098541704
    },
    &quot;status&quot; : &quot;Planned&quot;
  }, {
    &quot;investorsWithdraw&quot; : 2.027123023002322,
    &quot;dateFrom&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;investors&quot; : 5,
    &quot;investorsDeposit&quot; : 3.616076749251911,
    &quot;managerWithdraw&quot; : 7.061401241503109,
    &quot;number&quot; : 6,
    &quot;investorsProfitWithdraw&quot; : 4.145608029883936,
    &quot;managerDeposit&quot; : 2.3021358869347655,
    &quot;balance&quot; : 5.962133916683182,
    &quot;dateTo&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;platformSuccessFee&quot; : 7.386281948385884,
    &quot;periodLength&quot; : 0.8008281904610115,
    &quot;managerCommissionRebate&quot; : 9.301444243932576,
    &quot;profit&quot; : 1.4658129805029452,
    &quot;managerStatistic&quot; : {
      &quot;entryFee&quot; : 1.0246457001441578,
      &quot;balance&quot; : 6.84685269835264,
      &quot;successFee&quot; : 1.2315135367772556,
      &quot;profit&quot; : 1.4894159098541704
    },
    &quot;status&quot; : &quot;Planned&quot;
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@ccd4fd7]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = ProgramPeriodsViewModel
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [DateFrom(Date), DateTo(Date), NumberMin(number), NumberMax(number), Status(string), Skip(number), Take(number)]
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
        Key: nickname Value = getProgramPeriods
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getprogramperiods
        Key: operationId Value = getProgramPeriods
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_program_periods
        Key: consumes Value = 
        Key: summary Value = Program periods
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

    getProgramPeriods = (
        id: string,
        options: {
            authorization?: string,
            dateFrom?: Date,
            dateTo?: Date,
            numberMin?: number,
            numberMax?: number,
            status?: string,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getProgramPeriods.');
                }
        const {
            authorization,
            dateFrom,
            dateTo,
            numberMin,
            numberMax,
            status,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/periods", {
        id
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
        NumberMin: numberMin,
        NumberMax: numberMax,
        Status: status,
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
    }).then(handleErrors).then<ProgramPeriodsViewModel>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetProgramProfitPercentCharts
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/programs/{id}/charts/profit/percent
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), DateFrom(Date), DateTo(Date), MaxPointCount(number), Currency(string), currencies(Array&lt;any&gt;)]
        Key: baseName Value = Programs
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
    name: programs
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@1d817c76]
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
        Key: nickname Value = getProgramProfitPercentCharts
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getprogramprofitpercentcharts
        Key: operationId Value = getProgramProfitPercentCharts
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_program_profit_percent_charts
        Key: consumes Value = 
        Key: summary Value = Program profit percent charts
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

    getProgramProfitPercentCharts = (
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
                throw new Error('Required parameter id was null or undefined when calling getProgramProfitPercentCharts.');
                }
        const {
            authorization,
            dateFrom,
            dateTo,
            maxPointCount,
            currency,
            currencies
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/charts/profit/percent", {
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
        Key: operationIdCamelCase Value = GetProgramSubscribers
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/programs/{id}/subscribers
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string), Status(string), Skip(number), Take(number)]
        Key: baseName Value = Programs
        Key: isListContainer Value = false
        Key: imports Value = [SignalProviderSubscribers, ErrorViewModel]
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
    name: programs
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = SignalProviderSubscribers
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;total&quot; : 9,
  &quot;subscribers&quot; : [ {
    &quot;unsubscriptionDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;totalCommissionAmount&quot; : 5.637376656633329,
    &quot;trades&quot; : 6,
    &quot;totalCommissionCurrency&quot; : &quot;BTC&quot;,
    &quot;totalVolumeFeeAmount&quot; : 7.061401241503109,
    &quot;totalSuccessFeeAmount&quot; : 2.3021358869347655,
    &quot;volume&quot; : 5.962133916683182,
    &quot;number&quot; : 0,
    &quot;subscriptionDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;profit&quot; : 1.4658129805029452,
    &quot;status&quot; : &quot;Active&quot;
  }, {
    &quot;unsubscriptionDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;totalCommissionAmount&quot; : 5.637376656633329,
    &quot;trades&quot; : 6,
    &quot;totalCommissionCurrency&quot; : &quot;BTC&quot;,
    &quot;totalVolumeFeeAmount&quot; : 7.061401241503109,
    &quot;totalSuccessFeeAmount&quot; : 2.3021358869347655,
    &quot;volume&quot; : 5.962133916683182,
    &quot;number&quot; : 0,
    &quot;subscriptionDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;profit&quot; : 1.4658129805029452,
    &quot;status&quot; : &quot;Active&quot;
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@4557b2bc]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = SignalProviderSubscribers
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [Status(string), Skip(number), Take(number)]
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
        Key: nickname Value = getProgramSubscribers
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getprogramsubscribers
        Key: operationId Value = getProgramSubscribers
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_program_subscribers
        Key: consumes Value = 
        Key: summary Value = Signal subscribers
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

    getProgramSubscribers = (
        id: string,
        authorization: string,
        options: {
            status?: string,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getProgramSubscribers.');
                }
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getProgramSubscribers.');
                }
        const {
            status,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/subscribers", {
        id
    })

    const query = buildQueryString(path, {
        Status: status,
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
    }).then(handleErrors).then<SignalProviderSubscribers>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetPrograms
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/programs
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), Sorting(string), ShowIn(string), Tags(Array&lt;string&gt;), ProgramCurrency(string), LevelMin(number), LevelMax(number), LevelsSet(Array&lt;number&gt;), IncludeWithInvestments(boolean), DateFrom(Date), DateTo(Date), ChartPointsCount(number), FacetId(string), Mask(string), OwnerId(string), ShowFavorites(boolean), Skip(number), Take(number)]
        Key: baseName Value = Programs
        Key: isListContainer Value = false
        Key: imports Value = [ItemsViewModelProgramDetailsListItem, ErrorViewModel]
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
    name: programs
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = ItemsViewModelProgramDetailsListItem
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
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
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@371e3693]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = ItemsViewModelProgramDetailsListItem
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [Sorting(string), ShowIn(string), Tags(Array&lt;string&gt;), ProgramCurrency(string), LevelMin(number), LevelMax(number), LevelsSet(Array&lt;number&gt;), IncludeWithInvestments(boolean), DateFrom(Date), DateTo(Date), ChartPointsCount(number), FacetId(string), Mask(string), OwnerId(string), ShowFavorites(boolean), Skip(number), Take(number)]
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
        Key: nickname Value = getPrograms
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getprograms
        Key: operationId Value = getPrograms
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_programs
        Key: consumes Value = 
        Key: summary Value = Programs list
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
        Key: testPath Value = /v2.0/programs
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getPrograms = (        options: {
            authorization?: string,
            sorting?: string,
            showIn?: string,
            tags?: Array<string>,
            programCurrency?: string,
            levelMin?: number,
            levelMax?: number,
            levelsSet?: Array<number>,
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
            tags,
            programCurrency,
            levelMin,
            levelMax,
            levelsSet,
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs", {
    })

    const query = buildQueryString(path, {
        Sorting: sorting,
        ShowIn: showIn,
        Tags: tags,
        ProgramCurrency: programCurrency,
        LevelMin: levelMin,
        LevelMax: levelMax,
        LevelsSet: levelsSet,
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
    }).then(handleErrors).then<ItemsViewModelProgramDetailsListItem>((response: Response) => {
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
        Key: path Value = /v2.0/programs/{id}/favorite/remove
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = false
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string), Authorization(string)]
        Key: baseName Value = Programs
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
    name: programs
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@514b6450]
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/programs/{id}/favorite/remove", {
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
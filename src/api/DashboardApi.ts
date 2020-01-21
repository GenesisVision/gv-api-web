import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { CommonPublicAssetsViewModel } from '../model/CommonPublicAssetsViewModel';
import { DashboardAssets } from '../model/DashboardAssets';
import { DashboardChart } from '../model/DashboardChart';
import { DashboardChartAssets } from '../model/DashboardChartAssets';
import { DashboardInvestingDetails } from '../model/DashboardInvestingDetails';
import { DashboardPortfolio } from '../model/DashboardPortfolio';
import { DashboardSummary } from '../model/DashboardSummary';
import { DashboardTradingDetails } from '../model/DashboardTradingDetails';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { ItemsViewModelDashboardTradingAsset } from '../model/ItemsViewModelDashboardTradingAsset';
import { ItemsViewModelFundInvestingDetailsList } from '../model/ItemsViewModelFundInvestingDetailsList';
import { ItemsViewModelProgramInvestingDetailsList } from '../model/ItemsViewModelProgramInvestingDetailsList';

export default class DashboardApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetChart
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/dashboard/chart
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), Assets(Array&lt;string&gt;), DateFrom(Date), DateTo(Date), ChartPointsCount(number), ShowIn(string)]
        Key: baseName Value = Dashboard
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, DashboardChart]
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
    name: dashboard
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = DashboardChart
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;charts&quot; : [ {
    &quot;color&quot; : &quot;color&quot;,
    &quot;assetId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;chart&quot; : [ {
      &quot;date&quot; : 0,
      &quot;value&quot; : 6.027456183070403
    }, {
      &quot;date&quot; : 0,
      &quot;value&quot; : 6.027456183070403
    } ]
  }, {
    &quot;color&quot; : &quot;color&quot;,
    &quot;assetId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@706500a5]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = DashboardChart
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [Assets(Array&lt;string&gt;), DateFrom(Date), DateTo(Date), ChartPointsCount(number), ShowIn(string)]
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
        Key: nickname Value = getChart
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getchart
        Key: operationId Value = getChart
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_chart
        Key: consumes Value = 
        Key: summary Value = 
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
        Key: testPath Value = /v2.0/dashboard/chart
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getChart = (
        authorization: string,
        options: {
            assets?: Array<string>,
            dateFrom?: Date,
            dateTo?: Date,
            chartPointsCount?: number,
            showIn?: string
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getChart.');
                }
        const {
            assets,
            dateFrom,
            dateTo,
            chartPointsCount,
            showIn
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/chart", {
    })

    const query = buildQueryString(path, {
        Assets: assets,
        DateFrom: dateFrom,
        DateTo: dateTo,
        ChartPointsCount: chartPointsCount,
        ShowIn: showIn
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
    }).then(handleErrors).then<DashboardChart>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetChartAssets
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/dashboard/chart/assets
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string)]
        Key: baseName Value = Dashboard
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, DashboardChartAssets]
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
    name: dashboard
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = DashboardChartAssets
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;assets&quot; : [ {
    &quot;programDetails&quot; : {
      &quot;level&quot; : 0,
      &quot;levelProgress&quot; : 6.027456183070403
    },
    &quot;color&quot; : &quot;color&quot;,
    &quot;isPrivateAccount&quot; : true,
    &quot;logo&quot; : &quot;logo&quot;,
    &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;title&quot; : &quot;title&quot;,
    &quot;url&quot; : &quot;url&quot;,
    &quot;assetType&quot; : &quot;None&quot;
  }, {
    &quot;programDetails&quot; : {
      &quot;level&quot; : 0,
      &quot;levelProgress&quot; : 6.027456183070403
    },
    &quot;color&quot; : &quot;color&quot;,
    &quot;isPrivateAccount&quot; : true,
    &quot;logo&quot; : &quot;logo&quot;,
    &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;title&quot; : &quot;title&quot;,
    &quot;url&quot; : &quot;url&quot;,
    &quot;assetType&quot; : &quot;None&quot;
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@3893915e]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = DashboardChartAssets
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
        Key: requiredParams Value = [Authorization(string)]
        Key: nickname Value = getChartAssets
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getchartassets
        Key: operationId Value = getChartAssets
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_chart_assets
        Key: consumes Value = 
        Key: summary Value = Active assets for chart
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
        Key: testPath Value = /v2.0/dashboard/chart/assets
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getChartAssets = (
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getChartAssets.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/chart/assets", {
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
    }).then(handleErrors).then<DashboardChartAssets>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetHoldings
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/dashboard/holdings
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), topAssetsCount(number)]
        Key: baseName Value = Dashboard
        Key: isListContainer Value = false
        Key: imports Value = [DashboardAssets, ErrorViewModel]
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
    name: dashboard
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = DashboardAssets
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;assets&quot; : [ {
    &quot;color&quot; : &quot;color&quot;,
    &quot;name&quot; : &quot;name&quot;,
    &quot;percent&quot; : 0.8008281904610115
  }, {
    &quot;color&quot; : &quot;color&quot;,
    &quot;name&quot; : &quot;name&quot;,
    &quot;percent&quot; : 0.8008281904610115
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@77c08019]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = DashboardAssets
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [topAssetsCount(number)]
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
        Key: nickname Value = getHoldings
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getholdings
        Key: operationId Value = getHoldings
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_holdings
        Key: consumes Value = 
        Key: summary Value = 
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
        Key: testPath Value = /v2.0/dashboard/holdings
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getHoldings = (
        authorization: string,
        options: {
            topAssetsCount?: number
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getHoldings.');
                }
        const {
            topAssetsCount
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/holdings", {
    })

    const query = buildQueryString(path, {
        topAssetsCount: topAssetsCount
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
    }).then(handleErrors).then<DashboardAssets>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetInvestingDetails
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/dashboard/investing
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), currency(string), eventsTake(number)]
        Key: baseName Value = Dashboard
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, DashboardInvestingDetails]
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
    name: dashboard
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = DashboardInvestingDetails
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;profits&quot; : {
    &quot;day&quot; : {
      &quot;profitPercent&quot; : 5.637376656633329,
      &quot;profit&quot; : 5.962133916683182
    }
  },
  &quot;programsCount&quot; : 6,
  &quot;fundsCount&quot; : 1,
  &quot;equity&quot; : 0.8008281904610115,
  &quot;events&quot; : {
    &quot;total&quot; : 2,
    &quot;items&quot; : [ {
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
  }
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@7f0dc5de]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = DashboardInvestingDetails
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [currency(string), eventsTake(number)]
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
        Key: nickname Value = getInvestingDetails
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getinvestingdetails
        Key: operationId Value = getInvestingDetails
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_investing_details
        Key: consumes Value = 
        Key: summary Value = 
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
        Key: testPath Value = /v2.0/dashboard/investing
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getInvestingDetails = (
        authorization: string,
        options: {
            currency?: string,
            eventsTake?: number
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getInvestingDetails.');
                }
        const {
            currency,
            eventsTake
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/investing", {
    })

    const query = buildQueryString(path, {
        currency: currency,
        eventsTake: eventsTake
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
    }).then(handleErrors).then<DashboardInvestingDetails>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetInvestingFunds
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/dashboard/investing/funds
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), Sorting(string), ShowIn(string), Status(string), DateFrom(Date), DateTo(Date), ChartPointsCount(number), FacetId(string), Mask(string), OwnerId(string), ShowFavorites(boolean), Skip(number), Take(number)]
        Key: baseName Value = Dashboard
        Key: isListContainer Value = false
        Key: imports Value = [ItemsViewModelFundInvestingDetailsList, ErrorViewModel]
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
    name: dashboard
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = ItemsViewModelFundInvestingDetailsList
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;total&quot; : 3,
  &quot;items&quot; : [ {
    &quot;owner&quot; : {
      &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;url&quot; : &quot;url&quot;,
      &quot;username&quot; : &quot;username&quot;
    },
    &quot;totalAssetsCount&quot; : 6,
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
    &quot;balance&quot; : {
      &quot;amount&quot; : 9.301444243932576,
      &quot;currency&quot; : &quot;BTC&quot;
    },
    &quot;logo&quot; : &quot;logo&quot;,
    &quot;personalDetails&quot; : {
      &quot;canWithdraw&quot; : true,
      &quot;canInvest&quot; : true,
      &quot;isOwnAsset&quot; : true,
      &quot;share&quot; : 2.3021358869347655,
      &quot;value&quot; : 7.061401241503109,
      &quot;isFavorite&quot; : true,
      &quot;status&quot; : &quot;Pending&quot;
    },
    &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;investorsCount&quot; : 0
  }, {
    &quot;owner&quot; : {
      &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;url&quot; : &quot;url&quot;,
      &quot;username&quot; : &quot;username&quot;
    },
    &quot;totalAssetsCount&quot; : 6,
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
    &quot;balance&quot; : {
      &quot;amount&quot; : 9.301444243932576,
      &quot;currency&quot; : &quot;BTC&quot;
    },
    &quot;logo&quot; : &quot;logo&quot;,
    &quot;personalDetails&quot; : {
      &quot;canWithdraw&quot; : true,
      &quot;canInvest&quot; : true,
      &quot;isOwnAsset&quot; : true,
      &quot;share&quot; : 2.3021358869347655,
      &quot;value&quot; : 7.061401241503109,
      &quot;isFavorite&quot; : true,
      &quot;status&quot; : &quot;Pending&quot;
    },
    &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;investorsCount&quot; : 0
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@27b582b2]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = ItemsViewModelFundInvestingDetailsList
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [Sorting(string), ShowIn(string), Status(string), DateFrom(Date), DateTo(Date), ChartPointsCount(number), FacetId(string), Mask(string), OwnerId(string), ShowFavorites(boolean), Skip(number), Take(number)]
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
        Key: nickname Value = getInvestingFunds
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getinvestingfunds
        Key: operationId Value = getInvestingFunds
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_investing_funds
        Key: consumes Value = 
        Key: summary Value = 
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
        Key: testPath Value = /v2.0/dashboard/investing/funds
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getInvestingFunds = (
        authorization: string,
        options: {
            sorting?: string,
            showIn?: string,
            status?: string,
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
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getInvestingFunds.');
                }
        const {
            sorting,
            showIn,
            status,
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/investing/funds", {
    })

    const query = buildQueryString(path, {
        Sorting: sorting,
        ShowIn: showIn,
        Status: status,
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
    }).then(handleErrors).then<ItemsViewModelFundInvestingDetailsList>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetInvestingPrograms
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/dashboard/investing/programs
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), Sorting(string), ShowIn(string), Status(string), DateFrom(Date), DateTo(Date), ChartPointsCount(number), FacetId(string), Mask(string), OwnerId(string), ShowFavorites(boolean), Skip(number), Take(number)]
        Key: baseName Value = Dashboard
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, ItemsViewModelProgramInvestingDetailsList]
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
    name: dashboard
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = ItemsViewModelProgramInvestingDetailsList
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;total&quot; : 4,
  &quot;items&quot; : [ {
    &quot;owner&quot; : {
      &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;url&quot; : &quot;url&quot;,
      &quot;username&quot; : &quot;username&quot;
    },
    &quot;periodDuration&quot; : 5,
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
    &quot;level&quot; : 6,
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
    &quot;availableToInvest&quot; : 0.8008281904610115,
    &quot;personalDetails&quot; : {
      &quot;profitPercent&quot; : 3.616076749251911,
      &quot;canWithdraw&quot; : true,
      &quot;isReinvest&quot; : true,
      &quot;canInvest&quot; : true,
      &quot;isOwnAsset&quot; : true,
      &quot;share&quot; : 2.3021358869347655,
      &quot;value&quot; : 7.061401241503109,
      &quot;profit&quot; : 9.301444243932576,
      &quot;invested&quot; : 2.027123023002322,
      &quot;isFavorite&quot; : true,
      &quot;status&quot; : &quot;Pending&quot;
    },
    &quot;currency&quot; : &quot;BTC&quot;,
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
    &quot;levelProgress&quot; : 1.4658129805029452,
    &quot;investorsCount&quot; : 5
  }, {
    &quot;owner&quot; : {
      &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;url&quot; : &quot;url&quot;,
      &quot;username&quot; : &quot;username&quot;
    },
    &quot;periodDuration&quot; : 5,
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
    &quot;level&quot; : 6,
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
    &quot;availableToInvest&quot; : 0.8008281904610115,
    &quot;personalDetails&quot; : {
      &quot;profitPercent&quot; : 3.616076749251911,
      &quot;canWithdraw&quot; : true,
      &quot;isReinvest&quot; : true,
      &quot;canInvest&quot; : true,
      &quot;isOwnAsset&quot; : true,
      &quot;share&quot; : 2.3021358869347655,
      &quot;value&quot; : 7.061401241503109,
      &quot;profit&quot; : 9.301444243932576,
      &quot;invested&quot; : 2.027123023002322,
      &quot;isFavorite&quot; : true,
      &quot;status&quot; : &quot;Pending&quot;
    },
    &quot;currency&quot; : &quot;BTC&quot;,
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
    &quot;levelProgress&quot; : 1.4658129805029452,
    &quot;investorsCount&quot; : 5
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@308ee7b]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = ItemsViewModelProgramInvestingDetailsList
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [Sorting(string), ShowIn(string), Status(string), DateFrom(Date), DateTo(Date), ChartPointsCount(number), FacetId(string), Mask(string), OwnerId(string), ShowFavorites(boolean), Skip(number), Take(number)]
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
        Key: nickname Value = getInvestingPrograms
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getinvestingprograms
        Key: operationId Value = getInvestingPrograms
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_investing_programs
        Key: consumes Value = 
        Key: summary Value = 
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
        Key: testPath Value = /v2.0/dashboard/investing/programs
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getInvestingPrograms = (
        authorization: string,
        options: {
            sorting?: string,
            showIn?: string,
            status?: string,
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
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getInvestingPrograms.');
                }
        const {
            sorting,
            showIn,
            status,
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

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/investing/programs", {
    })

    const query = buildQueryString(path, {
        Sorting: sorting,
        ShowIn: showIn,
        Status: status,
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
    }).then(handleErrors).then<ItemsViewModelProgramInvestingDetailsList>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetMostProfitableAssets
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/dashboard/trading/mostprofitable
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), DateFrom(Date), DateTo(Date), ChartPointsCount(number), ShowIn(string)]
        Key: baseName Value = Dashboard
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, ItemsViewModelDashboardTradingAsset]
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
    name: dashboard
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = ItemsViewModelDashboardTradingAsset
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;total&quot; : 5,
  &quot;items&quot; : [ {
    &quot;accountInfo&quot; : {
      &quot;leverage&quot; : 1,
      &quot;balance&quot; : 6.027456183070403,
      &quot;currency&quot; : &quot;BTC&quot;,
      &quot;title&quot; : &quot;title&quot;,
      &quot;creationDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
      &quot;login&quot; : &quot;login&quot;,
      &quot;type&quot; : &quot;None&quot;,
      &quot;status&quot; : &quot;Pending&quot;
    },
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
    &quot;signalInfo&quot; : {
      &quot;subscribersCount&quot; : 5
    },
    &quot;assetTypeExt&quot; : &quot;None&quot;,
    &quot;publicInfo&quot; : {
      &quot;programDetails&quot; : {
        &quot;level&quot; : 0,
        &quot;levelProgress&quot; : 6.027456183070403
      },
      &quot;fundDetails&quot; : {
        &quot;totalAssetsCount&quot; : 0,
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
        } ]
      },
      &quot;color&quot; : &quot;color&quot;,
      &quot;logo&quot; : &quot;logo&quot;,
      &quot;title&quot; : &quot;title&quot;,
      &quot;url&quot; : &quot;url&quot;
    },
    &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;broker&quot; : {
      &quot;name&quot; : &quot;name&quot;,
      &quot;logo&quot; : &quot;logo&quot;,
      &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;type&quot; : &quot;Undefined&quot;
    },
    &quot;actions&quot; : {
      &quot;canAddRequestWithdraw&quot; : true,
      &quot;canClose&quot; : true,
      &quot;canEditSignalProviderSettings&quot; : true,
      &quot;canMakeSignalProviderFromPrivateExternalTradingAccount&quot; : true,
      &quot;canTransferMoney&quot; : true,
      &quot;canMakeDemoDeposit&quot; : true,
      &quot;canMakeProgramFromPrivateTradingAccount&quot; : true,
      &quot;canMakeProgramFromSignalProvider&quot; : true,
      &quot;isEnoughMoneyToCreateProgram&quot; : true,
      &quot;canChangePassword&quot; : true,
      &quot;canMakeSignalProviderFromPrivateTradingAccount&quot; : true,
      &quot;canMakeSignalProviderFromProgram&quot; : true,
      &quot;hasTerminal&quot; : true,
      &quot;canConfirm2FA&quot; : true,
      &quot;canAddRequestInvest&quot; : true
    },
    &quot;assetType&quot; : &quot;None&quot;,
    &quot;tags&quot; : [ {
      &quot;color&quot; : &quot;color&quot;,
      &quot;name&quot; : &quot;name&quot;
    }, {
      &quot;color&quot; : &quot;color&quot;,
      &quot;name&quot; : &quot;name&quot;
    } ]
  }, {
    &quot;accountInfo&quot; : {
      &quot;leverage&quot; : 1,
      &quot;balance&quot; : 6.027456183070403,
      &quot;currency&quot; : &quot;BTC&quot;,
      &quot;title&quot; : &quot;title&quot;,
      &quot;creationDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
      &quot;login&quot; : &quot;login&quot;,
      &quot;type&quot; : &quot;None&quot;,
      &quot;status&quot; : &quot;Pending&quot;
    },
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
    &quot;signalInfo&quot; : {
      &quot;subscribersCount&quot; : 5
    },
    &quot;assetTypeExt&quot; : &quot;None&quot;,
    &quot;publicInfo&quot; : {
      &quot;programDetails&quot; : {
        &quot;level&quot; : 0,
        &quot;levelProgress&quot; : 6.027456183070403
      },
      &quot;fundDetails&quot; : {
        &quot;totalAssetsCount&quot; : 0,
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
        } ]
      },
      &quot;color&quot; : &quot;color&quot;,
      &quot;logo&quot; : &quot;logo&quot;,
      &quot;title&quot; : &quot;title&quot;,
      &quot;url&quot; : &quot;url&quot;
    },
    &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;broker&quot; : {
      &quot;name&quot; : &quot;name&quot;,
      &quot;logo&quot; : &quot;logo&quot;,
      &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;type&quot; : &quot;Undefined&quot;
    },
    &quot;actions&quot; : {
      &quot;canAddRequestWithdraw&quot; : true,
      &quot;canClose&quot; : true,
      &quot;canEditSignalProviderSettings&quot; : true,
      &quot;canMakeSignalProviderFromPrivateExternalTradingAccount&quot; : true,
      &quot;canTransferMoney&quot; : true,
      &quot;canMakeDemoDeposit&quot; : true,
      &quot;canMakeProgramFromPrivateTradingAccount&quot; : true,
      &quot;canMakeProgramFromSignalProvider&quot; : true,
      &quot;isEnoughMoneyToCreateProgram&quot; : true,
      &quot;canChangePassword&quot; : true,
      &quot;canMakeSignalProviderFromPrivateTradingAccount&quot; : true,
      &quot;canMakeSignalProviderFromProgram&quot; : true,
      &quot;hasTerminal&quot; : true,
      &quot;canConfirm2FA&quot; : true,
      &quot;canAddRequestInvest&quot; : true
    },
    &quot;assetType&quot; : &quot;None&quot;,
    &quot;tags&quot; : [ {
      &quot;color&quot; : &quot;color&quot;,
      &quot;name&quot; : &quot;name&quot;
    }, {
      &quot;color&quot; : &quot;color&quot;,
      &quot;name&quot; : &quot;name&quot;
    } ]
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@703b664b]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = ItemsViewModelDashboardTradingAsset
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [DateFrom(Date), DateTo(Date), ChartPointsCount(number), ShowIn(string)]
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
        Key: nickname Value = getMostProfitableAssets
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getmostprofitableassets
        Key: operationId Value = getMostProfitableAssets
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_most_profitable_assets
        Key: consumes Value = 
        Key: summary Value = 
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
        Key: testPath Value = /v2.0/dashboard/trading/mostprofitable
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getMostProfitableAssets = (
        authorization: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            chartPointsCount?: number,
            showIn?: string
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getMostProfitableAssets.');
                }
        const {
            dateFrom,
            dateTo,
            chartPointsCount,
            showIn
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/trading/mostprofitable", {
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
        ChartPointsCount: chartPointsCount,
        ShowIn: showIn
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
    }).then(handleErrors).then<ItemsViewModelDashboardTradingAsset>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetPortfolio
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/dashboard/portfolio
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string)]
        Key: baseName Value = Dashboard
        Key: isListContainer Value = false
        Key: imports Value = [DashboardPortfolio, ErrorViewModel]
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
    name: dashboard
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = DashboardPortfolio
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;distribution&quot; : [ {
    &quot;color&quot; : &quot;color&quot;,
    &quot;name&quot; : &quot;Programs&quot;,
    &quot;percent&quot; : 0.8008281904610115
  }, {
    &quot;color&quot; : &quot;color&quot;,
    &quot;name&quot; : &quot;Programs&quot;,
    &quot;percent&quot; : 0.8008281904610115
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@61096ea7]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = DashboardPortfolio
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
        Key: requiredParams Value = [Authorization(string)]
        Key: nickname Value = getPortfolio
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getportfolio
        Key: operationId Value = getPortfolio
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_portfolio
        Key: consumes Value = 
        Key: summary Value = Money distribution in percents. Empty list if no money at all
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
        Key: testPath Value = /v2.0/dashboard/portfolio
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getPortfolio = (
        authorization: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getPortfolio.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/portfolio", {
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
    }).then(handleErrors).then<DashboardPortfolio>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetPrivateTradingAssets
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/dashboard/trading/private
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), DateFrom(Date), DateTo(Date), ChartPointsCount(number), ShowIn(string), Status(string), Skip(number), Take(number)]
        Key: baseName Value = Dashboard
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, ItemsViewModelDashboardTradingAsset]
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
    name: dashboard
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = ItemsViewModelDashboardTradingAsset
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;total&quot; : 5,
  &quot;items&quot; : [ {
    &quot;accountInfo&quot; : {
      &quot;leverage&quot; : 1,
      &quot;balance&quot; : 6.027456183070403,
      &quot;currency&quot; : &quot;BTC&quot;,
      &quot;title&quot; : &quot;title&quot;,
      &quot;creationDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
      &quot;login&quot; : &quot;login&quot;,
      &quot;type&quot; : &quot;None&quot;,
      &quot;status&quot; : &quot;Pending&quot;
    },
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
    &quot;signalInfo&quot; : {
      &quot;subscribersCount&quot; : 5
    },
    &quot;assetTypeExt&quot; : &quot;None&quot;,
    &quot;publicInfo&quot; : {
      &quot;programDetails&quot; : {
        &quot;level&quot; : 0,
        &quot;levelProgress&quot; : 6.027456183070403
      },
      &quot;fundDetails&quot; : {
        &quot;totalAssetsCount&quot; : 0,
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
        } ]
      },
      &quot;color&quot; : &quot;color&quot;,
      &quot;logo&quot; : &quot;logo&quot;,
      &quot;title&quot; : &quot;title&quot;,
      &quot;url&quot; : &quot;url&quot;
    },
    &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;broker&quot; : {
      &quot;name&quot; : &quot;name&quot;,
      &quot;logo&quot; : &quot;logo&quot;,
      &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;type&quot; : &quot;Undefined&quot;
    },
    &quot;actions&quot; : {
      &quot;canAddRequestWithdraw&quot; : true,
      &quot;canClose&quot; : true,
      &quot;canEditSignalProviderSettings&quot; : true,
      &quot;canMakeSignalProviderFromPrivateExternalTradingAccount&quot; : true,
      &quot;canTransferMoney&quot; : true,
      &quot;canMakeDemoDeposit&quot; : true,
      &quot;canMakeProgramFromPrivateTradingAccount&quot; : true,
      &quot;canMakeProgramFromSignalProvider&quot; : true,
      &quot;isEnoughMoneyToCreateProgram&quot; : true,
      &quot;canChangePassword&quot; : true,
      &quot;canMakeSignalProviderFromPrivateTradingAccount&quot; : true,
      &quot;canMakeSignalProviderFromProgram&quot; : true,
      &quot;hasTerminal&quot; : true,
      &quot;canConfirm2FA&quot; : true,
      &quot;canAddRequestInvest&quot; : true
    },
    &quot;assetType&quot; : &quot;None&quot;,
    &quot;tags&quot; : [ {
      &quot;color&quot; : &quot;color&quot;,
      &quot;name&quot; : &quot;name&quot;
    }, {
      &quot;color&quot; : &quot;color&quot;,
      &quot;name&quot; : &quot;name&quot;
    } ]
  }, {
    &quot;accountInfo&quot; : {
      &quot;leverage&quot; : 1,
      &quot;balance&quot; : 6.027456183070403,
      &quot;currency&quot; : &quot;BTC&quot;,
      &quot;title&quot; : &quot;title&quot;,
      &quot;creationDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
      &quot;login&quot; : &quot;login&quot;,
      &quot;type&quot; : &quot;None&quot;,
      &quot;status&quot; : &quot;Pending&quot;
    },
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
    &quot;signalInfo&quot; : {
      &quot;subscribersCount&quot; : 5
    },
    &quot;assetTypeExt&quot; : &quot;None&quot;,
    &quot;publicInfo&quot; : {
      &quot;programDetails&quot; : {
        &quot;level&quot; : 0,
        &quot;levelProgress&quot; : 6.027456183070403
      },
      &quot;fundDetails&quot; : {
        &quot;totalAssetsCount&quot; : 0,
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
        } ]
      },
      &quot;color&quot; : &quot;color&quot;,
      &quot;logo&quot; : &quot;logo&quot;,
      &quot;title&quot; : &quot;title&quot;,
      &quot;url&quot; : &quot;url&quot;
    },
    &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;broker&quot; : {
      &quot;name&quot; : &quot;name&quot;,
      &quot;logo&quot; : &quot;logo&quot;,
      &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;type&quot; : &quot;Undefined&quot;
    },
    &quot;actions&quot; : {
      &quot;canAddRequestWithdraw&quot; : true,
      &quot;canClose&quot; : true,
      &quot;canEditSignalProviderSettings&quot; : true,
      &quot;canMakeSignalProviderFromPrivateExternalTradingAccount&quot; : true,
      &quot;canTransferMoney&quot; : true,
      &quot;canMakeDemoDeposit&quot; : true,
      &quot;canMakeProgramFromPrivateTradingAccount&quot; : true,
      &quot;canMakeProgramFromSignalProvider&quot; : true,
      &quot;isEnoughMoneyToCreateProgram&quot; : true,
      &quot;canChangePassword&quot; : true,
      &quot;canMakeSignalProviderFromPrivateTradingAccount&quot; : true,
      &quot;canMakeSignalProviderFromProgram&quot; : true,
      &quot;hasTerminal&quot; : true,
      &quot;canConfirm2FA&quot; : true,
      &quot;canAddRequestInvest&quot; : true
    },
    &quot;assetType&quot; : &quot;None&quot;,
    &quot;tags&quot; : [ {
      &quot;color&quot; : &quot;color&quot;,
      &quot;name&quot; : &quot;name&quot;
    }, {
      &quot;color&quot; : &quot;color&quot;,
      &quot;name&quot; : &quot;name&quot;
    } ]
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@6aa2c026]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = ItemsViewModelDashboardTradingAsset
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [DateFrom(Date), DateTo(Date), ChartPointsCount(number), ShowIn(string), Status(string), Skip(number), Take(number)]
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
        Key: nickname Value = getPrivateTradingAssets
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getprivatetradingassets
        Key: operationId Value = getPrivateTradingAssets
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_private_trading_assets
        Key: consumes Value = 
        Key: summary Value = 
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
        Key: testPath Value = /v2.0/dashboard/trading/private
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getPrivateTradingAssets = (
        authorization: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            chartPointsCount?: number,
            showIn?: string,
            status?: string,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getPrivateTradingAssets.');
                }
        const {
            dateFrom,
            dateTo,
            chartPointsCount,
            showIn,
            status,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/trading/private", {
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
        ChartPointsCount: chartPointsCount,
        ShowIn: showIn,
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
    }).then(handleErrors).then<ItemsViewModelDashboardTradingAsset>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetPublicTradingAssets
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/dashboard/trading/public
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), DateFrom(Date), DateTo(Date), ChartPointsCount(number), ShowIn(string), Status(string), Skip(number), Take(number)]
        Key: baseName Value = Dashboard
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, ItemsViewModelDashboardTradingAsset]
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
    name: dashboard
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = ItemsViewModelDashboardTradingAsset
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;total&quot; : 5,
  &quot;items&quot; : [ {
    &quot;accountInfo&quot; : {
      &quot;leverage&quot; : 1,
      &quot;balance&quot; : 6.027456183070403,
      &quot;currency&quot; : &quot;BTC&quot;,
      &quot;title&quot; : &quot;title&quot;,
      &quot;creationDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
      &quot;login&quot; : &quot;login&quot;,
      &quot;type&quot; : &quot;None&quot;,
      &quot;status&quot; : &quot;Pending&quot;
    },
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
    &quot;signalInfo&quot; : {
      &quot;subscribersCount&quot; : 5
    },
    &quot;assetTypeExt&quot; : &quot;None&quot;,
    &quot;publicInfo&quot; : {
      &quot;programDetails&quot; : {
        &quot;level&quot; : 0,
        &quot;levelProgress&quot; : 6.027456183070403
      },
      &quot;fundDetails&quot; : {
        &quot;totalAssetsCount&quot; : 0,
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
        } ]
      },
      &quot;color&quot; : &quot;color&quot;,
      &quot;logo&quot; : &quot;logo&quot;,
      &quot;title&quot; : &quot;title&quot;,
      &quot;url&quot; : &quot;url&quot;
    },
    &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;broker&quot; : {
      &quot;name&quot; : &quot;name&quot;,
      &quot;logo&quot; : &quot;logo&quot;,
      &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;type&quot; : &quot;Undefined&quot;
    },
    &quot;actions&quot; : {
      &quot;canAddRequestWithdraw&quot; : true,
      &quot;canClose&quot; : true,
      &quot;canEditSignalProviderSettings&quot; : true,
      &quot;canMakeSignalProviderFromPrivateExternalTradingAccount&quot; : true,
      &quot;canTransferMoney&quot; : true,
      &quot;canMakeDemoDeposit&quot; : true,
      &quot;canMakeProgramFromPrivateTradingAccount&quot; : true,
      &quot;canMakeProgramFromSignalProvider&quot; : true,
      &quot;isEnoughMoneyToCreateProgram&quot; : true,
      &quot;canChangePassword&quot; : true,
      &quot;canMakeSignalProviderFromPrivateTradingAccount&quot; : true,
      &quot;canMakeSignalProviderFromProgram&quot; : true,
      &quot;hasTerminal&quot; : true,
      &quot;canConfirm2FA&quot; : true,
      &quot;canAddRequestInvest&quot; : true
    },
    &quot;assetType&quot; : &quot;None&quot;,
    &quot;tags&quot; : [ {
      &quot;color&quot; : &quot;color&quot;,
      &quot;name&quot; : &quot;name&quot;
    }, {
      &quot;color&quot; : &quot;color&quot;,
      &quot;name&quot; : &quot;name&quot;
    } ]
  }, {
    &quot;accountInfo&quot; : {
      &quot;leverage&quot; : 1,
      &quot;balance&quot; : 6.027456183070403,
      &quot;currency&quot; : &quot;BTC&quot;,
      &quot;title&quot; : &quot;title&quot;,
      &quot;creationDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
      &quot;login&quot; : &quot;login&quot;,
      &quot;type&quot; : &quot;None&quot;,
      &quot;status&quot; : &quot;Pending&quot;
    },
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
    &quot;signalInfo&quot; : {
      &quot;subscribersCount&quot; : 5
    },
    &quot;assetTypeExt&quot; : &quot;None&quot;,
    &quot;publicInfo&quot; : {
      &quot;programDetails&quot; : {
        &quot;level&quot; : 0,
        &quot;levelProgress&quot; : 6.027456183070403
      },
      &quot;fundDetails&quot; : {
        &quot;totalAssetsCount&quot; : 0,
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
        } ]
      },
      &quot;color&quot; : &quot;color&quot;,
      &quot;logo&quot; : &quot;logo&quot;,
      &quot;title&quot; : &quot;title&quot;,
      &quot;url&quot; : &quot;url&quot;
    },
    &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;broker&quot; : {
      &quot;name&quot; : &quot;name&quot;,
      &quot;logo&quot; : &quot;logo&quot;,
      &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;type&quot; : &quot;Undefined&quot;
    },
    &quot;actions&quot; : {
      &quot;canAddRequestWithdraw&quot; : true,
      &quot;canClose&quot; : true,
      &quot;canEditSignalProviderSettings&quot; : true,
      &quot;canMakeSignalProviderFromPrivateExternalTradingAccount&quot; : true,
      &quot;canTransferMoney&quot; : true,
      &quot;canMakeDemoDeposit&quot; : true,
      &quot;canMakeProgramFromPrivateTradingAccount&quot; : true,
      &quot;canMakeProgramFromSignalProvider&quot; : true,
      &quot;isEnoughMoneyToCreateProgram&quot; : true,
      &quot;canChangePassword&quot; : true,
      &quot;canMakeSignalProviderFromPrivateTradingAccount&quot; : true,
      &quot;canMakeSignalProviderFromProgram&quot; : true,
      &quot;hasTerminal&quot; : true,
      &quot;canConfirm2FA&quot; : true,
      &quot;canAddRequestInvest&quot; : true
    },
    &quot;assetType&quot; : &quot;None&quot;,
    &quot;tags&quot; : [ {
      &quot;color&quot; : &quot;color&quot;,
      &quot;name&quot; : &quot;name&quot;
    }, {
      &quot;color&quot; : &quot;color&quot;,
      &quot;name&quot; : &quot;name&quot;
    } ]
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@2e9d903f]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = ItemsViewModelDashboardTradingAsset
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [DateFrom(Date), DateTo(Date), ChartPointsCount(number), ShowIn(string), Status(string), Skip(number), Take(number)]
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
        Key: nickname Value = getPublicTradingAssets
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getpublictradingassets
        Key: operationId Value = getPublicTradingAssets
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_public_trading_assets
        Key: consumes Value = 
        Key: summary Value = 
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
        Key: testPath Value = /v2.0/dashboard/trading/public
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getPublicTradingAssets = (
        authorization: string,
        options: {
            dateFrom?: Date,
            dateTo?: Date,
            chartPointsCount?: number,
            showIn?: string,
            status?: string,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getPublicTradingAssets.');
                }
        const {
            dateFrom,
            dateTo,
            chartPointsCount,
            showIn,
            status,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/trading/public", {
    })

    const query = buildQueryString(path, {
        DateFrom: dateFrom,
        DateTo: dateTo,
        ChartPointsCount: chartPointsCount,
        ShowIn: showIn,
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
    }).then(handleErrors).then<ItemsViewModelDashboardTradingAsset>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetRecommendations
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/dashboard/recommendations
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), currency(string), take(number), onlyFollows(boolean)]
        Key: baseName Value = Dashboard
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, CommonPublicAssetsViewModel]
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
    name: dashboard
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = CommonPublicAssetsViewModel
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
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
  &quot;managers&quot; : {
    &quot;total&quot; : 7,
    &quot;items&quot; : [ {
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
      &quot;assets&quot; : [ &quot;assets&quot;, &quot;assets&quot; ],
      &quot;about&quot; : &quot;about&quot;,
      &quot;regDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
      &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;avatar&quot; : &quot;avatar&quot;,
      &quot;url&quot; : &quot;url&quot;,
      &quot;username&quot; : &quot;username&quot;
    }, {
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
      &quot;assets&quot; : [ &quot;assets&quot;, &quot;assets&quot; ],
      &quot;about&quot; : &quot;about&quot;,
      &quot;regDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
      &quot;id&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
      &quot;avatar&quot; : &quot;avatar&quot;,
      &quot;url&quot; : &quot;url&quot;,
      &quot;username&quot; : &quot;username&quot;
    } ]
  }
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@5bfb299]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = CommonPublicAssetsViewModel
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [currency(string), take(number), onlyFollows(boolean)]
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
        Key: nickname Value = getRecommendations
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getrecommendations
        Key: operationId Value = getRecommendations
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_recommendations
        Key: consumes Value = 
        Key: summary Value = Recommended assets to invest (programs, funds and follows). Funds in passed currency
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
        Key: testPath Value = /v2.0/dashboard/recommendations
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getRecommendations = (
        authorization: string,
        options: {
            currency?: string,
            take?: number,
            onlyFollows?: boolean
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getRecommendations.');
                }
        const {
            currency,
            take,
            onlyFollows
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/recommendations", {
    })

    const query = buildQueryString(path, {
        currency: currency,
        take: take,
        onlyFollows: onlyFollows
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
    }).then(handleErrors).then<CommonPublicAssetsViewModel>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetSummary
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/dashboard/summary
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), currency(string)]
        Key: baseName Value = Dashboard
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, DashboardSummary]
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
    name: dashboard
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = DashboardSummary
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;trading&quot; : 6.027456183070403,
  &quot;profits&quot; : {
    &quot;day&quot; : {
      &quot;profitPercent&quot; : 5.637376656633329,
      &quot;profit&quot; : 5.962133916683182
    }
  },
  &quot;total&quot; : 5.962133916683182,
  &quot;wallets&quot; : 1.4658129805029452,
  &quot;invested&quot; : 0.8008281904610115
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@2f6988df]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = DashboardSummary
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
        Key: nickname Value = getSummary
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getsummary
        Key: operationId Value = getSummary
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_summary
        Key: consumes Value = 
        Key: summary Value = 
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
        Key: testPath Value = /v2.0/dashboard/summary
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getSummary = (
        authorization: string,
        options: {
            currency?: string
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getSummary.');
                }
        const {
            currency
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/summary", {
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
    }).then(handleErrors).then<DashboardSummary>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetTradingDetails
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/dashboard/trading
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), currency(string), eventsTake(number)]
        Key: baseName Value = Dashboard
        Key: isListContainer Value = false
        Key: imports Value = [DashboardTradingDetails, ErrorViewModel]
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
    name: dashboard
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = DashboardTradingDetails
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;profits&quot; : {
    &quot;day&quot; : {
      &quot;profitPercent&quot; : 5.637376656633329,
      &quot;profit&quot; : 5.962133916683182
    }
  },
  &quot;total&quot; : 1.4658129805029452,
  &quot;aum&quot; : 6.027456183070403,
  &quot;equity&quot; : 0.8008281904610115,
  &quot;events&quot; : {
    &quot;total&quot; : 2,
    &quot;items&quot; : [ {
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
  }
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@5336dee4]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = DashboardTradingDetails
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [currency(string), eventsTake(number)]
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
        Key: nickname Value = getTradingDetails
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = gettradingdetails
        Key: operationId Value = getTradingDetails
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_trading_details
        Key: consumes Value = 
        Key: summary Value = 
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
        Key: testPath Value = /v2.0/dashboard/trading
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getTradingDetails = (
        authorization: string,
        options: {
            currency?: string,
            eventsTake?: number
        } = {},
        init: RequestInit = {}) => {
                if (authorization === null || authorization === undefined) {
                throw new Error('Required parameter authorization was null or undefined when calling getTradingDetails.');
                }
        const {
            currency,
            eventsTake
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/dashboard/trading", {
    })

    const query = buildQueryString(path, {
        currency: currency,
        eventsTake: eventsTake
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
    }).then(handleErrors).then<DashboardTradingDetails>((response: Response) => {
        return response.json();
    })
    }
}
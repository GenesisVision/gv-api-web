import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { CommonPublicAssetsViewModel } from '../model/CommonPublicAssetsViewModel';
import { ErrorViewModel } from '../model/ErrorViewModel';

export default class SearchApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = Search
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/search
        Key: headerParams Value = [Authorization(string)]
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = true
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [Authorization(string), mask(string), take(number)]
        Key: baseName Value = Search
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
    name: search
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
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@49bddf44]
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
        Key: queryParams Value = [mask(string), take(number)]
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
        Key: nickname Value = search
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = search
        Key: operationId Value = search
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = search
        Key: consumes Value = 
        Key: summary Value = Program / fund / manager search
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-has-required-params&#x3D;false, x-is-restful-show&#x3D;false, x-is-get-method&#x3D;true, x-has-reference&#x3D;true, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-more&#x3D;false, x-has-params&#x3D;true, x-has-optional-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-update&#x3D;false, x-has-produces&#x3D;true, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = true
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/search
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    search = (        options: {
            authorization?: string,
            mask?: string,
            take?: number
        } = {},
        init: RequestInit = {}) => {
        const {
            authorization,
            mask,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/search", {
    })

    const query = buildQueryString(path, {
        mask: mask,
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
            Authorization: authorization || ""
        }
    }).then(handleErrors).then<CommonPublicAssetsViewModel>((response: Response) => {
        return response.json();
    })
    }
}
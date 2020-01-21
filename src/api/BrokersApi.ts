import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { BrokersInfo } from '../model/BrokersInfo';
import { BrokersProgramInfo } from '../model/BrokersProgramInfo';
import { ErrorViewModel } from '../model/ErrorViewModel';

export default class BrokersApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetBrokers
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/brokers
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = []
        Key: baseName Value = Brokers
        Key: isListContainer Value = false
        Key: imports Value = [BrokersInfo, ErrorViewModel]
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
    name: brokers
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = BrokersInfo
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;brokers&quot; : [ {
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
  }, {
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
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@a8f482f]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = BrokersInfo
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
        Key: nickname Value = getBrokers
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getbrokers
        Key: operationId Value = getBrokers
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = false
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_brokers
        Key: consumes Value = 
        Key: summary Value = Get brokers for creating trading accounts
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
        Key: testPath Value = /v2.0/brokers
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getBrokers = (        options: {
        } = {},
        init: RequestInit = {}) => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/brokers", {
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
    }).then(handleErrors).then<BrokersInfo>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetBrokersDemo
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/brokers/demo
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = []
        Key: baseName Value = Brokers
        Key: isListContainer Value = false
        Key: imports Value = [BrokersInfo, ErrorViewModel]
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
    name: brokers
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = BrokersInfo
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;brokers&quot; : [ {
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
  }, {
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
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@35202d42]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = BrokersInfo
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
        Key: nickname Value = getBrokersDemo
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getbrokersdemo
        Key: operationId Value = getBrokersDemo
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = false
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_brokers_demo
        Key: consumes Value = 
        Key: summary Value = Get brokers for creating demo trading accounts
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
        Key: testPath Value = /v2.0/brokers/demo
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getBrokersDemo = (        options: {
        } = {},
        init: RequestInit = {}) => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/brokers/demo", {
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
    }).then(handleErrors).then<BrokersInfo>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetBrokersExternal
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/brokers/external
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = []
        Key: baseName Value = Brokers
        Key: isListContainer Value = false
        Key: imports Value = [BrokersInfo, ErrorViewModel]
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
    name: brokers
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = BrokersInfo
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;brokers&quot; : [ {
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
  }, {
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
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@229f5ac0]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = BrokersInfo
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
        Key: nickname Value = getBrokersExternal
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getbrokersexternal
        Key: operationId Value = getBrokersExternal
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = false
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_brokers_external
        Key: consumes Value = 
        Key: summary Value = Get brokers for creating external trading accounts
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
        Key: testPath Value = /v2.0/brokers/external
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getBrokersExternal = (        options: {
        } = {},
        init: RequestInit = {}) => {

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/brokers/external", {
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
    }).then(handleErrors).then<BrokersInfo>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetBrokersForProgram
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/brokers/{programId}
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [programId(string)]
        Key: baseName Value = Brokers
        Key: isListContainer Value = false
        Key: imports Value = [BrokersProgramInfo, ErrorViewModel]
        Key: pathParams Value = [programId(string)]
        Key: isCollectionFormatMulti Value = false
        Key: formParams Value = []
        Key: hasCookieParams Value = false
        Key: hasAuthMethods Value = false
        Key: isBinary Value = false
        Key: isUuid Value = false
        Key: isRestfulUpdate Value = false
        Key: returnContainer Value = 
        Key: tags Value = [class Tag {
    name: brokers
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = BrokersProgramInfo
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;brokers&quot; : [ {
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
  }, {
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
  } ],
  &quot;currentAccountTypeId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@6c348146]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = BrokersProgramInfo
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
        Key: requiredParams Value = [programId(string)]
        Key: nickname Value = getBrokersForProgram
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getbrokersforprogram
        Key: operationId Value = getBrokersForProgram
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_brokers_for_program
        Key: consumes Value = 
        Key: summary Value = Get brokers for program
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

    getBrokersForProgram = (
        programId: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (programId === null || programId === undefined) {
                throw new Error('Required parameter programId was null or undefined when calling getBrokersForProgram.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/brokers/{programId}", {
        programId
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
    }).then(handleErrors).then<BrokersProgramInfo>((response: Response) => {
        return response.json();
    })
    }
}
import ApiClient from "../ApiClient";
import { buildPathString, buildQueryString, handleErrors } from "../utils";
import { ErrorViewModel } from '../model/ErrorViewModel';
import { ItemsViewModelUserDetailsList } from '../model/ItemsViewModelUserDetailsList';
import { PublicProfile } from '../model/PublicProfile';

export default class UsersApi {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetManagerProfile
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = true
        Key: path Value = /v2.0/users/{id}
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [id(string)]
        Key: baseName Value = Users
        Key: isListContainer Value = false
        Key: imports Value = [ErrorViewModel, PublicProfile]
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
    name: users
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = PublicProfile
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
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
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@4d9c25ea]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = PublicProfile
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
        Key: nickname Value = getManagerProfile
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getmanagerprofile
        Key: operationId Value = getManagerProfile
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_manager_profile
        Key: consumes Value = 
        Key: summary Value = Public profile
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

    getManagerProfile = (
        id: string,
        options: {
        } = {},
        init: RequestInit = {}) => {
                if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getManagerProfile.');
                }

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/users/{id}", {
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
        }
    }).then(handleErrors).then<PublicProfile>((response: Response) => {
        return response.json();
    })
    }

        Key: notes Value = 
        Key: cookieParams Value = []
        Key: hasBodyParam Value = false
        Key: hasHeaders Value = false
        Key: operationIdCamelCase Value = GetUsersList
        Key: hasMore Value = false
        Key: authMethods Value = 
        Key: hasPathParams Value = false
        Key: path Value = /v2.0/users/list
        Key: headerParams Value = []
        Key: isInteger Value = false
        Key: prioritizedContentTypes Value = 
        Key: isNumber Value = false
        Key: hasHeaderParams Value = false
        Key: returnSimpleType Value = true
        Key: isRestfulIndex Value = false
        Key: allParams Value = [FacetId(string), Sorting(string), Tags(Array&lt;string&gt;), Skip(number), Take(number)]
        Key: baseName Value = Users
        Key: isListContainer Value = false
        Key: imports Value = [ItemsViewModelUserDetailsList, ErrorViewModel]
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
    name: users
    description: null
    externalDocs: null
}]
        Key: returnBaseType Value = ItemsViewModelUserDetailsList
        Key: isRestfulCreate Value = false
        Key: isMapContainer Value = false
        Key: isDefault Value = false
        Key: responseHeaders Value = []
        Key: examples Value = [{contentType&#x3D;application/json, example&#x3D;{
  &quot;total&quot; : 7,
  &quot;items&quot; : [ {
    &quot;tradingProfit&quot; : 5.637376656633329,
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
    &quot;totalProfit&quot; : 5.962133916683182,
    &quot;regDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;avatar&quot; : &quot;avatar&quot;,
    &quot;userId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;investingProfit&quot; : 2.3021358869347655,
    &quot;url&quot; : &quot;url&quot;,
    &quot;tags&quot; : [ {
      &quot;color&quot; : &quot;color&quot;,
      &quot;name&quot; : &quot;name&quot;
    }, {
      &quot;color&quot; : &quot;color&quot;,
      &quot;name&quot; : &quot;name&quot;
    } ],
    &quot;assetsUnderManagement&quot; : 0.8008281904610115,
    &quot;followersCount&quot; : 1,
    &quot;username&quot; : &quot;username&quot;,
    &quot;investorsCount&quot; : 6
  }, {
    &quot;tradingProfit&quot; : 5.637376656633329,
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
    &quot;totalProfit&quot; : 5.962133916683182,
    &quot;regDate&quot; : &quot;2000-01-23T04:56:07.000+00:00&quot;,
    &quot;avatar&quot; : &quot;avatar&quot;,
    &quot;userId&quot; : &quot;046b6c7f-0b8a-43b9-b35d-6489e6daee91&quot;,
    &quot;investingProfit&quot; : 2.3021358869347655,
    &quot;url&quot; : &quot;url&quot;,
    &quot;tags&quot; : [ {
      &quot;color&quot; : &quot;color&quot;,
      &quot;name&quot; : &quot;name&quot;
    }, {
      &quot;color&quot; : &quot;color&quot;,
      &quot;name&quot; : &quot;name&quot;
    } ],
    &quot;assetsUnderManagement&quot; : 0.8008281904610115,
    &quot;followersCount&quot; : 1,
    &quot;username&quot; : &quot;username&quot;,
    &quot;investorsCount&quot; : 6
  } ]
}}]
        Key: isAlias Value = false
        Key: contents Value = [io.swagger.codegen.v3.CodegenContent@34fd69d4]
        Key: isNumeric Value = false
        Key: produces Value = [{hasMore&#x3D;true, mediaType&#x3D;text/plain}, {hasMore&#x3D;true, mediaType&#x3D;application/json}, {mediaType&#x3D;text/json}]
        Key: isRestfulShow Value = false
        Key: isArrayModel Value = false
        Key: returnType Value = ItemsViewModelUserDetailsList
        Key: isDouble Value = false
        Key: isResponseBinary Value = false
        Key: hasFormParams Value = false
        Key: requestBodyExamples Value = 
        Key: isRestful Value = false
        Key: queryParams Value = [FacetId(string), Sorting(string), Tags(Array&lt;string&gt;), Skip(number), Take(number)]
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
        Key: nickname Value = getUsersList
        Key: bodyParam Value = 
        Key: operationIdLowerCase Value = getuserslist
        Key: operationId Value = getUsersList
        Key: unescapedNotes Value = 
        Key: isString Value = false
        Key: isDate Value = false
        Key: hasParams Value = true
        Key: returnTypeIsPrimitive Value = false
        Key: operationIdSnakeCase Value = get_users_list
        Key: consumes Value = 
        Key: summary Value = Get users list
        Key: isNotContainer Value = false
        Key: isDeprecated Value = false
        Key: vendorExtensions Value = {x-has-consumes&#x3D;false, x-has-required-params&#x3D;false, x-is-restful-show&#x3D;false, x-is-get-method&#x3D;true, x-has-reference&#x3D;false, x-is-restful-index&#x3D;false, x-is-restful-destroy&#x3D;false, x-has-more&#x3D;false, x-has-params&#x3D;true, x-has-optional-params&#x3D;true, x-is-restful&#x3D;false, x-is-restful-update&#x3D;false, x-has-produces&#x3D;true, x-is-restful-create&#x3D;false}
        Key: isLong Value = false
        Key: isFile Value = false
        Key: bodyParams Value = []
        Key: isEnum Value = false
        Key: hasOptionalParams Value = true
        Key: isFloat Value = false
        Key: isPrimitiveType Value = false
        Key: defaultResponse Value = undefined
        Key: discriminator Value = 
        Key: testPath Value = /v2.0/users/list
        Key: isByteArray Value = false
        Key: isBodyAllowed Value = false
        Key: subresourceOperation Value = false
        Key: isDateTime Value = false
        Key: responses Value = [200(null), 400(null)]
        Key: externalDocs Value = 
        Key: isMultipart Value = false
        Key: isRestfulDestroy Value = false

    getUsersList = (        options: {
            facetId?: string,
            sorting?: string,
            tags?: Array<string>,
            skip?: number,
            take?: number
        } = {},
        init: RequestInit = {}) => {
        const {
            facetId,
            sorting,
            tags,
            skip,
            take
        } = options;

    const path = this.apiClient.apiUrl + buildPathString("/v2.0/users/list", {
    })

    const query = buildQueryString(path, {
        FacetId: facetId,
        Sorting: sorting,
        Tags: tags,
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
    }).then(handleErrors).then<ItemsViewModelUserDetailsList>((response: Response) => {
        return response.json();
    })
    }
}
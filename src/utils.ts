import querystring from "querystring";
import ApiClient from "./ApiClient";

export type ReturnType = "primitive" | "structure" | "none";

export const generateMethod = <T>({
  init,
  pathParams = {},
  queryParams = {},
  apiClient,
  path,
  body,
  returnType = "none",
  method,
  headerParams,
  formParams
}: {
  init: RequestInit;
  pathParams?: { [keys:string]: any };
  queryParams?: Object;
  apiClient: ApiClient;
  path: string;
  body?: BodyInit;
  returnType?: ReturnType;
  method: string;
  headerParams?: object;
  formParams?: any;
}) => {
  for (const name in pathParams)
    checkRequiredParameter(pathParams[name], name, path);

  const query = buildPathAndQuery(
    apiClient.apiUrl,
    path,
    pathParams,
    queryParams
  );
  const contentTypeHeader = formParams
    ? undefined
    : { "Content-Type": "application/json" };
  return (apiClient
    .fetch(query, {
      ...init,
      method,
      body: formParams || body,
      headers: {
        ...init.headers,
        ...headerParams,
        ...contentTypeHeader
      }
    })
    .then(handleErrors)
    .then<Response>((response: Response) => {
      switch (returnType) {
        case "structure":
          return response.json();
        case "primitive":
          return response.text();
        case "none":
          return response;
      }
    }) as unknown) as T;
};

export const checkRequiredParameter = (
  value: any,
  paramName: string,
  methodName: string
) => {
  if (value === null || value === undefined)
    throw new Error(
      `Required parameter ${paramName} was null or undefined when calling ${methodName}.`
    );
};

export const buildPathAndQuery = (
  apiUrl: string,
  methodPath: string,
  pathParams: { [key: string]: any },
  queryParams: { [key: string]: any }
): string => {
  const path = apiUrl + buildPathString(methodPath, pathParams);
  return buildQueryString(path, queryParams);
};

export const buildPathString = (
  path: string,
  pathParams: { [key: string]: any }
): string => {
  if (!path.match(/^\//)) {
    path = "/" + path;
  }
  let url = path.replace(/{([\w-]+)}/g, (fullMatch, key) => {
    let value;
    if (pathParams.hasOwnProperty(key)) {
      value = paramToString(pathParams[key]);
    } else {
      value = fullMatch;
    }
    return encodeURIComponent(value);
  });
  return url;
};

export const paramToString = (param?: string | number | Date) => {
  if (param === undefined || param === null) {
    return "";
  }
  if (param instanceof Date) {
    return param.toJSON();
  }
  return param.toString();
};

export const buildQueryString = (
  path: string,
  queryParams: { [key: string]: any }
): string => {
  const cleanObject = JSON.parse(JSON.stringify(queryParams));
  const string = querystring.stringify(cleanObject);
  const url = new URL(path);
  url.search = string;

  return url.toString();
};

export const handleErrors = async (response: Response) => {
  if (response.ok) {
    return response;
  }
  try {
    const body = await response.json();
    return Promise.reject({
      body,
      statusCode: response.status
    });
  } catch (e) {
    return Promise.reject({
      body: response.statusText,
      statusCode: response.status
    });
  }
};

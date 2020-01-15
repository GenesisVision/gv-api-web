export const buildPathString = (path: string, pathParams: { [key: string]: any }): string => {
    if (!path.match(/^\//)) {
        path = '/' + path;
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
}

export const paramToString = (param?: string | number | Date) => {
    if (param === undefined || param === null) {
        return '';
    }
    if (param instanceof Date) {
        return param.toJSON();
    }
    return param.toString();
}

export const buildQueryString = (path: string, queryParams: { [key: string]: any }): string => {
    const url = new URL(path);
    for (let key in queryParams) {
        if (queryParams[key] !== undefined && queryParams[key].length !== 0) {
            url.searchParams.append(key, queryParams[key]);
        }
    }
    return url.toString();
}

export const handleErrors = async (response: Response) => {
    if (response.ok) {
        return response;
    }
    const body = await response.json();
    return Promise.reject({
        body,
        statusCode: response.status
    });
}
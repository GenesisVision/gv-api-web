import fetch from "isomorphic-unfetch";

export default class ApiClient {
    readonly apiUrl: string;

    constructor(apiUrl: string = "https://localhost/api") {
        this.apiUrl = apiUrl;
    }

    fetch(input: RequestInfo, init?: RequestInit) {
        return fetch(input, init);
    }
}

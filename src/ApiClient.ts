export default class ApiClient {
  readonly apiUrl: string;
  private readonly fetchMethod?: (
    input: RequestInfo,
    init?: RequestInit
  ) => Promise<Response>;
  constructor(
    apiUrl: string = "https://localhost/api",
    fetchMethod?: (input: RequestInfo, init?: RequestInit) => Promise<Response>
  ) {
    this.fetchMethod = fetchMethod;
    this.apiUrl = apiUrl;
  }

  fetch(input: RequestInfo, init?: RequestInit) {
    if (this.fetchMethod !== undefined) {
      return this.fetchMethod(input, init);
    }
    return fetch(input, init);
  }
}

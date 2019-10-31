export class GeeTestResult {
    constructor(data) {
    }
    static constructFromObject(data) {
        if (data) {
            return new GeeTestResult({});
        }
    }
}

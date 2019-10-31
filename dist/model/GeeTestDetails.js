export class GeeTestDetails {
    constructor(data) {
    }
    static constructFromObject(data) {
        if (data) {
            return new GeeTestDetails({});
        }
    }
}

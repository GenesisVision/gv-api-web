import ApiClient from "../ApiClient";
export class DashboardProgramDetailsOld {
    constructor() {
    }
    static constructFromObject(data, obj = new DashboardProgramDetailsOld()) {
        if (data) {
            if (data.hasOwnProperty('share')) {
                obj['share'] = ApiClient.convertToType(data['share'], 'number');
            }
        }
        return obj;
    }
}

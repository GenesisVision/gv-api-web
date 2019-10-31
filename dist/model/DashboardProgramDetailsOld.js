import ApiClient from "../ApiClient";
export class DashboardProgramDetailsOld {
    constructor(data) {
        this['share'] = data['share'];
    }
    static constructFromObject(data) {
        return new DashboardProgramDetailsOld({
            'share': ApiClient.convertToType(data['share'], 'number'),
        });
    }
}

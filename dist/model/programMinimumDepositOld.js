import ApiClient from "../ApiClient";
export class ProgramMinimumDepositOld {
    constructor() {
    }
    static constructFromObject(data, obj = new ProgramMinimumDepositOld()) {
        if (data) {
            if (data.hasOwnProperty('minimumDepositsAmount')) {
                obj['minimumDepositsAmount'] = ApiClient.convertToType(data['minimumDepositsAmount'], { 'string': 'number' });
            }
        }
        return obj;
    }
}

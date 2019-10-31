import ApiClient from "../ApiClient";
export class ProgramMinimumDepositOld {
    constructor(data) {
        this['minimumDepositsAmount'] = data['minimumDepositsAmount'];
    }
    static constructFromObject(data) {
        return new ProgramMinimumDepositOld({
            'minimumDepositsAmount': ApiClient.convertToType(data['minimumDepositsAmount'], { 'string': 'number' }),
        });
    }
}

import ApiClient from "../ApiClient";
export class ProgramAssetDetails {
    constructor(data) {
        this['level'] = data['level'];
        this['levelProgress'] = data['levelProgress'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramAssetDetails({
                'level': ApiClient.convertToType(data['level'], 'number'),
                'levelProgress': ApiClient.convertToType(data['levelProgress'], 'number'),
            });
        }
    }
}

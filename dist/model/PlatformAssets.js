import { PlatformAsset } from './PlatformAsset';
import ApiClient from "../ApiClient";
export class PlatformAssets {
    constructor(data) {
        this['assets'] = data['assets'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PlatformAssets({
                'assets': ApiClient.convertToType(data['assets'], [PlatformAsset]),
            });
        }
    }
}

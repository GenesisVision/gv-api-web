import { PlatformAsset } from './platformAsset';
import ApiClient from "../ApiClient";
export class PlatformAssets {
    constructor() {
    }
    static constructFromObject(data, obj = new PlatformAssets()) {
        if (data) {
            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], [PlatformAsset]);
            }
        }
        return obj;
    }
}

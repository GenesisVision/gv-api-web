/**
 * Core API v2.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { RecommendedAsset } from './recommendedAsset';

import ApiClient from "../ApiClient";

export class DashboardRecommendations { 
    public assets?: [RecommendedAsset];

    static constructFromObject(data: {[key: string]: any}, obj: DashboardRecommendations = new DashboardRecommendations()): DashboardRecommendations {
        if (data) {
            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], [RecommendedAsset]);
            }
        }
        return obj;
    }
}




import { RecommendedAsset } from './recommendedAsset';
export declare class DashboardRecommendations {
    'assets'?: [RecommendedAsset];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: DashboardRecommendations): DashboardRecommendations;
}

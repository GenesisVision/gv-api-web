import { RecommendedAsset } from './RecommendedAsset';
export declare class DashboardRecommendations {
    'assets': Array<RecommendedAsset>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardRecommendations | undefined;
}

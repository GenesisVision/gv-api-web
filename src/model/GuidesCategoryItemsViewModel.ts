import { GuidesCategory } from './GuidesCategory';

export interface GuidesCategoryItemsViewModel {
    readonly items: Array<GuidesCategory>;
    readonly total: number;
}


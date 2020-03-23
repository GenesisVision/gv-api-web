import { SocialLinkViewModel } from './SocialLinkViewModel';
import { Tag } from './Tag';

export interface AssetInfo {
    name: string;
    symbol: string;
    logo: string;
    description: string;
    chartSymbol: string;
    tags: Array<Tag>;
    socialLinks: Array<SocialLinkViewModel>;
}


import { AssetType } from './AssetType';
import { PlatformEventType } from './PlatformEventType';

export interface PlatformEvent {
    title: string;
    text: string;
    logoUrl: string;
    assetUrl: string;
    userUrl: string;
    value: string;
    color: string;
    assetType: AssetType;
    date: Date;
    type: PlatformEventType;
}


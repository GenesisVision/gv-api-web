import { Guide } from './Guide';

export interface GuidesCategory {
    name: string;
    canonicalName: string;
    guides: Array<Guide>;
}


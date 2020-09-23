import { ImageQuality } from './ImageQuality';

export interface PostImageResize {
    quality: ImageQuality;
    logoUrl: string;
    height: number;
    width: number;
}


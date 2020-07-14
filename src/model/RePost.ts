import { NewPostImage } from './NewPostImage';

export interface RePost {
    id: string;
    text: string;
    images: Array<NewPostImage>;
}


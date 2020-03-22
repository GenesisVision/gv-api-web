import { NewPostImage } from './NewPostImage';
import { NewPostTag } from './NewPostTag';

export interface RePost {
    id: string;
    text: string;
    images: Array<NewPostImage>;
    tags: Array<NewPostTag>;
}


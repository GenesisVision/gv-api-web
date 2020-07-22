import { NewPostImage } from './NewPostImage';

export interface EditPost {
    id: string;
    text: string;
    images: Array<NewPostImage>;
}


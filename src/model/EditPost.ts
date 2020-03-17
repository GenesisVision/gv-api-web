import { NewPostImage } from './NewPostImage';
import { NewPostTag } from './NewPostTag';

export interface EditPost {
    id: string;
    text: string;
    postId: string;
    userId: string;
    images: Array<NewPostImage>;
    tags: Array<NewPostTag>;
}


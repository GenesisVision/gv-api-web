import { NewPostImage } from './NewPostImage';
import { NewPostTag } from './NewPostTag';

export interface NewPost {
    text: string;
    postId: string;
    userId: string;
    images: Array<NewPostImage>;
    tags: Array<NewPostTag>;
}


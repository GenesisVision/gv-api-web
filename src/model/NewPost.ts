import { NewPostImage } from './NewPostImage';

export interface NewPost {
    text: string;
    postId: string;
    userId: string;
    images: Array<NewPostImage>;
}


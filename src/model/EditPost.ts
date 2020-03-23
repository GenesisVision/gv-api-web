import { NewPostImage } from './NewPostImage';

export interface EditPost {
    id: string;
    text: string;
    postId: string;
    userId: string;
    images: Array<NewPostImage>;
}


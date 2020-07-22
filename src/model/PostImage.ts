import { PostImageResize } from './PostImageResize';

export interface PostImage {
    id: string;
    resizes: Array<PostImageResize>;
}


import { PostImageResize } from './PostImageResize';

export interface PostImage {
    image: string;
    resizes: Array<PostImageResize>;
}


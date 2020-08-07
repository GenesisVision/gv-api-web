import ApiClient from "../ApiClient";
import { generateMethod, buildPathString, buildQueryString, handleErrors, checkRequiredParameter, buildPathAndQuery } from "../utils";
import { EditPost } from '../model/EditPost';
import { EditablePost } from '../model/EditablePost';
import { ErrorViewModel } from '../model/ErrorViewModel';
import { MediaPostItemsViewModel } from '../model/MediaPostItemsViewModel';
import { NewPost } from '../model/NewPost';
import { Post } from '../model/Post';
import { PostItemsViewModel } from '../model/PostItemsViewModel';
import { ProfilePublicShortItemsViewModel } from '../model/ProfilePublicShortItemsViewModel';
import { RePost } from '../model/RePost';
import { SocialLinkType } from '../model/SocialLinkType';
import { SocialSummary } from '../model/SocialSummary';
import { UserFeedMode } from '../model/UserFeedMode';

export default class SocialApi {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  addPost = (
    options: {
      body?: NewPost
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/social/feed/add",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  deletePost = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/social/feed/{id}/delete",
        
        
        method: "POST",
    })
  };

  editPost = (
    options: {
      body?: EditPost
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/social/feed/edit",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  followUser = (
    userId: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  userId  },
        apiClient: this.apiClient,
        path: "/v2.0/social/user/{userId}/follow",
        
        
        method: "POST",
    })
  };

  getFeed = (
    options: {
      userId?: string,
      tagContentId?: string,
      tagContentIds?: Array<string>,
      userMode?: UserFeedMode,
      hashTags?: Array<string>,
      mask?: string,
      showTop?: boolean,
      showLiked?: boolean,
      showOnlyUserPosts?: boolean,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<PostItemsViewModel> => {
    
    return generateMethod<Promise<PostItemsViewModel>>({
        init,
        queryParams: {  UserId: options['userId'],   TagContentId: options['tagContentId'],   TagContentIds: options['tagContentIds'],   UserMode: options['userMode'],   HashTags: options['hashTags'],   Mask: options['mask'],   ShowTop: options['showTop'],   ShowLiked: options['showLiked'],   ShowOnlyUserPosts: options['showOnlyUserPosts'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/social/feed",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getOriginalPost = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<EditablePost> => {
    
    return generateMethod<Promise<EditablePost>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/social/feed/{id}/original",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getPost = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Post> => {
    
    return generateMethod<Promise<Post>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/social/feed/{id}",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getPostLikesUsers = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<ProfilePublicShortItemsViewModel> => {
    
    return generateMethod<Promise<ProfilePublicShortItemsViewModel>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/social/feed/{id}/users/likes",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getPostRepostsUsers = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<ProfilePublicShortItemsViewModel> => {
    
    return generateMethod<Promise<ProfilePublicShortItemsViewModel>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/social/feed/{id}/users/reposts",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getSocialMedia = (
    options: {
      mask?: string,
      type?: SocialLinkType,
      skip?: number,
      take?: number
      } = {},
    init: RequestInit = {}): Promise<MediaPostItemsViewModel> => {
    
    return generateMethod<Promise<MediaPostItemsViewModel>>({
        init,
        queryParams: {  Mask: options['mask'],   Type: options['type'],   Skip: options['skip'],   Take: options['take']  },
        apiClient: this.apiClient,
        path: "/v2.0/social/feed/media",
        
        returnType: "structure",
        method: "GET",
    })
  };

  getSocialSummary = (
    options: {
      } = {},
    init: RequestInit = {}): Promise<SocialSummary> => {
    
    return generateMethod<Promise<SocialSummary>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/social/feed/summary",
        
        returnType: "structure",
        method: "GET",
    })
  };

  likePost = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/social/feed/{id}/like",
        
        
        method: "POST",
    })
  };

  pinPost = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/social/feed/{id}/pin",
        
        
        method: "POST",
    })
  };

  rePost = (
    options: {
      body?: RePost
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        apiClient: this.apiClient,
        path: "/v2.0/social/feed/repost",
        body: JSON.stringify(options['body']),
        
        method: "POST",
    })
  };

  revertDeletingPost = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/social/feed/{id}/delete/revert",
        
        
        method: "POST",
    })
  };

  spamReport = (
    id: string,
    options: {
      reason?: string,
      text?: string
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        queryParams: {  reason: options['reason'],   text: options['text']  },
        apiClient: this.apiClient,
        path: "/v2.0/social/feed/{id}/report",
        
        
        method: "POST",
    })
  };

  unfollowUser = (
    userId: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  userId  },
        apiClient: this.apiClient,
        path: "/v2.0/social/user/{userId}/unfollow",
        
        
        method: "POST",
    })
  };

  unlikePost = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/social/feed/{id}/unlike",
        
        
        method: "POST",
    })
  };

  unpinPost = (
    id: string,
    options: {
      } = {},
    init: RequestInit = {}): Promise<Response> => {
    
    return generateMethod<Promise<Response>>({
        init,
        pathParams: {  id  },
        apiClient: this.apiClient,
        path: "/v2.0/social/feed/{id}/unpin",
        
        
        method: "POST",
    })
  };
}

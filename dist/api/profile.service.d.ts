import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { ExternalKeyAddViewModel } from "../model/externalKeyAddViewModel";
import { ExternalKeysViewModel } from "../model/externalKeysViewModel";
import { FcmTokenViewModel } from "../model/fcmTokenViewModel";
import { IdModel } from "../model/idModel";
import { ProfileFullViewModel } from "../model/profileFullViewModel";
import { ProfileHeaderViewModel } from "../model/profileHeaderViewModel";
import { PublicProfile } from "../model/publicProfile";
import { SocialLinksViewModel } from "../model/socialLinksViewModel";
import { UpdatePersonalDetailViewModel } from "../model/updatePersonalDetailViewModel";
import { UpdateProfileViewModel } from "../model/updateProfileViewModel";
import { UpdateSocialLinkViewModel } from "../model/updateSocialLinkViewModel";
export declare class ProfileService {
    apiClient: ApiClient;
    constructor(apiClient?: ApiClient);
    addExternalKey(authorization: string, opts?: {
        model?: ExternalKeyAddViewModel;
    }): CancelablePromise<null>;
    private addExternalKeyWithHttpInfo;
    deleteExternalKey(authorization: string, opts?: {
        model?: IdModel;
    }): CancelablePromise<null>;
    private deleteExternalKeyWithHttpInfo;
    getExternalKey(authorization: string): CancelablePromise<ExternalKeysViewModel>;
    private getExternalKeyWithHttpInfo;
    getManagerProfile(id: string): CancelablePromise<PublicProfile>;
    private getManagerProfileWithHttpInfo;
    getProfileFull(authorization: string): CancelablePromise<ProfileFullViewModel>;
    private getProfileFullWithHttpInfo;
    getProfileHeader(authorization: string): CancelablePromise<ProfileHeaderViewModel>;
    private getProfileHeaderWithHttpInfo;
    getSocialLinks(authorization: string): CancelablePromise<SocialLinksViewModel>;
    private getSocialLinksWithHttpInfo;
    getVerificationToken(authorization: string): CancelablePromise<string>;
    private getVerificationTokenWithHttpInfo;
    removeAvatar(authorization: string): CancelablePromise<null>;
    private removeAvatarWithHttpInfo;
    updateAvatar(fileId: string, authorization: string): CancelablePromise<null>;
    private updateAvatarWithHttpInfo;
    updateFcmToken(authorization: string, opts?: {
        token?: FcmTokenViewModel;
    }): CancelablePromise<null>;
    private updateFcmTokenWithHttpInfo;
    updatePersonalDetails(authorization: string, opts?: {
        model?: UpdatePersonalDetailViewModel;
    }): CancelablePromise<null>;
    private updatePersonalDetailsWithHttpInfo;
    updateProfile(authorization: string, opts?: {
        model?: UpdateProfileViewModel;
    }): CancelablePromise<null>;
    private updateProfileWithHttpInfo;
    updateSocialLinks(authorization: string, opts?: {
        model?: UpdateSocialLinkViewModel;
    }): CancelablePromise<null>;
    private updateSocialLinksWithHttpInfo;
}

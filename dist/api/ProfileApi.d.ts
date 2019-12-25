import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { FcmTokenViewModel } from "../model/FcmTokenViewModel";
import { ProfileFullViewModel } from "../model/ProfileFullViewModel";
import { ProfileHeaderViewModel } from "../model/ProfileHeaderViewModel";
import { SocialLinksViewModel } from "../model/SocialLinksViewModel";
import { UpdatePersonalDetailViewModel } from "../model/UpdatePersonalDetailViewModel";
import { UpdateProfileViewModel } from "../model/UpdateProfileViewModel";
import { UpdateSocialLinkViewModel } from "../model/UpdateSocialLinkViewModel";
import { UpdateSocialLinksViewModel } from "../model/UpdateSocialLinksViewModel";
export declare class ProfileApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
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
    removeFcmToken(authorization: string, opts?: {
        token?: FcmTokenViewModel;
    }): CancelablePromise<null>;
    private removeFcmTokenWithHttpInfo;
    switchPublicInvestorOff(authorization: string): CancelablePromise<null>;
    private switchPublicInvestorOffWithHttpInfo;
    switchPublicInvestorOn(authorization: string): CancelablePromise<null>;
    private switchPublicInvestorOnWithHttpInfo;
    updateAllSocialLinks(authorization: string, opts?: {
        model?: UpdateSocialLinksViewModel;
    }): CancelablePromise<null>;
    private updateAllSocialLinksWithHttpInfo;
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

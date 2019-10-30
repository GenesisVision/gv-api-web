import { GenericFabric } from "../constructFromObject";
export declare type UserVerificationStatus = 'NotVerified' | 'Verified' | 'UnderReview' | 'Rejected';
export declare const UserVerificationStatus: {
    constructFromObject: GenericFabric<UserVerificationStatus>;
};

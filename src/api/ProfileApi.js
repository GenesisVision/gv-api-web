/**
 * Core API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ErrorViewModel from '../model/ErrorViewModel';
import FcmTokenViewModel from '../model/FcmTokenViewModel';
import ProfileFullViewModel from '../model/ProfileFullViewModel';
import ProfileHeaderViewModel from '../model/ProfileHeaderViewModel';
import PublicProfile from '../model/PublicProfile';
import SocialLinksViewModel from '../model/SocialLinksViewModel';
import UpdatePersonalDetailViewModel from '../model/UpdatePersonalDetailViewModel';
import UpdateProfileViewModel from '../model/UpdateProfileViewModel';
import UpdateSocialLinkViewModel from '../model/UpdateSocialLinkViewModel';

/**
* Profile service.
* @class ProfileApi
* @version v1.0
*/
export default class ProfileApi {

    /**
    * Constructs a new ProfileApi. 
    * @function ProfileApi#constructor
    * @param {ApiClient} apiClient Optional API client implementation to use,
    * @return {ProfileApi}
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


      getManagerProfileWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getManagerProfile");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = PublicProfile;

      return this.apiClient.callApi(
        '/v1.0/profile/{id}/public', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Public profile
     * @function ProfileApi#getManagerProfile
     * @param {String} id 
     * @return {CancelablePromise<PublicProfile>} a Promise, with an object containing data of type PublicProfile and HTTP response
     */
      getManagerProfile(id) {
      return this.getManagerProfileWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      getProfileFullWithHttpInfo(authorization) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getProfileFull");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ProfileFullViewModel;

      return this.apiClient.callApi(
        '/v1.0/profile', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get full profile
     * @function ProfileApi#getProfileFull
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<ProfileFullViewModel>} a Promise, with an object containing data of type ProfileFullViewModel and HTTP response
     */
      getProfileFull(authorization) {
      return this.getProfileFullWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      getProfileHeaderWithHttpInfo(authorization) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getProfileHeader");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ProfileHeaderViewModel;

      return this.apiClient.callApi(
        '/v1.0/profile/header', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get header profile
     * @function ProfileApi#getProfileHeader
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<ProfileHeaderViewModel>} a Promise, with an object containing data of type ProfileHeaderViewModel and HTTP response
     */
      getProfileHeader(authorization) {
      return this.getProfileHeaderWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      getSocialLinksWithHttpInfo(authorization) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getSocialLinks");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = SocialLinksViewModel;

      return this.apiClient.callApi(
        '/v1.0/profile/sociallinks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get social links
     * @function ProfileApi#getSocialLinks
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<SocialLinksViewModel>} a Promise, with an object containing data of type SocialLinksViewModel and HTTP response
     */
      getSocialLinks(authorization) {
      return this.getSocialLinksWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      getVerificationTokenWithHttpInfo(authorization) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getVerificationToken");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/v1.0/profile/verification/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @function ProfileApi#getVerificationToken
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<'String'>} a Promise, with an object containing data of type 'String' and HTTP response
     */
      getVerificationToken(authorization) {
      return this.getVerificationTokenWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      removeAvatarWithHttpInfo(authorization) {
      let postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling removeAvatar");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/v1.0/profile/avatar/remove', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove avatar
     * @function ProfileApi#removeAvatar
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */
      removeAvatar(authorization) {
      return this.removeAvatarWithHttpInfo(authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      updateAvatarWithHttpInfo(fileId, authorization) {
      let postBody = null;

      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling updateAvatar");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling updateAvatar");
      }


      let pathParams = {
        'fileId': fileId
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/v1.0/profile/avatar/update/{fileId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update avatar
     * @function ProfileApi#updateAvatar
     * @param {String} fileId 
     * @param {String} authorization JWT access token
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */
      updateAvatar(fileId, authorization) {
      return this.updateAvatarWithHttpInfo(fileId, authorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      updateFcmTokenWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = opts['token'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling updateFcmToken");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/v1.0/profile/push/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @function ProfileApi#updateFcmToken
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {FcmTokenViewModel} [opts.token] 
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */
      updateFcmToken(authorization, opts) {
      return this.updateFcmTokenWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      updatePersonalDetailsWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling updatePersonalDetails");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/v1.0/profile/personal/update', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update user personal details
     * @function ProfileApi#updatePersonalDetails
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {UpdatePersonalDetailViewModel} [opts.model] 
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */
      updatePersonalDetails(authorization, opts) {
      return this.updatePersonalDetailsWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      updateProfileWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling updateProfile");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/v1.0/profile/update', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update profile
     * @function ProfileApi#updateProfile
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {UpdateProfileViewModel} [opts.model] 
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */
      updateProfile(authorization, opts) {
      return this.updateProfileWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

      updateSocialLinksWithHttpInfo(authorization, opts) {
      opts = opts || {};
      let postBody = opts['model'];

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling updateSocialLinks");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/v1.0/profile/sociallinks/update', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add or update social links
     * @function ProfileApi#updateSocialLinks
     * @param {String} authorization JWT access token
     * @param {Object} [opts] Optional parameters
     * @param {UpdateSocialLinkViewModel} [opts.model] 
     * @return {CancelablePromise<any>} a Promise, with an object containing HTTP response
     */
      updateSocialLinks(authorization, opts) {
      return this.updateSocialLinksWithHttpInfo(authorization, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}

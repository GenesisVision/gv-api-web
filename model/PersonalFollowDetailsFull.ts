/**
 * Core API v2.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AssetGuestActions } from './AssetGuestActions';

import ApiClient from "../ApiClient";

export class PersonalFollowDetailsFull { 
    public 'isFavorite': boolean;
    public 'guestActions': AssetGuestActions;
    public 'hasNotifications': boolean;
    public 'subscribedAccounts': number;

    constructor(data: {[key: string]: any}) { 
        this['isFavorite'] = data['isFavorite'];
        this['guestActions'] = data['guestActions'];
        this['hasNotifications'] = data['hasNotifications'];
        this['subscribedAccounts'] = data['subscribedAccounts'];
    }

    static constructFromObject(data: {[key: string]: any}): PersonalFollowDetailsFull | undefined {
        if (data) {
            return new PersonalFollowDetailsFull({ 
                'isFavorite': ApiClient.convertToType(data['isFavorite'], 'boolean'),
                'guestActions': AssetGuestActions.constructFromObject(data['guestActions']),
                'hasNotifications': ApiClient.convertToType(data['hasNotifications'], 'boolean'),
                'subscribedAccounts': ApiClient.convertToType(data['subscribedAccounts'], 'number'),
            });
        }
    }
}



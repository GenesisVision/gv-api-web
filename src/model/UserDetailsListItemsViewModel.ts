import { UserDetailsList } from './UserDetailsList';

export interface UserDetailsListItemsViewModel {
    readonly items: Array<UserDetailsList>;
    readonly total: number;
}


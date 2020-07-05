import { AndroidAppVersion } from './AndroidAppVersion';
import { IOsAppVersion } from './IOsAppVersion';

export interface AppVersion {
    iOS: IOsAppVersion;
    android: AndroidAppVersion;
}


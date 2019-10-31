export declare class ProgramLevelInfo {
    'isKycPassed': boolean;
    'level': number;
    'levelProgressPercent': number;
    'genesisRatio': number;
    'programAge': number;
    'weightedVolumeScale': number;
    'managerBalance': number;
    'investmentScale': number;
    'totalAvailableToInvest': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramLevelInfo;
}

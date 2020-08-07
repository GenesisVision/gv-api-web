
export interface ProgramWithdrawInfo {
    periodEnds: Date;
    withdrawInPercent: boolean;
    title: string;
    availableToWithdraw: number;
    isOwner: boolean;
    withheldInvestment: number;
}


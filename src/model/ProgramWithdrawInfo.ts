
export interface ProgramWithdrawInfo {
    title: string;
    availableToWithdraw: number;
    isOwner: boolean;
    withheldInvestment: number;
    periodEnds: Date;
    withdrawInPercent: boolean;
}


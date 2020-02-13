export interface ProgramWithdrawInfo {
    periodEnds: Date;
    title: string;
    availableToWithdraw: number;
    isOwner: boolean;
    withheldInvestment: number;
}


import { DayOfWeekType } from './DayOfWeekType';

export interface TradingScheduleInfo {
    hasTradingSchedule: boolean;
    dayStart: DayOfWeekType;
    hourStart: number;
    minuteStart: number;
    dayEnd: DayOfWeekType;
    hourEnd: number;
    minuteEnd: number;
}


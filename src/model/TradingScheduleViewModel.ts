import { DayOfWeekType } from './DayOfWeekType';

export interface TradingScheduleViewModel {
    dayStart: DayOfWeekType;
    hourStart: number;
    minuteStart: number;
    dayEnd: DayOfWeekType;
    hourEnd: number;
    minuteEnd: number;
}


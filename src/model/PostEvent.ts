import { ChangeState } from './ChangeState';
import { Currency } from './Currency';

export interface PostEvent {
    title: string;
    amount: number;
    currency: Currency;
    percent: number;
    changeState: ChangeState;
}


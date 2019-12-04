import { AmountItem } from './AmountItem';
import ApiClient from "../ApiClient";
export class AmountRowCell {
    constructor(data) {
        this['first'] = data['first'];
        this['second'] = data['second'];
        this['title'] = data['title'];
    }
    static constructFromObject(data) {
        if (data) {
            return new AmountRowCell({
                'first': AmountItem.constructFromObject(data['first']),
                'second': AmountItem.constructFromObject(data['second']),
                'title': ApiClient.convertToType(data['title'], 'string'),
            });
        }
    }
}

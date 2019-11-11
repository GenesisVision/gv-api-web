import { AmountItem } from './AmountItem';
export class AmountRowCell {
    constructor(data) {
        this['first'] = data['first'];
        this['second'] = data['second'];
    }
    static constructFromObject(data) {
        if (data) {
            return new AmountRowCell({
                'first': AmountItem.constructFromObject(data['first']),
                'second': AmountItem.constructFromObject(data['second']),
            });
        }
    }
}

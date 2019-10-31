import { FacetSortType } from './FacetSortType';
import { ProgramsFilterSorting } from './ProgramsFilterSorting';
import { Timeframe } from './Timeframe';
import ApiClient from "../ApiClient";
export class ProgramFacet {
    constructor(data) {
        this['sorting'] = data['sorting'];
        this['id'] = data['id'];
        this['title'] = data['title'];
        this['description'] = data['description'];
        this['logo'] = data['logo'];
        this['url'] = data['url'];
        this['sortType'] = data['sortType'];
        this['timeframe'] = data['timeframe'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramFacet({
                'sorting': ProgramsFilterSorting.constructFromObject(data['sorting']),
                'id': ApiClient.convertToType(data['id'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'sortType': FacetSortType.constructFromObject(data['sortType']),
                'timeframe': Timeframe.constructFromObject(data['timeframe']),
            });
        }
    }
}

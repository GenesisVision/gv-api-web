import { Currency } from './Currency';
import { PersonalProgramDetails } from './PersonalProgramDetails';
import { TradesDelay } from './TradesDelay';
import ApiClient from "../ApiClient";
export class ProgramDetailsFull {
    constructor(data) {
        this['currency'] = data['currency'];
        this['level'] = data['level'];
        this['levelProgress'] = data['levelProgress'];
        this['periodDuration'] = data['periodDuration'];
        this['periodStarts'] = data['periodStarts'];
        this['periodEnds'] = data['periodEnds'];
        this['tradesDelay'] = data['tradesDelay'];
        this['ageDays'] = data['ageDays'];
        this['leverageMin'] = data['leverageMin'];
        this['leverageMax'] = data['leverageMax'];
        this['genesisRatio'] = data['genesisRatio'];
        this['investmentScale'] = data['investmentScale'];
        this['volumeScale'] = data['volumeScale'];
        this['hasTrades'] = data['hasTrades'];
        this['entryFeeSelected'] = data['entryFeeSelected'];
        this['entryFeeCurrent'] = data['entryFeeCurrent'];
        this['successFeeSelected'] = data['successFeeSelected'];
        this['successFeeCurrent'] = data['successFeeCurrent'];
        this['stopOutLevelSelected'] = data['stopOutLevelSelected'];
        this['stopOutLevelCurrent'] = data['stopOutLevelCurrent'];
        this['availableInvestmentBase'] = data['availableInvestmentBase'];
        this['availableInvestmentLimit'] = data['availableInvestmentLimit'];
        this['totalAvailableInvestment'] = data['totalAvailableInvestment'];
        this['personalDetails'] = data['personalDetails'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramDetailsFull({
                'currency': Currency.constructFromObject(data['currency']),
                'level': ApiClient.convertToType(data['level'], 'number'),
                'levelProgress': ApiClient.convertToType(data['levelProgress'], 'number'),
                'periodDuration': ApiClient.convertToType(data['periodDuration'], 'number'),
                'periodStarts': ApiClient.convertToType(data['periodStarts'], 'Date'),
                'periodEnds': ApiClient.convertToType(data['periodEnds'], 'Date'),
                'tradesDelay': TradesDelay.constructFromObject(data['tradesDelay']),
                'ageDays': ApiClient.convertToType(data['ageDays'], 'number'),
                'leverageMin': ApiClient.convertToType(data['leverageMin'], 'number'),
                'leverageMax': ApiClient.convertToType(data['leverageMax'], 'number'),
                'genesisRatio': ApiClient.convertToType(data['genesisRatio'], 'number'),
                'investmentScale': ApiClient.convertToType(data['investmentScale'], 'number'),
                'volumeScale': ApiClient.convertToType(data['volumeScale'], 'number'),
                'hasTrades': ApiClient.convertToType(data['hasTrades'], 'boolean'),
                'entryFeeSelected': ApiClient.convertToType(data['entryFeeSelected'], 'number'),
                'entryFeeCurrent': ApiClient.convertToType(data['entryFeeCurrent'], 'number'),
                'successFeeSelected': ApiClient.convertToType(data['successFeeSelected'], 'number'),
                'successFeeCurrent': ApiClient.convertToType(data['successFeeCurrent'], 'number'),
                'stopOutLevelSelected': ApiClient.convertToType(data['stopOutLevelSelected'], 'number'),
                'stopOutLevelCurrent': ApiClient.convertToType(data['stopOutLevelCurrent'], 'number'),
                'availableInvestmentBase': ApiClient.convertToType(data['availableInvestmentBase'], 'number'),
                'availableInvestmentLimit': ApiClient.convertToType(data['availableInvestmentLimit'], 'number'),
                'totalAvailableInvestment': ApiClient.convertToType(data['totalAvailableInvestment'], 'number'),
                'personalDetails': PersonalProgramDetails.constructFromObject(data['personalDetails']),
            });
        }
    }
}

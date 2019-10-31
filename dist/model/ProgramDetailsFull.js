import { AssetSignalSettings } from './AssetSignalSettings';
import { BrokerDetails } from './BrokerDetails';
import { Currency } from './Currency';
import { PersonalProgramDetails } from './PersonalProgramDetails';
import { ProfilePublic } from './ProfilePublic';
import { ProgramTag } from './ProgramTag';
import { TradesDelay } from './TradesDelay';
import ApiClient from "../ApiClient";
export class ProgramDetailsFull {
    constructor(data) {
        this['id'] = data['id'];
        this['logo'] = data['logo'];
        this['url'] = data['url'];
        this['color'] = data['color'];
        this['title'] = data['title'];
        this['description'] = data['description'];
        this['creationDate'] = data['creationDate'];
        this['currency'] = data['currency'];
        this['level'] = data['level'];
        this['levelProgress'] = data['levelProgress'];
        this['periodDuration'] = data['periodDuration'];
        this['periodStarts'] = data['periodStarts'];
        this['periodEnds'] = data['periodEnds'];
        this['tradesDelay'] = data['tradesDelay'];
        this['login'] = data['login'];
        this['ageDays'] = data['ageDays'];
        this['leverageMin'] = data['leverageMin'];
        this['leverageMax'] = data['leverageMax'];
        this['genesisRatio'] = data['genesisRatio'];
        this['investmentScale'] = data['investmentScale'];
        this['volumeScale'] = data['volumeScale'];
        this['entryFeeSelected'] = data['entryFeeSelected'];
        this['entryFeeCurrent'] = data['entryFeeCurrent'];
        this['successFeeSelected'] = data['successFeeSelected'];
        this['successFeeCurrent'] = data['successFeeCurrent'];
        this['stopOutLevelSelected'] = data['stopOutLevelSelected'];
        this['stopOutLevelCurrent'] = data['stopOutLevelCurrent'];
        this['availableInvestmentBase'] = data['availableInvestmentBase'];
        this['availableInvestmentLimit'] = data['availableInvestmentLimit'];
        this['totalAvailableInvestment'] = data['totalAvailableInvestment'];
        this['manager'] = data['manager'];
        this['brokerDetails'] = data['brokerDetails'];
        this['signalSettings'] = data['signalSettings'];
        this['personalDetails'] = data['personalDetails'];
        this['tags'] = data['tags'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramDetailsFull({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'creationDate': ApiClient.convertToType(data['creationDate'], 'Date'),
                'currency': Currency.constructFromObject(data['currency']),
                'level': ApiClient.convertToType(data['level'], 'number'),
                'levelProgress': ApiClient.convertToType(data['levelProgress'], 'number'),
                'periodDuration': ApiClient.convertToType(data['periodDuration'], 'number'),
                'periodStarts': ApiClient.convertToType(data['periodStarts'], 'Date'),
                'periodEnds': ApiClient.convertToType(data['periodEnds'], 'Date'),
                'tradesDelay': TradesDelay.constructFromObject(data['tradesDelay']),
                'login': ApiClient.convertToType(data['login'], 'string'),
                'ageDays': ApiClient.convertToType(data['ageDays'], 'number'),
                'leverageMin': ApiClient.convertToType(data['leverageMin'], 'number'),
                'leverageMax': ApiClient.convertToType(data['leverageMax'], 'number'),
                'genesisRatio': ApiClient.convertToType(data['genesisRatio'], 'number'),
                'investmentScale': ApiClient.convertToType(data['investmentScale'], 'number'),
                'volumeScale': ApiClient.convertToType(data['volumeScale'], 'number'),
                'entryFeeSelected': ApiClient.convertToType(data['entryFeeSelected'], 'number'),
                'entryFeeCurrent': ApiClient.convertToType(data['entryFeeCurrent'], 'number'),
                'successFeeSelected': ApiClient.convertToType(data['successFeeSelected'], 'number'),
                'successFeeCurrent': ApiClient.convertToType(data['successFeeCurrent'], 'number'),
                'stopOutLevelSelected': ApiClient.convertToType(data['stopOutLevelSelected'], 'number'),
                'stopOutLevelCurrent': ApiClient.convertToType(data['stopOutLevelCurrent'], 'number'),
                'availableInvestmentBase': ApiClient.convertToType(data['availableInvestmentBase'], 'number'),
                'availableInvestmentLimit': ApiClient.convertToType(data['availableInvestmentLimit'], 'number'),
                'totalAvailableInvestment': ApiClient.convertToType(data['totalAvailableInvestment'], 'number'),
                'manager': ProfilePublic.constructFromObject(data['manager']),
                'brokerDetails': BrokerDetails.constructFromObject(data['brokerDetails']),
                'signalSettings': AssetSignalSettings.constructFromObject(data['signalSettings']),
                'personalDetails': PersonalProgramDetails.constructFromObject(data['personalDetails']),
                'tags': ApiClient.convertToType(data['tags'], [ProgramTag]),
            });
        }
    }
}

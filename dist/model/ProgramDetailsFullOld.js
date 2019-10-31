import { BrokerDetailsOld } from './BrokerDetailsOld';
import { Currency } from './Currency';
import { InvestmentProgramStatus } from './InvestmentProgramStatus';
import { PersonalProgramDetailsFullOld } from './PersonalProgramDetailsFullOld';
import { ProfilePublic } from './ProfilePublic';
import { ProgramStatistic } from './ProgramStatistic';
import { ProgramTag } from './ProgramTag';
import { TradesDelay } from './TradesDelay';
import ApiClient from "../ApiClient";
export class ProgramDetailsFullOld {
    constructor(data) {
        this['currency'] = data['currency'];
        this['level'] = data['level'];
        this['levelProgress'] = data['levelProgress'];
        this['periodDuration'] = data['periodDuration'];
        this['periodStarts'] = data['periodStarts'];
        this['periodEnds'] = data['periodEnds'];
        this['entryFeeSelected'] = data['entryFeeSelected'];
        this['entryFeeCurrent'] = data['entryFeeCurrent'];
        this['successFeeSelected'] = data['successFeeSelected'];
        this['successFeeCurrent'] = data['successFeeCurrent'];
        this['stopOutLevelSelected'] = data['stopOutLevelSelected'];
        this['stopOutLevelCurrent'] = data['stopOutLevelCurrent'];
        this['isReinvesting'] = data['isReinvesting'];
        this['isSignalProgram'] = data['isSignalProgram'];
        this['signalSuccessFee'] = data['signalSuccessFee'];
        this['signalVolumeFee'] = data['signalVolumeFee'];
        this['leverageMin'] = data['leverageMin'];
        this['leverageMax'] = data['leverageMax'];
        this['ageDays'] = data['ageDays'];
        this['genesisRatio'] = data['genesisRatio'];
        this['investmentScale'] = data['investmentScale'];
        this['volumeScale'] = data['volumeScale'];
        this['tradesDelay'] = data['tradesDelay'];
        this['availableInvestmentBase'] = data['availableInvestmentBase'];
        this['availableInvestmentLimit'] = data['availableInvestmentLimit'];
        this['totalAvailableInvestment'] = data['totalAvailableInvestment'];
        this['brokerDetails'] = data['brokerDetails'];
        this['statistic'] = data['statistic'];
        this['personalProgramDetails'] = data['personalProgramDetails'];
        this['tags'] = data['tags'];
        this['id'] = data['id'];
        this['logo'] = data['logo'];
        this['url'] = data['url'];
        this['color'] = data['color'];
        this['description'] = data['description'];
        this['title'] = data['title'];
        this['ipfsHash'] = data['ipfsHash'];
        this['creationDate'] = data['creationDate'];
        this['status'] = data['status'];
        this['manager'] = data['manager'];
    }
    static constructFromObject(data) {
        return new ProgramDetailsFullOld({
            'currency': Currency.constructFromObject(data['currency']),
            'level': ApiClient.convertToType(data['level'], 'number'),
            'levelProgress': ApiClient.convertToType(data['levelProgress'], 'number'),
            'periodDuration': ApiClient.convertToType(data['periodDuration'], 'number'),
            'periodStarts': ApiClient.convertToType(data['periodStarts'], 'Date'),
            'periodEnds': ApiClient.convertToType(data['periodEnds'], 'Date'),
            'entryFeeSelected': ApiClient.convertToType(data['entryFeeSelected'], 'number'),
            'entryFeeCurrent': ApiClient.convertToType(data['entryFeeCurrent'], 'number'),
            'successFeeSelected': ApiClient.convertToType(data['successFeeSelected'], 'number'),
            'successFeeCurrent': ApiClient.convertToType(data['successFeeCurrent'], 'number'),
            'stopOutLevelSelected': ApiClient.convertToType(data['stopOutLevelSelected'], 'number'),
            'stopOutLevelCurrent': ApiClient.convertToType(data['stopOutLevelCurrent'], 'number'),
            'isReinvesting': ApiClient.convertToType(data['isReinvesting'], 'boolean'),
            'isSignalProgram': ApiClient.convertToType(data['isSignalProgram'], 'boolean'),
            'signalSuccessFee': ApiClient.convertToType(data['signalSuccessFee'], 'number'),
            'signalVolumeFee': ApiClient.convertToType(data['signalVolumeFee'], 'number'),
            'leverageMin': ApiClient.convertToType(data['leverageMin'], 'number'),
            'leverageMax': ApiClient.convertToType(data['leverageMax'], 'number'),
            'ageDays': ApiClient.convertToType(data['ageDays'], 'number'),
            'genesisRatio': ApiClient.convertToType(data['genesisRatio'], 'number'),
            'investmentScale': ApiClient.convertToType(data['investmentScale'], 'number'),
            'volumeScale': ApiClient.convertToType(data['volumeScale'], 'number'),
            'tradesDelay': TradesDelay.constructFromObject(data['tradesDelay']),
            'availableInvestmentBase': ApiClient.convertToType(data['availableInvestmentBase'], 'number'),
            'availableInvestmentLimit': ApiClient.convertToType(data['availableInvestmentLimit'], 'number'),
            'totalAvailableInvestment': ApiClient.convertToType(data['totalAvailableInvestment'], 'number'),
            'brokerDetails': BrokerDetailsOld.constructFromObject(data['brokerDetails']),
            'statistic': ProgramStatistic.constructFromObject(data['statistic']),
            'personalProgramDetails': PersonalProgramDetailsFullOld.constructFromObject(data['personalProgramDetails']),
            'tags': ApiClient.convertToType(data['tags'], [ProgramTag]),
            'id': ApiClient.convertToType(data['id'], 'string'),
            'logo': ApiClient.convertToType(data['logo'], 'string'),
            'url': ApiClient.convertToType(data['url'], 'string'),
            'color': ApiClient.convertToType(data['color'], 'string'),
            'description': ApiClient.convertToType(data['description'], 'string'),
            'title': ApiClient.convertToType(data['title'], 'string'),
            'ipfsHash': ApiClient.convertToType(data['ipfsHash'], 'string'),
            'creationDate': ApiClient.convertToType(data['creationDate'], 'Date'),
            'status': InvestmentProgramStatus.constructFromObject(data['status']),
            'manager': ProfilePublic.constructFromObject(data['manager']),
        });
    }
}

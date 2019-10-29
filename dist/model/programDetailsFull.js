import { BrokerDetails } from './brokerDetails';
import { Currency } from './currency';
import { PersonalProgramDetails } from './personalProgramDetails';
import { ProfilePublic } from './profilePublic';
import { ProgramTag } from './programTag';
import { TradesDelay } from './tradesDelay';
import ApiClient from "../ApiClient";
export class ProgramDetailsFull {
    constructor() {
    }
    static constructFromObject(data, obj = new ProgramDetailsFull()) {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'string');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'string');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'string');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'string');
            }
            if (data.hasOwnProperty('creationDate')) {
                obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'number');
            }
            if (data.hasOwnProperty('levelProgress')) {
                obj['levelProgress'] = ApiClient.convertToType(data['levelProgress'], 'number');
            }
            if (data.hasOwnProperty('periodDuration')) {
                obj['periodDuration'] = ApiClient.convertToType(data['periodDuration'], 'number');
            }
            if (data.hasOwnProperty('periodStarts')) {
                obj['periodStarts'] = ApiClient.convertToType(data['periodStarts'], 'Date');
            }
            if (data.hasOwnProperty('periodEnds')) {
                obj['periodEnds'] = ApiClient.convertToType(data['periodEnds'], 'Date');
            }
            if (data.hasOwnProperty('tradesDelay')) {
                obj['tradesDelay'] = TradesDelay.constructFromObject(data['tradesDelay']);
            }
            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'string');
            }
            if (data.hasOwnProperty('ageDays')) {
                obj['ageDays'] = ApiClient.convertToType(data['ageDays'], 'number');
            }
            if (data.hasOwnProperty('leverageMin')) {
                obj['leverageMin'] = ApiClient.convertToType(data['leverageMin'], 'number');
            }
            if (data.hasOwnProperty('leverageMax')) {
                obj['leverageMax'] = ApiClient.convertToType(data['leverageMax'], 'number');
            }
            if (data.hasOwnProperty('genesisRatio')) {
                obj['genesisRatio'] = ApiClient.convertToType(data['genesisRatio'], 'number');
            }
            if (data.hasOwnProperty('investmentScale')) {
                obj['investmentScale'] = ApiClient.convertToType(data['investmentScale'], 'number');
            }
            if (data.hasOwnProperty('volumeScale')) {
                obj['volumeScale'] = ApiClient.convertToType(data['volumeScale'], 'number');
            }
            if (data.hasOwnProperty('isSignalProgram')) {
                obj['isSignalProgram'] = ApiClient.convertToType(data['isSignalProgram'], 'boolean');
            }
            if (data.hasOwnProperty('signalSuccessFee')) {
                obj['signalSuccessFee'] = ApiClient.convertToType(data['signalSuccessFee'], 'number');
            }
            if (data.hasOwnProperty('signalVolumeFee')) {
                obj['signalVolumeFee'] = ApiClient.convertToType(data['signalVolumeFee'], 'number');
            }
            if (data.hasOwnProperty('entryFeeSelected')) {
                obj['entryFeeSelected'] = ApiClient.convertToType(data['entryFeeSelected'], 'number');
            }
            if (data.hasOwnProperty('entryFeeCurrent')) {
                obj['entryFeeCurrent'] = ApiClient.convertToType(data['entryFeeCurrent'], 'number');
            }
            if (data.hasOwnProperty('successFeeSelected')) {
                obj['successFeeSelected'] = ApiClient.convertToType(data['successFeeSelected'], 'number');
            }
            if (data.hasOwnProperty('successFeeCurrent')) {
                obj['successFeeCurrent'] = ApiClient.convertToType(data['successFeeCurrent'], 'number');
            }
            if (data.hasOwnProperty('stopOutLevelSelected')) {
                obj['stopOutLevelSelected'] = ApiClient.convertToType(data['stopOutLevelSelected'], 'number');
            }
            if (data.hasOwnProperty('stopOutLevelCurrent')) {
                obj['stopOutLevelCurrent'] = ApiClient.convertToType(data['stopOutLevelCurrent'], 'number');
            }
            if (data.hasOwnProperty('availableInvestmentBase')) {
                obj['availableInvestmentBase'] = ApiClient.convertToType(data['availableInvestmentBase'], 'number');
            }
            if (data.hasOwnProperty('availableInvestmentLimit')) {
                obj['availableInvestmentLimit'] = ApiClient.convertToType(data['availableInvestmentLimit'], 'number');
            }
            if (data.hasOwnProperty('totalAvailableInvestment')) {
                obj['totalAvailableInvestment'] = ApiClient.convertToType(data['totalAvailableInvestment'], 'number');
            }
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = ProfilePublic.constructFromObject(data['manager']);
            }
            if (data.hasOwnProperty('brokerDetails')) {
                obj['brokerDetails'] = BrokerDetails.constructFromObject(data['brokerDetails']);
            }
            if (data.hasOwnProperty('personalDetails')) {
                obj['personalDetails'] = PersonalProgramDetails.constructFromObject(data['personalDetails']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [ProgramTag]);
            }
        }
        return obj;
    }
}

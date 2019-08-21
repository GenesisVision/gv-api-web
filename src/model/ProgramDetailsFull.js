/**
 * Core API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import BrokerDetails from './BrokerDetails';
import PersonalProgramDetailsFull from './PersonalProgramDetailsFull';
import ProfilePublic from './ProfilePublic';
import ProgramDetailsRating from './ProgramDetailsRating';
import ProgramStatistic from './ProgramStatistic';
import ProgramTag from './ProgramTag';





/**
 *
 * @interface ProgramDetailsFull
 */

/**
 *
 * @name ProgramDetailsFull#currency
 * @type ProgramDetailsFullCurrencyEnum
 */
/**
 *
 * @name ProgramDetailsFull#level
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#levelProgress
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#periodDuration
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#periodStarts
 * @type {Date}
 */
/**
 *
 * @name ProgramDetailsFull#periodEnds
 * @type {Date}
 */
/**
 *
 * @name ProgramDetailsFull#entryFee
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#entryFeeSelected
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#entryFeeCurrent
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#successFee
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#successFeeSelected
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#successFeeCurrent
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#stopOutLevel
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#stopOutLevelSelected
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#stopOutLevelCurrent
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#isReinvesting
 * @type {Boolean}
 */
/**
 *
 * @name ProgramDetailsFull#isSignalProgram
 * @type {Boolean}
 */
/**
 *
 * @name ProgramDetailsFull#signalSuccessFee
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#signalVolumeFee
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#leverageMin
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#leverageMax
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#ageDays
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#genesisRatio
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#investmentScale
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#volumeScale
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#availableInvestment
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#availableInvestmentBase
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#availableInvestmentLimit
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#totalAvailableInvestment
 * @type {Number}
 */
/**
 *
 * @name ProgramDetailsFull#brokerDetails
 * @type {BrokerDetails}
 */
/**
 *
 * @name ProgramDetailsFull#statistic
 * @type {ProgramStatistic}
 */
/**
 *
 * @name ProgramDetailsFull#rating
 * @type {ProgramDetailsRating}
 */
/**
 *
 * @name ProgramDetailsFull#personalProgramDetails
 * @type {PersonalProgramDetailsFull}
 */
/**
 *
 * @name ProgramDetailsFull#tags
 * @type {Array<ProgramTag>}
 */
/**
 *
 * @name ProgramDetailsFull#id
 * @type {String}
 */
/**
 *
 * @name ProgramDetailsFull#logo
 * @type {String}
 */
/**
 *
 * @name ProgramDetailsFull#url
 * @type {String}
 */
/**
 *
 * @name ProgramDetailsFull#color
 * @type {String}
 */
/**
 *
 * @name ProgramDetailsFull#description
 * @type {String}
 */
/**
 *
 * @name ProgramDetailsFull#title
 * @type {String}
 */
/**
 *
 * @name ProgramDetailsFull#ipfsHash
 * @type {String}
 */
/**
 *
 * @name ProgramDetailsFull#creationDate
 * @type {Date}
 */
/**
 *
 * @name ProgramDetailsFull#status
 * @type ProgramDetailsFullStatusEnum
 */
/**
 *
 * @name ProgramDetailsFull#manager
 * @type {ProfilePublic}
 */





export default class ProgramDetailsFull {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramDetailsFull();

            
            
            

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'Number');
            }
            if (data.hasOwnProperty('levelProgress')) {
                obj['levelProgress'] = ApiClient.convertToType(data['levelProgress'], 'Number');
            }
            if (data.hasOwnProperty('periodDuration')) {
                obj['periodDuration'] = ApiClient.convertToType(data['periodDuration'], 'Number');
            }
            if (data.hasOwnProperty('periodStarts')) {
                obj['periodStarts'] = ApiClient.convertToType(data['periodStarts'], 'Date');
            }
            if (data.hasOwnProperty('periodEnds')) {
                obj['periodEnds'] = ApiClient.convertToType(data['periodEnds'], 'Date');
            }
            if (data.hasOwnProperty('entryFee')) {
                obj['entryFee'] = ApiClient.convertToType(data['entryFee'], 'Number');
            }
            if (data.hasOwnProperty('entryFeeSelected')) {
                obj['entryFeeSelected'] = ApiClient.convertToType(data['entryFeeSelected'], 'Number');
            }
            if (data.hasOwnProperty('entryFeeCurrent')) {
                obj['entryFeeCurrent'] = ApiClient.convertToType(data['entryFeeCurrent'], 'Number');
            }
            if (data.hasOwnProperty('successFee')) {
                obj['successFee'] = ApiClient.convertToType(data['successFee'], 'Number');
            }
            if (data.hasOwnProperty('successFeeSelected')) {
                obj['successFeeSelected'] = ApiClient.convertToType(data['successFeeSelected'], 'Number');
            }
            if (data.hasOwnProperty('successFeeCurrent')) {
                obj['successFeeCurrent'] = ApiClient.convertToType(data['successFeeCurrent'], 'Number');
            }
            if (data.hasOwnProperty('stopOutLevel')) {
                obj['stopOutLevel'] = ApiClient.convertToType(data['stopOutLevel'], 'Number');
            }
            if (data.hasOwnProperty('stopOutLevelSelected')) {
                obj['stopOutLevelSelected'] = ApiClient.convertToType(data['stopOutLevelSelected'], 'Number');
            }
            if (data.hasOwnProperty('stopOutLevelCurrent')) {
                obj['stopOutLevelCurrent'] = ApiClient.convertToType(data['stopOutLevelCurrent'], 'Number');
            }
            if (data.hasOwnProperty('isReinvesting')) {
                obj['isReinvesting'] = ApiClient.convertToType(data['isReinvesting'], 'Boolean');
            }
            if (data.hasOwnProperty('isSignalProgram')) {
                obj['isSignalProgram'] = ApiClient.convertToType(data['isSignalProgram'], 'Boolean');
            }
            if (data.hasOwnProperty('signalSuccessFee')) {
                obj['signalSuccessFee'] = ApiClient.convertToType(data['signalSuccessFee'], 'Number');
            }
            if (data.hasOwnProperty('signalVolumeFee')) {
                obj['signalVolumeFee'] = ApiClient.convertToType(data['signalVolumeFee'], 'Number');
            }
            if (data.hasOwnProperty('leverageMin')) {
                obj['leverageMin'] = ApiClient.convertToType(data['leverageMin'], 'Number');
            }
            if (data.hasOwnProperty('leverageMax')) {
                obj['leverageMax'] = ApiClient.convertToType(data['leverageMax'], 'Number');
            }
            if (data.hasOwnProperty('ageDays')) {
                obj['ageDays'] = ApiClient.convertToType(data['ageDays'], 'Number');
            }
            if (data.hasOwnProperty('genesisRatio')) {
                obj['genesisRatio'] = ApiClient.convertToType(data['genesisRatio'], 'Number');
            }
            if (data.hasOwnProperty('investmentScale')) {
                obj['investmentScale'] = ApiClient.convertToType(data['investmentScale'], 'Number');
            }
            if (data.hasOwnProperty('volumeScale')) {
                obj['volumeScale'] = ApiClient.convertToType(data['volumeScale'], 'Number');
            }
            if (data.hasOwnProperty('availableInvestment')) {
                obj['availableInvestment'] = ApiClient.convertToType(data['availableInvestment'], 'Number');
            }
            if (data.hasOwnProperty('availableInvestmentBase')) {
                obj['availableInvestmentBase'] = ApiClient.convertToType(data['availableInvestmentBase'], 'Number');
            }
            if (data.hasOwnProperty('availableInvestmentLimit')) {
                obj['availableInvestmentLimit'] = ApiClient.convertToType(data['availableInvestmentLimit'], 'Number');
            }
            if (data.hasOwnProperty('totalAvailableInvestment')) {
                obj['totalAvailableInvestment'] = ApiClient.convertToType(data['totalAvailableInvestment'], 'Number');
            }
            if (data.hasOwnProperty('brokerDetails')) {
                obj['brokerDetails'] = BrokerDetails.constructFromObject(data['brokerDetails']);
            }
            if (data.hasOwnProperty('statistic')) {
                obj['statistic'] = ProgramStatistic.constructFromObject(data['statistic']);
            }
            if (data.hasOwnProperty('rating')) {
                obj['rating'] = ProgramDetailsRating.constructFromObject(data['rating']);
            }
            if (data.hasOwnProperty('personalProgramDetails')) {
                obj['personalProgramDetails'] = PersonalProgramDetailsFull.constructFromObject(data['personalProgramDetails']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [ProgramTag]);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('ipfsHash')) {
                obj['ipfsHash'] = ApiClient.convertToType(data['ipfsHash'], 'String');
            }
            if (data.hasOwnProperty('creationDate')) {
                obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = ProfilePublic.constructFromObject(data['manager']);
            }
        }
        return obj;
    }

    currency = undefined;
    level = undefined;
    levelProgress = undefined;
    periodDuration = undefined;
    periodStarts = undefined;
    periodEnds = undefined;
    entryFee = undefined;
    entryFeeSelected = undefined;
    entryFeeCurrent = undefined;
    successFee = undefined;
    successFeeSelected = undefined;
    successFeeCurrent = undefined;
    stopOutLevel = undefined;
    stopOutLevelSelected = undefined;
    stopOutLevelCurrent = undefined;
    isReinvesting = undefined;
    isSignalProgram = undefined;
    signalSuccessFee = undefined;
    signalVolumeFee = undefined;
    leverageMin = undefined;
    leverageMax = undefined;
    ageDays = undefined;
    genesisRatio = undefined;
    investmentScale = undefined;
    volumeScale = undefined;
    availableInvestment = undefined;
    availableInvestmentBase = undefined;
    availableInvestmentLimit = undefined;
    totalAvailableInvestment = undefined;
    brokerDetails = undefined;
    statistic = undefined;
    rating = undefined;
    personalProgramDetails = undefined;
    tags = undefined;
    id = undefined;
    logo = undefined;
    url = undefined;
    color = undefined;
    description = undefined;
    title = undefined;
    ipfsHash = undefined;
    creationDate = undefined;
    status = undefined;
    manager = undefined;






    static CurrencyEnum = {
    
        "USDT": "USDT",
    
        "XRP": "XRP",
    
        "BCH": "BCH",
    
        "LTC": "LTC",
    
        "DOGE": "DOGE",
    
        "BNB": "BNB",
    
        "USD": "USD",
    
        "EUR": "EUR",
    
        "Undefined": "Undefined",
    
        "GVT": "GVT",
    
        "ETH": "ETH",
    
        "BTC": "BTC",
    
        "ADA": "ADA"    
    };

    static StatusEnum = {
    
        "None": "None",
    
        "Pending": "Pending",
    
        "ErrorCreating": "ErrorCreating",
    
        "Active": "Active",
    
        "Closed": "Closed",
    
        "Archived": "Archived",
    
        "ClosedDueToInactivity": "ClosedDueToInactivity"    
    };



}




/**
 * @typedef ProgramDetailsFullCurrencyEnum 
 * @type {("USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR"|"Undefined"|"GVT"|"ETH"|"BTC"|"ADA")}
 */

/**
 * @typedef ProgramDetailsFullStatusEnum 
 * @type {("None"|"Pending"|"ErrorCreating"|"Active"|"Closed"|"Archived"|"ClosedDueToInactivity")}
 */




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





/**
 *
 * @interface ProgramsInfoOld
 */

/**
 *
 * @name ProgramsInfoOld#managerProgramInvestment
 * @type {Number}
 */
/**
 *
 * @name ProgramsInfoOld#managerProgramInvestmentUSD
 * @type {Number}
 */
/**
 *
 * @name ProgramsInfoOld#managerProgramInvestmentUSDT
 * @type {Number}
 */
/**
 *
 * @name ProgramsInfoOld#managerProgramInvestmentBTC
 * @type {Number}
 */
/**
 *
 * @name ProgramsInfoOld#managerProgramInvestmentETH
 * @type {Number}
 */
/**
 *
 * @name ProgramsInfoOld#managerMaxEntryFee
 * @type {Number}
 */
/**
 *
 * @name ProgramsInfoOld#managerMaxSuccessFee
 * @type {Number}
 */
/**
 *
 * @name ProgramsInfoOld#managerFundInvestment
 * @type {Number}
 */
/**
 *
 * @name ProgramsInfoOld#managerMaxExitFee
 * @type {Number}
 */
/**
 *
 * @name ProgramsInfoOld#managerMaxSignalVolumeFee
 * @type {Number}
 */
/**
 *
 * @name ProgramsInfoOld#managerMinSignalVolumeFee
 * @type {Number}
 */
/**
 *
 * @name ProgramsInfoOld#managerMaxSignalSuccessFee
 * @type {Number}
 */
/**
 *
 * @name ProgramsInfoOld#managerMinSignalSuccessFee
 * @type {Number}
 */
/**
 *
 * @name ProgramsInfoOld#periods
 * @type {Array<Number>}
 */





export default class ProgramsInfoOld {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramsInfoOld();

            
            
            

            if (data.hasOwnProperty('managerProgramInvestment')) {
                obj['managerProgramInvestment'] = ApiClient.convertToType(data['managerProgramInvestment'], 'Number');
            }
            if (data.hasOwnProperty('managerProgramInvestmentUSD')) {
                obj['managerProgramInvestmentUSD'] = ApiClient.convertToType(data['managerProgramInvestmentUSD'], 'Number');
            }
            if (data.hasOwnProperty('managerProgramInvestmentUSDT')) {
                obj['managerProgramInvestmentUSDT'] = ApiClient.convertToType(data['managerProgramInvestmentUSDT'], 'Number');
            }
            if (data.hasOwnProperty('managerProgramInvestmentBTC')) {
                obj['managerProgramInvestmentBTC'] = ApiClient.convertToType(data['managerProgramInvestmentBTC'], 'Number');
            }
            if (data.hasOwnProperty('managerProgramInvestmentETH')) {
                obj['managerProgramInvestmentETH'] = ApiClient.convertToType(data['managerProgramInvestmentETH'], 'Number');
            }
            if (data.hasOwnProperty('managerMaxEntryFee')) {
                obj['managerMaxEntryFee'] = ApiClient.convertToType(data['managerMaxEntryFee'], 'Number');
            }
            if (data.hasOwnProperty('managerMaxSuccessFee')) {
                obj['managerMaxSuccessFee'] = ApiClient.convertToType(data['managerMaxSuccessFee'], 'Number');
            }
            if (data.hasOwnProperty('managerFundInvestment')) {
                obj['managerFundInvestment'] = ApiClient.convertToType(data['managerFundInvestment'], 'Number');
            }
            if (data.hasOwnProperty('managerMaxExitFee')) {
                obj['managerMaxExitFee'] = ApiClient.convertToType(data['managerMaxExitFee'], 'Number');
            }
            if (data.hasOwnProperty('managerMaxSignalVolumeFee')) {
                obj['managerMaxSignalVolumeFee'] = ApiClient.convertToType(data['managerMaxSignalVolumeFee'], 'Number');
            }
            if (data.hasOwnProperty('managerMinSignalVolumeFee')) {
                obj['managerMinSignalVolumeFee'] = ApiClient.convertToType(data['managerMinSignalVolumeFee'], 'Number');
            }
            if (data.hasOwnProperty('managerMaxSignalSuccessFee')) {
                obj['managerMaxSignalSuccessFee'] = ApiClient.convertToType(data['managerMaxSignalSuccessFee'], 'Number');
            }
            if (data.hasOwnProperty('managerMinSignalSuccessFee')) {
                obj['managerMinSignalSuccessFee'] = ApiClient.convertToType(data['managerMinSignalSuccessFee'], 'Number');
            }
            if (data.hasOwnProperty('periods')) {
                obj['periods'] = ApiClient.convertToType(data['periods'], ['Number']);
            }
        }
        return obj;
    }

    managerProgramInvestment = undefined;
    managerProgramInvestmentUSD = undefined;
    managerProgramInvestmentUSDT = undefined;
    managerProgramInvestmentBTC = undefined;
    managerProgramInvestmentETH = undefined;
    managerMaxEntryFee = undefined;
    managerMaxSuccessFee = undefined;
    managerFundInvestment = undefined;
    managerMaxExitFee = undefined;
    managerMaxSignalVolumeFee = undefined;
    managerMinSignalVolumeFee = undefined;
    managerMaxSignalSuccessFee = undefined;
    managerMinSignalSuccessFee = undefined;
    periods = undefined;








}






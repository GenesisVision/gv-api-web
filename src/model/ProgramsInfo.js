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
     * @interface ProgramsInfo
     */
    
    /**
     *
     * @name ProgramsInfo#managerProgramInvestment
     * @type {Number}
     */
    /**
     *
     * @name ProgramsInfo#managerMaxEntryFee
     * @type {Number}
     */
    /**
     *
     * @name ProgramsInfo#managerMaxSuccessFee
     * @type {Number}
     */
    /**
     *
     * @name ProgramsInfo#managerFundInvestment
     * @type {Number}
     */
    /**
     *
     * @name ProgramsInfo#managerMaxExitFee
     * @type {Number}
     */
    /**
     *
     * @name ProgramsInfo#periods
     * @type {Array<Number>}
     */





export default class ProgramsInfo {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramsInfo();

            
            
            

            if (data.hasOwnProperty('managerProgramInvestment')) {
                obj['managerProgramInvestment'] = ApiClient.convertToType(data['managerProgramInvestment'], 'Number');
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
            if (data.hasOwnProperty('periods')) {
                obj['periods'] = ApiClient.convertToType(data['periods'], ['Number']);
            }
        }
        return obj;
    }

    managerProgramInvestment = undefined;
    managerMaxEntryFee = undefined;
    managerMaxSuccessFee = undefined;
    managerFundInvestment = undefined;
    managerMaxExitFee = undefined;
    periods = undefined;








}



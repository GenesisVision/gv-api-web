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
import ChartProgramDetails from './ChartProgramDetails';





/**
* The ProgramChart model module.
* @module model/ProgramChart
* @version v1.0
*/
export default class ProgramChart {
    /**
    * Constructs a new <code>ProgramChart</code>.
    * @alias module:model/ProgramChart
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ProgramChart</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProgramChart} obj Optional instance to populate.
    * @return {module:model/ProgramChart} The populated <code>ProgramChart</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramChart();

            
            
            

            if (data.hasOwnProperty('chart')) {
                obj['chart'] = ApiClient.convertToType(data['chart'], [ChartProgramDetails]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/ChartProgramDetails>} chart
    */
    chart = undefined;








}



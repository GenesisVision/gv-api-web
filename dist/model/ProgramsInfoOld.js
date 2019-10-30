import ApiClient from "../ApiClient";
export class ProgramsInfoOld {
    static constructFromObject(data, obj = new ProgramsInfoOld()) {
        if (data) {
            if (data.hasOwnProperty('managerProgramInvestment')) {
                obj['managerProgramInvestment'] = ApiClient.convertToType(data['managerProgramInvestment'], 'number');
            }
            if (data.hasOwnProperty('managerProgramInvestmentUSD')) {
                obj['managerProgramInvestmentUSD'] = ApiClient.convertToType(data['managerProgramInvestmentUSD'], 'number');
            }
            if (data.hasOwnProperty('managerProgramInvestmentUSDT')) {
                obj['managerProgramInvestmentUSDT'] = ApiClient.convertToType(data['managerProgramInvestmentUSDT'], 'number');
            }
            if (data.hasOwnProperty('managerProgramInvestmentBTC')) {
                obj['managerProgramInvestmentBTC'] = ApiClient.convertToType(data['managerProgramInvestmentBTC'], 'number');
            }
            if (data.hasOwnProperty('managerProgramInvestmentETH')) {
                obj['managerProgramInvestmentETH'] = ApiClient.convertToType(data['managerProgramInvestmentETH'], 'number');
            }
            if (data.hasOwnProperty('managerMaxEntryFee')) {
                obj['managerMaxEntryFee'] = ApiClient.convertToType(data['managerMaxEntryFee'], 'number');
            }
            if (data.hasOwnProperty('managerMaxSuccessFee')) {
                obj['managerMaxSuccessFee'] = ApiClient.convertToType(data['managerMaxSuccessFee'], 'number');
            }
            if (data.hasOwnProperty('managerFundInvestment')) {
                obj['managerFundInvestment'] = ApiClient.convertToType(data['managerFundInvestment'], 'number');
            }
            if (data.hasOwnProperty('managerMaxExitFee')) {
                obj['managerMaxExitFee'] = ApiClient.convertToType(data['managerMaxExitFee'], 'number');
            }
            if (data.hasOwnProperty('managerMaxSignalVolumeFee')) {
                obj['managerMaxSignalVolumeFee'] = ApiClient.convertToType(data['managerMaxSignalVolumeFee'], 'number');
            }
            if (data.hasOwnProperty('managerMinSignalVolumeFee')) {
                obj['managerMinSignalVolumeFee'] = ApiClient.convertToType(data['managerMinSignalVolumeFee'], 'number');
            }
            if (data.hasOwnProperty('managerMaxSignalSuccessFee')) {
                obj['managerMaxSignalSuccessFee'] = ApiClient.convertToType(data['managerMaxSignalSuccessFee'], 'number');
            }
            if (data.hasOwnProperty('managerMinSignalSuccessFee')) {
                obj['managerMinSignalSuccessFee'] = ApiClient.convertToType(data['managerMinSignalSuccessFee'], 'number');
            }
            if (data.hasOwnProperty('periods')) {
                obj['periods'] = ApiClient.convertToType(data['periods'], ['number']);
            }
        }
        return obj;
    }
}

import ApiClient from "../ApiClient";
export class ProgramsInfoOld {
    constructor(data) {
        this['managerProgramInvestment'] = data['managerProgramInvestment'];
        this['managerProgramInvestmentUSD'] = data['managerProgramInvestmentUSD'];
        this['managerProgramInvestmentUSDT'] = data['managerProgramInvestmentUSDT'];
        this['managerProgramInvestmentBTC'] = data['managerProgramInvestmentBTC'];
        this['managerProgramInvestmentETH'] = data['managerProgramInvestmentETH'];
        this['managerMaxEntryFee'] = data['managerMaxEntryFee'];
        this['managerMaxSuccessFee'] = data['managerMaxSuccessFee'];
        this['managerFundInvestment'] = data['managerFundInvestment'];
        this['managerMaxExitFee'] = data['managerMaxExitFee'];
        this['managerMaxSignalVolumeFee'] = data['managerMaxSignalVolumeFee'];
        this['managerMinSignalVolumeFee'] = data['managerMinSignalVolumeFee'];
        this['managerMaxSignalSuccessFee'] = data['managerMaxSignalSuccessFee'];
        this['managerMinSignalSuccessFee'] = data['managerMinSignalSuccessFee'];
        this['periods'] = data['periods'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramsInfoOld({
                'managerProgramInvestment': ApiClient.convertToType(data['managerProgramInvestment'], 'number'),
                'managerProgramInvestmentUSD': ApiClient.convertToType(data['managerProgramInvestmentUSD'], 'number'),
                'managerProgramInvestmentUSDT': ApiClient.convertToType(data['managerProgramInvestmentUSDT'], 'number'),
                'managerProgramInvestmentBTC': ApiClient.convertToType(data['managerProgramInvestmentBTC'], 'number'),
                'managerProgramInvestmentETH': ApiClient.convertToType(data['managerProgramInvestmentETH'], 'number'),
                'managerMaxEntryFee': ApiClient.convertToType(data['managerMaxEntryFee'], 'number'),
                'managerMaxSuccessFee': ApiClient.convertToType(data['managerMaxSuccessFee'], 'number'),
                'managerFundInvestment': ApiClient.convertToType(data['managerFundInvestment'], 'number'),
                'managerMaxExitFee': ApiClient.convertToType(data['managerMaxExitFee'], 'number'),
                'managerMaxSignalVolumeFee': ApiClient.convertToType(data['managerMaxSignalVolumeFee'], 'number'),
                'managerMinSignalVolumeFee': ApiClient.convertToType(data['managerMinSignalVolumeFee'], 'number'),
                'managerMaxSignalSuccessFee': ApiClient.convertToType(data['managerMaxSignalSuccessFee'], 'number'),
                'managerMinSignalSuccessFee': ApiClient.convertToType(data['managerMinSignalSuccessFee'], 'number'),
                'periods': ApiClient.convertToType(data['periods'], ['number']),
            });
        }
    }
}

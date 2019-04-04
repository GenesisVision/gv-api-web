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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CoreApiV10);
  }
}(this, function(expect, CoreApiV10) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CoreApiV10.ManagerApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ManagerApi', function() {
    describe('v10ManagerAssetsGet', function() {
      it('should call v10ManagerAssetsGet successfully', function(done) {
        //uncomment below and update the code to test v10ManagerAssetsGet
        //instance.v10ManagerAssetsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerByIdDetailsGet', function() {
      it('should call v10ManagerByIdDetailsGet successfully', function(done) {
        //uncomment below and update the code to test v10ManagerByIdDetailsGet
        //instance.v10ManagerByIdDetailsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerByIdGet', function() {
      it('should call v10ManagerByIdGet successfully', function(done) {
        //uncomment below and update the code to test v10ManagerByIdGet
        //instance.v10ManagerByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerEventsGet', function() {
      it('should call v10ManagerEventsGet successfully', function(done) {
        //uncomment below and update the code to test v10ManagerEventsGet
        //instance.v10ManagerEventsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerFundsByIdAssetsUpdatePost', function() {
      it('should call v10ManagerFundsByIdAssetsUpdatePost successfully', function(done) {
        //uncomment below and update the code to test v10ManagerFundsByIdAssetsUpdatePost
        //instance.v10ManagerFundsByIdAssetsUpdatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerFundsByIdClosePost', function() {
      it('should call v10ManagerFundsByIdClosePost successfully', function(done) {
        //uncomment below and update the code to test v10ManagerFundsByIdClosePost
        //instance.v10ManagerFundsByIdClosePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerFundsByIdInvestByAmountPost', function() {
      it('should call v10ManagerFundsByIdInvestByAmountPost successfully', function(done) {
        //uncomment below and update the code to test v10ManagerFundsByIdInvestByAmountPost
        //instance.v10ManagerFundsByIdInvestByAmountPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerFundsByIdInvestInfoByCurrencyGet', function() {
      it('should call v10ManagerFundsByIdInvestInfoByCurrencyGet successfully', function(done) {
        //uncomment below and update the code to test v10ManagerFundsByIdInvestInfoByCurrencyGet
        //instance.v10ManagerFundsByIdInvestInfoByCurrencyGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerFundsByIdRequestsBySkipByTakeGet', function() {
      it('should call v10ManagerFundsByIdRequestsBySkipByTakeGet successfully', function(done) {
        //uncomment below and update the code to test v10ManagerFundsByIdRequestsBySkipByTakeGet
        //instance.v10ManagerFundsByIdRequestsBySkipByTakeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerFundsByIdUpdatePost', function() {
      it('should call v10ManagerFundsByIdUpdatePost successfully', function(done) {
        //uncomment below and update the code to test v10ManagerFundsByIdUpdatePost
        //instance.v10ManagerFundsByIdUpdatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerFundsByIdWithdrawByPercentPost', function() {
      it('should call v10ManagerFundsByIdWithdrawByPercentPost successfully', function(done) {
        //uncomment below and update the code to test v10ManagerFundsByIdWithdrawByPercentPost
        //instance.v10ManagerFundsByIdWithdrawByPercentPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerFundsByIdWithdrawInfoByCurrencyGet', function() {
      it('should call v10ManagerFundsByIdWithdrawInfoByCurrencyGet successfully', function(done) {
        //uncomment below and update the code to test v10ManagerFundsByIdWithdrawInfoByCurrencyGet
        //instance.v10ManagerFundsByIdWithdrawInfoByCurrencyGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerFundsCreatePost', function() {
      it('should call v10ManagerFundsCreatePost successfully', function(done) {
        //uncomment below and update the code to test v10ManagerFundsCreatePost
        //instance.v10ManagerFundsCreatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerFundsGet', function() {
      it('should call v10ManagerFundsGet successfully', function(done) {
        //uncomment below and update the code to test v10ManagerFundsGet
        //instance.v10ManagerFundsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerFundsInvestmentAmountGet', function() {
      it('should call v10ManagerFundsInvestmentAmountGet successfully', function(done) {
        //uncomment below and update the code to test v10ManagerFundsInvestmentAmountGet
        //instance.v10ManagerFundsInvestmentAmountGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerFundsRequestsByIdCancelPost', function() {
      it('should call v10ManagerFundsRequestsByIdCancelPost successfully', function(done) {
        //uncomment below and update the code to test v10ManagerFundsRequestsByIdCancelPost
        //instance.v10ManagerFundsRequestsByIdCancelPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerGet', function() {
      it('should call v10ManagerGet successfully', function(done) {
        //uncomment below and update the code to test v10ManagerGet
        //instance.v10ManagerGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerPrograms2faConfirmPost', function() {
      it('should call v10ManagerPrograms2faConfirmPost successfully', function(done) {
        //uncomment below and update the code to test v10ManagerPrograms2faConfirmPost
        //instance.v10ManagerPrograms2faConfirmPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerPrograms2faGetGet', function() {
      it('should call v10ManagerPrograms2faGetGet successfully', function(done) {
        //uncomment below and update the code to test v10ManagerPrograms2faGetGet
        //instance.v10ManagerPrograms2faGetGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerProgramsByIdClosePost', function() {
      it('should call v10ManagerProgramsByIdClosePost successfully', function(done) {
        //uncomment below and update the code to test v10ManagerProgramsByIdClosePost
        //instance.v10ManagerProgramsByIdClosePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerProgramsByIdInvestByAmountPost', function() {
      it('should call v10ManagerProgramsByIdInvestByAmountPost successfully', function(done) {
        //uncomment below and update the code to test v10ManagerProgramsByIdInvestByAmountPost
        //instance.v10ManagerProgramsByIdInvestByAmountPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerProgramsByIdInvestInfoByCurrencyGet', function() {
      it('should call v10ManagerProgramsByIdInvestInfoByCurrencyGet successfully', function(done) {
        //uncomment below and update the code to test v10ManagerProgramsByIdInvestInfoByCurrencyGet
        //instance.v10ManagerProgramsByIdInvestInfoByCurrencyGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerProgramsByIdPasswordChangePost', function() {
      it('should call v10ManagerProgramsByIdPasswordChangePost successfully', function(done) {
        //uncomment below and update the code to test v10ManagerProgramsByIdPasswordChangePost
        //instance.v10ManagerProgramsByIdPasswordChangePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerProgramsByIdPeriodClosePost', function() {
      it('should call v10ManagerProgramsByIdPeriodClosePost successfully', function(done) {
        //uncomment below and update the code to test v10ManagerProgramsByIdPeriodClosePost
        //instance.v10ManagerProgramsByIdPeriodClosePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerProgramsByIdRequestsBySkipByTakeGet', function() {
      it('should call v10ManagerProgramsByIdRequestsBySkipByTakeGet successfully', function(done) {
        //uncomment below and update the code to test v10ManagerProgramsByIdRequestsBySkipByTakeGet
        //instance.v10ManagerProgramsByIdRequestsBySkipByTakeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerProgramsByIdUpdatePost', function() {
      it('should call v10ManagerProgramsByIdUpdatePost successfully', function(done) {
        //uncomment below and update the code to test v10ManagerProgramsByIdUpdatePost
        //instance.v10ManagerProgramsByIdUpdatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerProgramsByIdWithdrawByAmountPost', function() {
      it('should call v10ManagerProgramsByIdWithdrawByAmountPost successfully', function(done) {
        //uncomment below and update the code to test v10ManagerProgramsByIdWithdrawByAmountPost
        //instance.v10ManagerProgramsByIdWithdrawByAmountPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerProgramsByIdWithdrawInfoByCurrencyGet', function() {
      it('should call v10ManagerProgramsByIdWithdrawInfoByCurrencyGet successfully', function(done) {
        //uncomment below and update the code to test v10ManagerProgramsByIdWithdrawInfoByCurrencyGet
        //instance.v10ManagerProgramsByIdWithdrawInfoByCurrencyGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerProgramsByIdWithdrawMultiByAmountPost', function() {
      it('should call v10ManagerProgramsByIdWithdrawMultiByAmountPost successfully', function(done) {
        //uncomment below and update the code to test v10ManagerProgramsByIdWithdrawMultiByAmountPost
        //instance.v10ManagerProgramsByIdWithdrawMultiByAmountPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerProgramsCreatePost', function() {
      it('should call v10ManagerProgramsCreatePost successfully', function(done) {
        //uncomment below and update the code to test v10ManagerProgramsCreatePost
        //instance.v10ManagerProgramsCreatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerProgramsGet', function() {
      it('should call v10ManagerProgramsGet successfully', function(done) {
        //uncomment below and update the code to test v10ManagerProgramsGet
        //instance.v10ManagerProgramsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerProgramsInvestmentAmountGet', function() {
      it('should call v10ManagerProgramsInvestmentAmountGet successfully', function(done) {
        //uncomment below and update the code to test v10ManagerProgramsInvestmentAmountGet
        //instance.v10ManagerProgramsInvestmentAmountGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerProgramsRequestsByIdCancelPost', function() {
      it('should call v10ManagerProgramsRequestsByIdCancelPost successfully', function(done) {
        //uncomment below and update the code to test v10ManagerProgramsRequestsByIdCancelPost
        //instance.v10ManagerProgramsRequestsByIdCancelPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerRequestsBySkipByTakeGet', function() {
      it('should call v10ManagerRequestsBySkipByTakeGet successfully', function(done) {
        //uncomment below and update the code to test v10ManagerRequestsBySkipByTakeGet
        //instance.v10ManagerRequestsBySkipByTakeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10ManagerSignalCreatePost', function() {
      it('should call v10ManagerSignalCreatePost successfully', function(done) {
        //uncomment below and update the code to test v10ManagerSignalCreatePost
        //instance.v10ManagerSignalCreatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

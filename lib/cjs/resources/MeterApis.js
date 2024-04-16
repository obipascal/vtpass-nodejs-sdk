"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeterApis = void 0;
const VTPassBaseConfig_1 = require("../configs/VTPassBaseConfig");
const endpoints_1 = require("../configs/endpoints");
class MeterApis extends VTPassBaseConfig_1.VTPassBaseConfig {
    /**
     *  The meter electricity APIs for most providers in Nigeria
     * @param options The configuration options
     */
    constructor(options) {
        super(options);
    }
    /**
     *  Verify Meter
     * @param data The request body
     */
    verify(data) {
        return this.httpClient.post(endpoints_1.EndPoints.general.verifyMerchant, data);
    }
    /**
     *  Purchase Meter Token
     * @param data The request body
     */
    purchase(data) {
        const _data = {
            ...data,
            request_id: this.generateRequestId(),
        };
        return this.httpClient.post(endpoints_1.EndPoints.general.makePayment, _data);
    }
}
exports.MeterApis = MeterApis;

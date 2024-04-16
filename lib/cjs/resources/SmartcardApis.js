"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartcardApis = void 0;
const VTPassBaseConfig_1 = require("../configs/VTPassBaseConfig");
const endpoints_1 = require("../configs/endpoints");
class SmartcardApis extends VTPassBaseConfig_1.VTPassBaseConfig {
    /**
     *  The smartcard APIs for most providers in Nigeria
     * @param options The configuration options
     */
    constructor(options) {
        super(options);
    }
    /**
     *  Verify Smartcard
     * @param data The request body
     */
    async verify(data) {
        return await this.httpClient.post(endpoints_1.EndPoints.general.verifyMerchant, data);
    }
    /**
     *  Fetch Smartcard Products
     * @param provider The provider to fetch products for
     */
    async products(provider) {
        return await this.httpClient.get(endpoints_1.EndPoints.general.fetchProducts?.replace(":provider", provider));
    }
    /**
     *  Purchase Smartcard
     * @param data The request body
     */
    async purchase(data) {
        const _data = {
            ...data,
            request_id: this.generateRequestId(),
        };
        return await this.httpClient.post(endpoints_1.EndPoints.general.makePayment, _data);
    }
}
exports.SmartcardApis = SmartcardApis;

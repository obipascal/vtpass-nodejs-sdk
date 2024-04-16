import { VTPassBaseConfig } from "../configs/VTPassBaseConfig";
import { EndPoints } from "../configs/endpoints";
export class SmartcardApis extends VTPassBaseConfig {
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
        return await this.httpClient.post(EndPoints.general.verifyMerchant, data);
    }
    /**
     *  Fetch Smartcard Products
     * @param provider The provider to fetch products for
     */
    async products(provider) {
        return await this.httpClient.get(EndPoints.general.fetchProducts?.replace(":provider", provider));
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
        return await this.httpClient.post(EndPoints.general.makePayment, _data);
    }
}

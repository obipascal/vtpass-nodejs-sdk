import { VTPassBaseConfig } from "../configs/VTPassBaseConfig";
import { EndPoints } from "../configs/endpoints";
export class MeterApis extends VTPassBaseConfig {
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
        return this.httpClient.post(EndPoints.general.verifyMerchant, data);
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
        return this.httpClient.post(EndPoints.general.makePayment, _data);
    }
}

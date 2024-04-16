import { VTPassBaseConfig } from "../configs/VTPassBaseConfig";
import { EndPoints } from "../configs/endpoints";
import {
    MeterTransactionResponse,
    MeterVerificationResponse,
    VTPassBaseResponse,
    VTPassConfigOptions,
    VTPassMeterTokenTransactionResponse,
} from "../types";
import {
    MeterTokenBody,
    PurchaseMeterTokenBody,
    VerifyMeterBody,
} from "../types/meter";

export class MeterApis extends VTPassBaseConfig {
    /**
     *  The meter electricity APIs for most providers in Nigeria
     * @param options The configuration options
     */
    constructor(options: VTPassConfigOptions) {
        super(options);
    }

    /**
     *  Verify Meter
     * @param data The request body
     */
    verify(
        data: VerifyMeterBody
    ): Promise<VTPassBaseResponse<MeterVerificationResponse>> {
        return this.httpClient.post(EndPoints.general.verifyMerchant, data);
    }

    /**
     *  Purchase Meter Token
     * @param data The request body
     */
    purchase(
        data: MeterTokenBody
    ): Promise<VTPassMeterTokenTransactionResponse<MeterTransactionResponse>> {
        const _data: PurchaseMeterTokenBody = {
            ...data,
            request_id: this.generateRequestId(),
        };
        return this.httpClient.post(EndPoints.general.makePayment, _data);
    }
}

import { VTPassBaseConfig } from "../configs/VTPassBaseConfig";
import { MeterTransactionResponse, MeterVerificationResponse, VTPassBaseResponse, VTPassConfigOptions, VTPassMeterTokenTransactionResponse } from "../types";
import { MeterTokenBody, VerifyMeterBody } from "../types/meter";
export declare class MeterApis extends VTPassBaseConfig {
    /**
     *  The meter electricity APIs for most providers in Nigeria
     * @param options The configuration options
     */
    constructor(options: VTPassConfigOptions);
    /**
     *  Verify Meter
     * @param data The request body
     */
    verify(data: VerifyMeterBody): Promise<VTPassBaseResponse<MeterVerificationResponse>>;
    /**
     *  Purchase Meter Token
     * @param data The request body
     */
    purchase(data: MeterTokenBody): Promise<VTPassMeterTokenTransactionResponse<MeterTransactionResponse>>;
}

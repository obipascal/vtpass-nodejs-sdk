import { VTPassBaseConfig } from "../configs/VTPassBaseConfig";
import { MeterTransactionResponse, MeterVerificationResponse, VTPassConfigOptions, VTPassMeterTokenTransactionResponse, VTPassServicesBaseResponse } from "../types";
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
    verify(data: VerifyMeterBody): Promise<VTPassServicesBaseResponse<MeterVerificationResponse>>;
    /**
     *  Purchase Meter Token
     * @param data The request body
     */
    purchase(data: MeterTokenBody): Promise<VTPassMeterTokenTransactionResponse<MeterTransactionResponse>>;
}

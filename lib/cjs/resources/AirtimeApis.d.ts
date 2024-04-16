import { AirtimeBody, AirtimeTransactionResponse, VTPassBaseResponse, VTPassConfigOptions } from "../types";
import { VTPassBaseConfig } from "../configs/VTPassBaseConfig";
export declare class AirtimeApis extends VTPassBaseConfig {
    constructor(options: VTPassConfigOptions);
    /**
     *  Buy MTN airtime
     * @param data The request body
     */
    buyMtnAirtime(data: AirtimeBody): Promise<VTPassBaseResponse<AirtimeTransactionResponse>>;
    /**
     *  Buy Airtel airtime
     * @param data The request body
     */
    buyAirtelAirtime(data: AirtimeBody): Promise<VTPassBaseResponse<AirtimeTransactionResponse>>;
    /**
     *  Buy Glo airtime
     * @param data The request body
     */
    buyGloAirtime(data: AirtimeBody): Promise<VTPassBaseResponse<AirtimeTransactionResponse>>;
    /**
     *  Buy Etisalat airtime
     * @param data The request body
     */
    buyEtisalatAirtime(data: AirtimeBody): Promise<VTPassBaseResponse<AirtimeTransactionResponse>>;
}

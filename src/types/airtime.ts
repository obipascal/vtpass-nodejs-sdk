import { AxiosResponse } from "axios";
import { VTPassBaseConfig, VTPassConfigOptions } from "./configs";
import { AirtimeTransactionResponse, VTPassBaseResponse } from "./responses";

export type AirtimeBody = {
    /** The amount you wish to topup */
    amount: number;
    /** The phone number of the recipient of this service */
    phone: string;
};
export type AirtimeRequestBody = {
    request_id: string;
    /** Service ID as specified by VTpass. allowed values are `mtn`, `airtel`, `glo`, `etisalat`   */
    serviceID?: "mtn" | "airtel" | "glo" | "etisalat";
    /** The amount you wish to topup */
    amount: number;
    /** The phone number of the recipient of this service */
    phone: string;
};

export declare class AirtimeApis extends VTPassBaseConfig {
    /**
     * Airtime APIs
     * @param options The configuration options
     */
    constructor(options: VTPassConfigOptions);

    /**
     *  Buy MTN airtime
     * @param data The request body
     */
    buyMtnAirtime(
        data: AirtimeBody
    ): Promise<VTPassBaseResponse<AirtimeTransactionResponse>>;

    /**
     *  Buy Airtel airtime
     * @param data The request body
     */
    buyAirtelAirtime(
        data: AirtimeBody
    ): Promise<VTPassBaseResponse<AirtimeTransactionResponse>>;

    /**
     *  Buy Glo airtime
     * @param data The request body
     */
    buyGloAirtime(
        data: AirtimeBody
    ): Promise<VTPassBaseResponse<AirtimeTransactionResponse>>;

    /**
     *  Buy Etisalat airtime
     * @param data The request body
     */
    buyEtisalatAirtime(
        data: AirtimeBody
    ): Promise<VTPassBaseResponse<AirtimeTransactionResponse>>;
}

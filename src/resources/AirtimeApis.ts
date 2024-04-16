import {
    AirtimeBody,
    AirtimeRequestBody,
    AirtimeTransactionResponse,
    VTPassBaseResponse,
    VTPassConfigOptions,
} from "../types";

import { EndPoints } from "../configs/endpoints";
import { VTPassBaseConfig } from "../configs/VTPassBaseConfig";

export class AirtimeApis extends VTPassBaseConfig {
    constructor(options: VTPassConfigOptions) {
        super(options);
    }

    /**
     *  Buy MTN airtime
     * @param data The request body
     */
    async buyMtnAirtime(
        data: AirtimeBody
    ): Promise<VTPassBaseResponse<AirtimeTransactionResponse>> {
        const _data: AirtimeRequestBody = {
            ...data,
            serviceID: "mtn",
            request_id: this.generateRequestId(),
        };

        return await this.httpClient.post(EndPoints.general.makePayment, _data);
    }

    /**
     *  Buy Airtel airtime
     * @param data The request body
     */
    async buyAirtelAirtime(
        data: AirtimeBody
    ): Promise<VTPassBaseResponse<AirtimeTransactionResponse>> {
        const _data: AirtimeRequestBody = {
            ...data,
            serviceID: "airtel",
            request_id: this.generateRequestId(),
        };
        return await this.httpClient.post(EndPoints.general.makePayment, _data);
    }

    /**
     *  Buy Glo airtime
     * @param data The request body
     */
    async buyGloAirtime(
        data: AirtimeBody
    ): Promise<VTPassBaseResponse<AirtimeTransactionResponse>> {
        const _data: AirtimeRequestBody = {
            ...data,
            serviceID: "glo",
            request_id: this.generateRequestId(),
        };
        return await this.httpClient.post(EndPoints.general.makePayment, _data);
    }

    /**
     *  Buy Etisalat airtime
     * @param data The request body
     */
    async buyEtisalatAirtime(
        data: AirtimeBody
    ): Promise<VTPassBaseResponse<AirtimeTransactionResponse>> {
        const _data: AirtimeRequestBody = {
            ...data,
            serviceID: "etisalat",
            request_id: this.generateRequestId(),
        };
        return await this.httpClient.post(EndPoints.general.makePayment, _data);
    }
}

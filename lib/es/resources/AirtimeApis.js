import { EndPoints } from "../configs/endpoints";
import { VTPassBaseConfig } from "../configs/VTPassBaseConfig";
export class AirtimeApis extends VTPassBaseConfig {
    constructor(options) {
        super(options);
    }
    /**
     *  Buy MTN airtime
     * @param data The request body
     */
    async buyMtnAirtime(data) {
        const _data = {
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
    async buyAirtelAirtime(data) {
        const _data = {
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
    async buyGloAirtime(data) {
        const _data = {
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
    async buyEtisalatAirtime(data) {
        const _data = {
            ...data,
            serviceID: "etisalat",
            request_id: this.generateRequestId(),
        };
        return await this.httpClient.post(EndPoints.general.makePayment, _data);
    }
}

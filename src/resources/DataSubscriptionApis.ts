import { VTPassBaseConfig } from "../configs/VTPassBaseConfig";
import { EndPoints } from "../configs/endpoints";
import {
    DataSubBody,
    DataSubProductItem,
    DataSubPurchaseBody,
    VTPassBaseResponse,
} from "../types";

export class DataSubscriptionApis extends VTPassBaseConfig {
    /**
     *  The data subscription APIs for most providers in Nigeria
     * @param options  The configuration options
     */
    constructor(options: any) {
        super(options);
    }

    /**
     *  Fetch data products
     * @param provider The provider to fetch products for
     */
    async products(
        provider: string
    ): Promise<VTPassBaseResponse<any, Array<DataSubProductItem>>> {
        return await this.httpClient.get(
            EndPoints.general.fetchProducts?.replace(":provider", provider)
        );
    }

    /**
     *  Purchase Data Subscription
     * @param data The request body
     */
    async purchase(data: DataSubBody): Promise<VTPassBaseResponse<any>> {
        const _data: DataSubPurchaseBody = {
            ...data,
            request_id: this.generateRequestId(),
        };
        return await this.httpClient.post(EndPoints.general.makePayment, _data);
    }
}

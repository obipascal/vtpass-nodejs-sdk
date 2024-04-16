import { VTPassBaseConfig } from "../configs/VTPassBaseConfig";
import { DataSubBody, DataSubProductItem, VTPassBaseResponse } from "../types";
export declare class DataSubscriptionApis extends VTPassBaseConfig {
    /**
     *  The data subscription APIs for most providers in Nigeria
     * @param options  The configuration options
     */
    constructor(options: any);
    /**
     *  Fetch data products
     * @param provider The provider to fetch products for
     */
    products(provider: string): Promise<VTPassBaseResponse<any, Array<DataSubProductItem>>>;
    /**
     *  Purchase Data Subscription
     * @param data The request body
     */
    purchase(data: DataSubBody): Promise<VTPassBaseResponse<any>>;
}

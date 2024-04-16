import { VTPassConfigOptions } from "./configs";
import { DataSubProviders, ResponseStatus } from "./const";
import { VTPassBaseResponse } from "./responses";
export type DataSubProductItem = {
    variation_code: string;
    name: string;
    variation_amount: string;
    fixedPrice: string;
};
export interface DataSubBody {
    /** Service ID as specified by VTpass. */
    serviceID: DataSubProviders;
    /** The phone number you wish to make the Subscription payment on */
    billersCode: string;
    /** The code of the variation (as specified in the GET VARIATIONS method as variation_code). */
    variation_code: string;
    /** The amount of the variation (as specified in the GET VARIATIONS endpoint as variation_amount) This amount will be ignored as the variation code determine the price of the data bundle. */
    amount?: number;
    /** The phone number of the customer or recipient of this service */
    phone: string;
}
export interface DataSubPurchaseBody extends DataSubBody {
    /** This is a unique reference with which you can use to identify and query the status of a given transaction after the transaction has been executed. */
    request_id: string;
}
export interface DataSubTransactionResponse {
    status: ResponseStatus;
    product_name: string;
    unique_element: string;
    unit_price: number;
    quantity: number;
    service_verification: string;
    channel: string;
    commission: number;
    total_amount: number;
    discount: number | null;
    type: string;
    email: string;
    phone: string;
    name: string | null;
    convinience_fee: number;
    amount: number;
    platform: string;
    method: string;
    transactionId: string;
}
export declare class DataSubscriptionApis {
    /**
     *  Data Subscription APIs
     * @param options  The configuration options
     */
    constructor(options: VTPassConfigOptions);
    /**
     *  Fetch data products
     * @param provider The data service provider
     */
    products(provider: string): Promise<VTPassBaseResponse<any, Array<DataSubProductItem>>>;
    /**
     *  Purchase Data Subscription
     * @param data The request body
     */
    purchase(data: DataSubBody): Promise<VTPassBaseResponse<DataSubTransactionResponse>>;
}

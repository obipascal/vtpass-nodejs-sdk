import { VTPassConfigOptions } from "./configs";
import { SmartcardProviders, SmartcardSubscriptionType } from "./const";
import { SmartcardProductItem, SmartcardTransactionResponse, SmartcardVerificationResponse, VTPassBaseResponse } from "./responses";
export type SmartcardMerchantVerificationBody = {
    billersCode: string;
    serviceID: SmartcardProviders;
};
export interface SmartcardRequestBody {
    /** Service ID as specified by VTpass. */
    serviceID: SmartcardProviders;
    /** The smart card number you wish to make the Subscription payment on */
    billersCode: string;
    /** The code of the variation of the bouquet (as specified in the GET VARIATIONS method as variation_code). */
    variation_code: string;
    /**
    The amount of the variation (as specified in the GET VARIATIONS endpoint as variation_amount)
    _______________________________________________________
    NOTE: This is optional. If you specify amount, we will topup decoder with the amount. If you do not specify amount, then we will use the price set for the bouquet (as returned in GET VARIATION CODES endpoint)
    */
    amount: number;
    /** The phone number of the customer or recipient of this service */
    phone: string;
    /** The type of subscription */
    subscription_type: SmartcardSubscriptionType;
    /** The number of months viewing month e.g 1 */
    quantity: string;
}
export interface SmartcardPurchaseRequestBody extends SmartcardRequestBody {
    /** This is a unique reference with which you can use to identify and query the status of a given transaction after the transaction has been executed. */
    request_id: string;
}
export declare class SmartcardApis {
    /**
     * Smartcard APIs
     * @param options The configuration options
     */
    constructor(options: VTPassConfigOptions);
    /**
     *  Verify Smartcard
     * @param data The request body
     */
    verify(data: SmartcardMerchantVerificationBody): Promise<VTPassBaseResponse<SmartcardVerificationResponse>>;
    /**
     *  Fetch Smartcard Products
     * @param provider The provider to fetch products for
     */
    products(provider: string): Promise<VTPassBaseResponse<any, Array<SmartcardProductItem>>>;
    /**
     *  Purchase Smartcard
     * @param data The request body
     */
    purchase(data: SmartcardRequestBody): Promise<VTPassBaseResponse<SmartcardTransactionResponse>>;
}

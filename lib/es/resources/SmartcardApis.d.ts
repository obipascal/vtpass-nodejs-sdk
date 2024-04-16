import { VTPassBaseConfig } from "../configs/VTPassBaseConfig";
import { SmartcardVerificationResponse, VTPassBaseResponse, VTPassConfigOptions, SmartcardMerchantVerificationBody, SmartcardRequestBody, SmartcardTransactionResponse, SmartcardProductItem } from "../types";
export declare class SmartcardApis extends VTPassBaseConfig {
    /**
     *  The smartcard APIs for most providers in Nigeria
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

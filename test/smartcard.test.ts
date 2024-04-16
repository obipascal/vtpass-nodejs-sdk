import { SmartcardApis } from "../src";
import {
    ResponseCodes,
    SmartcardProviders,
    VTPassConfigOptions,
    SmartcardMerchantVerificationBody,
    SmartcardRequestBody,
    SmartcardSubscriptionType,
    ResponseStatus,
} from "../src/types";

describe("Smartcard", () => {
    // verify smartcard
    it("verifySmartcard", async () => {
        // You can defind this config options somewhere in your project configs and export it for reuse.
        const options: VTPassConfigOptions = {
            username: process.env.VTPASS_USERNAME,
            password: process.env.VTPASS_PASSWORD,
            env: "sandbox", // "sandbox" | "production"
            authType: "basic", // possible values:  "basic" | "apikey" | "all"
        };

        const smartcard = new SmartcardApis(options);
        // Request data
        const data: SmartcardMerchantVerificationBody = {
            billersCode: "1212121212",
            serviceID: SmartcardProviders.GOTV,
        };

        const response = await smartcard.verify(data);

        // Check that the request was successful
        if (response.code !== ResponseCodes.SUCCESS) {
            throw new Error("Request failed");
        }

        expect(response?.content).toHaveProperty("Customer_Name");
    });

    // fetch smartcard products
    it("fetchSmartcardProducts", async () => {
        // Request configuration
        const options: VTPassConfigOptions = {
            username: process.env.VTPASS_USERNAME,
            password: process.env.VTPASS_PASSWORD,
            env: "sandbox", // "sandbox" | "production"
            authType: "basic", // possible values:  "basic" | "apikey" | "all"
        };

        // Instanciate the SmartcardApis class
        const smartcard = new SmartcardApis(options);

        const response = await smartcard.products(SmartcardProviders.GOTV);

        // Check that the request was successful

        expect(response?.content).toHaveProperty("varations");
    });

    // purchase smartcard
    it("purchaseSmartcard", async () => {
        // Request configuration
        const options: VTPassConfigOptions = {
            username: process.env.VTPASS_USERNAME,
            password: process.env.VTPASS_PASSWORD,
            env: "sandbox", // "sandbox" | "production"
            authType: "basic", // possible values:  "basic" | "apikey" | "all"
        };

        // Instanciate the SmartcardApis class
        const smartcard = new SmartcardApis(options);

        // fetch the products
        const prdoucts = await smartcard.products(SmartcardProviders.DSTV);

        // Perpare your request body data
        const data: SmartcardRequestBody = {
            serviceID: SmartcardProviders.DSTV,
            billersCode: "1212121212",
            variation_code:
                prdoucts?.content?.varations[0].variation_code || "",
            amount:
                (prdoucts?.content?.varations[0]
                    .variation_amount as any as number) || 0,
            phone: "08012345678",
            subscription_type: SmartcardSubscriptionType.CHANGE,
            quantity: "2",
        };

        const response = await smartcard.purchase(data);

        expect(response?.content?.transactions?.status).toBe(
            ResponseStatus.DELIVERED
        );
    });
});

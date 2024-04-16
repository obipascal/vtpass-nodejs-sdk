import { DataSubscriptionApis } from "../src";
import {
    DataSubBody,
    DataSubProviders,
    VTPassConfigOptions,
} from "../src/types";

describe("Data Subscription", () => {
    // fetch data products
    it("fetchDataProducts", async () => {
        // Request configuration
        const options: VTPassConfigOptions = {
            username: process.env.VTPASS_USERNAME,
            password: process.env.VTPASS_PASSWORD,
            env: "sandbox", // "sandbox" | "production"
            authType: "basic", // possible values:  "basic" | "apikey" | "all"
        };

        // Instanciate the DataSubscriptionApis class
        const dataSub = new DataSubscriptionApis(options);

        const response = await dataSub.products(DataSubProviders.MTN);

        // Check that the request was successful

        expect(response?.content).toHaveProperty("varations");
    });

    // purchase data subscription
    it("purchaseDataSubscription", async () => {
        // Request configuration
        const options: VTPassConfigOptions = {
            username: process.env.VTPASS_USERNAME,
            password: process.env.VTPASS_PASSWORD,
            env: "sandbox", // "sandbox" | "production"
            authType: "basic", // possible values:  "basic" | "apikey" | "all"
        };

        // Instanciate the DataSubscriptionApis class
        const dataSub = new DataSubscriptionApis(options);

        // Fetch the product variations
        const products = await dataSub.products(DataSubProviders.MTN);

        // Request data
        const data: DataSubBody = {
            serviceID: DataSubProviders.MTN,
            billersCode: "08011111111",
            variation_code: products?.content.varations[0].variation_code || "",
            phone: "08012345678",
        };

        const response = await dataSub.purchase(data);

        // Check that the request was successful

        expect(response?.content?.transactions).toHaveProperty("transactionId");
    });
});

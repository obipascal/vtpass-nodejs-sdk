import { MeterApis } from "../src";
import {
    MeterServiceIDs,
    MeterType,
    ResponseCodes,
    ResponseStatus,
    VTPassConfigOptions,
} from "../src/types";
import { MeterTokenBody, VerifyMeterBody } from "../src/types/meter";

describe("Meter", () => {
    // verify meter
    it("verifyMeter", async () => {
        // You can defind this config options somewhere in your project configs and export it for reuse.
        const options: VTPassConfigOptions = {
            username: process.env.VTPASS_USERNAME,
            password: process.env.VTPASS_PASSWORD,
            env: "sandbox", // "sandbox" | "production"
            authType: "basic", // possible values:  "basic" | "apikey" | "all"
        };

        const meter = new MeterApis(options);
        // Request data
        const data: VerifyMeterBody = {
            type: "prepaid",
            billersCode: "1111111111111",
            serviceID: MeterServiceIDs.AbujaElectric,
        };

        const response = await meter.verify(data);

        // Check that the request was successful
        if (response.code !== ResponseCodes.SUCCESS) {
            throw new Error("Request failed");
        }

        expect(response?.content).toHaveProperty("Customer_Name");
    });

    // purchase meter token
    it("purchaseMeterToken", async () => {
        // Request configuration
        const options: VTPassConfigOptions = {
            username: process.env.VTPASS_USERNAME,
            password: process.env.VTPASS_PASSWORD,
            env: "sandbox", // "sandbox" | "production"
            authType: "basic", // possible values:  "basic" | "apikey" | "all"
        };

        // Instanciate the MeterApis class
        const meter = new MeterApis(options);

        // Perpare your request body data
        const data: MeterTokenBody = {
            serviceID: MeterServiceIDs.AbujaElectric,
            billersCode: "1111111111111",
            variation_code: MeterType.PREPAID,
            amount: 2000,
            phone: "08012345678",
        };

        // Initiate the request
        const response = await meter.purchase(data);
        if (response.code !== ResponseCodes.SUCCESS) {
            throw new Error("Request failed");
        }

        // Make sure request succeeded
        expect(response?.content?.transactions?.status).toBe(
            ResponseStatus.DELIVERED
        );
    });
});

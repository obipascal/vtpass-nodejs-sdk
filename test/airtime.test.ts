import { AirtimeApis } from "../src";
import {
    AirtimeBody,
    ResponseCodes,
    ResponseStatus,
    VTPassConfigOptions,
} from "../src/types";

describe("Airtime", () => {
    // buy airtime for MTN
    it("buyMtnAirtime", async () => {
        // You can defind this config options somewhere in your project configs and export it for reuse.
        const options: VTPassConfigOptions = {
            username: process.env.VTPASS_USERNAME,
            password: process.env.VTPASS_PASSWORD,
            env: "sandbox", // "sandbox" | "production"
            authType: "basic", // possible values:  "basic" | "apikey" | "all"
        };

        const airtime = new AirtimeApis(options);
        // Request data
        const data: AirtimeBody = {
            amount: 100,
            phone: process.env.VTPASS_TEST_PHONE_NUMBER as string, // For test purposes use the VTPass api documentation phone number
        };

        const response = await airtime.buyMtnAirtime(data);
        // Check that the request was successful
        if (response.code !== ResponseCodes.SUCCESS) {
            throw new Error("Request failed");
        }

        expect(response?.content?.transactions?.status).toBe(
            ResponseStatus.DELIVERED
        );
    });

    // buy airtime for Airtel
    it("buyAirtelAirtime", async () => {
        const options: VTPassConfigOptions = {
            username: process.env.VTPASS_USERNAME,
            password: process.env.VTPASS_PASSWORD,
            env: "sandbox", // "sandbox" | "production"
            authType: "basic", // possible values:  "basic" | "apikey" | "all"
        };

        const airtime = new AirtimeApis(options);
        const data: AirtimeBody = {
            amount: 100,
            phone: process.env.VTPASS_TEST_PHONE_NUMBER as string,
        };

        const response = await airtime.buyAirtelAirtime(data);
        if (response.code !== ResponseCodes.SUCCESS) {
            throw new Error("Request failed");
        }

        expect(response?.content?.transactions?.status).toBe(
            ResponseStatus.DELIVERED
        );
    });

    // buy airtime for Glo
    it("buyGloAirtime", async () => {
        const options: VTPassConfigOptions = {
            username: process.env.VTPASS_USERNAME,
            password: process.env.VTPASS_PASSWORD,
            env: "sandbox", // "sandbox" | "production"
            authType: "basic", // possible values:  "basic" | "apikey" | "all"
        };

        const airtime = new AirtimeApis(options);
        const data: AirtimeBody = {
            amount: 100,
            phone: process.env.VTPASS_TEST_PHONE_NUMBER as string,
        };

        const response = await airtime.buyGloAirtime(data);
        if (response.code !== ResponseCodes.SUCCESS) {
            throw new Error("Request failed");
        }

        expect(response?.content?.transactions?.status).toBe(
            ResponseStatus.DELIVERED
        );
    });

    // buy airtime for Etisalat
    it("buyEtisalatAirtime", async () => {
        const options: VTPassConfigOptions = {
            username: process.env.VTPASS_USERNAME,
            password: process.env.VTPASS_PASSWORD,
            env: "sandbox", // "sandbox" | "production"
            authType: "basic", // possible values:  "basic" | "apikey" | "all"
        };

        const airtime = new AirtimeApis(options);
        const data: AirtimeBody = {
            amount: 100,
            phone: process.env.VTPASS_TEST_PHONE_NUMBER as string,
        };

        const response = await airtime.buyEtisalatAirtime(data);
        if (response.code !== ResponseCodes.SUCCESS) {
            throw new Error("Request failed");
        }

        expect(response?.content?.transactions?.status).toBe(
            ResponseStatus.DELIVERED
        );
    });
});

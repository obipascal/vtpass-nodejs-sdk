"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VTPassBaseConfig = void 0;
const httpClient_1 = require("./httpClient");
const date_1 = require("../utils/date");
class VTPassBaseConfig {
    SANDBOX_URL = "https://sandbox.vtpass.com/api";
    PRODUCTION_URL = "https://vtpass.com/api";
    BASE_URL = "";
    ENV = "sandbox";
    AUTH_TYPE = "basic";
    httpClient;
    constructor(options) {
        // Set the environment
        this.ENV = options?.env || "sandbox";
        // Set the authentication type
        this.AUTH_TYPE = options?.authType || "all";
        // Config the api base url based on the user supplied environment value.
        this.BASE_URL =
            this.ENV === "production" ? this.PRODUCTION_URL : this.SANDBOX_URL;
        // Create an instance of the http client
        this.httpClient = (0, httpClient_1.default)(this.BASE_URL, options);
    }
    /**
     * Generate a unique request ID
     * ______________________________________________________
     * The Request ID should be a string in the unix format YYYYMMDDHHII consisting of today’s date + current hour and minute (e.g: 202201301610) and can be concatenated with any other alphanumeric string as desired (e.g: 202201301610ad8ef08acd8fc0f or 2022013016104738492849).
     */
    generateRequestId() {
        const date = new Date();
        const formattedDate = (0, date_1.formatDateTime)(date);
        // generate some random IDs with a legnth of 8 and append it at the end
        const randomId = Math.random().toString(36).substring(2, 10);
        return `${formattedDate}${randomId}`;
    }
}
exports.VTPassBaseConfig = VTPassBaseConfig;

import { AxiosInstance } from "axios";
import { VTPassConfigOptions } from "../types";
import HttpRequestClient from "./httpClient";
import { formatDateTime } from "../utils/date";

export class VTPassBaseConfig {
    private SANDBOX_URL: string = "https://sandbox.vtpass.com/api";
    private PRODUCTION_URL: string = "https://vtpass.com/api";
    private BASE_URL: string = "";
    private ENV: "sandbox" | "production" = "sandbox";
    private AUTH_TYPE: "basic" | "apikey" | "all" = "basic";
    public httpClient: AxiosInstance;

    constructor(options: VTPassConfigOptions) {
        // Set the environment
        this.ENV = options?.env || "sandbox";
        // Set the authentication type
        this.AUTH_TYPE = options?.authType || "all";

        // Config the api base url based on the user supplied environment value.
        this.BASE_URL =
            this.ENV === "production" ? this.PRODUCTION_URL : this.SANDBOX_URL;

        // Create an instance of the http client
        this.httpClient = HttpRequestClient(this.BASE_URL, options);
    }

    /**
     * Generate a unique request ID
     * ______________________________________________________
     * The Request ID should be a string in the unix format YYYYMMDDHHII consisting of today’s date + current hour and minute (e.g: 202201301610) and can be concatenated with any other alphanumeric string as desired (e.g: 202201301610ad8ef08acd8fc0f or 2022013016104738492849).
     */
    generateRequestId(): string {
        const date = new Date();
        const formattedDate = formatDateTime(date);

        // generate some random IDs with a legnth of 8 and append it at the end
        const randomId = Math.random().toString(36).substring(2, 10);
        return `${formattedDate}${randomId}`;
    }
}

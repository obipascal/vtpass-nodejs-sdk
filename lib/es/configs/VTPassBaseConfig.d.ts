import { AxiosInstance } from "axios";
import { VTPassConfigOptions } from "../types";
export declare class VTPassBaseConfig {
    private SANDBOX_URL;
    private PRODUCTION_URL;
    private BASE_URL;
    private ENV;
    private AUTH_TYPE;
    httpClient: AxiosInstance;
    constructor(options: VTPassConfigOptions);
    /**
     * Generate a unique request ID
     * ______________________________________________________
     * The Request ID should be a string in the unix format YYYYMMDDHHII consisting of today’s date + current hour and minute (e.g: 202201301610) and can be concatenated with any other alphanumeric string as desired (e.g: 202201301610ad8ef08acd8fc0f or 2022013016104738492849).
     */
    generateRequestId(): string;
}

import { AxiosInstance } from "axios";
export interface VTPassConfigOptions {
    username?: string;
    password?: string;
    env: "sandbox" | "production";
    pubKey?: string;
    secKey?: string;
    apiKey?: string;
    authType: "basic" | "apikey" | "all";
}
export interface HttpRequestClientOptions extends VTPassConfigOptions {
}
export declare class VTPassBaseConfig {
    /** Sandbox URL */
    private SANDBOX_URL;
    /** Production URL */
    private PRODUCTION_URL;
    /** Base URL */
    private BASE_URL;
    /** Environment */
    private ENV;
    /** Public Key */
    private PUB_KEY;
    /** Authentication Type */
    private AUTH_TYPE;
    /** HTTP Client */
    httpClient: AxiosInstance;
    /**
     * VTPass Base Configuration
     * @param options The configuration options
     */
    constructor(options: VTPassConfigOptions);
    /**
     * Generate a unique request ID
     * ______________________________________________________
     * The Request ID should be a string in the unix format YYYYMMDDHHII consisting of today’s date + current hour and minute (e.g: 202201301610) and can be concatenated with any other alphanumeric string as desired (e.g: 202201301610ad8ef08acd8fc0f or 2022013016104738492849).
     */
    generateRequestId(): string;
}

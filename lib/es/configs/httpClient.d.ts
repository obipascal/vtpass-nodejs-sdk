import { HttpRequestClientOptions } from "../types";
/**
 * Create and return an axios instance
 * @param apiKey Paystack API key
 */
export default function HttpRequestClient(baseUrl: string, options: HttpRequestClientOptions): import("axios").AxiosInstance;

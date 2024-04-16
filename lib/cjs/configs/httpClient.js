"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
/**
 * Create and return an axios instance
 * @param apiKey Paystack API key
 */
function HttpRequestClient(baseUrl, options) {
    // Set the request headers
    const headers = {
        "Content-Type": "application/json",
    };
    //   Create an axios instance
    const instance = axios_1.default.create({
        baseURL: baseUrl,
        headers: headers,
    });
    // Interceptor to handle request
    instance.interceptors.request.use((config) => {
        // determind the authentication type and set the right headers
        switch (options?.authType) {
            // Basic authentication type
            case "basic":
                // set the basic auth headers
                config.headers["Authorization"] = `Basic ${Buffer.from(`${options?.username}:${options?.password}`).toString("base64")}`;
                break;
            // Api key authentication type
            case "apikey":
                // determind the request method type before setting the headers
                if (config?.method === "get") {
                    // use the api key and public key
                    config.headers["api-key"] = options?.apiKey;
                    config.headers["public-key"] = options?.pubKey;
                }
                else {
                    // only use the api key and secret key  for other request method type
                    config.headers["api-key"] = options?.apiKey;
                    config.headers["secret-key"] = options?.secKey;
                }
                break;
            // Handle authentication when user has all authentication enabled on their integration.
            case "all":
                // determind which paramters in the options are available and set the right headers
                if (options?.apiKey) {
                    // determind the request method type before setting the headers
                    if (config?.method === "get") {
                        // use the api key and public key
                        config.headers["api-key"] = options?.apiKey;
                        config.headers["public-key"] = options?.pubKey;
                    }
                    else {
                        // only use the api key and secret key  for other request method type
                        config.headers["api-key"] = options?.apiKey;
                        config.headers["secret-key"] = options?.secKey;
                    }
                }
                else {
                    // set the basic auth headers
                    config.headers["Authorization"] = `Basic ${Buffer.from(`${options?.username}:${options?.password}`).toString("base64")}`;
                }
                break;
            // All authentication type
            default:
                throw new Error("Invalid authentication type. Please provide a valid authentication type.");
        }
        // after modifying the request config, return it
        return config;
    });
    instance.interceptors.response.use((response) => {
        return Promise.resolve(response?.data);
    }, (error) => {
        return Promise.reject(error?.response?.data);
    });
    return instance;
}
exports.default = HttpRequestClient;

## VTPass Library For NodeJS

A Node.js package that facilitates type checking and offers compatibility with both CommonJS and ES6 environments within TypeScript. This package utilizes Axios as its HTTP client for seamless communication with the Paystack backend.

### Paystack Resource Available

-   Airtime
-   Data Subscription
-   Electricity Bills
-   Cable TV Subscription

### Installation

```
npm install @obipascal/vtpass-nodejs-sdk
```

or

```
yarn add @obipascal/vtpass-nodejs-sdk
```

### Usage

```js
// import the resource you want to consume
import { VTPassConfigOptions, AirtimeBody, ResponseStatus, ResponseCodes  } from "@obipascal/vtpass-nodejs-sdk";

  // You can defind this config options somewhere in your project configs and export it for reuse. If you are using the apikey as your authentication option make sure that is also so provided to the VTPassBaseConfig. By default those are optional.
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

```

### Configuration options types

```js
export interface VTPassConfigOptions {
    username?: string;
    password?: string;
    env: "sandbox" | "production";
    pubKey?: string;
    secKey?: string;
    apiKey?: string;
    authType: "basic" | "apikey" | "all";
}
```

### Contributing

-   To ensure consistent code style, please follow the in .editorconfig

### Tests

To run tests, add your VTPass Credentials `jest.env.js` if the file doesn't exist create one in your root directory and add the following content:

```js
process.env.VTPASS_USERNAME = "example@yourdomain.com";
process.env.VTPASS_PASSWORD = "Example12$hacks";
process.env.VTPASS_ENV = "sandbox";
process.env.VTPASS_TEST_PHONE_NUMBER = "08011111111";
```

. Now run:

```
npm test
```

If you are contributing to the repo, kindly update the necessary test file in `/test` or add a new one and ensure all tests are passed before sending a PR.

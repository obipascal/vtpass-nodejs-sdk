# VTPass NodeJS SDK

A comprehensive Node.js SDK for the VTPass API that facilitates bill payments, airtime purchases, data subscriptions, and utility payments in Nigeria. This SDK provides full TypeScript support and works seamlessly with both CommonJS and ES6 environments.

## Features

- 🔌 **Electricity Bill Payments** - Support for all major Nigerian electricity providers
- 📱 **Airtime Top-up** - MTN, Airtel, Glo, and 9Mobile airtime purchases
- 📊 **Data Subscriptions** - Data bundle purchases for all networks
- 📺 **Cable TV Subscriptions** - DSTV, GOTV, Startimes, and Showmax payments
- 🔐 **Multiple Authentication Methods** - Basic Auth, API Key, or hybrid authentication
- 📝 **Full TypeScript Support** - Complete type definitions and IntelliSense support
- 🌍 **Environment Support** - Sandbox and production environments
- 🛡️ **Error Handling** - Comprehensive error codes and response handling

## Installation

```bash
npm install @obipascal/vtpass-nodejs-sdk
```

```bash
yarn add @obipascal/vtpass-nodejs-sdk
```

## Quick Start

```typescript
import { 
  VTPassConfigOptions, 
  AirtimeApis, 
  AirtimeBody, 
  ResponseCodes, 
  ResponseStatus 
} from "@obipascal/vtpass-nodejs-sdk";

// Configuration
const options: VTPassConfigOptions = {
  username: process.env.VTPASS_USERNAME,
  password: process.env.VTPASS_PASSWORD,
  env: "sandbox", // "sandbox" | "production"
  authType: "basic" // "basic" | "apikey" | "all"
};

// Initialize Airtime API
const airtimeApi = new AirtimeApis(options);

// Purchase airtime
const purchaseData: AirtimeBody = {
  amount: 1000,
  phone: "08012345678"
};

try {
  const response = await airtimeApi.buyMtnAirtime(purchaseData);
  
  if (response.code === ResponseCodes.SUCCESS) {
    console.log("Airtime purchase successful:", response.content.transactions);
  }
} catch (error) {
  console.error("Purchase failed:", error);
}
```

## Configuration

### Configuration Options

```typescript
interface VTPassConfigOptions {
  username?: string;          // VTPass username (required for basic auth)
  password?: string;          // VTPass password (required for basic auth)
  env: "sandbox" | "production"; // Environment
  pubKey?: string;           // Public key (required for API key auth)
  secKey?: string;           // Secret key (required for API key auth)
  apiKey?: string;           // API key (required for API key auth)
  authType: "basic" | "apikey" | "all"; // Authentication method
}
```

### Authentication Types

#### Basic Authentication
```typescript
const config: VTPassConfigOptions = {
  username: "your-username",
  password: "your-password",
  env: "sandbox",
  authType: "basic"
};
```

#### API Key Authentication
```typescript
const config: VTPassConfigOptions = {
  apiKey: "your-api-key",
  pubKey: "your-public-key",
  secKey: "your-secret-key",
  env: "sandbox",
  authType: "apikey"
};
```

#### Hybrid Authentication (Automatic Detection)
```typescript
const config: VTPassConfigOptions = {
  // Include both basic and API key credentials
  username: "your-username",
  password: "your-password",
  apiKey: "your-api-key",
  pubKey: "your-public-key",
  secKey: "your-secret-key",
  env: "sandbox",
  authType: "all" // SDK will automatically choose available method
};
```

## API Reference

### Airtime Services

Purchase airtime for all major Nigerian networks.

```typescript
import { AirtimeApis, AirtimeBody } from "@obipascal/vtpass-nodejs-sdk";

const airtimeApi = new AirtimeApis(config);

// Purchase data structure
const purchaseData: AirtimeBody = {
  amount: 1000,        // Amount in Naira
  phone: "08012345678" // Recipient phone number
};

// Available methods
await airtimeApi.buyMtnAirtime(purchaseData);
await airtimeApi.buyAirtelAirtime(purchaseData);
await airtimeApi.buyGloAirtime(purchaseData);
await airtimeApi.buyEtisalatAirtime(purchaseData); // 9Mobile
```

### Data Subscription Services

Purchase data bundles for various networks.

```typescript
import { 
  DataSubscriptionApis, 
  DataSubBody, 
  DataSubProviders 
} from "@obipascal/vtpass-nodejs-sdk";

const dataApi = new DataSubscriptionApis(config);

// Get available data plans
const mtnPlans = await dataApi.products("mtn-data");

// Purchase data bundle
const dataRequest: DataSubBody = {
  serviceID: DataSubProviders.MTN,
  billersCode: "08012345678",    // Phone number
  variation_code: "mtn-20mb-100", // Plan code from products endpoint
  amount: 100,                   // Optional: plan amount
  phone: "08012345678"           // Customer phone
};

const response = await dataApi.purchase(dataRequest);
```

#### Supported Data Providers
```typescript
enum DataSubProviders {
  MTN = "mtn-data",
  AIRTEL = "airtel-data",
  GLO = "glo-data",
  ETISALAT = "etisalat-data",
  NINE_MOBILE = "9mobile-sme-data",
  SMILE = "smile-direct",
  SPECTRANET = "spectranet"
}
```

### Electricity Bill Services

Pay electricity bills and purchase meter tokens.

```typescript
import { 
  MeterApis, 
  MeterTokenBody, 
  VerifyMeterBody,
  MeterType,
  MeterServiceIDs 
} from "@obipascal/vtpass-nodejs-sdk";

const meterApi = new MeterApis(config);

// Verify meter before purchase
const verifyData: VerifyMeterBody = {
  type: "prepaid",              // "prepaid" | "postpaid"
  billersCode: "1234567890123", // Meter number
  serviceID: MeterServiceIDs.IkejaElectric
};

const verification = await meterApi.verify(verifyData);

// Purchase electricity token
const tokenRequest: MeterTokenBody = {
  serviceID: MeterServiceIDs.IkejaElectric,
  billersCode: "1234567890123", // Meter number
  variation_code: MeterType.PREPAID,
  amount: 5000,                 // Amount in Naira
  phone: "08012345678"          // Customer phone
};

const tokenResponse = await meterApi.purchase(tokenRequest);
console.log("Token:", tokenResponse.token);
```

#### Supported Electricity Providers
```typescript
enum MeterServiceIDs {
  IkejaElectric = "ikeja-electric",
  EkoElectric = "eko-electric",
  KanoElectric = "kano-electric",
  PortHarcourtElectric = "portharcourt-electric",
  JosElectric = "jos-electric",
  IbadanElectric = "ibadan-electric",
  KadunaElectric = "kaduna-electric",
  AbujaElectric = "abuja-electric",
  EnuguElectric = "enugu-electric"
}
```

### Cable TV Services

Purchase cable TV subscriptions.

```typescript
import { 
  SmartcardApis,
  SmartcardRequestBody,
  SmartcardMerchantVerificationBody,
  SmartcardProviders,
  SmartcardSubscriptionType 
} from "@obipascal/vtpass-nodejs-sdk";

const tvApi = new SmartcardApis(config);

// Verify smartcard
const verifyCard: SmartcardMerchantVerificationBody = {
  billersCode: "1234567890",    // Smartcard number
  serviceID: SmartcardProviders.DSTV
};

const cardInfo = await tvApi.verify(verifyCard);

// Get available packages
const dstvPackages = await tvApi.products("dstv");

// Subscribe to package
const subscription: SmartcardRequestBody = {
  serviceID: SmartcardProviders.DSTV,
  billersCode: "1234567890",        // Smartcard number
  variation_code: "dstv-compact",   // Package code
  amount: 9000,                     // Package amount
  phone: "08012345678",             // Customer phone
  subscription_type: SmartcardSubscriptionType.RENEW,
  quantity: "1"                     // Number of months
};

const response = await tvApi.purchase(subscription);
```

#### Supported TV Providers
```typescript
enum SmartcardProviders {
  DSTV = "dstv",
  GOTV = "gotv",
  STARTIMES = "startimes",
  SHOWMAX = "showmax"
}
```

### General Services

Access general VTPass services and utilities.

```typescript
import { VTPassBaseConfig } from "@obipascal/vtpass-nodejs-sdk";

const baseApi = new VTPassBaseConfig(config);

// List all available service categories
const categories = await baseApi.listAvailableServices();

// List services in a specific category
const services = await baseApi.listServices("bills"); // identifier from categories

// Generate unique request ID
const requestId = baseApi.generateRequestId();
```

## Response Handling

### Response Codes

```typescript
enum ResponseCodes {
  SUCCESS = "000",                    // Transaction successful
  BILLER_CONFIRMED = "020",          // Biller confirmed
  INVALID_ARGUMENTS = "011",         // Missing required arguments
  PRODUCT_NOT_FOUND = "012",         // Product doesn't exist
  BILLER_NOT_REACHABLE = "030",      // Biller unreachable
  TRANSACTION_PROCESSING = "099",     // Transaction processing
  LOW_WALLET_BALANCE = "018",        // Insufficient balance
  DUPLICATE_TRANSACTION = "019",      // Duplicate transaction
  ACCOUNT_LOCKED = "021",            // Account locked
  SERVICE_SUSPENDED = "034",         // Service suspended
  SYSTEM_ERROR = "083"               // System error
}
```

### Transaction Status

```typescript
enum ResponseStatus {
  INITIATED = "initiated",  // Transaction started
  PENDING = "pending",      // Transaction pending
  DELIVERED = "delivered"   // Transaction completed
}
```

### Error Handling

```typescript
try {
  const response = await airtimeApi.buyMtnAirtime(data);
  
  switch (response.code) {
    case ResponseCodes.SUCCESS:
      if (response.content.transactions.status === ResponseStatus.DELIVERED) {
        console.log("Transaction successful");
      } else {
        console.log("Transaction pending, please check status later");
      }
      break;
      
    case ResponseCodes.LOW_WALLET_BALANCE:
      console.error("Insufficient wallet balance");
      break;
      
    case ResponseCodes.INVALID_ARGUMENTS:
      console.error("Invalid request parameters");
      break;
      
    default:
      console.error("Transaction failed:", response.response_description);
  }
} catch (error) {
  console.error("Network or system error:", error);
}
```

## Environment Setup

### Development Environment

Create a `.env` file in your project root:

```env
VTPASS_USERNAME=your-sandbox-username
VTPASS_PASSWORD=your-sandbox-password
VTPASS_ENV=sandbox
VTPASS_API_KEY=your-api-key
VTPASS_PUBLIC_KEY=your-public-key
VTPASS_SECRET_KEY=your-secret-key
```

### Testing

For running tests, create `jest.env.js` in your project root:

```javascript
process.env.VTPASS_USERNAME = "example@yourdomain.com";
process.env.VTPASS_PASSWORD = "Example12$hacks";
process.env.VTPASS_ENV = "sandbox";
process.env.VTPASS_TEST_PHONE_NUMBER = "08011111111";
```

Run tests:
```bash
npm test
```

## Advanced Usage

### Custom HTTP Client Configuration

The SDK uses Axios internally. You can access the HTTP client for advanced configurations:

```typescript
const api = new AirtimeApis(config);
// Access the underlying HTTP client
api.httpClient.defaults.timeout = 30000; // 30 second timeout
```

### Request ID Generation

The SDK automatically generates unique request IDs, but you can also generate them manually:

```typescript
const baseApi = new VTPassBaseConfig(config);
const customRequestId = baseApi.generateRequestId();
```

### Transaction Querying

Query the status of a previous transaction using the request ID:

```typescript
// This functionality would be available through the general endpoints
// Implementation would depend on VTPass API documentation
```

## TypeScript Support

The SDK is built with TypeScript and provides comprehensive type definitions:

```typescript
import type { 
  VTPassConfigOptions,
  AirtimeTransactionResponse,
  MeterVerificationResponse,
  SmartcardVerificationResponse,
  DataSubProductItem
} from "@obipascal/vtpass-nodejs-sdk";
```

## Best Practices

1. **Environment Management**: Always use environment variables for credentials
2. **Error Handling**: Implement comprehensive error handling for all API calls
3. **Request IDs**: Use the built-in request ID generation to ensure uniqueness
4. **Verification**: Always verify meters and smartcards before making payments
5. **Testing**: Use sandbox environment for development and testing

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and ensure all tests pass
4. Follow the code style defined in `.editorconfig`
5. Submit a pull request

### Development Setup

```bash
git clone https://github.com/your-repo/vtpass-nodejs-sdk
cd vtpass-nodejs-sdk
npm install
npm run build
npm test
```

## Support

- **Documentation**: Check the VTPass official API documentation
- **Issues**: Report bugs and feature requests on GitHub
- **Community**: Join discussions and get help from other developers

## License

This project is open source. Please check the LICENSE file for more details.

## Changelog

### Latest Updates
- Full TypeScript support
- Multiple authentication methods
- Comprehensive error handling
- Support for all major Nigerian service providers
- Environment-specific configurations

---

**Note**: This SDK is for the VTPass API. Make sure you have valid VTPass credentials and understand their terms of service before using in production.

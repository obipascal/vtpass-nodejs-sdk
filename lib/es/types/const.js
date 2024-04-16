export var ResponseCodes;
(function (ResponseCodes) {
    /** Transaction is processed. Please check [content][transactions][status] for the status of the transaction. It would contain the actual state like initiated, pending, delivered. See the next table for more information. */
    ResponseCodes["SUCCESS"] = "000";
    /** BILLER CONFIRMED */
    ResponseCodes["BILLER_CONFIRMED"] = "020";
    /** You are not passing at least one of the arguments expected in your request. */
    ResponseCodes["INVALID_ARGUMENTS"] = "011";
    /** PRODUCT DOES NOT EXIST */
    ResponseCodes["PRODUCT_NOT_FOUND"] = "012";
    /** The biller for the product or service is unreachable. */
    ResponseCodes["BILLER_NOT_REACHABLE"] = "030";
    /** Transaction is currently precessing. In such situation, you should requery using your requestID to ascertain the current status of the transaction. */
    ResponseCodes["TRANSACTION_PROCESSING"] = "099";
    /** The current status of a given transaction carried out on the platform */
    ResponseCodes["TRANSACTION_QUERY"] = "001";
    /** Transaction has been resolved. Please contact us for more info. */
    ResponseCodes["TRANSACTION_RESOLVED"] = "044";
    /** Transaction is not processed and you will not be charged for this transaction. */
    ResponseCodes["TRANSACTION_NOT_PROCESSED"] = "091";
    /** TRANSACTION FAILED */
    ResponseCodes["FAILED"] = "016";
    /** You are using an invalid variation code. Please check the list of available variation codes here. */
    ResponseCodes["INVALID_VARIATION_CODE"] = "010";
    /** You are attempting to pay an amount lower than the minimum allowed for that product/service. */
    ResponseCodes["BELOW_MINIMUM_AMOUNT_ALLOWED"] = "013";
    /** You have used the RequestID for a previous transaction. */
    ResponseCodes["DUPLICATE_REQUEST_ID"] = "014";
    /** This is returned for a requery operation. This RequestID was not used on our platform. */
    ResponseCodes["INVALID_REQUEST_ID"] = "015";
    /** You are attempting to pay an amount higher than the maximum allowed for that product/service. */
    ResponseCodes["ABOVE_MAXIMUM_AMOUNT_ALLOWED"] = "017";
    /** You do not have adequate funds in your wallet to cover the cost of the transaction. */
    ResponseCodes["LOW_WALLET_BALANCE"] = "018";
    /** You attempted to buy thesame service multiple times for the same biller_code within 30 seconds. */
    ResponseCodes["DUPLICATE_TRANSACTION"] = "019";
    /** Your account is locked */
    ResponseCodes["ACCOUNT_LOCKED"] = "021";
    /** Your account is suspended */
    ResponseCodes["ACCOUNT_SUSPENDED"] = "022";
    /** Your account does not have API access enabled. Please contact us to request for activation */
    ResponseCodes["API_ACCESS_NOT_ENABLE"] = "023";
    /** Your account is inactive. */
    ResponseCodes["ACCOUNT_INACTIVE"] = "024";
    /** Your bank code for bank transfer is invalid.  */
    ResponseCodes["RECIPIENT_BANK_INVALID"] = "025";
    /** Your bank account number could not be verified. */
    ResponseCodes["RECIPIENT_ACCOUNT_NOT_VERIFIED"] = "026";
    /** You need to contact support with your server IP for whitelisting */
    ResponseCodes["IP_NOT_WHITELISTED"] = "027";
    /** You are under-requesting for a service that has a limit on the quantity to be purchased per time. */
    ResponseCodes["BELOW_MINIMUM_QUANTITY_ALLOWED"] = "031";
    /** You are over-requesting for a service that has a limit on the quantity to be purchased per time. */
    ResponseCodes["ABOVE_MINIMUM_QUANTITY_ALLOWED"] = "032";
    /** The service being requested for has been suspended for the time being. */
    ResponseCodes["SERVICE_SUSPENDED"] = "034";
    /** You are requesting for a service that has been turned off at the moment. */
    ResponseCodes["SERVICE_INACTIVE"] = "035";
    /** Transaction reversal to wallet */
    ResponseCodes["TRANSACTION_REVERSAL"] = "040";
    /** Oops!!! System error. Please contact tech support */
    ResponseCodes["SYSTEM_ERROR"] = "083";
    /** Request ID must contain valid date.. */
    ResponseCodes["IMPROPER_REQUEST_ID"] = "085";
})(ResponseCodes || (ResponseCodes = {}));
export var ResponseStatus;
(function (ResponseStatus) {
    /** Transaction is initiated. */
    ResponseStatus["INITIATED"] = "initiated";
    /** Transaction is pending. This may happen when service provider has not concluded the transaction. This status will be updated. Please requery to get a final status. */
    ResponseStatus["PENDING"] = "pending";
    /** Transaction is successful and service is confirmed as delivered. */
    ResponseStatus["DELIVERED"] = "delivered";
})(ResponseStatus || (ResponseStatus = {}));
export var MeterServiceIDs;
(function (MeterServiceIDs) {
    MeterServiceIDs["IkejaElectric"] = "ikeja-electric";
    MeterServiceIDs["EkoElectric"] = "eko-electric";
    MeterServiceIDs["KanoElectric"] = "kano-electric";
    MeterServiceIDs["PortHarcourtElectric"] = "portharcourt-electric";
    MeterServiceIDs["JosElectric"] = "jos-electric";
    MeterServiceIDs["IbadanElectric"] = "ibadan-electric";
    MeterServiceIDs["KadunaElectric"] = "kaduna-electric";
    MeterServiceIDs["AbujaElectric"] = "abuja-electric";
    MeterServiceIDs["EnuguElectric"] = "enugu-electric";
})(MeterServiceIDs || (MeterServiceIDs = {}));
export var MeterType;
(function (MeterType) {
    MeterType["PREPAID"] = "prepaid";
    MeterType["POSTPAID"] = "postpaid";
})(MeterType || (MeterType = {}));
export var SmartcardProviders;
(function (SmartcardProviders) {
    SmartcardProviders["DSTV"] = "dstv";
    SmartcardProviders["GOTV"] = "gotv";
    SmartcardProviders["STARTIMES"] = "startimes";
    SmartcardProviders["SHOWMAX"] = "showmax";
})(SmartcardProviders || (SmartcardProviders = {}));
export var SmartcardSubscriptionType;
(function (SmartcardSubscriptionType) {
    SmartcardSubscriptionType["CHANGE"] = "change";
    SmartcardSubscriptionType["RENEW"] = "renew";
})(SmartcardSubscriptionType || (SmartcardSubscriptionType = {}));
export var DataSubProviders;
(function (DataSubProviders) {
    DataSubProviders["MTN"] = "mtn-data";
    DataSubProviders["AIRTEL"] = "airtel-data";
    DataSubProviders["GLO"] = "glo-data";
    DataSubProviders["ETISALAT"] = "etisalat-data";
    DataSubProviders["NINE_MOBILE"] = "9mobile-sme-data";
    DataSubProviders["SMILE"] = "smile-direct";
    DataSubProviders["SPECTRANET"] = "spectranet";
})(DataSubProviders || (DataSubProviders = {}));

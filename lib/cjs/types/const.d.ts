export declare enum ResponseCodes {
    /** Transaction is processed. Please check [content][transactions][status] for the status of the transaction. It would contain the actual state like initiated, pending, delivered. See the next table for more information. */
    SUCCESS = "000",
    /** BILLER CONFIRMED */
    BILLER_CONFIRMED = "020",
    /** You are not passing at least one of the arguments expected in your request. */
    INVALID_ARGUMENTS = "011",
    /** PRODUCT DOES NOT EXIST */
    PRODUCT_NOT_FOUND = "012",
    /** The biller for the product or service is unreachable. */
    BILLER_NOT_REACHABLE = "030",
    /** Transaction is currently precessing. In such situation, you should requery using your requestID to ascertain the current status of the transaction. */
    TRANSACTION_PROCESSING = "099",
    /** The current status of a given transaction carried out on the platform */
    TRANSACTION_QUERY = "001",
    /** Transaction has been resolved. Please contact us for more info. */
    TRANSACTION_RESOLVED = "044",
    /** Transaction is not processed and you will not be charged for this transaction. */
    TRANSACTION_NOT_PROCESSED = "091",
    /** TRANSACTION FAILED */
    FAILED = "016",
    /** You are using an invalid variation code. Please check the list of available variation codes here. */
    INVALID_VARIATION_CODE = "010",
    /** You are attempting to pay an amount lower than the minimum allowed for that product/service. */
    BELOW_MINIMUM_AMOUNT_ALLOWED = "013",
    /** You have used the RequestID for a previous transaction. */
    DUPLICATE_REQUEST_ID = "014",
    /** This is returned for a requery operation. This RequestID was not used on our platform. */
    INVALID_REQUEST_ID = "015",
    /** You are attempting to pay an amount higher than the maximum allowed for that product/service. */
    ABOVE_MAXIMUM_AMOUNT_ALLOWED = "017",
    /** You do not have adequate funds in your wallet to cover the cost of the transaction. */
    LOW_WALLET_BALANCE = "018",
    /** You attempted to buy thesame service multiple times for the same biller_code within 30 seconds. */
    DUPLICATE_TRANSACTION = "019",
    /** Your account is locked */
    ACCOUNT_LOCKED = "021",
    /** Your account is suspended */
    ACCOUNT_SUSPENDED = "022",
    /** Your account does not have API access enabled. Please contact us to request for activation */
    API_ACCESS_NOT_ENABLE = "023",
    /** Your account is inactive. */
    ACCOUNT_INACTIVE = "024",
    /** Your bank code for bank transfer is invalid.  */
    RECIPIENT_BANK_INVALID = "025",
    /** Your bank account number could not be verified. */
    RECIPIENT_ACCOUNT_NOT_VERIFIED = "026",
    /** You need to contact support with your server IP for whitelisting */
    IP_NOT_WHITELISTED = "027",
    /** You are under-requesting for a service that has a limit on the quantity to be purchased per time. */
    BELOW_MINIMUM_QUANTITY_ALLOWED = "031",
    /** You are over-requesting for a service that has a limit on the quantity to be purchased per time. */
    ABOVE_MINIMUM_QUANTITY_ALLOWED = "032",
    /** The service being requested for has been suspended for the time being. */
    SERVICE_SUSPENDED = "034",
    /** You are requesting for a service that has been turned off at the moment. */
    SERVICE_INACTIVE = "035",
    /** Transaction reversal to wallet */
    TRANSACTION_REVERSAL = "040",
    /** Oops!!! System error. Please contact tech support */
    SYSTEM_ERROR = "083",
    /** Request ID must contain valid date.. */
    IMPROPER_REQUEST_ID = "085"
}
export declare enum ResponseStatus {
    /** Transaction is initiated. */
    INITIATED = "initiated",
    /** Transaction is pending. This may happen when service provider has not concluded the transaction. This status will be updated. Please requery to get a final status. */
    PENDING = "pending",
    /** Transaction is successful and service is confirmed as delivered. */
    DELIVERED = "delivered"
}
export declare enum MeterServiceIDs {
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
export declare enum MeterType {
    PREPAID = "prepaid",
    POSTPAID = "postpaid"
}
export declare enum SmartcardProviders {
    DSTV = "dstv",
    GOTV = "gotv",
    STARTIMES = "startimes",
    SHOWMAX = "showmax"
}
export declare enum SmartcardSubscriptionType {
    CHANGE = "change",
    RENEW = "renew"
}
export declare enum DataSubProviders {
    MTN = "mtn-data",
    AIRTEL = "airtel-data",
    GLO = "glo-data",
    ETISALAT = "etisalat-data",
    NINE_MOBILE = "9mobile-sme-data",
    SMILE = "smile-direct",
    SPECTRANET = "spectranet"
}

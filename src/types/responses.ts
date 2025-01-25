import { AxiosResponse } from "axios";
import { ResponseCodes, ResponseStatus, SmartcardProviders } from "./const";

export interface VTPassBaseResponse<T = any, V = any> extends AxiosResponse {
    code: ResponseCodes;

    content: {
        transactions: T;
        ServiceName: string;
        serviceID: string;
        convinience_fee: string;
        varations: V;
    };
    response_description: string;
    requestId: string;
    amount: string;
    transaction_date: {
        date: string;
        timezone_type: number;
        timezone: string;
    };
    purchased_code: string;
}

export interface VTPassServicesBaseResponse<T = any> extends AxiosResponse {
    code: string;
    response_description: string;
    content: T;
}

export interface AirtimeTransactionResponse {
    status: ResponseStatus;
    product_name: string;
    unique_element: string;
    unit_price: number;
    quantity: number;
    service_verification: string | null;
    channel: "api" | string;
    commission: number;
    total_amount: number;
    discount: null | number;
    type: string;
    email: string;
    phone: string;
    name: null | string;
    convinience_fee: number;
    amount: number;
    platform: "api" | string;
    method: "api" | string;
    transactionId: string;
}

export interface MeterVerificationResponse {
    Customer_Name: string;
    Address: string;
    Meter_Number: string;
    Customer_Arrears: string;
    Minimum_Amount: number;
    Min_Purchase_Amount: number;
    Can_Vend: string;
    Business_Unit: string;
    Customer_Account_Type: "NMD" | "MD";
    Meter_Type: "PREPAID" | "POSTPAID";
    WrongBillersCode: boolean;
}

export interface MeterTransactionResponse {
    status: string;
    product_name: string;
    unique_element: string;
    unit_price: number;
    quantity: number;
    service_verification: string | null;
    channel: string;
    commission: number;
    total_amount: string;
    discount: number | null;
    type: string;
    email: string;
    phone: string;
    name: string | null;
    convinience_fee: number;
    amount: number;
    platform: string;
    method: string;
    transactionId: string;
}

export interface VTPassMeterTokenTransactionResponse<T>
    extends VTPassBaseResponse<T> {
    response_description: string;
    requestId: string;
    amount: string;
    transaction_date: {
        date: string;
        timezone_type: number;
        timezone: string;
    };
    purchased_code: string;
    customerName: string;
    customerAddress: string;
    token: string;
    tokenAmount: number;
    exchangeReference: string;
    resetToken: string | null;
    configureToken: string | null;
    units: string;
    Units: string | null;
    fixChargeAmount: number | null;
    tariff: string;
    taxAmount: number | null;
    MeterNumber: string;
    Token: string;
    ReceiptNumber: string | null;
    PurchasedUnits: string;
    DebtDescription: string | null;
    DebtAmount: string | null;
    RefundUnits: string | null;
    ServiceChargeVatExcl: string | null;
    Name: string;
    Address: string;
    Reference: string;
    Vat: string | null;
    ResponseTime: string | null;
    TariffRate: string | null;
    FreeUnits: string | null;
    MeterCategory: string;
    UtilityAmountVatExcl: string | null;
}

export interface SmartcardVerificationResponse {
    Customer_Name: string;
    Status: string;
    DUE_DATE: string;
    Customer_Number: number;
    Customer_Type: string;
    Current_Bouquet: string;
    Current_Bouquet_Code: string;
    Renewal_Amount: number;
}

export interface SmartcardProductItem {
    variation_code: string;
    name: string;
    variation_amount: string;
    fixedPrice: string;
}

export interface SmartcardTransactionResponse {
    status: string;
    channel: string;
    transactionId: string;
    method: string;
    platform: string;
    is_api: number;
    discount: number | null;
    customer_id: number;
    email: string;
    phone: string;
    type: string;
    convinience_fee: string;
    commission: number;
    amount: string;
    total_amount: number;
    quantity: number;
    unit_price: string;
    updated_at: string;
    created_at: string;
    id: number;
}

export interface IService {
    serviceID: string;
    name: string;
    minimium_amount: string;
    maximum_amount: number;
    convinience_fee: string;
    product_type: string;
    image: string;
}

export interface IServiceCategory {
    identifier: string;
    name: string;
}

import { AxiosResponse } from "axios";
import { ResponseCodes, ResponseStatus } from "./const";

export interface VTPassBaseResponse<T> extends AxiosResponse {
    code: ResponseCodes;
    content: {
        transactions: T;
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
    amount: number;
    convinience_fee: number;
    status: ResponseStatus;
    name: string;
    phone: string;
    email: string;
    type: string;
    created_at: string;
    discount: string;
    giftcard_id: string;
    total_amount: number;
    commission: number;
    channel: string;
    platform: string;
    service_verification: string;
    quantity: number;
    unit_price: number;
    unique_element: number;
    product_name: string;
}

export interface VTPassMeterTokenTransactionResponse<T>
    extends VTPassBaseResponse<T> {
    mainToken: string;
    mainTokenDescription: string;
    mainTokenUnits: number;
    mainTokenTax: number;
    mainsTokenAmount: number;
    bonusToken: string;
    bonusTokenDescription: string;
    bonusTokenUnits: number;
    bonusTokenTax: number;
    bonusTokenAmount: number;
    tariffIndex: string;
    debtDescription: string;
}

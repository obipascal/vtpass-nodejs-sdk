import { VTPassBaseConfig, VTPassConfigOptions } from "./configs";
import { MeterServiceIDs, MeterType } from "./const";
import {
    MeterTransactionResponse,
    MeterVerificationResponse,
    VTPassBaseResponse,
    VTPassMeterTokenTransactionResponse,
} from "./responses";

export type VerifyMeterBody = {
    /** This is basically the type of meter you are trying to validate. It can be either prepaid or postpaid */
    type: "prepaid" | "postpaid";
    /** The meter number you wish to make the bills payment on. On Sandbox  For prepaid: 1111111111111 For Postpaid: 1010101010101 */
    billersCode: string;
    /** Service ID as specified by VTpass. */
    serviceID: string;
};

export interface MeterTokenBody {
    /** Service ID as specified by VTpass. */
    serviceID: MeterServiceIDs;
    /** The meter number you wish to make the bills payment on */
    billersCode: string;
    /** This is the meter type */
    variation_code: MeterType;
    /**The amount (Naira) of electricity you want to purchase. */
    amount: number;
    /** The phone number of the customer or recipient of this service */
    phone: string;
}

export interface PurchaseMeterTokenBody extends MeterTokenBody {
    /** This is a unique reference with which you can use to identify and query the status of a given transaction after the transaction has been executed. */
    request_id: string;
}

export declare class MeterApis extends VTPassBaseConfig {
    constructor(options: VTPassConfigOptions);

    /**
     *  Verify Meter
     * @param data The request body
     */
    verify(
        data: VerifyMeterBody
    ): Promise<VTPassBaseResponse<MeterVerificationResponse>>;

    /**
     *  Purchase Meter Token
     * @param data The request body
     */
    purchase(
        data: MeterTokenBody
    ): Promise<VTPassMeterTokenTransactionResponse<MeterTransactionResponse>>;
}

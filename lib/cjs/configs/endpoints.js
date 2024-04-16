"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndPoints = void 0;
exports.EndPoints = {
    general: {
        makePayment: "/pay",
        queryTransaction: "/requery",
        verifyMerchant: "/merchant-verify",
        fetchProducts: "/service-variations?serviceID=:provider",
    },
    internationalAirtime: {
        fetchCountries: "/get-international-airtime-countries",
        fetchOperators: "/operators",
        fetchPlans: "/plans",
        purchase: "/pay",
        queryTransaction: "/requery",
    },
};

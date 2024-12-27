"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VTPassServicesApis = void 0;
const endpoints_1 = require("../configs/endpoints");
const VTPassBaseConfig_1 = require("../configs/VTPassBaseConfig");
class VTPassServicesApis extends VTPassBaseConfig_1.VTPassBaseConfig {
    constructor(options) {
        super(options);
    }
    async listAvailableServices() {
        return await this.httpClient.get(endpoints_1.EndPoints.general.listAvailableServices);
    }
    async listServices(identifier) {
        return await this.httpClient.get(endpoints_1.EndPoints.general.listServices.replace(":identifier", identifier));
    }
}
exports.VTPassServicesApis = VTPassServicesApis;

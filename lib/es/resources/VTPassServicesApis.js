import { EndPoints } from "../configs/endpoints";
import { VTPassBaseConfig } from "../configs/VTPassBaseConfig";
export class VTPassServicesApis extends VTPassBaseConfig {
    constructor(options) {
        super(options);
    }
    async listAvailableServices() {
        return await this.httpClient.get(EndPoints.general.listAvailableServices);
    }
    async listServices(identifier) {
        return await this.httpClient.get(EndPoints.general.listServices.replace(":identifier", identifier));
    }
}

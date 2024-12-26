import { EndPoints } from "../configs/endpoints";
import { VTPassBaseConfig } from "../configs/VTPassBaseConfig";
import {
    IService,
    IServiceCategory,
    VTPassConfigOptions,
    VTPassServicesBaseResponse,
} from "../types";

export class VTPassServicesApis extends VTPassBaseConfig {
    constructor(options: VTPassConfigOptions) {
        super(options);
    }

    public async listAvailableServices(): Promise<
        VTPassServicesBaseResponse<IServiceCategory[]>
    > {
        return await this.httpClient.get(
            EndPoints.general.listAvailableServices
        );
    }

    public async listServices(
        identifier: string
    ): Promise<VTPassServicesBaseResponse<IService[]>> {
        return await this.httpClient.get(
            EndPoints.general.listServices.replace(":identifier", identifier)
        );
    }
}

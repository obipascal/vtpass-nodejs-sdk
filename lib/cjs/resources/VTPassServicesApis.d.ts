import { VTPassBaseConfig } from "../configs/VTPassBaseConfig";
import { IService, IServiceCategory, VTPassConfigOptions, VTPassServicesBaseResponse } from "../types";
export declare class VTPassServicesApis extends VTPassBaseConfig {
    constructor(options: VTPassConfigOptions);
    listAvailableServices(): Promise<VTPassServicesBaseResponse<IServiceCategory[]>>;
    listServices(identifier: string): Promise<VTPassServicesBaseResponse<IService[]>>;
}

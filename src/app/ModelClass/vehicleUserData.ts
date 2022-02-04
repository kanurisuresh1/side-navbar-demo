export interface VehicleDataResponse {
    status: boolean;
    message: string;
    data: vehicleData[];
  }
  export interface vehicleData {
    checked: any;
    device_link_id: string;
    device_id: string;
    device_imei: string;
    vehicle_number: string;
    devicetime: string;
    vehicle_type: string;
    product_type: string;
  }
  
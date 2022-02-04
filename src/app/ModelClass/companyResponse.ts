export interface CompanyResponse {
    status: boolean;
    data: DataEntity[];
    message: string;
  }
  export interface DataEntity {
    company_id: string;
    user_id: string;
    company_name: string;
    company_logo: string;
    company_website: string;
    company_state_id: string;
    company_district_id: string;
    company_city_id: string;
    company_address1?: null;
    company_address2?: null;
    company_google_address: string;
    company_latitude: string;
    company_longitude: string;
    company_landmark: string;
    company_pincode: string;
    company_email: string;
    company_mobile: string;
    added_date: string;
    modified_date: string;
    status: string;
    company_state?: null;
    company_district_name?: null;
    company_city?: null;
  }
  
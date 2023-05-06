export type CreateLicenseType = {
    companyId: number;
    number: string;
    environmentalAgency: string;
    issuance: string;
    expiration: string;
}

export type UpdateLicenseType = {
    companyId?: number;
    number?: string;
    environmentalAgency?: string;
    issuance?: string;
    expiration?: string;
}

export type LicenseType = {
    id: number;
    companyId: number;
    number: string;
    environmentalAgency: string;
    issuance: Date;
    expiration: Date;
}
export type CreateCompanyType = {
    legalName: string;
    cnpj: string;
    zipCode: string;
    city: string; 
    state: string;
    neighborhood: string;
    complement: string;
}

export type UpdateCompanyType = {
    legalName?: string;
    cnpj?: string;
    zipCode?: string;
    city?: string; 
    state?: string;
    neighborhood?: string;
    complement?: string;
}

export type CompanyType = {
    id: number;
    legalName: string;
    cnpj: string;
    zipCode: string;
    city: string; 
    state: string;
    neighborhood: string;
    complement: string;
}


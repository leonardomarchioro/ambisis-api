import { prisma } from "../../prisma/client";
import { CreateCompanyType } from "../../types/companies";

const createCompanyService = async (data: CreateCompanyType) => {
    return prisma.company.create({ data });
};

export default createCompanyService;
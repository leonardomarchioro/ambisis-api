import { prisma } from "../../prisma/client";
import { UpdateCompanyType } from "../../types/companies";

const updateCompanyService = async (id: number, data: UpdateCompanyType) => {
    return prisma.company.update({ where: { id }, data });
};

export default updateCompanyService;
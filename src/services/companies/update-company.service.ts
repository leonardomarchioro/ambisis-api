import AppError from "../../errors/app-error";
import { prisma } from "../../prisma/client";
import { UpdateCompanyType } from "../../types/companies";

const updateCompanyService = async (id: number, data: UpdateCompanyType) => {

    const company = await prisma.company.findUnique({ where: { id }});
    if(!company){
        throw new AppError(404, "Company not found");
    }

    return prisma.company.update({ where: { id }, data });
};

export default updateCompanyService;
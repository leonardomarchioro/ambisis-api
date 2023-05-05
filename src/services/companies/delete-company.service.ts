import AppError from "../../errors/app-error";
import { prisma } from "../../prisma/client"

const deleteCompanyService = async (id: number) => {

    const company = await prisma.company.findUnique({ where: { id }});
    if(!company){
        throw new AppError(404, "Company not found");
    }

    const deleteLicense = prisma.license.deleteMany({ where: { companyId: id } });
    const deleteCompany = prisma.company.delete({ where: { id }});

    try {
        await prisma.$transaction([ deleteLicense, deleteCompany ]);
    } catch (error) {
        throw new AppError(403, "Error while deleting company")
    }
}

export default deleteCompanyService;
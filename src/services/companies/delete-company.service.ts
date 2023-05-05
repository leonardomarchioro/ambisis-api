import { prisma } from "../../prisma/client"

const deleteCompanyService = async (id: number) => {

    await prisma.license.deleteMany({ where: { companyId: id } });

    return prisma.company.delete({ where: { id }});
}

export default deleteCompanyService;
import { prisma } from "../../prisma/client";

const listCompaniesService = async () => {
    return prisma.company.findMany();
}

export default listCompaniesService;
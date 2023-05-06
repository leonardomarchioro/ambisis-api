import { prisma } from "../../prisma/client";

const listLicensesService = async () => {
    return prisma.license.findMany();
}

export default listLicensesService;
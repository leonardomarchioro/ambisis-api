import AppError from "../../errors/app-error";
import { prisma } from "../../prisma/client"

const deleteLicenseService = async (id: number) => {

    const license = await prisma.license.findUnique({ where: { id }});
    if(!license){
        throw new AppError(404, "License not found");
    }

    await prisma.license.delete({ where: { id }});
}

export default deleteLicenseService;
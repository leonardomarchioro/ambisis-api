import moment from "moment";

import AppError from "../../errors/app-error";

import { prisma } from "../../prisma/client";
import { UpdateLicenseType } from "../../types/licenses";

const updateLicenseService = async (id: number, data: UpdateLicenseType) => {

    const license = await prisma.license.findUnique({ where: { id }});
    if(!license){
        throw new AppError(404, "License not found");
    }

    const issuance = data.issuance ? moment(data.issuance, "DD/MM/YYYY").toDate() : license.issuance
    const expiration = data.expiration ? moment(data.expiration, "DD/MM/YYYY").toDate() : license.expiration
     
    return prisma.license.update({ where: { id }, data: { ...data, issuance, expiration } });
};

export default updateLicenseService;
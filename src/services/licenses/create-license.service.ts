import moment from "moment";

import { prisma } from "../../prisma/client";
import { CreateLicenseType } from "../../types/licenses";

const createLicenseService = async (data: CreateLicenseType) => {

    const { expiration, issuance } = data

    return prisma.license.create({ data: {
        ...data,
        issuance: moment(issuance, "DD/MM/YYYY").toDate(),
        expiration: moment(expiration, "DD/MM/YYYY").toDate()
    } });
};

export default createLicenseService;
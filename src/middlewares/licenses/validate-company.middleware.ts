import { NextFunction, Request, Response } from "express";
import { prisma } from "../../prisma/client";
import AppError from "../../errors/app-error";
import { CreateLicenseType, UpdateLicenseType } from "../../types/licenses";

const validateCompanyMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { companyId }: CreateLicenseType | UpdateLicenseType = req.body;

    if(!companyId){
        return next();
    }

    const company = await prisma.company.findUnique({ where: { id: companyId }});

    if(!company){
        throw new AppError(404, "Company not found");
    }
    
    return next();
};

export default validateCompanyMiddleware;
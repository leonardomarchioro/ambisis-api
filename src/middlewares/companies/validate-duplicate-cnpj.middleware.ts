import { NextFunction, Request, Response } from "express";
import { CreateCompanyType, UpdateCompanyType } from "../../types/companies";
import { prisma } from "../../prisma/client";
import AppError from "../../errors/app-error";

const ValidateDuplicateCNPJMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { cnpj }: CreateCompanyType | UpdateCompanyType = req.body;
  const { id } = req.params;
  
  if (cnpj) {
    const company = await prisma.company.findFirst({
      where: { cnpj, id: { not: Number(id) || 0 } },
    });

    if (!company) {
      return next();
    }

    throw new AppError(409, "CNPJ already registered");
  }

  return next();
};

export default ValidateDuplicateCNPJMiddleware;

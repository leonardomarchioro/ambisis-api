import { Request, Response } from "express";
import createCompanyService from "../../services/companies/create-company.service";
import { CreateCompanyType } from "../../types/companies";

const createCompanyController = async (req: Request, res: Response) => {
    const data: CreateCompanyType = req.body

    const result = await createCompanyService(data)

    return res.status(201).json(result);
}

export default createCompanyController;
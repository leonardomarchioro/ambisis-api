import { Request, Response } from "express";
import updateCompanyService from "../../services/companies/update-company.service";
import { UpdateCompanyType } from "../../types/companies";

const updateCompanyController = async (req: Request, res: Response) => {
    const data: UpdateCompanyType = req.body
    const { id } = req.params

    const result = await updateCompanyService(Number(id), data)

    return res.status(200).json(result);
}

export default updateCompanyController;
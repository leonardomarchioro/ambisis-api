import { Request, Response } from "express";
import listCompaniesService from "../../services/companies/list-companies.service";

const listCompaniesController = async (req: Request, res: Response) => {

    const result = await listCompaniesService();

    return res.status(200).json(result)
}

export default listCompaniesController;
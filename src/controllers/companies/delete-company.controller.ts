import { Request, Response } from "express";
import deleteCompanyService from "../../services/companies/delete-company.service";

const deleteCompanyController = async (req: Request, res: Response) => {
    const { id } = req.params

    await deleteCompanyService(Number(id))

    return res.status(200).json({ status: "Company has been deleted with success!" });
}

export default deleteCompanyController;
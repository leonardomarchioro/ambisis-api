import { Request, Response } from "express";
import listLicensesService from "../../services/licenses/list-licenses.service";

const listLicensesController = async (req: Request, res: Response) => {

    const result = await listLicensesService();

    return res.status(200).json(result)
}

export default listLicensesController;
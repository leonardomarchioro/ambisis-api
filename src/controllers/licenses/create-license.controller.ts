import { Request, Response } from "express";
import createLicenseService from "../../services/licenses/create-license.service";
import { CreateLicenseType } from "../../types/licenses";

const createLicenseController = async (req: Request, res: Response) => {
    const data: CreateLicenseType = req.body
    const result = await createLicenseService(data)

    return res.status(201).json(result);
}

export default createLicenseController;
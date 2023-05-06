import { Request, Response } from "express";
import { UpdateLicenseType } from "../../types/licenses";
import updateLicenseService from "../../services/licenses/update-license.service";

const updateLicenseController = async (req: Request, res: Response) => {
    const data: UpdateLicenseType = req.body
    const { id } = req.params

    const result = await updateLicenseService(Number(id), data)

    return res.status(200).json(result);
}

export default updateLicenseController;
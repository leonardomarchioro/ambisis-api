import { Request, Response } from "express";
import deleteLicenseService from "../../services/licenses/delete-license.service";

const deleteLicenseController = async (req: Request, res: Response) => {
    const { id } = req.params

    await deleteLicenseService(Number(id))

    return res.status(200).json({ status: "License has been deleted with success!" });
}

export default deleteLicenseController;
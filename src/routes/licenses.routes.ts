import { Router } from "express";

// controllers
import listLicensesController from "../controllers/licenses/list-licenses.controller";
import createLicenseController from "../controllers/licenses/create-license.controller";
import updateLicenseController from "../controllers/licenses/update-license.controller";
import deleteLicenseController from "../controllers/licenses/delete-license.controller";

// middlewares
import { expressYupMiddleware } from "express-yup-middleware";

// validators
import {
  createLicenseSchema,
  updateLicenseSchema,
  deleteLicenseSchema,
} from "../validations/licenses-schemas.validation";

const licensesRouter = Router();

licensesRouter.post(
  "/insert",
  expressYupMiddleware({ schemaValidator: createLicenseSchema }),
  createLicenseController
);

licensesRouter.get("", listLicensesController);

licensesRouter.patch(
  "/update/:id",
  expressYupMiddleware({ schemaValidator: updateLicenseSchema }),
  updateLicenseController
);

licensesRouter.delete(
  "/delete/:id",
  expressYupMiddleware({ schemaValidator: deleteLicenseSchema }),
  deleteLicenseController
);

export default licensesRouter;

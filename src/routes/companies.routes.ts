import { Router } from "express";

// controllers
import createCompanyController from "../controllers/companies/create-company.controller";
import listCompaniesController from "../controllers/companies/list-companies.controller";
import updateCompanyController from "../controllers/companies/update-company.controller";
import deleteCompanyController from "../controllers/companies/delete-company.controller";

// middlewares
import ValidateDuplicateCNPJMiddleware from "../middlewares/companies/validate-duplicate-cnpj.middleware";
import { expressYupMiddleware } from "express-yup-middleware";

// validators
import {
  createCompanySchema,
  updateCompanySchema,
  deleteCompanySchema,
} from "../validations/companies-schema.validation";

const companiesRouter = Router();

companiesRouter.post(
  "/insert",
  expressYupMiddleware({ schemaValidator: createCompanySchema }),
  ValidateDuplicateCNPJMiddleware,
  createCompanyController
);

companiesRouter.get("", listCompaniesController);

companiesRouter.patch(
  "/update/:id",
  expressYupMiddleware({ schemaValidator: updateCompanySchema }),
  ValidateDuplicateCNPJMiddleware,
  updateCompanyController
);

companiesRouter.delete(
  "/delete/:id",
  expressYupMiddleware({ schemaValidator: deleteCompanySchema }),
  deleteCompanyController
);

export default companiesRouter;

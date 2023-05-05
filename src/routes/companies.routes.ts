import { Router } from "express";

import createCompanyController from "../controllers/companies/create-company.controller";
import listCompaniesController from "../controllers/companies/list-companies.controller";
import updateCompanyController from "../controllers/companies/update-company.controller";
import deleteCompanyController from "../controllers/companies/delete-company.controller";

const companiesRouter = Router();

companiesRouter.post("/insert", createCompanyController); 

companiesRouter.get("", listCompaniesController); 

companiesRouter.patch('/update/:id', updateCompanyController); 

companiesRouter.delete('/delete/:id', deleteCompanyController);

export default companiesRouter;
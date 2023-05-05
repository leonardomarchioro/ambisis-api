import { Router } from "express";

// controllers
import createCompanyController from "../controllers/companies/create-company.controller";
import listCompaniesController from "../controllers/companies/list-companies.controller";
import updateCompanyController from "../controllers/companies/update-company.controller";
import deleteCompanyController from "../controllers/companies/delete-company.controller";

// middlewares
import ValidateDuplicateCNPJMiddleware from "../middlewares/companies/validate-duplicate-cnpj.middleware";

const companiesRouter = Router();

companiesRouter.post("/insert", ValidateDuplicateCNPJMiddleware, createCompanyController); 

companiesRouter.get("", listCompaniesController); 

companiesRouter.patch('/update/:id', ValidateDuplicateCNPJMiddleware, updateCompanyController); 

companiesRouter.delete('/delete/:id', deleteCompanyController);

export default companiesRouter;
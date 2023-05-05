import { object, string } from "yup";

// custom validators
import validateCNPJHelper from "../helpers/validate-cnpj.helper";
import validateIdHelper from "../helpers/validate-id.helper";
import valideteCEPHelper from "../helpers/validate-cep.helper";

export const createCompanySchema = {
  schema: {
    body: {
      yupSchema: object()
        .shape({
          legalName: string().required("input 'legalName' is required"),
          cnpj: string()
            .required("input 'cnpj' is required")
            .test(
              "validate-cnpj-type",
              "CNPJ is not valid",
              validateCNPJHelper
            ),
          zipCode: string()
            .required("input 'zipCode' is required")
            .test("validate-CEP-type", "CEP is not valid", valideteCEPHelper),
          city: string().required("input 'city' is required"),
          state: string().required("input 'state' is required"),
          neighborhood: string().required("input 'neighborhood' is required"),
          complement: string(),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },
};

export const updateCompanySchema = {
  schema: {
    params: {
      yupSchema: object().shape({
        id: string()
          .required()
          .test(
            "validate-id-type",
            "param 'id' is not valid number",
            validateIdHelper
          ),
      }),
    },
    body: {
      yupSchema: object()
        .shape({
          legalName: string(),
          cnpj: string().test(
            "validate-cnpj-type",
            "CNPJ is not valid",
            validateCNPJHelper
          ),
          zipCode: string().test(
            "validate-CEP-type",
            "CEP is not valid",
            valideteCEPHelper
          ),
          city: string(),
          state: string(),
          neighborhood: string(),
          complement: string(),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },
};

export const deleteCompanySchema = {
  schema: {
    params: updateCompanySchema.schema.params,
  },
};

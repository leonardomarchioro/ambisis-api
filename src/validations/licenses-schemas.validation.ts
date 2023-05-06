import { number, object, string } from "yup";

import validateIdHelper from "../helpers/validate-id.helper";

export const createLicenseSchema = {
  schema: {
    body: {
      yupSchema: object()
        .shape({
          companyId: number().required("input 'companyId' is required"),
          number: string().required("input 'number' is required"),
          environmentalAgency: string().required(
            "input 'environmentalAgency' is required"
          ),
          issuance: string()
            .required("input 'issuance' is required")
            .matches(
              /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/,
              "Invalid Date format"
            ),
          expiration: string()
            .required("input 'expiration' is required")
            .matches(
              /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/,
              "Invalid Date format"
            ),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },
};

export const updateLicenseSchema = {
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
          companyId: number(),
          number: string(),
          environmentalAgency: string(),
          issuance: string().matches(
            /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/,
            "Invalid Date format"
          ),
          expiration: string().matches(
            /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/,
            "Invalid Date format"
          ),
        })
        .noUnknown(true),
      validateOptions: {
        abortEarly: false,
        stripUnknown: false,
      },
    },
  },
};

export const deleteLicenseSchema = {
  schema: {
    params: updateLicenseSchema.schema.params,
  },
};

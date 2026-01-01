import * as Yup from "yup";
import type {
  TValidationFields,
  TValidationFieldsSchemaAddress,
  TValidationFieldsSchemaInitials,
} from "./types";

export const validationFieldsSchemaInitials: Yup.ObjectSchema<TValidationFieldsSchemaInitials> =
  Yup.object().shape({
    phone: Yup.string()
      .required("Поле обязательное")
      .matches(
        /^\+7 \(\d{3}\) \d{3} \d{2} \d{2}$/,
        "Формат: +7 (XXX) XXX XX XX"
      ),
    firstName: Yup.string().required("Поле обязательное"),
    lastName: Yup.string().required("Поле обязательное"),
    gender: Yup.string().required("Поле обязательное"),
  });

const validationFieldsSchemaAddress: Yup.ObjectSchema<TValidationFieldsSchemaAddress> =
  Yup.object().shape({
    work: Yup.string().required("Поле обязательное"),
    address: Yup.string().required("Поле обязательное"),
  });

export const validation: TValidationFields = {
  "/": validationFieldsSchemaInitials,
  "/userInitials-step2": validationFieldsSchemaAddress,
};

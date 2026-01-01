import type { FieldInputProps } from "formik";
import * as Yup from "yup";

export type TSelect = {
  value: string;
  label: string;
};

type TStyleContainer = {
  container?: string;
  classNameField?: string;
};

type TStyleTitle = {
  classNameTitle: string;
};

type TTitleItem = {
  type: "title";
  title: string;
  styles: TStyleTitle;
};

export type TFieldItem = {
  name:
    | "phone"
    | "firstName"
    | "lastName"
    | "gender"
    | "work"
    | "address"
    | "loan"
    | "term";
  fieldName: string;
  type: "tel" | "text" | "select" | "range";
  min?: number;
  max?: number;
  styles?: TStyleContainer;
  placeholder?: string;
  options?: TSelect[];
};

type TFormItem = TFieldItem | TTitleItem;

export type TFields = {
  [key: string]: TFormItem[];
};

export type TFieldPhone = {
  field: FieldInputProps<string>;
};

export type TValidationFieldsSchemaInitials = {
  phone: string;
  firstName: string;
  lastName: string;
  gender: string;
};

export type TValidationFieldsSchemaAddress = {
  work: string;
  address: string;
};

export type TValidationFields = {
  [key: string]: Yup.ObjectSchema<
    TValidationFieldsSchemaInitials | TValidationFieldsSchemaAddress
  >;
};

export type TValuesFields = {
  address: string;
  firstName: string;
  gender: string;
  lastName: string;
  phone: string;
  work: string;
  loan: number;
  term: number;
};

export type TLoanParameters = {
  loan: number;
  term: number;
};

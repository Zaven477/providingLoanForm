import { LOAN_DETAILS, PERSONAL_INFO, WORK_ADDRESS } from "../../constants";
import type { TFields } from "./types";

export const fields: TFields = {
  [PERSONAL_INFO]: [
    {
      type: "title",
      title: "Личные данные",
      styles: {
        classNameTitle: "text-[20px] font-bold",
      },
    },
    {
      name: "phone",
      fieldName: "Телефон",
      type: "tel",
      placeholder: "+7 (XXX) XXX XX XX",
      styles: {
        classNameField: "border w-[300px] h-10 outline-none pl-1 text-[18px]",
      },
    },
    {
      name: "firstName",
      fieldName: "Имя",
      type: "text",
      styles: {
        classNameField: "border w-[300px] h-10 outline-none pl-1 text-[18px]",
      },
    },
    {
      name: "lastName",
      fieldName: "Фамилия",
      type: "text",
      styles: {
        classNameField: "border w-[300px] h-10 outline-none pl-1 text-[18px]",
      },
    },
    {
      name: "gender",
      fieldName: "Пол",
      type: "select",
      styles: {
        container: "w-[300px] flex items-center gap-2 mt-4",
        classNameField: "border w-40 h-8 outline-none pl-1 text-[18px]",
      },
      options: [
        { value: "", label: "Выберите пол" },
        { value: "men", label: "Мужской" },
        { value: "women", label: "Женский" },
      ],
    },
  ],
  [WORK_ADDRESS]: [
    {
      type: "title",
      title: "Адрес и место работы",
      styles: {
        classNameTitle: "text-[20px] font-bold",
      },
    },
    {
      name: "work",
      fieldName: "Место работы",
      type: "select",
      styles: {
        container: "flex flex-col",
        classNameField: "border w-[250px] h-10 outline-none text-[18px]",
      },
    },
    {
      name: "address",
      fieldName: "Адрес проживания",
      type: "text",
      styles: {
        classNameField: "w-[250px] border h-10 outline-none text-[18px] pl-1",
      },
    },
  ],
  [LOAN_DETAILS]: [
    {
      type: "title",
      title: "Параметры займа",
      styles: {
        classNameTitle: "text-[20px] font-bold",
      },
    },
    {
      name: "loan",
      fieldName: "Сумма займа",
      type: "range",
      min: 100,
      max: 1000,
      styles: {
        classNameField: "w-[210px]",
      },
    },
    {
      name: "term",
      fieldName: "Срок займа",
      type: "range",
      min: 10,
      max: 30,
      styles: {
        classNameField: "w-[210px]",
      },
    },
  ],
};

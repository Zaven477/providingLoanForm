import { Field, Form, Formik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { fields } from "./fields";
import { useEffect, useState } from "react";
import { getWorkPlace } from "../../../api/getWorkPlace";
import type {
  TFieldPhone,
  TLoanParameters,
  TSelect,
  TValuesFields,
} from "./types";
import { validation } from "./validation";
import { IMaskInput } from "react-imask";
import { createData } from "../../../api/createData";
import { ApprovedLoanModal } from "../ApprovedLoanModal/ApprovedLoanModal";

export const ProvidingLoanForm = () => {
  const { pathname } = useLocation();
  const [works, setWorks] = useState<TSelect[]>([]);
  const [loanParameters, setLoanParameters] = useState<TLoanParameters>({
    loan: 100,
    term: 10,
  });
  const [isOpenModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    phone: "",
    firstName: "",
    lastName: "",
    gender: "",
    work: "",
    address: "",
    loan: 100,
    term: 10,
  };

  const paths = Object.keys(fields);
  const currentPathIndex = paths.indexOf(pathname);
  const isNextPage = currentPathIndex < paths.length - 1;
  const isPrevPage = currentPathIndex > 0;

  const nextPage = (values: TValuesFields) => {
    const isValidFields = validation[pathname].isValidSync(values);
    if (isNextPage && isValidFields) {
      navigate(paths[currentPathIndex + 1]);
    }
  };

  const prevPage = () => {
    if (isPrevPage) {
      navigate(paths[currentPathIndex - 1]);
    }
  };

  const submitForm = async ({
    loan,
    term,
  }: Pick<TValuesFields, "loan" | "term">) => {
    const response = await createData({ loan, term });
    if (response) {
      setLoanParameters({ loan, term });
      setOpenModal(true);
    }
  };

  useEffect(() => {
    getWorkPlace().then((data) => setWorks(data));
  }, []);

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => submitForm(values)}
        validationSchema={validation[pathname]}
      >
        {(props) => {
          return (
            <Form>
              <div className="flex flex-col items-center justify-center h-screen gap-3 pr-2">
                {fields[pathname].map((currentField) => {
                  if (currentField.type === "title") {
                    return (
                      <h1
                        className={currentField.styles.classNameTitle}
                        key={currentField.title}
                      >
                        {currentField.title}
                      </h1>
                    );
                  }
                  if (currentField.type === "tel") {
                    return (
                      <div key={currentField.name}>
                        <p>{currentField.fieldName}</p>
                        <Field
                          name={currentField.name}
                          type={currentField.type}
                        >
                          {({ field }: TFieldPhone) => {
                            return (
                              <IMaskInput
                                {...field}
                                mask="+7 (000) 000 00 00"
                                placeholder="+7 XXX XXX XX XX"
                                className={`${
                                  currentField.styles?.classNameField
                                } ${
                                  props.errors[currentField.name] &&
                                  "border border-red-500"
                                }`}
                              />
                            );
                          }}
                        </Field>
                        {props.errors[currentField.name] && (
                          <div className="text-[red]">
                            {props.errors[currentField.name]}
                          </div>
                        )}
                      </div>
                    );
                  }
                  if (currentField.type === "text") {
                    return (
                      <div key={currentField.name}>
                        <p>{currentField.fieldName}</p>
                        <Field
                          name={currentField.name}
                          type={currentField.type}
                          placeholder={currentField.placeholder}
                          className={`${currentField.styles?.classNameField} ${
                            props.errors[currentField.name] &&
                            "border border-red-500"
                          }`}
                        />
                        {props.errors[currentField.name] && (
                          <div className="text-[red]">
                            {props.errors[currentField.name]}
                          </div>
                        )}
                      </div>
                    );
                  }
                  if (currentField.type === "select") {
                    return (
                      <div
                        className={currentField.styles?.container}
                        key={currentField.name}
                      >
                        <span>{currentField.fieldName}</span>
                        <div>
                          <Field
                            as={currentField.type}
                            name={currentField.name}
                            className={`${
                              currentField.styles?.classNameField
                            } ${
                              props.errors[currentField.name] &&
                              "border border-red-500"
                            }`}
                          >
                            {currentField.options ? (
                              currentField.options.map((option) => (
                                <option value={option.value} key={option.value}>
                                  {option.label}
                                </option>
                              ))
                            ) : (
                              <>
                                <option value="">Выберите место работы</option>
                                {works.map((work) => (
                                  <option value={work.value} key={work.value}>
                                    {work.label}
                                  </option>
                                ))}
                              </>
                            )}
                          </Field>
                          {props.errors[currentField.name] && (
                            <div className="text-[red]">
                              {props.errors[currentField.name]}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  }
                  if (currentField.type === "range") {
                    return (
                      <div key={currentField.name}>
                        <p>
                          {currentField.fieldName}:{" "}
                          {props.values[currentField.name]}
                        </p>
                        <Field
                          type={currentField.type}
                          name={currentField.name}
                          min={currentField.min}
                          max={currentField.max}
                          className={currentField.styles?.classNameField}
                        />
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
                <div className="flex gap-3 ml-5">
                  {isPrevPage && (
                    <button
                      type="button"
                      className="w-[90px] h-8 bg-amber-400 cursor-pointer"
                      onClick={prevPage}
                    >
                      Назад
                    </button>
                  )}
                  <button
                    type={isNextPage ? "button" : "submit"}
                    className={`min-w-[90px] h-8 bg-amber-400 cursor-pointer pl-2 pr-2`}
                    onClick={
                      isNextPage ? () => nextPage(props.values) : undefined
                    }
                  >
                    {isNextPage ? "Далее" : "Подать заявку"}
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
      <ApprovedLoanModal
        isOpenModal={isOpenModal}
        setOpenModal={setOpenModal}
        loanParameters={loanParameters}
      />
    </>
  );
};

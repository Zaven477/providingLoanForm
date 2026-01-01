import { Header } from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router";
import { ProvidingLoanForm } from "./features/providingLoan/FormFields/FormFields";
import { fields } from "./features/providingLoan/FormFields/fields";
import { PERSONAL_INFO } from "./features/constants";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PERSONAL_INFO} element={<Header />}>
          {Object.keys(fields).map((path) => (
            <Route key={path} path={path} element={<ProvidingLoanForm />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

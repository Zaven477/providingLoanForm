import type { TValuesFields } from "../FormFields/types";

export interface IApprovedLoanModal {
  isOpenModal: boolean;
  setOpenModal: (arg: boolean) => void;
  loanParameters: Pick<TValuesFields, "loan" | "term">;
}

import { formatDays } from "../../utils";
import type { IApprovedLoanModal } from "./types";

export const ApprovedLoanModal = ({
  isOpenModal,
  loanParameters,
  setOpenModal,
}: IApprovedLoanModal) => {
  const days = formatDays(loanParameters.term);
  const message = `Вам одобрена выдача займа ${loanParameters.loan} сроком на ${days}`;

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      {isOpenModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0.5,0.5,0.5,0.5)] flex justify-center items-center">
          <div className="bg-[white] h-[110px] w-[430px] flex justify-center">
            <div className="flex flex-col">
              <p className="mt-4">{message}</p>
              <button
                className="h-[30px] mt-6 w-[100px] bg-amber-400 cursor-pointer ml-auto"
                onClick={closeModal}
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

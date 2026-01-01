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
          <div className="bg-[white] min-h-[110px] max-w-[430px] flex justify-center ml-2 mr-2">
            <div className="flex flex-col">
              <p className="mt-4 pl-2 pr-2">{message}</p>
              <button
                className="h-[30px] mt-6 mb-2 w-[100px] bg-amber-400 cursor-pointer ml-auto mr-2"
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

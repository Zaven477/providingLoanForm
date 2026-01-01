type TDataRequest = {
  loan: number;
  term: number;
};

export const createData = async (data: TDataRequest) => {
  const response = await new Promise((resolve) => {
    if (data) {
      resolve("ok");
    }
  });
  return response;
};

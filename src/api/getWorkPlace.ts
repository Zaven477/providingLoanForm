export const data = [
  { value: "beauty", label: "Салон красоты" },
  { value: "technology", label: "ИТ" },
  { value: "finance", label: "Финансы" },
  { value: "economy", label: "Экономика" },
];

interface IWorkPlace {
  value: string;
  label: string;
}

export const getWorkPlace = async (): Promise<IWorkPlace[]> => {
  const response = await new Promise<IWorkPlace[]>((resolve) => resolve(data));
  return response;
};

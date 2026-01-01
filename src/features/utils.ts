const ruRules = new Intl.PluralRules("RU");

const dayDeclensions = new Map([
  ["one", "день"],
  ["few", "дня"],
  ["many", "дней"],
]);

export const formatDays = (term: number) => {
  const rule = ruRules.select(term);
  const dayWord = dayDeclensions.get(rule);
  return `${term} ${dayWord}`;
};

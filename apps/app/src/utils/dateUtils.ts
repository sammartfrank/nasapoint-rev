export const parseDate = (date: Date | string) => {
  const parsedDateToDB = String(new Date(date).toISOString().split('T')[0]);
  return parsedDateToDB;
};

export const TODAY =
  new Date().getTimezoneOffset() === 0
    ? new Date()
    : new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000);

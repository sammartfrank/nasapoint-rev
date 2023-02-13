export const parseDate = (date: Date) => {
  const parsedDateToDB = new Date(date).toISOString().split('T')[0].toString();
  return parsedDateToDB;
};

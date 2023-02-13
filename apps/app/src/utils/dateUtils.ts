export const parseDate = (date: Date) => {
  const parsedDateToDB = String(new Date(date).toISOString().split('T')[0]);
  return parsedDateToDB;
};

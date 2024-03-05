export const dateHandler = (publicationDate: string) => {
  const dateObj = new Date(publicationDate);
  return Intl.DateTimeFormat('pl-PL', { dateStyle: 'full', timeStyle: 'short' }).format(dateObj);
};

export default dateHandler;

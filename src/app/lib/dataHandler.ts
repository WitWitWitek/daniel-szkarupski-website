const dateHandler = (date: string): string => {
  const dateToRefactor = new Date(date);
  return dateToRefactor.toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
};

export default dateHandler;

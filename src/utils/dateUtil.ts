export const formatDate = (localDateTime: string): string => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long' || 'short' || 'numeric',
    day: 'numeric',
  };

  const parsedDate = new Date(Date.parse(localDateTime)).toLocaleString(
    'pt-br',
    dateOptions,
  );

  return parsedDate;
};

export const formatDateTime = (localDateTime: string): string => {
  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long' || 'short' || 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  const parsedDateTime = new Date(Date.parse(localDateTime)).toLocaleString(
    'pt-br',
    dateTimeOptions,
  );

  const formatedDateTime = parsedDateTime.replace(
    /(.*?)(\d{2}:\d{2})/,
    '$1 às $2',
  );

  return formatedDateTime;
};

export const parseDate = (date: Date): string =>
  new Date(date).toLocaleDateString('pt-BR');

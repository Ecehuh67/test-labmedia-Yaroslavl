export const URL = 'https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users';
export const SortTypes = {
  DATE: 'date',
  RATE: 'rate',
};
export const SHOWN_USERS = 5;

const getDate = (date) => {
  const day = new Date(date).getDate();
  const month = new Date(date).getMonth();
  const year = new Date(date).getFullYear();

  return { day, month, year };
};

export const covertDateFormat = (date) => {
  const localDate = getDate(date);
  Object.keys(localDate).forEach((el) => {
    if (localDate[el] < 10) {
      localDate[el] = `0${localDate[el]}`;
    }
  });

  return localDate;
};

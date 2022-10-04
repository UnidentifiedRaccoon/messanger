import uppercaseFirst from './text';
import i18y from './i18y.json';

export const secInDay = 1000 * 60 * 60 * 24;

export const timeFormat = (date, short = true, locale = 'ru') => {
  const today = date.getDate() === new Date().getDate();
  const sameWeek = date.getDay() < new Date().getDay();
  const sameYear = date.getFullYear() === new Date().getFullYear();

  if (today) {
    if (short) return new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit' }).format(date);
    return uppercaseFirst(i18y[locale].today);
  } if (sameWeek) {
    if (short) return uppercaseFirst(new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date));
    return new Intl.DateTimeFormat(locale, { month: 'long', day: 'numeric' }).format(date);
  } if (sameYear) {
    return new Intl.DateTimeFormat(locale, { month: short ? 'short' : 'long', day: 'numeric' }).format(date);
  }
  return new Intl.DateTimeFormat(
    locale,
    { day: 'numeric', month: short ? 'short' : 'long', year: 'numeric' },
  ).format(date);
};

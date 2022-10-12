import capitalize from './text';
import i18y from './i18y.json';

export const SEC_IN_DAY = 1000 * 60 * 60 * 24;

export const timeFormat = (date: Date, short = true, locale = 'ru') => {
  const today = date.getDate() === new Date().getDate();
  const sameWeek = date.getDay() < new Date().getDay();
  const sameYear = date.getFullYear() === new Date().getFullYear();

  if (today) {
    if (short) return new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit' }).format(date);
    return capitalize(i18y[locale].today);
  } if (sameWeek) {
    if (short) return capitalize(new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date));
    return new Intl.DateTimeFormat(locale, { month: 'long', day: 'numeric' }).format(date);
  } if (sameYear) {
    return new Intl.DateTimeFormat(locale, { month: short ? 'short' : 'long', day: 'numeric' }).format(date);
  }
  return new Intl.DateTimeFormat(
    locale,
    { day: 'numeric', month: short ? 'short' : 'long', year: 'numeric' },
  ).format(date);
};

export const formatMessageTimeHHMM = (arr: any) => arr.map((item: any) => {
  if (!arr.length) return [];
  const date = new Date(item.time);
  const formattedTime = new Intl.DateTimeFormat('ru', { hour: '2-digit', minute: '2-digit' }).format(date);
  const time = date.toISOString();
  return {
    ...item,
    time: { formatted: formattedTime, datetime: time },
  };
});

export const formatToMessageTime = (arr: any) => arr.map((day: any) => (
  { ...day, unread: formatMessageTimeHHMM(day.unread), read: formatMessageTimeHHMM(day.read) }
));

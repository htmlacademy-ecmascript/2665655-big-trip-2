import dayjs from 'dayjs';
import duration from 'dayjs/plugin/DURATION';
dayjs.extend(duration);

const MONTH_DAY_DATE = 'MMM DD';

const MINUTES_DURATION = 1000 * 60 ;
const HOURS_DURATION = MINUTES_DURATION * 60;
const DAYS_DURATION = HOURS_DURATION * 24;

// Форматирует дату
function displayDueDate (date, format = MONTH_DAY_DATE){
  return date ? dayjs(date).format(format) : '';
}

// Калькулятор дистанции
function getCalculateInterval (dateFrom, dateTo){
  const difference = dayjs(dateTo).diff(dateFrom);

  let format = 'mm[M]';

  if(difference >= HOURS_DURATION){
    format = 'HH[H] mm[M]';
  }
  if(difference >= DAYS_DURATION){
    format = 'D[D] HH[H] mm[M]';
  }
  return dayjs(difference).format(format);
}

export{displayDueDate,getCalculateInterval};

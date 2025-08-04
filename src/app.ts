import {
  isBusinessDay,
  getFirstBusinessDayOfMonth,
  getLastBusinessDayOfMonth,
  getBusinessDaysOfMonth,
} from "./functions";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let global: any;
global.isBusinessDay = isBusinessDay;
global.getFirstBusinessDayOfMonth = getFirstBusinessDayOfMonth;
global.getLastBusinessDayOfMonth = getLastBusinessDayOfMonth;
global.getBusinessDaysOfMonth = getBusinessDaysOfMonth;


export const phoneFormat = (string = '') => string.substring(0, 3) + '-' + string.slice(3)

export const getShortMonthName = (monthName) => monthName.slice(0, 3) + '\'';

export const removeSigns = (date) => date.replace(/\/|\./g, '') // for / and .

export const removeSpaces = (string) => string.replace(/\r?\n|\r/g, '') //good for base64

export const fixTwoDigits = (numericDate) => numericDate < 10 ? '0' + numericDate : numericDate

export const compare = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

export const replaceToken = (text, token, newToken) => text.replace(new RegExp(token, "g"), newToken)

export const getMonthName = (numberMonth) => {
  const month = numberMonth.toString().slice(4);
  switch (month) {
    case '01':
      return "ינואר"
    case '02':
      return "פברואר"
    case '03':
      return "מרץ"
    case '04':
      return "אפריל"
    case '05':
      return "מאי"
    case '06':
      return "יוני"
    case '07':
      return "יולי"
    case '08':
      return "אוגוסט"
    case '09':
      return "ספטמבר"
    case '10':
      return "אוקטובר"
    case '11':
      return "נובמבר"
    case '12':
      return "דצמבר"
    default:
      return ''
  }
}

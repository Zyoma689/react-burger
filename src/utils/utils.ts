export function setCookie(name: string, value: string, props?: any) {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == 'number' && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + '=' + value;
  for (const propName in props) {
    updatedCookie += '; ' + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += '=' + propValue;
    }
  }
  document.cookie = updatedCookie;
}

export function getCookie(name: string) {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function deleteCookie(name: string) {
  setCookie(name, '', { expires: -1 });
}

export function formatDate(date: string) {
  const dateToFormat = new Date(date);
  const currentDate = new Date();
  const daysAgo = currentDate.getDay() - dateToFormat.getDay();
  const hours = dateToFormat.getHours() > 9 ? dateToFormat.getHours().toString() : '0' + dateToFormat.getHours().toString();
  const minutes = dateToFormat.getMinutes() > 9 ? dateToFormat.getMinutes().toString() : '0' + dateToFormat.getMinutes().toString();

  let formattedDate = '';
  const time = `${hours}:${minutes} i-GMT+${-dateToFormat.getTimezoneOffset() / 60}`;
  switch (true) {
    case (daysAgo === 0): {
      formattedDate += 'Сегодня, ';
      break;
    }
    case (daysAgo === 1): {
      formattedDate += 'Вчера, ';
      break;
    }
    case ((daysAgo > 9) && (daysAgo % 10 === 1)): {
      formattedDate += `${daysAgo} дня назад, `;
      break;
    }
    case ((daysAgo > 9) && (daysAgo % 10 > 1) && (daysAgo % 10 < 5)): {
      formattedDate += `${daysAgo} дня назад, `;
      break;
    }
    default: {
      formattedDate += `${daysAgo} дней назад, `;
      break;
    }
  }
  // console.log(`${formattedDate + time}`);
  return `${formattedDate + time}`
}
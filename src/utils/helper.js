
export const openHoursManage = (obj) => {
  let willOpen = '';
  let willClosed = '';
  let openUntil = '';
  const date = new Date();
  const today = date.getDay();
  const time = parseInt(
    `${JSON.stringify(date.getHours())}${JSON.stringify(date.getMinutes())}`, 10
  );

  if (obj === undefined || obj.open[today] === undefined) {
    return '';
  }
  const closeTimeInt = parseInt(obj.open[today].end, 10);
  const openTime = `${obj.open[today].start.slice(0, 2)}:${obj.open[today].start.slice(2)}`;
  const closeTime = `${obj.open[today].end.slice(0, 2)}:${obj.open[
    today
  ].end.slice(2)}`;
  if (closeTimeInt - time < 100) {
    willClosed = `Close soon ${closeTime}`;
  } else if (time > closeTimeInt || time < closeTimeInt) {
    willOpen = `Opens at ${openTime}`;
  } else {
    openUntil = `Open until ${closeTime}`;
  }
  return (
    willClosed || willOpen || openUntil
  );
};

export const getCategoriesTitle = (arr) => {
  const titleArr = arr.map((obj) => obj.title);
  const concatenateTitles = titleArr.reduce(
    (accTitles, singleTitle) => `${accTitles}, ${singleTitle}`
  );
  return concatenateTitles;
};

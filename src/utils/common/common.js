export const addLeadingZeroesToDate = date => { 
  return String('0' + date).slice(-2);
};

export const convertMillisecondsToReadableDate = milliseconds => {
  if (!milliseconds){
    return  '';
  }

  const date = new Date(milliseconds);

  const year = date.getFullYear();
  const month = addLeadingZeroesToDate(date.getMonth() + 1);
  const day = addLeadingZeroesToDate(date.getDate());

  const hours = addLeadingZeroesToDate(date.getHours());
  const minutes = addLeadingZeroesToDate(date.getMinutes());

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

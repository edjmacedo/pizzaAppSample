const formatDateTime = (dateTime: string) => {
  const date = new Date(dateTime);
  return date.getHours() + ":" + date.getMinutes();
};

export default formatDateTime;

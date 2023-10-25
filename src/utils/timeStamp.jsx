import moment from "moment";

export const formattedTimefromNow = (inputTime) => {
  const timestampMoment = moment(inputTime);

  const currentTime = moment();

  const daysAgo = currentTime.diff(timestampMoment, "days");
  console.log(daysAgo);
  let formattedTime;

  if (daysAgo === 0) {
    formattedTime = "today";
  } else if (
    daysAgo === 1 ||
    (daysAgo === 0 && currentTime.isBefore(timestampMoment, "day"))
  ) {
    formattedTime = "yesterday";
  } else {
    formattedTime = timestampMoment.format("DD MMM");
  }
  return formattedTime;
};

export const formattedTime = (time) => {
  const formattedTime = moment(time).format("h:mm A");
  return formattedTime;
};

//date and time format
const showTime = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const time = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  //current date
  const formattedDate = new Date().toLocaleDateString("id-ID", options);
  const todayElement = document.getElementById("today");
  todayElement.innerHTML = formattedDate;
  //current time
  const formattedTime = new Date().toLocaleTimeString("id-ID", time);
  const timeElement = document.getElementById("time");
  timeElement.innerHTML = formattedTime;
};

setInterval(showTime, 1000);

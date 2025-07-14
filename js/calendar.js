// Format Tanggal
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

// membuat objek tanggal baru
const today = new Date();
const formattedDate = today.toLocaleDateString("id-ID", options);
const todayElement = document.getElementById("today");
todayElement.innerHTML = formattedDate;

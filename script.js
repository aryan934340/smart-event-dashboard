const titleInput = document.getElementById("title");
const dateInput = document.getElementById("date");
const categoryInput = document.getElementById("category");
const descInput = document.getElementById("desc");

const eventsDiv = document.querySelector(".events");

const addEventBtn = document.querySelector("form button");
const clearBtn = document.querySelector("#Btn1");
const sample_events = document.querySelector("#Btn2");

addEventBtn.addEventListener("click", function () {
  const title = titleInput.value.trim();
  const date = dateInput.value.trim();
  const category = categoryInput.value;
  const desc = descInput.value.trim();

  if (title === "" || date === "") {
    alert("Please enter Event Title and Date");
    return;
  }

 
  if (eventsDiv.innerText.includes("No events yet")) {
    eventsDiv.innerHTML = "";
  }

  
  const eventDiv = document.createElement("div");
  eventDiv.className = "event-item";

  eventDiv.innerHTML = `
    <strong>${title}</strong><br>
    ${date}<br>
    ${category}<br>
    <small>${desc}</small>
  `;

  eventsDiv.appendChild(eventDiv);

  // Clear inputs
  titleInput.value = "";
  dateInput.value = "";
  descInput.value = "";
});


clearBtn.addEventListener("click", function () {
  eventsDiv.innerHTML = "No events yet. Add your first event!";
});

sample_events.addEventListener("click", function () {

  if (eventsDiv.innerText.includes("No events yet")) {
    eventsDiv.innerHTML = "";
  }

  const sampleData = [
    {
      title: "College Fest",
      date: "2026-03-10",
      category: "Entertainment",
      desc: "Annual college cultural fest."
    },
    {
      title: "Project Submission",
      date: "2026-03-15",
      category: "Academic",
      desc: "Final year project deadline."
    }
  ];

  sampleData.forEach(function (event) {
    const eventDiv = document.createElement("div");
    eventDiv.className = "event-item";

    eventDiv.innerHTML = `
      <strong>${event.title}</strong><br>
      ${event.date}<br>
      ${event.category}<br>
      <small>${event.desc}</small>
    `;

    eventsDiv.appendChild(eventDiv);
  });

});

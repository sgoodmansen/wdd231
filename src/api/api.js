const baseUrl = "https://developer.nps.gov/api/v1/";
const apiKey = import.meta.env.VITE_NPS_API_KEY;

async function getJSON(endpoint) {
  const url = baseUrl + endpoint + `&api_key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function getClimbingParks() {
  const data = await getJSON("activities/parks?q=climbing");
  const parks = data.data[0].parks;
  displayParks(parks);
}

function displayParks(parks) {
  const parkList = document.querySelector("#park-list");
  const html = parks.map(listTemplate).join("");
  parkList.innerHTML = html;
}

function listTemplate(item) {
  return `<li><a href="${item.url}">${item.fullName}</a> - ${item.states}</li>`;
}

getClimbingParks();

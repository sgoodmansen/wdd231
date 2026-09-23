import { getParkData, parkInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

const parkData = getParkData();

function setParkIntro(data){
  //update the full name of the park
  const intro = document.querySelector(".intro");
  intro.innerHTML = `
    <h1>${data.fullName}</h1>
    <p>${data.description}</p>
    `;
}

function setParkInfoLinks(data) {
  const infoSection = document.querySelector(".info");
  const html = data.map(mediaCardTemplate);

  infoSection.insertAdjacentHTML("afterbegin", html.join(""));
}

setHeaderFooter(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkInfoLinks);
import { getParkData, getInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import "../css/style.css";
import "../css/home.css";

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

const menuButton = document.querySelector("#global-nav-toggle");
const globalNav = document.querySelector(".global-nav");

menuButton.addEventListener("click", function() {
  globalNav.classList.toggle("show");

  const isOpen = globalNav.classList.contains("show");
  globalNav.inert = !isOpen;

  // Update the button's expanded state
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute("aria-label", isOpen ? "Close Menu" : "Open Menu");
});

async function init(){
  const parkData = await getParkData();
  const links = getInfoLinks(parkData.images);

  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfoLinks(links);
}

init();
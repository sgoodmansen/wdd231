import { parkInfoTemplate, footerTemplate } from "./templates.mjs";

function setHeaderInfo(data){
//update the disclaimer link
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = data.url;
disclaimer.innerHTML = data.fullName;

//update the browser tab title
document.title = data.fullName;

//update the hero image
const heroImage = document.querySelector(".hero-banner > img");
heroImage.src = data.images[0].url;
heroImage.alt = data.images[0].altText;

//update the park information displayed over the hero image
const heroContent = document.querySelector(".hero-banner__content");
heroContent.innerHTML = parkInfoTemplate(data);
}

function setParkFooter(data) {
const footer = document.querySelector("#park-footer");
footer.innerHTML = footerTemplate(data);
}

function setHeaderFooter(data){
    setHeaderInfo(data);
    setParkFooter(data);
}

export default setHeaderFooter;
import spritePath from "../images/sprite.symbol.svg";

export function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

export function mediaCardTemplate(info){
  return `
    <article class="media-card">
      <a href="${info.link}">
        <img src="${info.image}" alt="" />
      </a>
      <h2>
        <a href="${info.link}">${info.name}</a>
      </h2>
      <p>${info.description}</p>
    </article>
  `;
}

export function alertTemplate(alert) {
  let alertType = "";

  if (alert.category === "Park Closure") {
    alertType = "closure";
  } else {
    alertType = alert.category.toLowerCase();
  }

  return `
    <li class="alert">
      <svg class="icon" focusable="false" aria-hidden="true">
        <use href="${spritePath}#alert-${alertType}"></use>
      </svg>
      <div>
        <h3 class="alert-${alertType}">${alert.title}</h3>
        <p>${alert.description}</p>
      </div>
    </li>
  `;
}

export function visitorCenterTemplate(visitorCenter) {
  return `
    <article class="visitor-center">
      <h3>${visitorCenter.name}</h3>
      <p>${visitorCenter.description}</p>
      <p>${visitorCenter.directionsInfo}</p>
    </article>
  `;
}

export function activityTemplate(activity) {
  return `
    <li>${activity.name}</li>
  `;
}

function getMailingAddress(addresses) {
  const mailing = addresses.find((address) => address.type === "Mailing");  

  return mailing;
}

function getVoicePhone(phoneNumbers) {
  const voicePhone = phoneNumbers.find((phoneNumber) => phoneNumber.type === "Voice");

  return voicePhone;
}

export function footerTemplate(info) {
  const mailing = getMailingAddress(info.addresses);
  const voicePhone = getVoicePhone(info.contacts.phoneNumbers);

  return `
    <section class="contact">
      <h2>Contact Info</h2>

      <h3>Mailing Address: </h3>
      <p>
        ${mailing.line1}<br>
        ${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}
      </p>

      <h3>Phone:</h3>
      <p>${voicePhone.phoneNumber}</p>
    </section>
  `;
}
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
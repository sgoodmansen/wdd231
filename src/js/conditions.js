import { getParkData, getParkAlerts, getVisitorCenterData } from "./parkService.mjs";
import { activityTemplate, alertTemplate, visitorCenterTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import initNavigation from "./navigation.mjs";
import "../css/style.css";
import "../css/conditions.css";

function setParkAlerts(alerts) {
    const alertList = document.querySelector(".alerts ul");
    const html = alerts.map(alertTemplate);

    alertList.insertAdjacentHTML("afterbegin", html.join(""));
}

function setVisitorCenters(visitorCenters) {
    const visitorCenterList = document.querySelector(".visitor-centers");
    const html = visitorCenters.map(visitorCenterTemplate);

    visitorCenterList.insertAdjacentHTML("afterbegin", html.join(""));
}

function setActivities(activities) {
    const activitiesList = document.querySelector(".activities");
    const html = activities.map(activityTemplate);

    activitiesList.insertAdjacentHTML("afterbegin", html.join(""));
}

async function init(){
  const parkData = await getParkData();
  const alerts = await getParkAlerts(parkData.parkCode);
  const visitorCenters = await getVisitorCenterData(parkData.parkCode);

  setHeaderFooter(parkData);
  setParkAlerts(alerts);
  setVisitorCenters(visitorCenters);
  setActivities(parkData.activities);
}

initNavigation();
init();
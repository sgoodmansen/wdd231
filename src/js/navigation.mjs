function initNavigation() {
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
}

export default initNavigation;
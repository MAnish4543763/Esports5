/* =========================================================
   MANIFEST ESPORTS
   NAVIGATION JAVASCRIPT
========================================================= */


/* =========================================================
   GET NAVIGATION ELEMENTS
========================================================= */

const menuToggle = document.getElementById("menuToggle");

const sideMenu = document.getElementById("sideMenu");

const menuOverlay = document.getElementById("menuOverlay");


/* =========================================================
   OPEN / CLOSE MENU FUNCTION
========================================================= */

function toggleMenu() {

    const isOpen =
        sideMenu.classList.contains("active");


    if (isOpen) {

        closeMenu();

    } else {

        openMenu();

    }

}


/* =========================================================
   OPEN MENU
========================================================= */

function openMenu() {

    menuToggle.classList.add("active");

    sideMenu.classList.add("active");

    menuOverlay.classList.add("active");


    /* Accessibility */

    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Close Menu"
    );

    sideMenu.setAttribute(
        "aria-hidden",
        "false"
    );


    /* Prevent background scrolling */

    document.body.style.overflow = "hidden";

}


/* =========================================================
   CLOSE MENU
========================================================= */

function closeMenu() {

    menuToggle.classList.remove("active");

    sideMenu.classList.remove("active");

    menuOverlay.classList.remove("active");


    /* Accessibility */

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Open Menu"
    );

    sideMenu.setAttribute(
        "aria-hidden",
        "true"
    );


    /* Restore scrolling */

    document.body.style.overflow = "";

}


/* =========================================================
   HAMBURGER CLICK
========================================================= */

if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        toggleMenu
    );

}


/* =========================================================
   OVERLAY CLICK
   Clicking outside the menu closes it.
========================================================= */

if (menuOverlay) {

    menuOverlay.addEventListener(
        "click",
        closeMenu
    );

}


/* =========================================================
   MENU LINKS
   Close menu after clicking a navigation link.
========================================================= */

const menuLinks =
    document.querySelectorAll(
        ".menu-navigation a"
    );


menuLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            closeMenu();

        }
    );

});


/* =========================================================
   ESC KEY
   Pressing ESC closes the menu.
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            sideMenu.classList.contains("active")
        ) {

            closeMenu();

        }

    }
);


/* =========================================================
   PROFILE DROPDOWN
========================================================= */

const profileButton =
    document.getElementById(
        "profileButton"
    );

const profileDropdown =
    document.getElementById(
        "profileDropdown"
    );


if (profileButton && profileDropdown) {

    profileButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            profileDropdown.classList.toggle(
                "active"
            );

        }
    );

}


/* =========================================================
   CLOSE PROFILE WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        if (
            profileDropdown &&
            !profileDropdown.contains(event.target) &&
            profileButton &&
            !profileButton.contains(event.target)
        ) {

            profileDropdown.classList.remove(
                "active"
            );

        }

    }
);


/* =========================================================
   LOGOUT
========================================================= */

const logoutButton =
    document.getElementById(
        "logoutButton"
    );


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        function () {

            /*
                If you later use localStorage
                for authentication, clear it here.

                Example:

                localStorage.removeItem("manifestUser");
            */

            window.location.href =
                "index.html";

        }
    );

}


/* =========================================================
   OPTIONAL PROFILE STATE
=========================================================

   You can later connect this to your actual
   login system.

   For now the normal LOGIN/SIGN UP buttons
   remain visible.
========================================================= */


/*
const loggedInUser =
    localStorage.getItem("manifestUser");

if (loggedInUser) {

    const navbarAuth =
        document.getElementById("navbarAuth");

    const navbarProfile =
        document.getElementById("navbarProfile");

    if (navbarAuth) {
        navbarAuth.style.display = "none";
    }

    if (navbarProfile) {
        navbarProfile.classList.add("active");
    }

}
*/

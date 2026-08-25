/* =========================================================
   MANIFEST ESPORTS
   NAVIGATION + LOGIN STATE
========================================================= */


/* =========================================================
   NAVIGATION ELEMENTS
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const sideMenu =
    document.getElementById("sideMenu");

const menuOverlay =
    document.getElementById("menuOverlay");


/* =========================================================
   NAVBAR AUTH
========================================================= */

const navbarAuth =
    document.getElementById("navbarAuth");

const navbarProfile =
    document.getElementById("navbarProfile");


/* =========================================================
   PROFILE
========================================================= */

const profileButton =
    document.getElementById("profileButton");

const profileDropdown =
    document.getElementById("profileDropdown");

const profileTeamName =
    document.getElementById("profileTeamName");

const logoutButton =
    document.getElementById("logoutButton");


/* =========================================================
   SIDE MENU PROFILE
========================================================= */

const sideProfileName =
    document.getElementById("sideProfileName");


/* =========================================================
   SIDE MENU AUTH / TEAM
========================================================= */

const menuAuthContainer =
    document.getElementById("menuAuthContainer");

const menuAuthButtons =
    document.getElementById("menuAuthButtons");

const menuTeamContainer =
    document.getElementById("menuTeamContainer");

const menuTeamName =
    document.getElementById("menuTeamName");


/* =========================================================
   CHECK IF USER IS LOGGED IN
========================================================= */

function isUserLoggedIn() {

    return (
        localStorage.getItem(
            "manifestLoggedIn"
        ) === "true"
    );

}


/* =========================================================
   GET TEAM NAME
=========================================================

   Your login/signup system should save the team name as:

   localStorage.setItem(
       "manifestTeamName",
       teamName
   );

========================================================= */

function getTeamName() {

    return (
        localStorage.getItem(
            "manifestTeamName"
        ) || "GUEST"
    );

}


/* =========================================================
   UPDATE LOGIN / LOGOUT UI
========================================================= */

function updateLoginState() {

    const loggedIn =
        isUserLoggedIn();

    const teamName =
        getTeamName();


    /* =====================================================
       USER IS LOGGED IN
    ====================================================== */

    if (loggedIn) {


        /* ================================================
           NAVBAR

           HIDE LOGIN + SIGN UP
        ================================================= */

        if (navbarAuth) {

            navbarAuth.style.display =
                "none";

        }


        /* ================================================
           SHOW PROFILE IN NAVBAR
        ================================================= */

        if (navbarProfile) {

            navbarProfile.classList.add(
                "active"
            );

        }


        /* ================================================
           NAVBAR PROFILE NAME
        ================================================= */

        if (profileTeamName) {

            profileTeamName.textContent =
                teamName;

        }


        /* ================================================
           SIDE MENU PROFILE
        ================================================= */

        if (sideProfileName) {

            sideProfileName.textContent =
                teamName;

        }


        /* ================================================
           HIDE LOGIN + SIGN UP
           FROM SIDE MENU
        ================================================= */

        if (menuAuthButtons) {

            menuAuthButtons.style.display =
                "none";

        }


        /* ================================================
           SHOW TEAM NAME
           WHERE LOGIN/SIGNUP WERE
        ================================================= */

        if (menuTeamContainer) {

            menuTeamContainer.classList.add(
                "active"
            );

        }


        if (menuTeamName) {

            menuTeamName.textContent =
                teamName;

        }

    }


    /* =====================================================
       USER IS LOGGED OUT
    ====================================================== */

    else {


        /* ================================================
           SHOW LOGIN + SIGN UP
           IN NAVBAR
        ================================================= */

        if (navbarAuth) {

            navbarAuth.style.display =
                "flex";

        }


        /* ================================================
           HIDE NAVBAR PROFILE
        ================================================= */

        if (navbarProfile) {

            navbarProfile.classList.remove(
                "active"
            );

        }


        /* ================================================
           SIDE MENU PROFILE = GUEST
        ================================================= */

        if (sideProfileName) {

            sideProfileName.textContent =
                "GUEST";

        }


        /* ================================================
           SHOW LOGIN + SIGN UP
           IN SIDE MENU
        ================================================= */

        if (menuAuthButtons) {

            menuAuthButtons.style.display =
                "flex";

        }


        /* ================================================
           HIDE TEAM NAME
        ================================================= */

        if (menuTeamContainer) {

            menuTeamContainer.classList.remove(
                "active"
            );

        }

    }

}


/* =========================================================
   RUN LOGIN CHECK WHEN PAGE LOADS
========================================================= */

updateLoginState();


/* =========================================================
   OPEN SIDE MENU
========================================================= */

function openMenu() {

    if (!sideMenu || !menuToggle) {
        return;
    }


    sideMenu.classList.add(
        "active"
    );


    menuOverlay.classList.add(
        "active"
    );


    menuToggle.classList.add(
        "active"
    );


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


    /*
        Prevent background scrolling
    */

    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE SIDE MENU
========================================================= */

function closeMenu() {

    if (!sideMenu || !menuToggle) {
        return;
    }


    sideMenu.classList.remove(
        "active"
    );


    menuOverlay.classList.remove(
        "active"
    );


    menuToggle.classList.remove(
        "active"
    );


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


    /*
        Restore scrolling
    */

    document.body.style.overflow =
        "";

}


/* =========================================================
   HAMBURGER TOGGLE
========================================================= */

if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        function () {

            if (
                sideMenu.classList.contains(
                    "active"
                )
            ) {

                closeMenu();

            } else {

                openMenu();

            }

        }
    );

}


/* =========================================================
   CLICK OVERLAY TO CLOSE MENU
========================================================= */

if (menuOverlay) {

    menuOverlay.addEventListener(
        "click",
        closeMenu
    );

}


/* =========================================================
   CLOSE MENU WHEN NAVIGATION LINK IS CLICKED
========================================================= */

const menuLinks =
    document.querySelectorAll(
        ".menu-navigation a"
    );


menuLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            closeMenu
        );

    }
);


/* =========================================================
   ESCAPE KEY CLOSES MENU
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            sideMenu.classList.contains(
                "active"
            )
        ) {

            closeMenu();

        }

    }
);


/* =========================================================
   PROFILE DROPDOWN
========================================================= */

if (
    profileButton &&
    profileDropdown
) {

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
   CLOSE PROFILE DROPDOWN
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        if (
            profileDropdown &&
            profileButton &&
            !profileDropdown.contains(
                event.target
            ) &&
            !profileButton.contains(
                event.target
            )
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

if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        function () {


            /* =============================================
               REMOVE LOGIN STATE
            ============================================== */

            localStorage.removeItem(
                "manifestLoggedIn"
            );


            /* =============================================
               REMOVE TEAM NAME
            ============================================== */

            localStorage.removeItem(
                "manifestTeamName"
            );


            /* =============================================
               CLOSE PROFILE
            ============================================== */

            profileDropdown.classList.remove(
                "active"
            );


            /* =============================================
               UPDATE NAVIGATION
            ============================================== */

            updateLoginState();


            /* =============================================
               CLOSE SIDE MENU
            ============================================== */

            closeMenu();

        }
    );

}

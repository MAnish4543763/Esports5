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


        /* =================================================
           NAVBAR

           HIDE LOGIN + SIGN UP
        ================================================= */

        if (navbarAuth) {

            navbarAuth.style.display =
                "none";

        }


        /* =================================================
           SHOW PROFILE IN NAVBAR
        ================================================= */

        if (navbarProfile) {

            navbarProfile.classList.add(
                "active"
            );

        }


        /* =================================================
           NAVBAR PROFILE NAME
        ================================================= */

        if (profileTeamName) {

            profileTeamName.textContent =
                teamName;

        }


        /* =================================================
           SIDE MENU PROFILE
        ================================================= */

        if (sideProfileName) {

            sideProfileName.textContent =
                teamName;

        }


        /* =================================================
           HIDE LOGIN + SIGN UP
           FROM SIDE MENU
        ================================================= */

        if (menuAuthButtons) {

            menuAuthButtons.style.display =
                "none";

        }


        /* =================================================
           SHOW TEAM NAME
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


        /* =================================================
           SHOW LOGIN + SIGN UP
           IN NAVBAR
        ================================================= */

        if (navbarAuth) {

            navbarAuth.style.display =
                "flex";

        }


        /* =================================================
           HIDE NAVBAR PROFILE
        ================================================= */

        if (navbarProfile) {

            navbarProfile.classList.remove(
                "active"
            );

        }


        /* =================================================
           SIDE MENU PROFILE = GUEST
        ================================================= */

        if (sideProfileName) {

            sideProfileName.textContent =
                "GUEST";

        }


        /* =================================================
           SHOW LOGIN + SIGN UP
           IN SIDE MENU
        ================================================= */

        if (menuAuthButtons) {

            menuAuthButtons.style.display =
                "flex";

        }


        /* =================================================
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

    if (
        !sideMenu ||
        !menuToggle
    ) {
        return;
    }


    /* -----------------------------------------
       OPEN SIDE MENU
    ----------------------------------------- */

    sideMenu.classList.add(
        "active"
    );


    /* -----------------------------------------
       OPEN OVERLAY
    ----------------------------------------- */

    if (menuOverlay) {

        menuOverlay.classList.add(
            "active"
        );

    }


    /* -----------------------------------------
       HAMBURGER ACTIVE
    ----------------------------------------- */

    menuToggle.classList.add(
        "active"
    );


    /* -----------------------------------------
       ACCESSIBILITY
    ----------------------------------------- */

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


    /* -----------------------------------------
       PREVENT BACKGROUND SCROLL
    ----------------------------------------- */

    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE SIDE MENU
========================================================= */

function closeMenu() {

    if (
        !sideMenu ||
        !menuToggle
    ) {
        return;
    }


    /* -----------------------------------------
       CLOSE SIDE MENU
    ----------------------------------------- */

    sideMenu.classList.remove(
        "active"
    );


    /* -----------------------------------------
       CLOSE OVERLAY
    ----------------------------------------- */

    if (menuOverlay) {

        menuOverlay.classList.remove(
            "active"
        );

    }


    /* -----------------------------------------
       RESET HAMBURGER
    ----------------------------------------- */

    menuToggle.classList.remove(
        "active"
    );


    /* -----------------------------------------
       ACCESSIBILITY
    ----------------------------------------- */

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


    /* -----------------------------------------
       RESTORE SCROLLING
    ----------------------------------------- */

    document.body.style.overflow =
        "";

}


/* =========================================================
   HAMBURGER TOGGLE
========================================================= */

if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        function (event) {

            /*
             * Prevent this click from being
             * treated as an outside click.
             */

            event.stopPropagation();


            if (
                sideMenu &&
                sideMenu.classList.contains(
                    "active"
                )
            ) {

                closeMenu();

            }

            else {

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
        function (event) {

            event.stopPropagation();

            closeMenu();

        }
    );

}


/* =========================================================
   CLICK OUTSIDE SIDE MENU
   CLOSE MENU
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        /*
         * Menu isn't open.
         */

        if (
            !sideMenu ||
            !sideMenu.classList.contains(
                "active"
            )
        ) {

            return;

        }


        /*
         * Clicked inside side menu.
         *
         * DO NOT CLOSE.
         */

        if (
            sideMenu.contains(
                event.target
            )
        ) {

            return;

        }


        /*
         * Clicked hamburger.
         *
         * Hamburger has its own handler.
         */

        if (
            menuToggle &&
            menuToggle.contains(
                event.target
            )
        ) {

            return;

        }


        /*
         * Everything else is outside
         * the menu.
         *
         * CLOSE MENU.
         */

        closeMenu();

    }
);


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
            function () {

                closeMenu();

            }
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
            sideMenu &&
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

            /*
             * Prevent document click from
             * immediately closing dropdown.
             */

            event.stopPropagation();


            /*
             * Close side menu if profile
             * is opened.
             */

            if (
                sideMenu &&
                sideMenu.classList.contains(
                    "active"
                )
            ) {

                closeMenu();

            }


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

            if (profileDropdown) {

                profileDropdown.classList.remove(
                    "active"
                );

            }


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

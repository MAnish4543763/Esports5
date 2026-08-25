/* =========================================================
   MODULE 1 — NAVIGATION MENU JAVASCRIPT
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");

function openMenu() {
    if (!menuToggle) return;

    menuToggle.classList.add("active");
    sideMenu?.classList.add("active");
    menuOverlay?.classList.add("active");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    if (!menuToggle) return;

    menuToggle.classList.remove("active");
    sideMenu?.classList.remove("active");
    menuOverlay?.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
}

menuToggle?.addEventListener("click", () => {
    if (sideMenu.classList.contains("active")) {
        closeMenu();
    } else {
        openMenu();
    }
});

menuOverlay?.addEventListener("click", closeMenu);

document.querySelectorAll(".menu-navigation a").forEach(link => {
    link.addEventListener("click", closeMenu);
});


/* =========================================================
   MODULE 2 — AUTHENTICATION / PROFILE
   NOTE:
   This is a FRONT-END demo only.
   Real accounts require a backend/database.
========================================================= */

const navbarAuth = document.getElementById("navbarAuth");
const navbarProfile = document.getElementById("navbarProfile");
const profileButton = document.getElementById("profileButton");
const profileDropdown = document.getElementById("profileDropdown");
const profileName = document.getElementById("profileName");
const logoutButton = document.getElementById("logoutButton");
const menuAuthContainer = document.getElementById("menuAuthContainer");

function updateAuthenticationUI() {
    const isLoggedIn =
        localStorage.getItem("manifestLoggedIn") === "true";

    const username =
        localStorage.getItem("manifestUsername") || "PROFILE";

    if (navbarAuth && navbarProfile) {
        if (isLoggedIn) {
            navbarAuth.style.display = "none";
            navbarProfile.classList.add("active");

            if (profileName) {
                profileName.textContent = username;
            }
        } else {
            navbarAuth.style.display = "flex";
            navbarProfile.classList.remove("active");
        }
    }

    if (menuAuthContainer) {
        if (isLoggedIn) {
            menuAuthContainer.innerHTML = `
                <a href="profile.html" class="menu-profile-link">
                    <div class="menu-profile">
                        <div class="menu-profile-icon">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21c0-4.42 3.58-8 8-8s8 3.58 8 8H4Z"/>
                            </svg>
                        </div>

                        <div class="menu-profile-info">
                            <span class="menu-profile-label">ACCOUNT</span>
                            <span class="menu-profile-name">${escapeHTML(username)}</span>
                        </div>
                    </div>
                </a>
            `;
        } else {
            menuAuthContainer.innerHTML = `
                <div class="menu-auth-buttons">
                    <a href="login.html" class="menu-login-button">LOGIN</a>
                    <a href="signup.html" class="menu-signup-button">SIGN UP</a>
                </div>
            `;
        }
    }
}

function escapeHTML(value) {
    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
}

profileButton?.addEventListener("click", event => {
    event.stopPropagation();
    profileDropdown?.classList.toggle("active");
});

document.addEventListener("click", event => {
    if (navbarProfile && !navbarProfile.contains(event.target)) {
        profileDropdown?.classList.remove("active");
    }
});

logoutButton?.addEventListener("click", () => {
    localStorage.removeItem("manifestLoggedIn");
    localStorage.removeItem("manifestUsername");
    localStorage.removeItem("manifestEmail");

    profileDropdown?.classList.remove("active");
    updateAuthenticationUI();
});


/* =========================================================
   MODULE 3 — SIGN UP PAGE
========================================================= */

const signupForm = document.getElementById("signupForm");

signupForm?.addEventListener("submit", event => {
    event.preventDefault();

    const username = document.getElementById("signupUsername").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;

    const message = document.getElementById("signupMessage");

    if (!username || !email || !password) {
        message.textContent = "Please fill in all fields.";
        message.style.color = "#ff2020";
        return;
    }

    localStorage.setItem("manifestUsername", username);
    localStorage.setItem("manifestEmail", email);
    localStorage.setItem("manifestPassword", password);
    localStorage.setItem("manifestLoggedIn", "true");

    message.textContent = "Account created successfully.";
    message.style.color = "#00e85a";

    setTimeout(() => {
        window.location.href = "index.html";
    }, 700);
});


/* =========================================================
   MODULE 4 — LOGIN PAGE
========================================================= */

const loginForm = document.getElementById("loginForm");

loginForm?.addEventListener("submit", event => {
    event.preventDefault();

    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;

    const savedUsername =
        localStorage.getItem("manifestUsername");

    const savedEmail =
        localStorage.getItem("manifestEmail");

    const savedPassword =
        localStorage.getItem("manifestPassword");

    const message =
        document.getElementById("loginMessage");

    if (
        (username === savedUsername || username === savedEmail) &&
        password === savedPassword
    ) {
        localStorage.setItem("manifestLoggedIn", "true");

        message.textContent = "Login successful.";
        message.style.color = "#00e85a";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 500);
    } else {
        message.textContent =
            "Incorrect username/email or password.";

        message.style.color = "#ff2020";
    }
});


/* =========================================================
   MODULE 5 — PROFILE PAGE
========================================================= */

const profilePageName =
    document.getElementById("profilePageName");

const profilePageEmail =
    document.getElementById("profilePageEmail");

if (profilePageName) {
    profilePageName.textContent =
        localStorage.getItem("manifestUsername") || "PROFILE";
}

if (profilePageEmail) {
    profilePageEmail.textContent =
        localStorage.getItem("manifestEmail") || "EMAIL NOT AVAILABLE";
}

document
    .getElementById("profileLogoutPage")
    ?.addEventListener("click", () => {

        localStorage.removeItem("manifestLoggedIn");
        localStorage.removeItem("manifestUsername");
        localStorage.removeItem("manifestEmail");
        localStorage.removeItem("manifestPassword");

        window.location.href = "index.html";
    });


/* =========================================================
   MODULE 6 — TOURNAMENT CAROUSEL
========================================================= */

const tournamentSlider =
    document.getElementById("tournamentSlider");

const tournamentPrev =
    document.getElementById("tournamentPrev");

const tournamentNext =
    document.getElementById("tournamentNext");

const tournamentDots =
    document.querySelectorAll(".tournament-dot");

function getTournamentScrollAmount() {
    const card =
        document.querySelector(".tournament-card");

    return card ? card.offsetWidth + 22 : 310;
}

tournamentNext?.addEventListener("click", () => {
    tournamentSlider?.scrollBy({
        left: getTournamentScrollAmount(),
        behavior: "smooth"
    });
});

tournamentPrev?.addEventListener("click", () => {
    tournamentSlider?.scrollBy({
        left: -getTournamentScrollAmount(),
        behavior: "smooth"
    });
});

tournamentDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {

        const card =
            document.querySelector(".tournament-card");

        if (!card || !tournamentSlider) return;

        const cardWidth = card.offsetWidth + 22;

        tournamentSlider.scrollTo({
            left: cardWidth * index,
            behavior: "smooth"
        });

        tournamentDots.forEach(item =>
            item.classList.remove("active")
        );

        dot.classList.add("active");
    });
});

tournamentSlider?.addEventListener("scroll", () => {

    const card =
        document.querySelector(".tournament-card");

    if (!card) return;

    const cardWidth = card.offsetWidth + 22;

    const currentIndex =
        Math.round(
            tournamentSlider.scrollLeft / cardWidth
        );

    tournamentDots.forEach((dot, index) => {
        dot.classList.toggle(
            "active",
            index === currentIndex
        );
    });
});


/* =========================================================
   MODULE 7 — ESCAPE KEY
========================================================= */

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeMenu();
        profileDropdown?.classList.remove("active");
    }
});


/* =========================================================
   INITIALIZE
========================================================= */

updateAuthenticationUI();

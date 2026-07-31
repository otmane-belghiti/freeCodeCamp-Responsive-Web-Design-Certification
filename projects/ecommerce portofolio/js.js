let login = document.querySelector(".loginbox");
let btns = document.querySelectorAll(".user");
let logo2 = document.querySelector(".avatar");
let closeBtn = document.querySelector(".loginbox .hum");

// Open login box from any sign-in button
btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        login.style.display = "block";
        logo2.style.display = "block";
    });
});

// Close by clicking the avatar
if (logo2) {
    logo2.addEventListener("click", () => {
        login.style.display = "none";
    });
}

// Close by clicking the close icon
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        login.style.display = "none";
    });
}

// Close when clicking outside the login box
document.addEventListener("click", (e) => {
    if (login.style.display === "block" && 
        !login.contains(e.target) && 
        !e.target.closest(".user")) {
        login.style.display = "none";
    }
});
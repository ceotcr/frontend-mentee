const sigupImg = document.querySelector(".signup-form-img");
window.onresize = () => {
    window.visualViewport.width > 900 ? sigupImg.src = "./assets/images/illustration-sign-up-desktop.svg" : sigupImg.src = "./assets/images/illustration-sign-up-mobile.svg"
}

const form = document.querySelector('#signup-form')
const successMsg = document.getElementById('success')
const emailComp = document.getElementById("email")
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = emailComp.value;
    try {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(email)) {
            submitForm(email);
            return
        }
        throw ("Valid Email Required")
    } catch (error) {
        emailComp.style.border = "1px solid var(--Tomato)"
        emailComp.style.background = "var(--Tomato-error)"
        document.getElementById("invalid-mail").style.display = "inline-flex"
    }
});
const formcont = document.getElementById("main-form-container")
function submitForm(email) {
    formcont.style.display = "none"
    successMsg.style.display = "flex"
    document.getElementById("usermail").innerText = email;
}

document.querySelector(".dismiss-msg").addEventListener("click", () => {
    formcont.style.display = "flex";
    emailComp.value = ""
    successMsg.style.display = "none";
})


emailComp.oninput = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = emailComp.value;

    if (emailPattern.test(email)) {
        emailComp.style.border = "1.5px solid var(--Grey)";
        emailComp.style.background = "white";
        document.getElementById("invalid-mail").style.display = "none";
    } else {
        emailComp.style.border = "1px solid var(--Tomato)";
        emailComp.style.background = "var(--Tomato-error)";
        document.getElementById("invalid-mail").style.display = "inline-flex";
    }
};


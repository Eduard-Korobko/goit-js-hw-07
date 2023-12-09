const formEl = document.querySelector(".login-form");
const emailEl = document.querySelector(".email");
const passwordEl = document.querySelector(".password");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (email === "" || password === "") {
        alert("All form fields must be filled in");
    } else {
        console.log(`Email: ${form.email.value}`);
        console.log(`Password: ${form.password.value}`);
        form.reset();
    }
}
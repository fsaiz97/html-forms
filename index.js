let form = document.querySelector("form")

function addWelcome(username) {
    let welcomeHeading = document.querySelector("#welcome");
    welcomeHeading.textContent = `Welcome ${username}`;
}

function handleSubmit(event) {
    event.preventDefault();
    // console.log("form submitted");
    // console.log("Username:", event.target.username.value)
    // or
    // let username = document.getElementById("username").value;

    // let usernameNode = event.target.username;
    // let passwordNode = event.target.password;
    // addWelcome(usernameNode.value);
    // usernameNode.value = '';
    // passwordNode.value = '';
}

form.addEventListener('submit', handleSubmit)

let darkModeCheckbox = document.querySelector("#dark-mode");
darkModeCheckbox.addEventListener('change', () => {
    if (darkModeCheckbox.checked) {
        newColour = "rgb(50,50,50)"
        document.body.style.backgroundColor = newColour;
        document.querySelector("textarea").style.backgroundColor = newColour;
    } else {
        document.body.style.backgroundColor = "white";
        document.querySelector("textarea").style.backgroundColor = "white";
    }
})

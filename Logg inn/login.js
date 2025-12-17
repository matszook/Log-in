// Hent elementer
const loginButton = document.getElementById("login-knapp");
const usernameInput = document.getElementById("brukernavn");
const passwordInput = document.getElementById("passord");

// Simulert brukerdatabase
const validUser = {
  username: "admin",
  password: "12345"
};

// Når brukeren klikker "Logg inn"
loginButton.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Sjekk om input matcher brukerdatabase
  if (username === validUser.username && password === validUser.password) {
    // Lagre innloggingsstatus i localStorage
    localStorage.setItem("isLoggedIn", "true");

    // Lagre innloggingsstatus i cookie (gyldig i 1 time)
    document.cookie = "loggedIn=true; path=/; max-age=3600";

    // Send brukeren til beskyttet side
    window.location.href = "home.html";
  } else {
    alert("Feil brukernavn eller passord!");
  }
});
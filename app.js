alert("app.js wurde geladen");

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const authSection = document.getElementById("auth-section");
const userSection = document.getElementById("user-section");
const userEmail = document.getElementById("user-email");
const statusBox = document.getElementById("status");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const registerBtn = document.getElementById("register-btn");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");

function showStatus(message) {
  statusBox.classList.remove("hidden");
  statusBox.textContent = message;
}

function clearStatus() {
  statusBox.classList.add("hidden");
  statusBox.textContent = "";
}

function getEmailAndPassword() {
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    throw new Error("Bitte E-Mail und Passwort eingeben.");
  }

  if (password.length < 6) {
    throw new Error("Das Passwort muss mindestens 6 Zeichen lang sein.");
  }

  return { email, password };
}

registerBtn.addEventListener("click", async () => {
  try {
    clearStatus();

    const { email, password } = getEmailAndPassword();

    await createUserWithEmailAndPassword(auth, email, password);

    showStatus("Konto wurde erfolgreich erstellt.");
  } catch (error) {
    showStatus("Fehler beim Konto erstellen:\n" + error.message);
  }
});

loginBtn.addEventListener("click", async () => {
  try {
    clearStatus();

    const { email, password } = getEmailAndPassword();

    await signInWithEmailAndPassword(auth, email, password);

    showStatus("Du bist eingeloggt.");
  } catch (error) {
    showStatus("Fehler beim Einloggen:\n" + error.message);
  }
});

logoutBtn.addEventListener("click", async () => {
  try {
    await signOut(auth);
    showStatus("Du wurdest ausgeloggt.");
  } catch (error) {
    showStatus("Fehler beim Ausloggen:\n" + error.message);
  }
});

onAuthStateChanged(auth, (user) => {
  clearStatus();

  if (user) {
    authSection.classList.add("hidden");
    userSection.classList.remove("hidden");
    userEmail.textContent = "Eingeloggt als: " + user.email;
  } else {
    authSection.classList.remove("hidden");
    userSection.classList.add("hidden");
    userEmail.textContent = "";
  }
});

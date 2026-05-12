import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const statusBox = document.getElementById("status");

function setStatus(message) {
  statusBox.textContent = message;
}

const params = new URLSearchParams(window.location.search);
const sessionId = params.get("session_id");

onAuthStateChanged(auth, async (user) => {
  try {
    if (!user) {
      setStatus("Du bist nicht eingeloggt. Bitte gehe zurück zur Startseite und logge dich ein.");
      return;
    }

    if (!sessionId) {
      setStatus("Keine Zahlungs-ID gefunden.");
      return;
    }

    const token = await user.getIdToken();

    const response = await fetch("/.netlify/functions/verify-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({
        sessionId: sessionId
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Zahlung konnte nicht bestätigt werden.");
    }

    if (data.hasAccess) {
      setStatus("Premium wurde erfolgreich aktiviert.");
    } else {
      setStatus("Zahlung wurde nicht als erfolgreich erkannt.");
    }
  } catch (error) {
    setStatus("Fehler:\n" + error.message);
  }
});
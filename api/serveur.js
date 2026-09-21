const express = require("express");
const app = express();

let ias = [
  { id: 1, nom: "Chat GPT", prix: 25 },
  { id: 2, nom: "Claude", prix: 15 },
  { id: 3, nom: "Gemini", prix: 120 }
];
// GET /produits -> renvoie tout le tableau
app.get("/ias", (req, res) => {
  res.json(ias);
});

// Route de test : GET /
app.get("/", (req, res) => {
  res.json({ message: "Mon API fonctionne" });
});

// On demarre le serveur sur le port 3000
app.listen(3000, () => {
  console.log("Serveur sur http://localhost:3000");
});
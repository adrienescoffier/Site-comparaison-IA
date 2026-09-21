const express = require("express");
const app = express();

let models = [
  { id: 1, nom: "GPT6 Astra", devlopeur: "Open IA" },
  { id: 2, nom: "Fable 5.1", devlopeur: "Anthropic" },
  { id: 3, nom: "Gemini 3.8 Flash", devlopeur: "Google" }
];

// Route de test : GET /
app.get("/", (req, res) => {
  res.json({ message: "Mon API fonctionne" });
});

// On demarre le serveur sur le port 3000
app.listen(3000, () => {
  console.log("Serveur sur http://localhost:3000");
});

// GET /produits -> renvoie tout le tableau
app.get("/models", (req, res) => {
  res.json(models);
});

// GET /produits/2 -> renvoie le produit dont l id vaut 2
app.get("/models/:id", (req, res) => {
  const id = Number(req.params.id);            // ":id" arrive en texte -> on convertit
  const model = models.find((p) => p.id === id);
  if (!model) {                              // rien trouve
    return res.status(404).json({ erreur: "IA introuvable" });
  }
  res.json(model);
});

app.use(express.json()); // permet de lire req.body en JSON
// POST /produits -> ajoute un produit envoye dans le corps de la requete

app.post("/models", (req, res) => {
  if (!req.body.nom) {                          // donnee obligatoire manquante
    return res.status(400).json({ erreur: "Le nom est obligatoire" });
  }
  const nouveau = {
    id: models.length + 1,
    nom: req.body.nom,
    devlopeur: req.body.devlopeur
  };
  models.push(nouveau);                       // on ajoute au tableau
  res.status(201).json(nouveau);                // 201 = cree
});
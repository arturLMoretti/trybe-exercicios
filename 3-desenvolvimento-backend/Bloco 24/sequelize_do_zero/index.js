const express = require("express");
const { Store } = require("./models");
const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  Store.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ message: "deu ruim" });
    });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const { trainers } = require('../data/api-trainers-express');

app.use(cors());

app.listen(port, () => {
  console.log(`Servidor trainers runging in ${port}`);
});

// GET: Obtener todos los trainers
app.get('/trainers', (req, res) => {

  const name = req.query.name || '';
  const isChampion = req.query.isChampion === 'true' ? true : false

  const isLikeName = ((trainer) => {
    return trainer.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  });

  const hasWinnedTournaments = ((trainer) => {
    return trainer.winnedTournaments.length > 0;
  });

  let data = trainers.filter(isLikeName);

  if (isChampion) {
    data = data.filter(hasWinnedTournaments);
  }

  res.json(data);
});

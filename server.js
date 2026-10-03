const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

const vacancies = [
  { id: 1, title: 'Desarrollador Backend Jr', company: 'Tech Andes', modality: 'remoto', salary: 900 },
  { id: 2, title: 'Analista de Datos', company: 'DataSur', modality: 'híbrido', salary: 1100 },
];

app.get('/vacancies', (req, res) => {
  res.json(vacancies);
});

app.post('/vacancies', (req, res) => {
  const { title, company, modality, salary } = req.body;

  if (!title || !company) {
    return res.status(400).json({ error: 'El título y la empresa son obligatorios' });
  }

  const newVacancy = { id: vacancies.length + 1, title, company, modality, salary };
  vacancies.push(newVacancy);
  res.status(201).json(newVacancy);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

module.exports = app;
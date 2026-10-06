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

const candidates = [
  { id: 1, name: 'Ana Torres', email: 'ana.torres@example.com', city: 'Quito', experienceYears: 2 },
  { id: 2, name: 'Luis Mora', email: 'luis.mora@example.com', city: 'Guayaquil', experienceYears: 5 },
];

app.get('/candidates', (req, res) => {
  res.json(candidates);
});

app.post('/candidates', (req, res) => {
  const { name, email, city, experienceYears } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'El nombre y el correo son obligatorios' });
  }

  const newCandidate = { id: candidates.length + 1, name, email, city, experienceYears };
  candidates.push(newCandidate);
  res.status(201).json(newCandidate);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

module.exports = app;
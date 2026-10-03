const express = require('express');

const app = express();
const PORT = 3000;
app.use(express.json());

const vacantes = [
  { id: 1, titulo: 'Desarrollador Backend Jr', empresa: 'Tech Andes', modalidad: 'remoto', salario: 900 },
  { id: 2, titulo: 'Analista de Datos', empresa: 'DataSur', modalidad: 'híbrido', salario: 1100 },
];

app.get('/vacantes', (req, res) => {
  res.json(vacantes);
});

app.post('/vacantes', (req, res) => {
  const { titulo, empresa, modalidad, salario } = req.body;

  if (!titulo || !empresa) {
    return res.status(400).json({ error: 'titulo y empresa son obligatorios' });
  }

  const nueva = { id: vacantes.length + 1, titulo, empresa, modalidad, salario };
  vacantes.push(nueva);
  res.status(201).json(nueva);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
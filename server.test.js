const request = require('supertest');
const app = require('./server');

describe('GET /vacancies', () => {
  it('responds with 200 and an array of vacancies', async () => {
    const response = await request(app).get('/vacancies');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe('POST /vacancies', () => {
  it('creates a vacancy and responds with 201', async () => {
    const newVacancy = {
      title: 'QA Tester',
      company: 'Tech Andes',
      modality: 'presencial',
      salary: 800,
    };

    const response = await request(app).post('/vacancies').send(newVacancy);

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newVacancy);
    expect(response.body.id).toBeDefined();
  });

  it('responds with 400 when title or company is missing', async () => {
    const response = await request(app).post('/vacancies').send({ company: 'Tech Andes' });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('El título y la empresa son obligatorios');
  });
});

describe('GET /candidates', () => {
  it('responds with 200 and an array of candidates', async () => {
    const response = await request(app).get('/candidates');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe('POST /candidates', () => {
  it('creates a candidate and responds with 201', async () => {
    const newCandidate = {
      name: 'María López',
      email: 'maria.lopez@example.com',
      city: 'Cuenca',
      experienceYears: 3,
    };

    const response = await request(app).post('/candidates').send(newCandidate);

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newCandidate);
    expect(response.body.id).toBeDefined();
  });

  it('responds with 400 when name or email is missing', async () => {
    const response = await request(app).post('/candidates').send({ city: 'Quito' });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('El nombre y el correo son obligatorios');
  });
});
import express from 'express';

const app = express();

app.get('/test', (request, response) => response.send('Hello World'));

app.post('/test-post', (request, response) => {
  const resp = request.query;

  return response.send(`The data is ${resp}`);
});

app.listen(8000);

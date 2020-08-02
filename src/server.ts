import express from 'express';
import '@controllers/UsersController';

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'Hello Rocketseat!' });
})

app.listen(5000);
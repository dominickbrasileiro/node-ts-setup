import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'Hello Rocketseat!' });
})

app.listen(5000);
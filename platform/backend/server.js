const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let viewerState = {};
let measurements = [];

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token || token !== 'Bearer my-secret-token') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

app.post('/api/save-state', authMiddleware, (req, res) => {
  viewerState = req.body;
  res.json({ status: 'ok' });
});

app.get('/api/load-state', authMiddleware, (req, res) => {
  res.json(viewerState);
});

app.post('/api/save-measurements', authMiddleware, (req, res) => {
  measurements = req.body;
  res.json({ status: 'ok' });
});

app.get('/api/load-measurements', authMiddleware, (req, res) => {
  res.json(measurements);
});

app.listen(5000, () => console.log('Backend running on http://localhost:5000'));

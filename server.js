const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000; // Choose any available port

// Middleware to handle CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // Replace with your Angular app's origin
  ; // Allow requests from any origin
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Route to forward requests to Premier League API
app.get('/api/bootstrap-static', async (req, res) => {
    try {
        const response = await axios.get('https://fantasy.premierleague.com/api/bootstrap-static/');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});

// Route to forward requests to Premier League API
app.get('/api/h2h', async (req, res) => {
  try {
    const gw = req.query.gw; // Extract the gw query parameter
    const response = await axios.get(`https://fantasy.premierleague.com/api/leagues-h2h-matches/league/1036000/?event=10`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Express API!');
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'This is some data from the API.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
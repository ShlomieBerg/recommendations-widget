const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files from the 'dist' directory
app.use('/dist', express.static(path.join(__dirname, 'dist')));

// Route to serve the main index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'example.html'));
});

// Catch-all route for handling 404 errors
app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

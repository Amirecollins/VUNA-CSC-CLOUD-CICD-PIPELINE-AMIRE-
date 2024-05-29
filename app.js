const express = require('express');
const app = express();
const port = 8080;

// Use express.static to serve static files from the 'public' directory
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});

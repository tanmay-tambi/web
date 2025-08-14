import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files from the website directory
app.use(express.static(path.join(__dirname, 'website')));

// Handle all routes by serving the appropriate HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'website', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
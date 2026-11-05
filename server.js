const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend assets
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Health check endpoint for Render monitoring
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'healthy', uptime: process.uptime() });
});

// Sample API endpoint
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the Node.js backend running on Render!' });
});

// Fallback to index.html for root navigation
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Export server instance for testing, otherwise listen
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;

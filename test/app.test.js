const test = require('node:test');
const assert = require('node:assert');
const app = require('../server');

test('GET /healthz returns 200 with status healthy', async (t) => {
  const server = app.listen(0);
  const port = server.address().port;

  t.after(() => server.close());

  const response = await fetch(`http://127.0.0.1:${port}/healthz`);
  const data = await response.json();

  assert.strictEqual(response.status, 200);
  assert.strictEqual(data.status, 'healthy');
  assert.strictEqual(typeof data.uptime, 'number');
});

test('GET /api/message returns json payload', async (t) => {
  const server = app.listen(0);
  const port = server.address().port;

  t.after(() => server.close());

  const response = await fetch(`http://127.0.0.1:${port}/api/message`);
  const data = await response.json();

  assert.strictEqual(response.status, 200);
  assert.match(data.message, /Render/);
});

const statusBadge = document.getElementById('status-badge');
const apiOutput = document.getElementById('api-output');
const refreshBtn = document.getElementById('refresh-btn');

async function loadData() {
  try {
    const healthRes = await fetch('/healthz');
    const health = await healthRes.json();

    const messageRes = await fetch('/api/message');
    const data = await messageRes.json();

    statusBadge.textContent = `Server: ${health.status.toUpperCase()}`;
    apiOutput.textContent = data.message;
  } catch (err) {
    statusBadge.textContent = 'Server: Offline';
    apiOutput.textContent = 'Failed to reach API endpoint.';
  }
}

refreshBtn.addEventListener('click', loadData);
loadData();

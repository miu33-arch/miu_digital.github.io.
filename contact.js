const BACKEND_URL = 'https://miu-backend.onrender.com/contact';

document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('status');

  status.textContent = 'Sending...';

  try {
    const res = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });

    const data = await res.json();

    if (data.ok) {
      status.textContent = 'Message sent!';
    } else {
      status.textContent = 'Failed to send message.';
    }
  } catch (err) {
    status.textContent = 'Error connecting to server.';
  }
});

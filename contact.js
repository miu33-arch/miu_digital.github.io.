const BACKEND_URL = 'https://miu-backend.onrender.com/contact';

document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('status');
    status.textContent = '> INITIALIZING_TRANSMISSION...';

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        const res = await fetch(BACKEND_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (res.ok) {
            status.textContent = '> DATA_TRANSMITTED_SUCCESSFULLY.';
            document.getElementById('contact-form').reset();
        } else {
            status.textContent = '> ERROR: SERVER_REJECTED_PACKET.';
        }
    } catch (err) {
        status.textContent = '> ERROR: CONNECTION_TIMEOUT.';
    }
});


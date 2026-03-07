const BACKEND_URL = 'https://formspree.io/f/xoqzzpoy';

document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('status');
    status.textContent = '> INITIALIZING_SECURE_TRANSFER_TO_PROTON_NODE...';

    const payload = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch(BACKEND_URL, {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            status.textContent = '> SUCCESS: ENCRYPTED_DATA_SENT_TO_RIYADH_STUDIO.';
            document.getElementById('contact-form').reset();
        } else {
            status.textContent = '> ERROR: TRANSFER_FAILED_RETRY_LATER.';
        }
    } catch (err) { 
        status.textContent = '> ERROR: CONNECTION_TIMEOUT_NODE_OFFLINE.'; 
    }
});

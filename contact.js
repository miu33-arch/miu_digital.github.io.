const BACKEND_URL = 'https://formspree.io/f/xoqzzpoy'; 

window.addEventListener('load', () => {
    // Restore Draft
    const saved = localStorage.getItem('contact_draft');
    if (saved) {
        const draft = JSON.parse(saved);
        document.getElementById('name').value = draft.name || '';
        document.getElementById('email').value = draft.email || '';
        document.getElementById('message').value = draft.message || '';
    }
});

document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('status');
    status.textContent = '> INITIALIZING_SECURE_TRANSFER...';

    const payload = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch(BACKEND_URL, {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            status.textContent = '> SUCCESS: ENCRYPTED_DATA_SENT.';
            localStorage.removeItem('contact_draft');
            document.getElementById('contact-form').reset();
        }
    } catch (err) { status.textContent = '> ERROR: CONNECTION_TIMEOUT.'; }
});

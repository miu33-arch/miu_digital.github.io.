// --- MIU_33 CONTACT GATEWAY PROTOCOL ---
const BACKEND_URL = 'https://miu-backend.onrender.com/contact';
const FORM_STORAGE_KEY = 'miu_contact_draft';

// --- AUTO-SAVE LOGIC (Preserving Input) ---
function saveDraft() {
    const draft = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(draft));
}

function loadDraft() {
    const saved = localStorage.getItem(FORM_STORAGE_KEY);
    if (saved) {
        const draft = JSON.parse(saved);
        document.getElementById('name').value = draft.name || '';
        document.getElementById('email').value = draft.email || '';
        document.getElementById('message').value = draft.message || '';
        console.log("> MIU_SYSTEM: Contact draft restored from local cache.");
    }
}

// --- SERVER STATUS PROTOCOL ---
async function checkServerStatus() {
    const statusEl = document.getElementById('backend-status');
    try {
        // Options check to see if the gateway is reachable
        await fetch(BACKEND_URL, { method: 'OPTIONS' });
        statusEl.innerHTML = `<span class="pulse" style="background: var(--terminal);"></span> GATEWAY: ACTIVE`;
    } catch (err) { 
        statusEl.innerHTML = `<span class="pulse" style="background: red;"></span> GATEWAY: OFFLINE`; 
    }
}

// --- INITIALIZATION ---
window.addEventListener('load', () => {
    checkServerStatus();
    loadDraft();
    
    // Attach real-time listeners for the Auto-Save feature
    const fields = ['name', 'email', 'message'];
    fields.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', saveDraft);
        }
    });
});

// --- DATA TRANSMISSION PROTOCOL ---
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
            localStorage.removeItem(FORM_STORAGE_KEY); // Wipe draft after success
            document.getElementById('contact-form').reset();
        } else {
            status.textContent = '> ERROR: SERVER_REJECTED_PACKET.';
        }
    } catch (err) {
        status.textContent = '> ERROR: CONNECTION_TIMEOUT. DRAFT_SAVED_LOCALLY.';
    }
});


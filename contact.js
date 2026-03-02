// --- BOOT SEQUENCE ---
window.addEventListener('load', () => {
    const overlay = document.getElementById('boot-overlay');
    setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => { overlay.style.display = 'none'; }, 1000);
    }, 2500);
});

// --- VAULT DECRYPTION ---
function unlockVault() {
    const key = document.getElementById('accessKey').value;
    const content = document.getElementById('secretContent');
    if (key === 'archmiu2026' || key === 'MIU_33') {
        content.style.display = 'block';
        startDossierTyping();
    } else { alert('SYSTEM_ERROR: Unauthorized Access'); }
}

function startDossierTyping() {
    const text = `IDENTITY_DOSSIER: ANAMY PADILLA\nEDUCATION: BSBA FINANCE | BS NURSING\nEXPERIENCE: RN RIYADH NODE (EXIT: 2026.02.02)\nSKILLS: AI-SPATIAL DESIGN | MANDARIN\nSTATUS: FOUNDER @ MIU_DIGITAL ARCHITECT STUDIO`;
    const target = document.getElementById('dossier-text');
    target.innerHTML = "";
    let i = 0;
    function type() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
            i++;
            setTimeout(type, 35);
        }
    }
    type();
}

function playServiceAudio(text, button) {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(text);
    msg.rate = 0.95;
    const original = button.innerText;
    button.innerText = '[PLAYING...]';
    msg.onend = () => { button.innerText = original; };
    window.speechSynthesis.speak(msg);
}

function togglePrivacy() {
    const main = document.querySelector('.content-wrapper');
    const btn = document.querySelector('.p-b');
    const isActive = main.style.filter === 'blur(10px)';
    main.style.filter = isActive ? 'none' : 'blur(10px)';
    btn.innerText = isActive ? '[CLOAK: OFF]' : '[CLOAK: ON]';
}

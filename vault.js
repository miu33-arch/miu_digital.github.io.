// --- VAULT LOGIC ---
function unlockVault() {
    const key = document.getElementById('accessKey').value;
    const content = document.getElementById('secretContent');
    // Accepts either key from your history
    if (key === 'archmiu2026' || key === 'MIU_33') {
        content.style.display = 'block';
    } else {
        alert('SYSTEM_ERROR: Unauthorized Access');
    }
}

// --- AUDIO ENGINE ---
function playServiceAudio(text, button) {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(text);
    msg.rate = 0.9;
    msg.pitch = 0.8;

    const originalText = button.innerText;
    button.innerText = '[PLAYING...]';
    
    msg.onend = () => { button.innerText = originalText; };
    window.speechSynthesis.speak(msg);
}

function playAboutAudio() {
    const text = "MIU Digital Architect Studio stands at the intersection of architecture and advanced digital technology.";
    playServiceAudio(text, document.querySelector('.id-audio-btn'));
}

function readPhilosophy() {
    playServiceAudio("Architecting digital ecosystems with industrial precision.", event.target);
}

// --- UTILS ---
function toggleProject(id) {
    const el = document.getElementById(id);
    el.style.display = (el.style.display === 'none') ? 'block' : 'none';
}

function togglePrivacy() {
    const main = document.querySelector('.content-wrapper');
    const btn = document.querySelector('.p-b');
    if (main.style.filter === 'blur(10px)') {
        main.style.filter = 'none';
        btn.innerText = '[CLOAK: OFF]';
    } else {
        main.style.filter = 'blur(10px)';
        btn.innerText = '[CLOAK: ON]';
    }
}

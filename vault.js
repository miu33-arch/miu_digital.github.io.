function unlockVault() {
    const key = document.getElementById('accessKey').value;
    const content = document.getElementById('secretContent');
    if (key === 'archmiu2026') {
        content.style.display = 'block';
    } else {
        alert('SYSTEM_ERROR: Unauthorized Access');
    }
}

function readPhilosophy() {
    const text = "Architecting digital ecosystems with industrial precision.";
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
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

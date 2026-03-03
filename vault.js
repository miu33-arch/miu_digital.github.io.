// --- BOOT SEQUENCE ---
window.addEventListener('load', () => {
    const overlay = document.getElementById('boot-overlay');
    setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => { overlay.style.display = 'none'; }, 1000);
    }, 2500);
});

// --- AUDIO LOGS ---
const audio = document.getElementById('miu-audio');
const playBtn = document.getElementById('play-log');
if (playBtn) {
    playBtn.addEventListener('click', () => {
        if (audio.paused) { audio.play(); playBtn.innerText = "PAUSE_LOG"; }
        else { audio.pause(); playBtn.innerText = "PLAY_LOG_01"; }
    });
}

// --- VAULT DECRYPTION ---
function unlockVault() {
    const key = document.getElementById('accessKey').value;
    if (key === 'archmiu2026' || key === 'MIU_33') {
        document.getElementById('secretContent').style.display = 'block';
        startDossierTyping();
    }
}

function startDossierTyping() {
    const text = `IDENTITY_DOSSIER: ANAMY PADILLA\nEDUCATION: BSBA FINANCE | BS NURSING\nEXPERIENCE: RN RIYADH NODE (EXIT: 2026.02.02)\nSTATUS: FOUNDER @ MIU_DIGITAL ARCHITECT STUDIO`;
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

function unlockVault() {
    const key = document.getElementById('accessKey').value;
    const content = document.getElementById('secretContent');
    if (key === 'archmiu2026' || key === 'MIU_33') {
        content.style.display = 'block';
        startDossierTyping();
    } else { alert('SYSTEM_ERROR: Unauthorized Access'); }
}

function startDossierTyping() {
    const text = `IDENTITY_DOSSIER: ANAMY PADILLA\nEDUCATION: BSBA FINANCE | BS NURSING\nEXPERIENCE: RN RIYADH NODE (EXIT: 2026.02.02)\nSKILLS: AI-SPATIAL DESIGN | MANDARIN | ARABIC\nSTATUS: FOUNDER @ MIU_DIGITAL ARCHITECT STUDIO\nOBJECTIVE: BRIDGE PHYSICAL AND DIGITAL ECOSYSTEMS.`;
    const target = document.getElementById('dossier-text');
    target.innerHTML = "";
    let i = 0;
    function type() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
            i++;
            setTimeout(type, 30);
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

function playAboutAudio() { playServiceAudio("MIU Digital Architect Studio. Bridging physical space and digital vision.", document.querySelector('.id-audio-btn')); }
function readPhilosophy() { playServiceAudio("Architecting digital ecosystems with industrial precision.", event.target); }
function toggleProject(id) { const el = document.getElementById(id); el.style.display = (el.style.display === "none" || el.style.display === "") ? "block" : "none"; }

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

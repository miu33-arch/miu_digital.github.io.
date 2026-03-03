window.addEventListener('load', () => {
    const overlay = document.getElementById('boot-overlay');
    setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => { overlay.style.display = 'none'; }, 1000);
    }, 2500);
});

function unlockVault() {
    const key = document.getElementById('accessKey').value;
    if (key === 'archmiu2026' || key === 'MIU_33') {
        document.getElementById('secretContent').style.display = 'block';
        startTyping();
    }
}

function startTyping() {
    const text = `IDENTITY_DOSSIER: ANAMY PADILLA\nEDUCATION: BSBA FINANCE | BS NURSING\nEXPERIENCE: RN RIYADH (EXIT: 2026.02.02)\nSTATUS: FOUNDER @ MIU_STUDIO`;
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

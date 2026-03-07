window.addEventListener('load', () => {
    const overlay = document.getElementById('boot-overlay');
    setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => { overlay.style.display = 'none'; }, 1000);
    }, 2500);
});

// Vault Logic (Fixed badge path)
function unlockVault() {
    const key = document.getElementById('accessKey').value;
    const secretContent = document.getElementById('secretContent');
    const target = document.getElementById('dossier-text');

    if (key.toLowerCase() === 'unlocked premium') {
        document.body.style.textShadow = "0 0 15px #BC13FE";
        document.documentElement.style.setProperty('--terminal', '#BC13FE');
        secretContent.style.display = 'block';
        // Path changed to look in ROOT folder
        target.innerHTML = `<img src="premium-badge.jpg" style="width:200px; border:1px solid #BC13FE; margin-bottom:15px;"><br>`;
        startDossierTyping(`[PROTOCOL]: PREMIUM_ASSET_LICENSE_v1.0\nSTATUS: ACCESS_GRANTED`);
    } else if (key === 'archmiu2026' || key === 'MIU_33') {
        secretContent.style.display = 'block';
        startDossierTyping(`IDENTITY_DOSSIER: ANAMY PADILLA\nSTATUS: FOUNDER @ MIU_DIGITAL ARCHITECT STUDIO`);
    }
}

function startDossierTyping(content) {
    const target = document.getElementById('dossier-text');
    let i = 0;
    function type() {
        if (i < content.length) {
            target.innerHTML += content.charAt(i) === '\n' ? '<br>' : content.charAt(i);
            i++;
            setTimeout(type, 35);
        }
    }
    type();
}

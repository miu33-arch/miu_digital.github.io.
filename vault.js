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

function playAboutAudio() {
    const audio = document.getElementById("aboutAudio");
    const btn = document.querySelector('.id-audio-btn');

    if (audio.paused) {
        audio.play();
        btn.innerText = '[AUDIO: PLAYING]';
    } else {
        audio.pause();
        audio.currentTime = 0;
        btn.innerText = '[ABOUT_AUDIO]';
    }
}
function playAboutAudio() {
    const btn = document.querySelector('.id-audio-btn');

    const text = `
    MIU Digital Architect Studio stands at the intersection of architecture and advanced digital technology.
    We design environments where physical structures and digital systems merge into a single intelligent ecosystem.
    Our work transforms static spaces into dynamic, data-driven experiences powered by holography, AI, and spatial computing.
    This is the Architecture of Possibility.
    `;

    const msg = new SpeechSynthesisUtterance(text);

    btn.innerText = '[AUDIO: PLAYING]';

    msg.onend = () => {
        btn.innerText = '[ABOUT_AUDIO]';
    };

    window.speechSynthesis.speak(msg);
}

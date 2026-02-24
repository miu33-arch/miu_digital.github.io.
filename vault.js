const synth = window.speechSynthesis;

// Intruder Prevention: Blocks F12, Ctrl+U, Ctrl+Shift+I
document.onkeydown = function(e) {
    if(e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73) || (e.ctrlKey && e.keyCode == 85)) return false;
};

function readPhilosophy() {
    const text = document.querySelector('.p-x').innerText;
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.9;
    synth.speak(utter);
}

function togglePrivacy() {
    const box = document.querySelector('.p-x');
    const btn = document.querySelector('.p-b');
    box.classList.toggle('privacy-active');
    btn.innerText = box.classList.contains('privacy-active') ? "[CLOAK: ON]" : "[CLOAK: OFF]";
    synth.speak(new SpeechSynthesisUtterance(box.classList.contains('privacy-active') ? "Privacy Active" : "Privacy Disabled"));
}

function unlockVault() {
    const key = document.getElementById("accessKey").value;
    const seal = document.querySelector('.r-s');
    if (key === "MIU_SECRET_2026") {
        seal.classList.add('seal-active');
        document.getElementById("secretContent").style.display = "block";
        synth.speak(new SpeechSynthesisUtterance("Access Granted."));
        setTimeout(() => seal.classList.remove('seal-active'), 500);
    } else {
        synth.speak(new SpeechSynthesisUtterance("Access Denied."));
    }
}

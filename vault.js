function unlockVault() {
    const key = document.getElementById("accessKey").value;
    const secretArea = document.getElementById("secretContent");

    // The key is miu2026
    if (key === "miu2026") {
        secretArea.style.display = "block";
        alert("ACCESS GRANTED. WELCOME ARCHITECT.");
    } else {
        alert("ACCESS DENIED. INVALID KEY.");
    }
}

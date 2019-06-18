function share() {
    const toggle = document.getElementById("share");
    const btnShare = document.getElementById("btn-share");
    const dark = "#141414";
    const white = "white";
    const light = "#f1f1f1"

    if (toggle.style.display !== "block") {
        toggle.style.display = "block";
        btnShare.style.backgroundColor = dark;
        btnShare.style.color = white;
    } 
    else {
        toggle.style.display = "none";
        btnShare.style.backgroundColor = light;
        btnShare.style.color = dark;
    }
}
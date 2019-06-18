function share() {
    const toggle = document.getElementById("share");
    const btnShare = document.getElementById("btn-share");

    if (toggle.style.display !== "block") {
        toggle.style.display = "block";
        btnShare.style.backgroundColor = "#141414";
        btnShare.style.color = "white";
    } 
    else {
        toggle.style.display = "none";
        btnShare.style.backgroundColor = "#f1f1f1";
        btnShare.style.color = "#0c4ab5";
    }
}
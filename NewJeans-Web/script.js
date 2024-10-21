function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
    } else {
        sidebar.classList.add("open");
    }
}
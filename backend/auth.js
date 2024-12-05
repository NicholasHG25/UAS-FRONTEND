// auth.js

function checkLoginStatus() {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    const currentUser = sessionStorage.getItem("currentUser");
    const accountButton = document.getElementById("accountButton");
    const accountText = document.getElementById("accountText");
    const searchIcon = document.getElementById("searchIcon");
    const cartIcon = document.getElementById("cartIcon");

    if (isLoggedIn === "true" && currentUser) {
        // Jika pengguna login
        accountText.textContent = "Logout";
        accountButton.href = "#";
        accountButton.addEventListener("click", logout);
        if (searchIcon) searchIcon.style.display = "none"; // Sembunyikan ikon search
        if (cartIcon) cartIcon.style.display = "none"; // Sembunyikan ikon cart
    } else {
        // Jika pengguna belum login
        accountText.textContent = "Login";
        accountButton.href = "pages/login.html";
        if (searchIcon) searchIcon.style.display = "inline-block"; // Tampilkan ikon search
        if (cartIcon) cartIcon.style.display = "inline-block"; // Tampilkan ikon cart
    }
}

function logout(event) {
    event.preventDefault();
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("currentUser");
    alert("You have been logged out.");
    window.location.href = "index.html"; // Redirect ke halaman utama setelah logout
}

// Jalankan fungsi saat halaman dimuat
document.addEventListener("DOMContentLoaded", checkLoginStatus);

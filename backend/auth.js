// auth.js
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const currentUser = localStorage.getItem("currentUser");
    const accountButton = document.getElementById("accountButton");
    const accountText = document.getElementById("accountText");

    if (accountButton && accountText) { // Pastikan elemen ada
        if (isLoggedIn === "true" && currentUser) {
            // Jika pengguna login
            accountText.textContent = "Logout";
            accountButton.href = "#";
            accountButton.addEventListener("click", logout);
        } else {
            // Jika pengguna belum login
            accountText.textContent = "";
            accountButton.href = "pages/login.html";
        }
    }
}

function logout(event) {
    event.preventDefault(); // Mencegah aksi default dari href
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    alert("You have been logged out.");
    window.location.href = "index.html"; // Redirect ke halaman utama setelah logout
}

// Jalankan fungsi saat halaman dimuat
document.addEventListener("DOMContentLoaded", checkLoginStatus);

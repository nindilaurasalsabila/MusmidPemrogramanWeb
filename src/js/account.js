document.addEventListener("DOMContentLoaded", () => {
    // Select login form using action path ending with index.html
    const loginForm = document.querySelector(".login-container form[action*='index.html']");
    const registerForm = document.querySelector(".login-container form[action='login.html']");

    // Handle Registration
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nama = document.getElementById("nama").value.trim();
            const nim = document.getElementById("nim").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;

            const users = JSON.parse(localStorage.getItem("users") || "[]");

            const existingUser = users.find(u => u.email === email || u.nim === nim);
            if (existingUser) {
                alert("Email atau NIM sudah terdaftar!");
                return;
            }

            const newUser = {
                nama,
                nim,
                email,
                password,
                role: "mahasiswa"
            };

            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));

            alert("Pendaftaran berhasil! Silakan login.");
            window.location.href = "login.html";
        });
    }

    // Handle Login
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const emailInput = document.getElementById("email").value.trim();
            const passwordInput = document.getElementById("password").value;
            const roleInput = document.getElementById("role").value;

            const users = JSON.parse(localStorage.getItem("users") || "[]");

            const user = users.find(
                u => (u.email === emailInput || u.nim === emailInput) && 
                     u.password === passwordInput && 
                     u.role === roleInput
            );

            if (user) {
                localStorage.setItem("currentUser", JSON.stringify(user));
                alert(`Selamat datang, ${user.nama || user.email}!`);
                
                // Redirect to root index.html
                window.location.href = "../../index.html"; 
            } else {
                alert("Email/NIM, Password, atau Peran tidak cocok!");
            }
        });
    }
});
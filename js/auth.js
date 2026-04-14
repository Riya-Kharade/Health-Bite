/**
 * HealthBite - Premium Authentication & Flow Management
 */

const API_BASE = 'http://localhost:3000/api';

// --- MAIN AUTH LOGIC ---
const checkAuth = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userEmail = localStorage.getItem('userEmail');
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';

    // 1. Navbar Visibility Management
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        if (!isLoggedIn) {
            // Guest View
            navLinks.innerHTML = `
                <li><a href="index.html">Home</a></li>
                <li><a href="login.html">Login</a></li>
                <li><a href="register.html" class="btn btn-primary" style="padding: 8px 20px; color: white;">Register</a></li>
            `;
        } else {
            // User View
            const savedImg = localStorage.getItem('profileImage');
            const avatarImg = savedImg 
                ? `<img src="${savedImg}" class="nav-avatar" title="Profile">`
                : `<i class="fas fa-user-circle nav-user-icon" title="Profile"></i>`;

            const userName = localStorage.getItem('userName') || 'User';
            const userEmail = localStorage.getItem('userEmail') || '';
            const currentLang = localStorage.getItem('language') || 'en';
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';

            navLinks.innerHTML = `
                <li><a href="index.html">Home</a></li>
                <li><a href="dashboard.html">Dashboard</a></li>
                <li><a href="recommendations.html">Recipes</a></li>
                <li><a href="tracker.html">Tracker</a></li>
                <li><a href="tips.html">Tips</a></li>
                <li class="settings-menu">
                    <div id="settingsTrigger" style="display: flex; align-items: center; cursor: pointer;">
                        ${avatarImg}
                    </div>
                    <div class="settings-dropdown" id="settingsDropdown">
                        <div class="dropdown-header">
                            <img src="${savedImg || 'https://via.placeholder.com/60'}" alt="User">
                            <h4>${userName}</h4>
                            <p>${userEmail}</p>
                        </div>
                        
                        <div class="lang-selector">
                            <span data-i18n="language">Language</span>
                            <div class="selector-group">
                                <span class="selector-item ${currentLang === 'en' ? 'active' : ''}" onclick="applyLanguage('en')">EN</span>
                                <span class="selector-item ${currentLang === 'hi' ? 'active' : ''}" onclick="applyLanguage('hi')">HI</span>
                                <span class="selector-item ${currentLang === 'mr' ? 'active' : ''}" onclick="applyLanguage('mr')">MR</span>
                            </div>
                        </div>

                        <div class="mode-selector">
                            <span data-i18n="mode">Mode</span>
                            <div class="selector-group">
                                <span class="selector-item ${currentTheme === 'light' ? 'active' : ''}" onclick="applyTheme('light')">Light</span>
                                <span class="selector-item ${currentTheme === 'dark' ? 'active' : ''}" onclick="applyTheme('dark')">Dark</span>
                            </div>
                        </div>

                        <a href="profile.html" class="dropdown-option">
                            <span><i class="fas fa-user"></i> <span data-i18n="profile_title">Profile</span></span>
                            <i class="fas fa-chevron-right"></i>
                        </a>

                        <div class="dropdown-option" onclick="logout()" style="color: var(--brown);">
                            <span><i class="fas fa-sign-out-alt"></i> <span data-i18n="logout">Logout</span></span>
                        </div>
                    </div>
                </li>
            `;

            // Run translation immediately for newly injected nav
            if (window.applyLanguage) applyLanguage(currentLang);

            // Dropdown Toggle Logic
            const trigger = document.getElementById('settingsTrigger');
            const dropdown = document.getElementById('settingsDropdown');
            if (trigger) {
                trigger.addEventListener('click', (e) => {
                    e.stopPropagation();
                    dropdown.classList.toggle('active');
                });
            }

            // Close on outside click
            window.addEventListener('click', () => {
                if (dropdown) dropdown.classList.remove('active');
            });
        }
    }

    // 2. Route Protection & Smart Redirects
    const protectedPages = ['dashboard.html', 'tracker.html', 'recommendations.html', 'profile.html'];
    const authPages = ['login.html', 'register.html'];

    if (protectedPages.includes(page) && !isLoggedIn) {
        window.location.href = 'login.html';
    }

    if (authPages.includes(page) && isLoggedIn) {
        window.location.href = 'dashboard.html';
    }
};

// --- LOGIN HANDLER ---
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const errorMsg = document.getElementById('errorMsg');

        errorMsg.style.display = 'none';

        try {
            const response = await fetch(`${API_BASE}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const result = await response.json();

            if (result.success) {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userEmail', email);
                localStorage.setItem('userName', result.user.name);
                window.location.href = 'dashboard.html';
            } else {
                errorMsg.textContent = result.message;
                errorMsg.style.display = 'block';
            }
        } catch (error) {
            errorMsg.textContent = "Connection error. Is the server running?";
            errorMsg.style.display = 'block';
        }
    });
}

// --- REGISTER HANDLER ---
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const errorMsg = document.getElementById('errorMsg');
        const successMsg = document.getElementById('successMsg');

        errorMsg.style.display = 'none';

        try {
            const response = await fetch(`${API_BASE}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });

            const result = await response.json();

            if (result.success) {
                successMsg.textContent = "Account created! Redirecting to login...";
                successMsg.style.display = 'block';
                setTimeout(() => window.location.href = 'login.html', 1500);
            } else {
                errorMsg.textContent = result.message;
                errorMsg.style.display = 'block';
            }
        } catch (error) {
            errorMsg.textContent = "Connection error.";
            errorMsg.style.display = 'block';
        }
    });
}

// --- LOGOUT HANDLER ---
window.logout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    localStorage.removeItem('profileImage');
    localStorage.removeItem('language');
    window.location.href = 'index.html';
};

// Start logic
document.addEventListener('DOMContentLoaded', checkAuth);

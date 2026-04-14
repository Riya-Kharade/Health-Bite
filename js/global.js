/**
 * HealthBite - Global Settings & UI Engine
 * Handles Theme, Language, and Persistence across all pages
 */

const HealthBite = {
    // --- 1. THEME ENGINE ---
    setTheme: (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        document.body.classList.toggle('dark-mode', theme === 'dark');
        localStorage.setItem('theme', theme);
        
        // Sync selectors if present
        document.querySelectorAll('.mode-selector .selector-item').forEach(item => {
            const isMatch = item.innerText.toLowerCase().includes(theme);
            item.classList.toggle('active', isMatch);
        });
    },

    // --- 2. LANGUAGE ENGINE ---
    setLanguage: (lang) => {
        if (!window.HealthBiteTranslations) return;
        
        const langData = window.HealthBiteTranslations[lang];
        if (!langData) return;

        localStorage.setItem('language', lang);

        // Targeted translations using data-i18n or data-lang
        document.querySelectorAll('[data-i18n], [data-lang]').forEach(el => {
            const key = el.getAttribute('data-i18n') || el.getAttribute('data-lang');
            if (langData[key]) {
                el.innerText = langData[key];
            }
        });

        // Sync selectors if present
        document.querySelectorAll('.lang-selector .selector-item').forEach(item => {
            item.classList.toggle('active', item.innerText.toLowerCase() === lang);
        });

        // Specific page updates (like Dashboard hello)
        const welcomeEl = document.getElementById('userNameDisplay');
        if (welcomeEl) {
            const userName = localStorage.getItem('userName') || 'User';
            const welcomePrefix = langData.hi || (lang === 'en' ? 'Hi' : 'Hello');
            welcomeEl.textContent = `${welcomePrefix}, ${userName.split(' ')[0]}!`;
        }
    },

    // --- 3. INITIALIZATION ---
    init: () => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        const savedLang = localStorage.getItem('language') || 'en';

        HealthBite.setTheme(savedTheme);
        HealthBite.setLanguage(savedLang);

        // Global scroll effects
        const nav = document.querySelector('nav');
        if (nav) {
            window.addEventListener('scroll', () => {
                nav.classList.toggle('scrolled', window.scrollY > 50);
            });
        }

        // --- 4. REVEAL ANIMATIONS ---
        const reveal = () => {
            const reveals = document.querySelectorAll('.reveal');
            const windowHeight = window.innerHeight;
            reveals.forEach(el => {
                const revealTop = el.getBoundingClientRect().top;
                if (revealTop < windowHeight - 150) {
                    el.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', reveal);
        reveal(); // Run once

        // --- 5. MOBILE MENU ---
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        if (menuBtn) {
            menuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                menuBtn.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });
        }
    }
};

// Expose to window for inline onclicks
window.applyTheme = HealthBite.setTheme;
window.applyLanguage = HealthBite.setLanguage;

// Run on every page load
document.addEventListener('DOMContentLoaded', HealthBite.init);

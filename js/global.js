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

    // Sync theme selector buttons (old style)
    document.querySelectorAll('.mode-selector .selector-item').forEach(item => {
      const isMatch = item.innerText.toLowerCase().includes(theme);
      item.classList.toggle('active', isMatch);
    });
    
    // Sync theme selector buttons (new style)
    document.querySelectorAll('.mode-toggle .toggle-btn').forEach(item => {
      const themeName = item.innerText.toLowerCase().trim();
      const isMatch = (theme === 'light' && themeName.includes('light')) || 
                      (theme === 'dark' && themeName.includes('dark'));
      item.classList.toggle('active', isMatch);
    });
  },

  // --- 2. LANGUAGE ENGINE ---
  setLanguage: (lang) => {
    if (!window.HealthBiteTranslations) return;

    // Normalize language code to lowercase
    const normalizedLang = lang.toLowerCase();
    const langData = window.HealthBiteTranslations[normalizedLang];
    if (!langData) return;

    localStorage.setItem('language', normalizedLang);

    // Apply translations to elements with data-i18n ONLY (NOT data-lang buttons)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (langData[key]) {
        el.textContent = langData[key];
      }
    });

    // Sync language selector buttons - highlight active language
    document.querySelectorAll('.language-selector .lang-btn').forEach(btn => {
      const btnText = btn.innerText.trim().toLowerCase(); // "en", "hi", "mr"
      const isActive = btnText === normalizedLang.substring(0, 2); // Compare with normalized lang code
      btn.classList.toggle('active', isActive);
    });

    // Update user welcome message if present
    const welcomeEl = document.getElementById('userNameDisplay');
    if (welcomeEl) {
      const userName = localStorage.getItem('userName') || 'User';
      const greetings = {
        en: 'Hi',
        hi: 'नमस्ते',
        mr: 'नमस्कार'
      };
      const greeting = greetings[normalizedLang] || 'Hi';
      welcomeEl.textContent = `${greeting}, ${userName.split(' ')[0]}!`;
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

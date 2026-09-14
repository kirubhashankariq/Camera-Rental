document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    const themeBtnMobile = document.getElementById('theme-toggle-mobile');
    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    
    let isDark = localStorage.getItem('theme') !== 'light';
    
    const updateTheme = () => {
        const sunIcon = '<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.78a1 1 0 011.415 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM14.95 15.657a1 1 0 00-1.414 0l-.707.707a1 1 0 101.414 1.414l.707-.707a1 1 0 000-1.414zM10 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1zm-4.22-2.78a1 1 0 01-1.415 0l-.707-.707a1 1 0 111.414-1.414l.707.707a1 1 0 010 1.414zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm2.83-4.95a1 1 0 001.414 0l.707-.707a1 1 0 00-1.414-1.414l-.707.707a1 1 0 000 1.414zM10 5a5 5 0 100 10 5 5 0 000-10z" clip-rule="evenodd"></path></svg>';
        const moonIcon = '<svg class="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>';

        if (isDark) {
            htmlEl.classList.add('dark');
            bodyEl.classList.add('dark');
            if (themeBtn) themeBtn.innerHTML = sunIcon;
            if (themeBtnMobile) themeBtnMobile.innerHTML = sunIcon;
        } else {
            htmlEl.classList.remove('dark');
            bodyEl.classList.remove('dark');
            if (themeBtn) themeBtn.innerHTML = moonIcon;
            if (themeBtnMobile) themeBtnMobile.innerHTML = moonIcon;
        }
    };
    
    updateTheme();
    
    const toggleTheme = () => {
        isDark = !isDark;
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateTheme();
    };

    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    if (themeBtnMobile) themeBtnMobile.addEventListener('click', toggleTheme);

    const rtlBtn = document.getElementById('rtl-toggle');
    const mobileRtlBtn = document.getElementById('mobile-rtl-toggle');
    let isRtl = localStorage.getItem('rtl') === 'true';

    const updateRtl = () => {
        htmlEl.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
        const text = isRtl ? 'LTR' : 'RTL';
        if (rtlBtn) rtlBtn.innerText = text;
        if (mobileRtlBtn) mobileRtlBtn.innerText = text;
    };

    updateRtl();

    const toggleRtl = () => {
        isRtl = !isRtl;
        localStorage.setItem('rtl', isRtl.toString());
        updateRtl();
    };

    if (rtlBtn) rtlBtn.addEventListener('click', toggleRtl);
    if (mobileRtlBtn) mobileRtlBtn.addEventListener('click', toggleRtl);

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    const mobileHomeBtn = document.getElementById('mobile-home-btn');
    const mobileHomeDropdown = document.getElementById('mobile-home-dropdown');
    
    if (mobileHomeBtn && mobileHomeDropdown) {
        mobileHomeBtn.addEventListener('click', () => {
            mobileHomeDropdown.classList.toggle('hidden');
        });
    }
});

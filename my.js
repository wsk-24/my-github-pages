 // JavaScript to toggle languages
 function switchLang(lang) {
    document.querySelectorAll('[data-lang]').forEach((element) => {
        element.style.display = element.getAttribute('data-lang') === lang ? 'block' : 'none';
    });
}
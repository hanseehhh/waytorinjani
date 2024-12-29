document.addEventListener('DOMContentLoaded', function () {
    const faq = document.querySelector('.faq');

    fetch('/assets/components/faq.html')
        .then(response => response.text())
        .then(data => {
            faq.innerHTML = data;
        })
        .catch(err => console.error('Error loading faq:', err));
});
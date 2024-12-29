document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');

    fetch('/assets/components/header.html')
        .then(response => response.text())
        .then(data => {
            header.innerHTML = data;
        })
        .catch(err => console.error('Error loading header:', err));
});
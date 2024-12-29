document.addEventListener('DOMContentLoaded', function () {
    const footer = document.querySelector('footer');

    fetch('/assets/components/footer.html')
        .then(response => response.text())
        .then(data => {
            footer.innerHTML = data;
        })
        .catch(err => console.error('Error loading footer:', err));
});
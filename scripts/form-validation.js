document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const errors = [];
    const name = document.getElementById('user-name').value.trim();
    const email = document.getElementById('user-email').value.trim();
    const message = document.getElementById('user-message').value.trim();
    
    if (!name) errors.push('Имя обязательно');
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.push('Валидный email обязателен');
    if (!message) errors.push('Сообщение обязательно');
    
    const errorDiv = document.getElementById('form-errors');
    errorDiv.innerHTML = errors.map(err => `<p>${err}</p>`).join('');
    
    if (errors.length === 0) {
        errorDiv.textContent = 'Сообщение отправлено!';
        this.reset();
    }
});
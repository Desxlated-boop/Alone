document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        const cards = document.querySelectorAll('.project-card');

        cards.forEach(card => {
            const categories = card.getAttribute('data-category').split(' '); // Разделяем категории по пробелу
            if (filter === 'all' || categories.includes(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // Удаляем активный класс у всех кнопок и добавляем текущей
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Инициализация: все проекты видны по умолчанию
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
});
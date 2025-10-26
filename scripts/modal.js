// Модальное окно для добавления записи в diary.html
document.querySelector('.add-entry')?.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Добавить запись</h2>
            <input type="text" id="entry-date" placeholder="Дата (например, 15 дек)">
            <input type="text" id="entry-text" placeholder="Текст записи">
            <button class="modal-save">Сохранить</button>
            <button class="modal-cancel">Отмена</button>
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.modal-save').addEventListener('click', () => {
        const date = document.getElementById('entry-date').value;
        const text = document.getElementById('entry-text').value;
        if (date && text) {
            const li = document.createElement('li');
            li.textContent = `${date} - ${text} `;
            const span = document.createElement('span');
            span.className = 'status';
            span.textContent = 'Х';
            li.appendChild(span);
            document.querySelector('.progress-list').appendChild(li);
            document.body.removeChild(modal);
        }
    });
    modal.querySelector('.modal-cancel').addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
});
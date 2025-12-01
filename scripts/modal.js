// modal.js — добавление записи в таблицу (diary.html)
document.querySelector('.add-entry')?.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Добавить запись</h2>
            <input type="text" id="entry-date" placeholder="Дата (например, 20 дек)">
            <input type="text" id="entry-text" placeholder="Текст записи">
            <div style="margin-top:10px;">
                <button class="modal-save">Сохранить</button>
                <button class="modal-cancel">Отмена</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Сохранение
    modal.querySelector('.modal-save').addEventListener('click', () => {
        const date = document.getElementById('entry-date').value.trim();
        const text = document.getElementById('entry-text').value.trim();

        if (date && text) {
            const tbody = document.getElementById('progress-table-body');
            const newRow = document.createElement('tr');

            newRow.innerHTML = `
                <td>${date}</td>
                <td>${text}</td>
                <td><span class="status">Х</span></td>
            `;

            tbody.appendChild(newRow);
            document.body.removeChild(modal);
        }
    });

    // Отмена и клик вне модалки
    modal.querySelector('.modal-cancel').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal) document.body.removeChild(modal);
    });
});
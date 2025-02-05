document.addEventListener('DOMContentLoaded', () => {
    const jokeCards = document.querySelectorAll('.joke-card');

    jokeCards.forEach(card => {
        const text = card.querySelector('.joke-text');
        const button = card.querySelector('.toggle-btn');

        // Проверяем, что элемент text существует
        if (text && button) {
            if (text.textContent.length <= 60) {
                button.style.display = 'none'; // Если анекдот короткий, убираем кнопку
            }

            button.addEventListener('click', () => {
                card.classList.toggle('expanded');
                button.textContent = card.classList.contains('expanded') ? 'Скрыть' : 'Ещё...';
            });
        }
    });
});

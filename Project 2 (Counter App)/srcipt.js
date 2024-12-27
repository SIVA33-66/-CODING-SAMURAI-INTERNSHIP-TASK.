document.addEventListener('DOMContentLoaded', (event) => {
    let count = 0;
    const countElement = document.getElementById('count');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    const updateCount = () => {
        countElement.textContent = count;
        countElement.classList.add('change');
        setTimeout(() => {
            countElement.classList.remove('change');
        }, 300);
    };

    incrementButton.addEventListener('click', () => {
        count++;
        updateCount();
    });

    decrementButton.addEventListener('click', () => {
        count--;
        updateCount();
    });
});

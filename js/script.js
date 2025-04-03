document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.featured-pagination .dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;
    const totalDots = dots.length;

    function updateActiveDot() {
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === totalDots - 1;
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.getAttribute('data-index'));
            updateActiveDot();
        });
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateActiveDot();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalDots - 1) {
            currentIndex++;
            updateActiveDot();
        }
    });

    updateActiveDot();
});

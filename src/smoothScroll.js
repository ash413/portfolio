// smoothScroll.js
/*export function smoothScroll(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }
}
*/

// smoothScroll.js
export function smoothScroll(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        const targetPosition = target.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 500; // Adjust the duration to make the scroll slower or faster
        let start = null;

        window.requestAnimationFrame(function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percent = Math.min(progress / duration, 1);

            window.scrollTo(0, startPosition + distance * percent);

            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        });
    }
}

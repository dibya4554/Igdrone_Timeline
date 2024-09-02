document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            timelineItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

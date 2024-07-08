window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.style.backgroundColor = 'rgb(24, 65, 87)';
    } else {
        header.style.backgroundColor = 'rgba(24, 65, 87, 0)';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.button-item');
    const contents = document.querySelectorAll('.code-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');

            // Hide all content
            contents.forEach(content => content.classList.remove('active'));
            // Show content corresponding to clicked tab
            const target = this.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });
});

const drawer = document.querySelector('.drawer');

const openDrawer = () => {
    if (drawer.classList.contains('close')) {
        drawer.style.display = 'block';
        drawer.classList.remove('close');
        document.body.style.overflow = 'hidden';
    } else {
        drawer.style.display = 'none';
        drawer.classList.add('close');
        document.body.style.overflow = '';
    }
}

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


// Active navigation link highlighter & Schedule Accordion
document.addEventListener('DOMContentLoaded', function() {
    // Active navigation link highlighter
    const mainNavLinks = document.querySelectorAll('header .nav-link');
    const mobileNavLinks = document.querySelectorAll('#mobile-menu .nav-link-mobile');
    
    // Fallback to index.html if path is empty (root)
    const currentPath = window.location.pathname.split("/").pop() || 'index.html';

    mainNavLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split("/").pop();
        if (linkPath === currentPath) {
            link.classList.add('active-link');
            link.classList.remove('text-gray-600');
        }
    });

    mobileNavLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split("/").pop();
        if (linkPath === currentPath) {
            link.classList.add('active-link', 'bg-blue-50');
        }
    });

    // Accordion for schedule talks
    const talkItems = document.querySelectorAll('.talk-item');

    talkItems.forEach(item => {
        item.addEventListener('click', (event) => {
            // Prevent toggling when clicking a link inside the abstract, if any exist
            if (event.target.tagName === 'A') {
                return;
            }
            
            const abstract = item.querySelector('.abstract-content');
            const icon = item.querySelector('.toggle-icon');

            if (abstract) {
                abstract.classList.toggle('hidden');
            }
            if (icon) {
                icon.classList.toggle('rotate-180');
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            // Make sure we have a valid target that isn't just "#"
            if (targetId.length > 1) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Adjust for fixed header height
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                         top: offsetPosition,
                         behavior: "smooth"
                    });
                }
            }
        });
    });
});


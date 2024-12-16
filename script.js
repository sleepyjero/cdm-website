document.querySelectorAll('.program-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor link behavior
        
        const targetId = link.getAttribute('href').slice(1);  // Extracts 'academics' from '#academics'
        const targetElement = document.getElementById(targetId);
        
        // Scroll to the target element with smooth scroll behavior
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

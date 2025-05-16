// highlightCurrentPage.js
(function() {
    document.addEventListener('DOMContentLoaded', () => {
      const currentPath = window.location.pathname;
      const links = document.querySelectorAll('a[href]');
  
      links.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath) {
          link.style.color = 'rgb(15 66 253)';
        }
      });
    });
  })();
   
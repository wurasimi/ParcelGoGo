// Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');
  
  menuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    navMenu.classList.toggle('show');
  });
  
  // Dropdown functionality for mobile
  document.querySelectorAll('.dropdown > a').forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const content = this.nextElementSibling;
        content.classList.toggle('show');
        
        // Close other dropdowns
        document.querySelectorAll('.dropdown-content').forEach(otherContent => {
          if (otherContent !== content) {
            otherContent.classList.remove('show');
          }
        });
      }
    });
  });
  
  // Close menu and dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('nav') && !e.target.closest('.menu-toggle')) {
      navMenu.classList.remove('show');
      document.querySelectorAll('.dropdown-content').forEach(dropdown => {
        dropdown.classList.remove('show');
      });
    }
  });
  
  // Sticky header on scroll
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });
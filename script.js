window.addEventListener('load', () => {
      const loading = document.getElementById('loading');
      setTimeout(() => {
        loading.classList.add('fade-out');
      }, 1000);
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    navLinks.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });

    // Typewriter Effect
    const text = "Passionate aspiring Software Developer specializing in C# .NET, Python, and modern web technologies. I create efficient, scalable solutions and love solving complex problems through code.";
    const typewriter = document.getElementById('typewriter');
    let i = 0;

    function type() {
      if (i < text.length) {
        typewriter.textContent += text.charAt(i);
        i++;
        setTimeout(type, 50);
      }
    }

    // Start typewriter after page loads
    setTimeout(type, 1500);

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Scroll Animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    // Navbar Background on Scroll
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
      } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
      }
    });

    // Contact Form Submission
    document.querySelector('.contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      alert('Thank you for your message! I\'ll get back to you soon.');
      form.reset();
    } else {
      alert('There was an error sending your message. Please try again later.');
    }
  } catch (error) {
    alert('Network error. Please check your internet connection.');
  }
});


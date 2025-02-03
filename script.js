$(document).ready(function() {
    // Theme switcher
    const themeToggle = document.getElementById('themeToggle');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.checked = savedTheme === 'dark';

    // Theme switch handler
    themeToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });

    // Animate skill bars on skills tab click
    $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
        if ($(e.target).attr('href') === '#skills') {
            $('.progress-bar').each(function() {
                $(this).css('width', '0%')
                    .animate({
                        width: $(this).attr('style').split(':')[1]
                    }, 1000);
            });
        }
    });

    // Add hover effects to timeline items
    $('.timeline-item').hover(
        function() {
            $(this).css('transform', 'translateX(10px)');
            $(this).css('transition', 'transform 0.3s');
        },
        function() {
            $(this).css('transform', 'translateX(0)');
        }
    );

    // Animate social links
    $('.social-links a').hover(
        function() {
            $(this).addClass('animate__animated animate__pulse');
        },
        function() {
            $(this).removeClass('animate__animated animate__pulse');
        }
    );

    // Navigation handling
    $('.nav-item').click(function(e) {
        e.preventDefault();
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
        
        const section = $(this).data('section');
        loadSection(section);
    });

    // Download CV button
    $('#downloadCV').click(function() {
        // Replace 'path-to-your-cv.pdf' with your actual CV file path
        const cvPath = 'path-to-your-cv.pdf';
        
        // Create temporary link
        const link = document.createElement('a');
        link.href = cvPath;
        link.download = 'YourName_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Hire Me button
    $('#hireMe').click(function() {
        // Navigate to contact section
        $('.nav-item[data-section="contact"]').click();
    });

    // Add loading animation to buttons when clicked
    $('.download-cv, .hire-me').click(function() {
        $(this).addClass('loading');
        setTimeout(() => {
            $(this).removeClass('loading');
        }, 1500);
    });

    // Animate skill bars when they come into view
    function animateSkillBars() {
        $('.progress-bar').each(function() {
            $(this).addClass('animate');
        });
    }

    // Function to load section content
    function loadSection(section) {
        let content = '';
        
        switch(section) {
            case 'home':
                content = `
                    <div class="section-home active-section">
                        <h1 class="main-title">Creative<br>Developer</h1>
                        <h3 class="subtitle">Turning ideas into reality</h3>
                        <div class="stats-container">
                            <div class="stat-item">
                                <span class="stat-number">5+</span>
                                <span class="stat-label">Years Experience</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">50+</span>
                                <span class="stat-label">Projects</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">30+</span>
                                <span class="stat-label">Happy Clients</span>
                            </div>
                        </div>
                    </div>`;
                break;

            case 'about':
                content = `
                    <div class="section-about">
                        <h2 class="section-title">About Me</h2>
                        <div class="about-content">
                            <p class="lead">Passionate developer with a creative mindset and a drive for innovation.</p>
                            <div class="info-grid">
                                <div class="info-item">
                                    <span class="label">Name:</span>
                                    <span class="value">John Developer</span>
                                </div>
                                <div class="info-item">
                                    <span class="label">Age:</span>
                                    <span class="value">28</span>
                                </div>
                                <div class="info-item">
                                    <span class="label">Location:</span>
                                    <span class="value">New York, USA</span>
                                </div>
                                <div class="info-item">
                                    <span class="label">Email:</span>
                                    <span class="value">john@example.com</span>
                                </div>
                            </div>
                            <div class="about-text">
                                <p>I specialize in creating innovative web solutions that combine aesthetic appeal with functional efficiency. With over 5 years of experience in full-stack development, I've helped numerous clients bring their digital visions to life.</p>
                            </div>
                        </div>
                    </div>`;
                break;

            case 'portfolio':
                content = `
                    <div class="section-portfolio">
                        <h2 class="section-title">My Work</h2>
                        <div class="portfolio-grid">
                            <div class="portfolio-item">
                                <img src="https://via.placeholder.com/300x200" alt="Project 1">
                                <div class="portfolio-overlay">
                                    <h3>E-Commerce Platform</h3>
                                    <p>Full-stack development</p>
                                    <a href="#" class="btn btn-light btn-sm">View Project</a>
                                </div>
                            </div>
                            <div class="portfolio-item">
                                <img src="https://via.placeholder.com/300x200" alt="Project 2">
                                <div class="portfolio-overlay">
                                    <h3>Mobile App UI</h3>
                                    <p>UI/UX Design</p>
                                    <a href="#" class="btn btn-light btn-sm">View Project</a>
                                </div>
                            </div>
                            <div class="portfolio-item">
                                <img src="https://via.placeholder.com/300x200" alt="Project 3">
                                <div class="portfolio-overlay">
                                    <h3>Blog Platform</h3>
                                    <p>WordPress Development</p>
                                    <a href="#" class="btn btn-light btn-sm">View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>`;
                break;

            case 'skills':
                content = `
                    <div class="section-skills">
                        <h2 class="section-title">My Skills</h2>
                        <div class="skills-container">
                            <div class="skill-category">
                                <h3>Frontend</h3>
                                <div class="skill-bars">
                                    <div class="skill">
                                        <span>HTML/CSS</span>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 95%"></div>
                                        </div>
                                    </div>
                                    <div class="skill">
                                        <span>JavaScript</span>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 90%"></div>
                                        </div>
                                    </div>
                                    <div class="skill">
                                        <span>React</span>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 85%"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-category">
                                <h3>Backend</h3>
                                <div class="skill-bars">
                                    <div class="skill">
                                        <span>Node.js</span>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 80%"></div>
                                        </div>
                                    </div>
                                    <div class="skill">
                                        <span>Python</span>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 75%"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
                break;

            case 'contact':
                content = `
                    <div class="section-contact">
                        <h2 class="section-title">Get In Touch</h2>
                        <div class="contact-content">
                            <div class="contact-info">
                                <div class="contact-item">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div>
                                        <h4>Location</h4>
                                        <p>New York, NY 10012</p>
                                    </div>
                                </div>
                                <div class="contact-item">
                                    <i class="fas fa-envelope"></i>
                                    <div>
                                        <h4>Email</h4>
                                        <p>contact@example.com</p>
                                    </div>
                                </div>
                                <div class="contact-item">
                                    <i class="fas fa-phone"></i>
                                    <div>
                                        <h4>Phone</h4>
                                        <p>+1 234 567 890</p>
                                    </div>
                                </div>
                            </div>
                            <form class="contact-form">
                                <div class="form-group">
                                    <input type="text" placeholder="Your Name" class="form-control">
                                </div>
                                <div class="form-group">
                                    <input type="email" placeholder="Your Email" class="form-control">
                                </div>
                                <div class="form-group">
                                    <textarea placeholder="Your Message" class="form-control" rows="5"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>`;
                break;
        }
        
        $('#contentArea').html(content);
        
        // Reinitialize animations for the new content
        if (section === 'skills') {
            setTimeout(animateSkillBars, 300);
        }
        
        // Animate all elements with animation classes
        $('.content-wrapper').find('[class*="animate"]').each(function(index) {
            $(this).css('animation-delay', `${index * 0.1}s`);
        });
    }

    // Add hover animations for interactive elements
    $('.social-icon, .nav-item').hover(
        function() { $(this).addClass('animate__animated animate__pulse'); },
        function() { $(this).removeClass('animate__animated animate__pulse'); }
    );

    // Animate elements when they come into view
    function animateOnScroll() {
        $('.animate-on-scroll').each(function() {
            if ($(this).isInViewport()) {
                $(this).addClass('animated');
            }
        });
    }

    // Helper function to check if element is in viewport
    $.fn.isInViewport = function() {
        const elementTop = $(this).offset().top;
        const elementBottom = elementTop + $(this).outerHeight();
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    // Listen for scroll events
    $(window).on('scroll', animateOnScroll);
    
    // Initial animation trigger
    animateOnScroll();

    // Add touch support for mobile with improved scroll handling
    let touchStartY = 0;
    let touchEndY = 0;
    let touchStartX = 0;
    let touchEndX = 0;
    let isScrolling;
    let startTime;

    document.addEventListener('touchstart', function(e) {
        touchStartY = e.changedTouches[0].screenY;
        touchStartX = e.changedTouches[0].screenX;
        startTime = Date.now();
        isScrolling = undefined;
    }, false);

    document.addEventListener('touchmove', function(e) {
        // Detect horizontal scrolling
        if (isScrolling === undefined) {
            isScrolling = Math.abs(e.changedTouches[0].screenX - touchStartX) > 
                         Math.abs(e.changedTouches[0].screenY - touchStartY);
        }
    }, false);

    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].screenY;
        touchEndX = e.changedTouches[0].screenX;
        const timeDiff = Date.now() - startTime;

        // Only handle if it's a vertical swipe and not a scroll
        if (!isScrolling) {
            handleSwipe(timeDiff);
        }
    }, false);

    function handleSwipe(timeDiff) {
        const sensitivity = 100; // Increased minimum distance for swipe
        const swipeDistance = touchStartY - touchEndY;
        const swipeTime = 300; // Maximum time for swipe in milliseconds
        const minDistance = 50; // Minimum distance to trigger

        // Check if the swipe was fast enough and long enough
        if (timeDiff < swipeTime && Math.abs(swipeDistance) > sensitivity) {
            const horizontalDistance = Math.abs(touchEndX - touchStartX);
            
            // Ensure the swipe is more vertical than horizontal
            if (Math.abs(swipeDistance) > horizontalDistance && Math.abs(swipeDistance) > minDistance) {
                const currentSection = $('.nav-item.active').data('section');
                const sections = ['home', 'about', 'portfolio', 'skills', 'contact'];
                const currentIndex = sections.indexOf(currentSection);

                if (swipeDistance > 0 && currentIndex < sections.length - 1) {
                    // Swipe up - go to next section
                    $(`.nav-item[data-section="${sections[currentIndex + 1]}"]`).click();
                } else if (swipeDistance < 0 && currentIndex > 0) {
                    // Swipe down - go to previous section
                    $(`.nav-item[data-section="${sections[currentIndex - 1]}"]`).click();
                }
            }
        }
    }

    // Prevent zoom on double tap for iOS
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(e) {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // Handle mobile menu active states with touch feedback
    $('.nav-item').on('touchstart', function() {
        $(this).addClass('touch-active');
    }).on('touchend touchcancel', function() {
        $(this).removeClass('touch-active');
    });

    // Optimize animations for mobile
    if (window.matchMedia('(max-width: 768px)').matches) {
        // Reduce animation duration on mobile
        document.documentElement.style.setProperty('--animation-duration', '0.3s');
    }
}); 
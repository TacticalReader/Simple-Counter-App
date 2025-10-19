'use strict';

const pageHTML = `
<!-- header section starts  -->
<header class="header">

    <button id="menu-btn" class="fas fa-bars" aria-label="Open menu" aria-controls="navbar" aria-expanded="false"></button>

    <a data-aos="zoom-in-left" data-aos-delay="150" href="#home" class="logo"> <i class="fas fa-paper-plane"></i>travel </a>

    <nav class="navbar" id="navbar">
        <a data-aos="zoom-in-left" data-aos-delay="300" href="#home">home</a>
        <a data-aos="zoom-in-left" data-aos-delay="450" href="#about">about</a>
        <a data-aos="zoom-in-left" data-aos-delay="600" href="#destination">destination</a>
        <a data-aos="zoom-in-left" data-aos-delay="750" href="#services">services</a>
        <a data-aos="zoom-in-left" data-aos-delay="900" href="#gallery">gallery</a>
        <a data-aos="zoom-in-left" data-aos-delay="1150" href="#blogs">blogs</a>
    </nav>

    <a data-aos="zoom-in-left" data-aos-delay="1300" href="#book-form" class="btn">book now</a>

</header>
<!-- header section ends -->

<!-- home section starts  -->
<section class="home" id="home">

    <div class="content">
        <span data-aos="fade-up" data-aos-delay="150">follow us</span>
        <h3 data-aos="fade-up" data-aos-delay="300">to the unknown</h3>
        <p data-aos="fade-up" data-aos-delay="450">Discover breathtaking destinations and create unforgettable memories with our expertly crafted travel experiences. From exotic beaches to mountain peaks, adventure awaits at every corner of the world.</p>
        <a data-aos="fade-up" data-aos-delay="600" href="#book-form" class="btn">book now</a>
    </div>

</section>
<!-- home section ends -->

<!-- booking form section starts  -->
<section class="book-form" id="book-form">

    <form action="" id="booking-form">
        <div data-aos="zoom-in" data-aos-delay="150" class="inputBox">
            <span><i class="fas fa-map-marker-alt"></i> where to?</span>
            <input type="text" placeholder="place name" required>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300" class="inputBox">
            <span><i class="fas fa-calendar-alt"></i> when?</span>
            <input type="date" required>
        </div>
        <div data-aos="zoom-in" data-aos-delay="450" class="inputBox">
            <span><i class="fas fa-users"></i> how many?</span>
            <input type="number" placeholder="number of travelers" min="1" required>
        </div>
        <input data-aos="zoom-in" data-aos-delay="600" type="submit" value="find now" class="btn">
        <div class="form-message"></div>
    </form>

</section>
<!-- booking form section ends -->

<!-- about section starts  -->
<section class="about" id="about">

    <div class="video-container" data-aos="fade-right" data-aos-delay="300">
        <video src="images/about-vid-1.mp4" muted autoplay loop class="video"></video>
        <div class="controls" role="group" aria-label="Video selection controls">
            <button class="control-btn" data-src="images/about-vid-1.mp4" aria-label="Play video 1"></button>
            <button class="control-btn" data-src="images/about-vid-2.mp4" aria-label="Play video 2"></button>
            <button class="control-btn" data-src="images/about-vid-3.mp4" aria-label="Play video 3"></button>
        </div>
    </div>

    <div class="content" data-aos="fade-left" data-aos-delay="600">
        <span>why choose us?</span>
        <h3>Nature's Majesty Awaits You</h3>
        <p>We offer personalized travel experiences with expert local guides, premium accommodations, and carefully curated itineraries. Your safety and satisfaction are our top priorities on every adventure.</p>
        <a href="#" class="btn">read more <i class="fas fa-info-circle"></i></a>
    </div>

</section>
<!-- about section ends -->

<!-- destination section starts  -->
<section class="destination" id="destination">

    <div class="heading">
        <span>our destination</span>
        <h1>make yours destination</h1>
    </div>

    <div class="box-container">

        <div class="box" data-aos="fade-up" data-aos-delay="150">
            <div class="image">
                <img src="images/des-1.jpg" alt="Mountain landscape" loading="lazy">
            </div>
            <div class="content">
                <h3>Mountain Adventures</h3>
                <p>Experience breathtaking mountain landscapes and thrilling hiking trails.</p>
                <a href="#">read more <i class="fas fa-angle-right"></i></a>
            </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="300">
            <div class="image">
                <img src="images/des-2.jpg" alt="Pristine beach" loading="lazy">
            </div>
            <div class="content">
                <h3>Beach Paradise</h3>
                <p>Relax on pristine beaches with crystal-clear waters and golden sand.</p>
                <a href="#">read more <i class="fas fa-angle-right"></i></a>
            </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="450">
            <div class="image">
                <img src="images/des-3.jpg" alt="Ancient temple" loading="lazy">
            </div>
            <div class="content">
                <h3>Cultural Tours</h3>
                <p>Discover rich heritage and immerse yourself in local traditions.</p>
                <a href="#">read more <i class="fas fa-angle-right"></i></a>
            </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="600">
            <div class="image">
                <img src="images/des-4.jpg" alt="Modern cityscape" loading="lazy">
            </div>
            <div class="content">
                <h3>City Exploration</h3>
                <p>Navigate vibrant cities filled with modern attractions and history.</p>
                <a href="#">read more <i class="fas fa-angle-right"></i></a>
            </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="750">
            <div class="image">
                <img src="images/des-5.jpg" alt="Desert dunes at sunset" loading="lazy">
            </div>
            <div class="content">
                <h3>Desert Safari</h3>
                <p>Journey through vast deserts and witness stunning sunset views.</p>
                <a href="#">read more <i class="fas fa-angle-right"></i></a>
            </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="900">
            <div class="image">
                <img src="images/des-6.jpg" alt="Lush green forest" loading="lazy">
            </div>
            <div class="content">
                <h3>Forest Trekking</h3>
                <p>Explore dense forests and discover exotic wildlife in natural habitat.</p>
                <a href="#">read more <i class="fas fa-angle-right"></i></a>
            </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="1150">
            <div class="image">
                <img src="images/des-7.jpg" alt="Tropical islands from above" loading="lazy">
            </div>
            <div class="content">
                <h3>Island Hopping</h3>
                <p>Visit multiple tropical islands with unique charm and beauty.</p>
                <a href="#">read more <i class="fas fa-angle-right"></i></a>
            </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="1300">
            <div class="image">
                <img src="images/des-8.jpg" alt="Snowy arctic landscape" loading="lazy">
            </div>
            <div class="content">
                <h3>Arctic Adventures</h3>
                <p>Witness northern lights and experience arctic wilderness firsthand.</p>
                <a href="#">read more <i class="fas fa-angle-right"></i></a>
            </div>
        </div>

    </div>

</section>
<!-- destination section ends -->

<!-- services section starts  -->
<section class="services" id="services">

    <div class="heading">
        <span>our services</span>
        <h1>countless expericences</h1>
    </div>

    <div class="box-container">

        <div class="box" data-aos="zoom-in-up" data-aos-delay="150">
            <i class="fas fa-globe"></i>
            <h3>worldwide</h3>
            <p>Travel to any destination across the globe with our extensive network.</p>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="300">
            <i class="fas fa-hiking"></i>
            <h3>adventures</h3>
            <p>Thrilling outdoor activities and extreme sports for adrenaline seekers.</p>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="450">
            <i class="fas fa-utensils"></i>
            <h3>food & drinks</h3>
            <p>Savor authentic local cuisine and beverages at every destination.</p>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="600">
            <i class="fas fa-hotel"></i>
            <h3>affordable hotels</h3>
            <p>Comfortable accommodations that fit your budget without compromising quality.</p>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="750">
            <i class="fas fa-wallet"></i>
            <h3>affordable price</h3>
            <p>Best value packages with transparent pricing and no hidden costs.</p>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="900">
            <i class="fas fa-headset"></i>
            <h3>24/7 support</h3>
            <p>Round-the-clock customer assistance for all your travel needs.</p>
        </div>

    </div>

</section>
<!-- services section ends -->

<!-- gallery section starts  -->
<section class="gallery" id="gallery">

    <div class="heading">
        <span>our gallery</span>
        <h1>we record memories</h1>
    </div>
    
    <div class="box-container">

        <div class="box" data-aos="zoom-in-up" data-aos-delay="150" tabindex="0" role="button" aria-label="View image of Iceland">
            <img src="images/gallery-img-1.jpg" alt="Travel photo of Iceland" loading="lazy">
            <span><i class="fas fa-map-marker-alt"></i> travel spot</span>
            <h3>iceland</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="300" tabindex="0" role="button" aria-label="View image of Greenland">
            <img src="images/gallery-img-2.jpg" alt="Travel photo of Greenland" loading="lazy">
            <span><i class="fas fa-map-marker-alt"></i> travel spot</span>
            <h3>greenland</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="450" tabindex="0" role="button" aria-label="View image of Alaska">
            <img src="images/gallery-img-3.jpg" alt="Travel photo of Alaska" loading="lazy">
            <span><i class="fas fa-map-marker-alt"></i> travel spot</span>
            <h3>alaska</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="150" tabindex="0" role="button" aria-label="View image of Thailand">
            <img src="images/gallery-img-4.jpg" alt="Travel photo of Thailand" loading="lazy">
            <span><i class="fas fa-map-marker-alt"></i> travel spot</span>
            <h3>thailand</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="300" tabindex="0" role="button" aria-label="View image of Brazil">
            <img src="images/gallery-img-5.jpg" alt="Travel photo of Brazil" loading="lazy">
            <span><i class="fas fa-map-marker-alt"></i> travel spot</span>
            <h3>brazil</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="450" tabindex="0" role="button" aria-label="View image of Maldives">
            <img src="images/gallery-img-6.jpg" alt="Travel photo of Maldives" loading="lazy">
            <span><i class="fas fa-map-marker-alt"></i> travel spot</span>
            <h3>maldive</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="150" tabindex="0" role="button" aria-label="View image of Iceland">
            <img src="images/gallery-img-7.jpg" alt="Travel photo of Iceland" loading="lazy">
            <span><i class="fas fa-map-marker-alt"></i> travel spot</span>
            <h3>iceland</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="300" tabindex="0" role="button" aria-label="View image of Alaska">
            <img src="images/gallery-img-8.jpg" alt="Travel photo of Alaska" loading="lazy">
            <span><i class="fas fa-map-marker-alt"></i> travel spot</span>
            <h3>alaska</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="450" tabindex="0" role="button" aria-label="View image of Maldives">
            <img src="images/gallery-img-9.jpg" alt="Travel photo of Maldives" loading="lazy">
            <span><i class="fas fa-map-marker-alt"></i> travel spot</span>
            <h3>maldive</h3>
        </div>

    </div>

</section>
<!-- gallery section ends -->

<!-- review section starts  -->
<section class="review" id="review">

    <div class="content" data-aos="fade-right" data-aos-delay="300">
        <span>testimonials</span>
        <h3>good news from our clients</h3>
        <p>Our clients consistently share amazing experiences from their travels with us. Their feedback motivates us to continue providing exceptional service and unforgettable journeys. Here's what some of our happy travelers have to say about their adventures.</p>
    </div>

    <div class="review-slider" data-aos="fade-left" data-aos-delay="600">
        <div class="slider-wrapper">
            <div class="box-container">
                <div class="box">
                    <p>Amazing trip to Iceland! The northern lights tour exceeded all expectations.</p>
                    <div class="user">
                        <img src="images/pic-1.png" alt="User photo" loading="lazy">
                        <div class="info">
                            <h3>Sarah Johnson</h3>
                            <span>Photographer</span>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <p>Perfect beach vacation in Maldives. Crystal clear waters and excellent service!</p>
                    <div class="user">
                        <img src="images/pic-2.png" alt="User photo" loading="lazy">
                        <div class="info">
                            <h3>Mike Wilson</h3>
                            <span>Business Owner</span>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <p>The mountain trekking adventure was absolutely thrilling. Highly recommend!</p>
                    <div class="user">
                        <img src="images/pic-3.png" alt="User photo" loading="lazy">
                        <div class="info">
                            <h3>Emily Davis</h3>
                            <span>Adventure Enthusiast</span>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <p>Cultural tour of Thailand was enriching. Learned so much about local traditions.</p>
                    <div class="user">
                        <img src="images/pic-4.png" alt="User photo" loading="lazy">
                        <div class="info">
                            <h3>David Chen</h3>
                            <span>Teacher</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider-controls">
            <button id="prev-review" class="slider-btn" aria-label="Previous review"><i class="fas fa-chevron-left"></i></button>
            <button id="next-review" class="slider-btn" aria-label="Next review"><i class="fas fa-chevron-right"></i></button>
        </div>
    </div>

</section>
<!-- review section ends -->

<!-- blogs section starts  -->
<section class="blogs" id="blogs">

    <div class="heading">
        <span>blogs & posts</span>
        <h1>we untold stories</h1>
    </div>

    <div class="box-container">

        <div class="box" data-aos="fade-up" data-aos-delay="150">
            <div class="image">
                <img src="images/blog-1.jpg" alt="Camera on a map" loading="lazy">
            </div>
            <div class="content">
                <a href="#" class="link">Best Travel Photography Tips for Beginners</a>
                <p>Discover essential techniques to capture stunning travel photos and preserve your memories forever.</p>
                <div class="icon">
                    <a href="#"><i class="fas fa-clock"></i> 15th Sept, 2025</a>
                    <a href="#"><i class="fas fa-user"></i> by Tanmay</a>
                </div>
            </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="300">
            <div class="image">
                <img src="images/blog-2.jpg" alt="Person looking at a mountain view" loading="lazy">
            </div>
            <div class="content">
                <a href="#" class="link">Ultimate Guide to Solo Travel Adventures</a>
                <p>Essential tips and safety advice for making the most of your solo travel experiences.</p>
                <div class="icon">
                    <a href="#"><i class="fas fa-clock"></i> 10th Sept, 2025</a>
                    <a href="#"><i class="fas fa-user"></i> by Tanmay</a>
                </div>
            </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="450">
            <div class="image">
                <img src="images/blog-3.jpg" alt="Cobblestone street in an old town" loading="lazy">
            </div>
            <div class="content">
                <a href="#" class="link">Hidden Gems: Unexplored Destinations Worth Visiting</a>
                <p>Discover off-the-beaten-path locations that offer unique cultural and natural experiences.</p>
                <div class="icon">
                    <a href="#"><i class="fas fa-clock"></i> 5th Sept, 2025</a>
                    <a href="#"><i class="fas fa-user"></i> by Tanmay</a>
                </div>
            </div>
        </div>

    </div>

</section>
<!-- blogs section ends -->

<!-- banner section starts  -->
<div class="banner">

    <div class="content" data-aos="zoom-in-up" data-aos-delay="300">
        <span>start your adventures</span>
        <h3>Let's Explore This World</h3>
        <p>Don't wait for tomorrow to chase your dreams. Pack your bags, embrace the adventure, and create memories that will last a lifetime. The world is calling!</p>
        <a href="#book-form" class="btn">book now</a>
    </div>

</div>
<!-- banner section ends -->

<!-- footer section starts  -->
<section class="footer">

    <div class="box-container">

        <div class="box" data-aos="fade-up" data-aos-delay="150">
            <a href="#home" class="logo"> <i class="fas fa-paper-plane"></i>travel </a>
            <p>Your trusted travel companion for unforgettable adventures and seamless journeys worldwide.</p>
            <div class="share">
                <a href="#" class="fab fa-facebook-f" aria-label="Facebook" target="_blank" rel="noopener noreferrer"></a>
                <a href="#" class="fab fa-twitter" aria-label="Twitter" target="_blank" rel="noopener noreferrer"></a>
                <a href="#" class="fab fa-instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer"></a>
                <a href="#" class="fab fa-linkedin" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"></a>
            </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="300">
            <h3>quick links</h3>
            <a href="#home" class="links"> <i class="fas fa-arrow-right"></i> home </a>
            <a href="#about" class="links"> <i class="fas fa-arrow-right"></i> about </a>
            <a href="#destination" class="links"> <i class="fas fa-arrow-right"></i> destination </a>
            <a href="#services" class="links"> <i class="fas fa-arrow-right"></i> services </a>
            <a href="#gallery" class="links"> <i class="fas fa-arrow-right"></i> gallery </a>
            <a href="#blogs" class="links"> <i class="fas fa-arrow-right"></i> blogs </a>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="450">
            <h3>contact info</h3>
            <p> <i class="fas fa-map"></i> Uttar Pradesh, india </p>
            <p> <i class="fas fa-phone"></i> +91 6394729329 </p>
            <p> <i class="fas fa-envelope"></i> yashsrivastava561@gmail.com </p>
            <p> <i class="fas fa-clock"></i> 7:00am - 10:00pm </p>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="600">
            <h3><i class="fas fa-envelope-open-text"></i> newsletter</h3>
            <p>subscribe for latest updates</p>
            <form action="" id="newsletter-form">
                <input type="email" name="email" placeholder="enter your email" class="email" id="newsletter-email" required>
                <button type="submit" class="btn">subscribe <i class="fas fa-paper-plane"></i></button>
                <div class="form-message"></div>
            </form>
        </div>

    </div>

</section>

<div class="credit">created by <span>mr. Tanmay Srivastava </span> | all rights reserved!</div>
<!-- footer section ends -->

<!-- scroll top button  -->
<a href="#home" class="scroll-top-btn fas fa-arrow-up"></a>

<!-- gallery lightbox -->
<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-labelledby="lightbox-heading">
    <h2 id="lightbox-heading" class="visually-hidden">Image Gallery</h2>
    <span class="close-btn" role="button" tabindex="0" aria-label="Close gallery">&times;</span>
    <img src="" alt="Enlarged gallery image" class="lightbox-content" id="lightbox-img">
</div>
`;

document.addEventListener('DOMContentLoaded', () => {

    // 1. Load the page content from the template literal
    document.body.innerHTML = pageHTML;

    // 2. Initialize all interactive components now that the DOM is populated

    // Utility to throttle function execution
    const throttle = (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    };

    // Main application object
    const app = {
        init() {
            this.initAOS();
            this.initNavbar();
            this.initScrollEffects();
            this.initVideoSwitcher();
            this.initActiveLinkObserver();
            this.initBookingForm();
            this.initNewsletterForm();
            this.initReviewSlider();
            this.initGalleryLightbox();
        },

        initAOS() {
            // Respect user's motion preferences
            const motionQuery = window.matchMedia('(prefers-reduced-motion)');
            if (!motionQuery || !motionQuery.matches) {
                AOS.init({
                    duration: 800,
                    offset: 150,
                });
            }
        },

        initNavbar() {
            const menuBtn = document.querySelector('#menu-btn');
            const navbar = document.querySelector('.header .navbar');

            if (menuBtn && navbar) {
                menuBtn.onclick = () => {
                    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
                    menuBtn.classList.toggle('fa-times');
                    navbar.classList.toggle('active');
                    menuBtn.setAttribute('aria-expanded', !isExpanded);
                    menuBtn.setAttribute('aria-label', isExpanded ? 'Open menu' : 'Close menu');
                };
            }

            // Close mobile menu when a nav link is clicked
            document.querySelectorAll('.header .navbar a').forEach(link => {
                link.onclick = () => {
                    if (navbar && navbar.classList.contains('active')) {
                        navbar.classList.remove('active');
                        menuBtn.classList.remove('fa-times');
                        menuBtn.setAttribute('aria-expanded', 'false');
                        menuBtn.setAttribute('aria-label', 'Open menu');
                    }
                };
            });
        },

        initScrollEffects() {
            const header = document.querySelector('.header');
            const scrollTopBtn = document.querySelector('.scroll-top-btn');

            const handleScroll = () => {
                if (header) {
                    header.classList.toggle('scrolled', window.scrollY > 0);
                }

                if (scrollTopBtn) {
                    scrollTopBtn.classList.toggle('active', window.scrollY > 250);
                }
            };

            window.addEventListener('scroll', throttle(handleScroll, 100));
        },

        initVideoSwitcher() {
            const controlBtns = document.querySelectorAll('.about .controls .control-btn');
            const videoPlayer = document.querySelector('.about .video-container .video');

            if (!controlBtns.length || !videoPlayer) return;

            const activateButton = (btn) => {
                const src = btn.getAttribute('data-src');
                if (src) {
                    videoPlayer.src = src;
                    controlBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                }
            };

            controlBtns.forEach(btn => {
                btn.addEventListener('click', () => activateButton(btn));
            });

            // Set the first button as active initially
            if (controlBtns.length > 0) {
                controlBtns[0].classList.add('active');
            }
        },

        initActiveLinkObserver() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.header .navbar a');

            if (sections.length > 0 && navLinks.length > 0) {
                const observerOptions = {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.6
                };

                const sectionObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const activeId = `#${entry.target.id}`;
                            navLinks.forEach(link => {
                                link.classList.toggle('active', link.getAttribute('href') === activeId);
                            });
                        }
                    });
                }, observerOptions);

                sections.forEach(section => {
                    sectionObserver.observe(section);
                });
            }
        },

        displayFormMessage(form, message, isSuccess = true) {
            const messageEl = form.querySelector('.form-message');
            if (!messageEl) return;

            messageEl.textContent = message;
            messageEl.className = 'form-message'; // Reset classes
            messageEl.classList.add(isSuccess ? 'success' : 'error', 'visible');

            setTimeout(() => {
                messageEl.classList.remove('visible');
            }, 4000);
        },

        initBookingForm() {
            const bookingForm = document.querySelector('#booking-form');
            if (bookingForm) {
                bookingForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const destinationInput = bookingForm.querySelector('input[type="text"]');
                    const dateInput = bookingForm.querySelector('input[type="date"]');
                    const travelersInput = bookingForm.querySelector('input[type="number"]');

                    const destination = destinationInput.value.trim();
                    const date = dateInput.value;
                    const travelers = travelersInput.value;

                    const selectedDate = new Date(date);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);

                    if (!destination || !date || !travelers) {
                        this.displayFormMessage(bookingForm, 'Please fill out all fields.', false);
                        return;
                    }

                    if (selectedDate < today) {
                        this.displayFormMessage(bookingForm, 'Please select a date in the future.', false);
                        dateInput.focus();
                        return;
                    }

                    if (parseInt(travelers, 10) < 1) {
                        this.displayFormMessage(bookingForm, 'Number of travelers must be at least 1.', false);
                        travelersInput.focus();
                        return;
                    }

                    this.displayFormMessage(bookingForm, 'Booking request sent! We will contact you shortly.', true);
                    bookingForm.reset();
                });
            }
        },

        initNewsletterForm() {
            const newsletterForm = document.querySelector('#newsletter-form');
            if (newsletterForm) {
                newsletterForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const emailInput = newsletterForm.querySelector('.email');
                    const email = emailInput.value.trim();

                    if (email && /^[^ \s@]+@[^ \s@]+\.[^ \s@]+$/.test(email)) {
                        this.displayFormMessage(newsletterForm, 'Thank you for subscribing!', true);
                        emailInput.value = '';
                    } else {
                        this.displayFormMessage(newsletterForm, 'Please enter a valid email address.', false);
                    }
                });
            }
        },

        initReviewSlider() {
            const slider = document.querySelector('.review .review-slider');
            const sliderContainer = document.querySelector('.review .box-container');
            const prevBtn = document.querySelector('#prev-review');
            const nextBtn = document.querySelector('#next-review');

            if (!sliderContainer || !prevBtn || !nextBtn) return;

            const slides = Array.from(sliderContainer.children);
            if (slides.length === 0) return;

            let currentIndex = 0;
            let autoPlayInterval;
            let touchStartX = 0;
            let touchEndX = 0;
            const swipeThreshold = 50; // Min pixels for a swipe

            const updateSliderPosition = () => {
                const slideWidth = slides[0].offsetWidth;
                const gap = parseFloat(getComputedStyle(sliderContainer).gap) || 0;
                sliderContainer.style.transform = `translateX(-${currentIndex * (slideWidth + gap)}px)`;
            };

            const nextSlide = () => {
                currentIndex = (currentIndex + 1) % slides.length;
                updateSliderPosition();
            };

            const prevSlide = () => {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                updateSliderPosition();
            };

            const startAutoPlay = () => {
                stopAutoPlay(); // Prevent multiple intervals
                autoPlayInterval = setInterval(nextSlide, 5000);
            };

            const stopAutoPlay = () => {
                clearInterval(autoPlayInterval);
            };

            const handleTouchStart = (e) => {
                touchStartX = e.changedTouches[0].screenX;
                stopAutoPlay();
            };

            const handleTouchEnd = (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
                startAutoPlay();
            };

            const handleSwipe = () => {
                if (touchEndX < touchStartX - swipeThreshold) {
                    nextSlide();
                }
                if (touchEndX > touchStartX + swipeThreshold) {
                    prevSlide();
                }
            };

            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);

            slider.addEventListener('mouseenter', stopAutoPlay);
            slider.addEventListener('mouseleave', startAutoPlay);

            sliderContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
            sliderContainer.addEventListener('touchend', handleTouchEnd, { passive: true });

            window.addEventListener('resize', throttle(updateSliderPosition, 200));
            updateSliderPosition();
            startAutoPlay();
        },

        initGalleryLightbox() {
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            const galleryItems = document.querySelectorAll('.gallery .box');
            const closeBtn = document.querySelector('.lightbox .close-btn');

            if (!lightbox || !lightboxImg || !closeBtn || galleryItems.length === 0) return;

            const galleryImageSources = Array.from(galleryItems).map(item => item.querySelector('img').src);
            let currentImageIndex = 0;
            let lastFocusedElement;

            const openLightbox = (index) => {
                lastFocusedElement = document.activeElement;
                currentImageIndex = index;
                lightboxImg.src = galleryImageSources[currentImageIndex];
                lightbox.classList.add('active');
                document.addEventListener('keydown', handleKeydown);
                trapFocus();
            };

            const closeLightbox = () => {
                lightbox.classList.remove('active');
                document.removeEventListener('keydown', handleKeydown);
                if (lastFocusedElement) {
                    lastFocusedElement.focus();
                }
            };

            const showNextImage = () => {
                currentImageIndex = (currentImageIndex + 1) % galleryImageSources.length;
                lightboxImg.src = galleryImageSources[currentImageIndex];
            };

            const showPrevImage = () => {
                currentImageIndex = (currentImageIndex - 1 + galleryImageSources.length) % galleryImageSources.length;
                lightboxImg.src = galleryImageSources[currentImageIndex];
            };

            const trapFocus = () => {
                const focusableElements = lightbox.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                const firstFocusable = focusableElements[0];
                const lastFocusable = focusableElements[focusableElements.length - 1];
                firstFocusable.focus();

                lightbox.addEventListener('keydown', (e) => {
                    if (e.key !== 'Tab') return;

                    if (e.shiftKey) { // Shift + Tab
                        if (document.activeElement === firstFocusable) {
                            lastFocusable.focus();
                            e.preventDefault();
                        }
                    } else { // Tab
                        if (document.activeElement === lastFocusable) {
                            firstFocusable.focus();
                            e.preventDefault();
                        }
                    }
                });
            };

            const handleKeydown = (e) => {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowRight') showNextImage();
                if (e.key === 'ArrowLeft') showPrevImage();
            };

            galleryItems.forEach((item, index) => {
                item.addEventListener('click', () => openLightbox(index));
                item.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openLightbox(index);
                    }
                });
            });

            closeBtn.addEventListener('click', closeLightbox);
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) { // Close only if clicking on the background
                    closeLightbox();
                }
            });
        }
    };

    app.init();
});

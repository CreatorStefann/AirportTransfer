/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__points', 1.5, {opacity: 0, y: -300, delay: .2});
gsap.from('.home__rocket', 1.5, {opacity: 0, y: 300, delay: .3});
gsap.from('.home__cloud-1', 1.5, {opacity: 0, y: 200, delay: 1.2});
gsap.from('.home__cloud-2', 1.5, {opacity: 0, y: 200, delay: 1.3});
gsap.from('.home__content', 1.5, {opacity: 0, y: -100, delay: 1.4});
gsap.from('.home__title img', 1.5, {opacity: 0, y: 100, delay: 1.6});
// Function to handle smooth transition back to normal size on every hover
document.getElementById('enlargeButton').addEventListener('mouseover', function () {
    gsap.to(this, { scale: 1.2, duration: 0.5 });
});

// Function to reset the scale on mouseout
document.getElementById('enlargeButton').addEventListener('mouseout', function () {
    gsap.to(this, { scale: 1, duration: 0.5 });
});

/*=============== SCROLL ===============*/

// Function to handle scroll and highlight active link
function onScroll() {
    let scrollPosition = window.scrollY;
    let activeLink;

    // Iterate through each section with an id
    document.querySelectorAll('section[id]').forEach(function (section) {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // If the section is in the viewport, add the "active" class to the corresponding link
            let correspondingLink = document.querySelector('nav a[href="#' + section.id + '"]');
            if (correspondingLink) {
                activeLink = correspondingLink;
                document.querySelectorAll('nav a').forEach(function (link) {
                    link.classList.remove('active');
                });
                correspondingLink.classList.add('active');
            }
        }
    });

    // If no section is in the viewport, remove the "active" class from all links
    if (!activeLink) {
        document.querySelectorAll('nav a').forEach(function (link) {
            link.classList.remove('active');
        });
    }
}

// Add event listener for scroll
window.addEventListener('scroll', onScroll);

// Initial call to set the active link on page load
onScroll();


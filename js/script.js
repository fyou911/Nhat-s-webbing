// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.oneclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        //active navbar links
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
        // active sections for animation on scroll
        sec.classList.add('show-animate');
    }
    // if want to use animation that repeats on scroll use this 
    else {
        sec.classList.remove('show-animate');
    }
});

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight)
}

// THIS IS TO GET THE INFORMATION OF CLIENTS IN CONTACT ME SECTION 
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form data
    var formData = new FormData(this);

    // Send data to Formspree or your own server
    fetch('https://formspree.io/f/mknladlw', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // You can handle success (e.g., display a thank you message)
    })
    .catch(error => {
        console.error('Error:', error);
        // You can handle errors (e.g., display an error message)
    });
});
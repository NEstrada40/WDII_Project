// Contact Form Code
document.getElementById('myForm').addEventListener('submit', function(event) {
    
    // sub default
    event.preventDefault();
    // form gone
    document.getElementById('myForm').style.display = 'none';

    // success
    document.getElementById('successMessage').style. display = 'block';


});

// Get the carousel element
var myCarousel = document.getElementById('mySocialCarousel');

// Add event listeners to pause and resume the carousel on hover
myCarousel.addEventListener('mouseenter', function () {
    var carousel = bootstrap.Carousel.getInstance(myCarousel);
    carousel.pause();
});

myCarousel.addEventListener('mouseleave', function () {
    var carousel = bootstrap.Carousel.getInstance(myCarousel);
    carousel.cycle();
});   
document.getElementById('myForm').addEventListener('submit', function(event) {
    
    // sub default
    event.preventDefault();
    // form gone
    document.getElementById('myForm').style.display = 'none';

    // success
    document.getElementById('successMessage').style. display = 'block';
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic form validation
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields!");
    } else {
        alert("Thank you for reaching out, " + name + "! We'll get back to you soon.");
        // You can send the form data to a server here
    }
});

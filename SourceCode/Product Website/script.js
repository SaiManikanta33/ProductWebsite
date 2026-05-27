
const button = document.getElementById('msg');
button.addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
        // Here you can add code to send the message to your server or email
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
    } else {
        alert('Please fill in all fields before sending your message.');
        return;
    }
    alert('Thank you for your message, ' + name + '!');
});
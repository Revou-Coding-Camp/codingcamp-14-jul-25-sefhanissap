// JavaScript for the Dive Center Contact Page

showWelcomePopup();

function showWelcomePopup() {
    let userName = prompt ("Please enter your name:");
    if (userName != '') {
        document.getElementById('welcome-user').innerText = userName;
    }
}

function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
   

    if (name.value === '' || email.value === '' || message.value === '') {
        alert('Please fill out all fields.');
        return false;
    } else  {
        document.getElementById('message-output').innerHTML = `Thank you for your message, ${name.value}!
        We will get back to you at ${email.value}.`;
        name.value = '';
        email.value = '';
        message.value = '';
    }
}
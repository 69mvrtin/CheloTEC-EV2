const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const User = JSON.parse(localStorage.getItem('User')) || [];
    const isUserRegistered = User.find(user => user.email === email && user.password === password);
    if (!isUserRegistered) {
        return alert('User not registered');
    }
    alert('User logged in successfully');
    window.location.href = 'index.html';
});
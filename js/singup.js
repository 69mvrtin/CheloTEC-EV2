const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit',(e)=> {
    e.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const User = JSON.parse(localStorage.getItem('User')) || []
    const isUserRegistered = User.find(user => user.email === email)
    if(isUserRegistered) {
        return alert('User already registered')
        
    }

    User.push({name :name , email: email, password: password})
    localStorage.setItem('User', JSON.stringify(User))
    alert('User registered successfully')
    window.location.href = 'login.html' 
})


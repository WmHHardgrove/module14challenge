
const loginFormHandler= async (e) => {
    e.preventDefault()
    console.log('button works')

    const name = document.querySelector('#user-name').value.trim();
    const password = document.querySelector('#user-password').value.trim();

    if (name && password) {
        const response = await fetch('/api/users/login', {
            method: "POST",
            body: JSON.stringify({ name, password }),
            headers: {
                'Content-Type': 'applications/json'
            }
        })
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to Login')
        }
    }
};


document.addEventListener('submit', loginFormHandler);
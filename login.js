document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const msg = document.getElementById('message');

    if (user === 'admin' && pass === 'password123') {
        msg.style.color = 'green';
        msg.textContent = 'Login successful!';
    } else {
        msg.style.color = 'red';
        msg.textContent = 'Invalid credentials.';
    }
});
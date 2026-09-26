const bookBtn = document.getElementById('bookBtn');
const statusDiv = document.getElementById('status');

bookBtn.addEventListener('click', () => {
    const pickup = document.getElementById('pickup').value.trim();
    const dest = document.getElementById('dest').value.trim();
    const type = document.getElementById('rideType').value;

    if (!pickup || !dest) {
        alert('Please enter both pickup and destination locations.');
        return;
    }

    bookBtn.disabled = true;
    bookBtn.style.opacity = '0.5';
    statusDiv.style.display = 'block';
    statusDiv.className = 'searching';
    statusDiv.innerHTML = `<div>Searching for your <strong>${type}</strong> ride...</div><button id="cancelBtn">Cancel Request</button>`;
    
    const timeout = setTimeout(() => {
        statusDiv.className = 'confirmed';
        statusDiv.innerHTML = `<div><strong>Driver Found!</strong><br>Your ${type} ride to <strong>${dest}</strong> is arriving shortly.</div>`;
        bookBtn.disabled = false;
        bookBtn.style.opacity = '1';
        bookBtn.innerText = 'Request Another';
    }, 3000);

    document.getElementById('cancelBtn').addEventListener('click', () => {
        clearTimeout(timeout);
        statusDiv.style.display = 'none';
        bookBtn.disabled = false;
        bookBtn.style.opacity = '1';
        bookBtn.innerText = 'Request Ride';
    });
});
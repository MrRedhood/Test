document.addEventListener('DOMContentLoaded', () => {
    const bookBtn = document.querySelector('button');
    const pickupInput = document.querySelector('input[placeholder="Pickup location"]');
    const destInput = document.querySelector('input[placeholder="Destination"]');

    bookBtn.addEventListener('click', () => {
        const pickup = pickupInput.value;
        const dest = destInput.value;

        if (pickup && dest) {
            alert(`Ride booked from ${pickup} to ${dest}!`);
            pickupInput.value = '';
            destInput.value = '';
        } else {
            alert('Please enter both pickup and destination locations.');
        }
    });
});
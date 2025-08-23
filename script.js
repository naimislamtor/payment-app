// login button functionality

document.getElementById('loginButton').addEventListener('click', function (e) {
    e.preventDefault();
    const mobileNumber = 1983890650;
    const pinNumber = 1234;
    const mobileNumberValue = document.getElementById('mobile-number').value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);
    const pinNumberValue = document.getElementById('pin-number').value;
    const pinValueConverted = parseInt(pinNumberValue);
    console.log(mobileNumberValueConverted, pinValueConverted);
    if (
        mobileNumberValueConverted === mobileNumber &&
        pinValueConverted === pinNumber
    ) {
        window.location.href = 'home.html';
        console.log('Successful Login ');
    } else {
        alert('Invalid credentials');
        console.log('Data Not matched');
    }
});

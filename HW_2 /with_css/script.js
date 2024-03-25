function switchmode(mode) {
    var but = document.querySelector('.but');
    var loginButton = document.getElementById('loginbutton');

    if (mode === 'login') {
        document.getElementById('loginpage').classList.remove('formhidden');
        document.getElementById('loginpage').classList.add('formactive');
        document.getElementById('registerpage').classList.remove('formactive');
        document.getElementById('registerpage').classList.add('formhidden');
        but.style.left = '0';
        loginButton.classList.add('active-button');
        registerButton.classList.remove('active-button');
    } else if (mode === 'register') {
        document.getElementById('registerpage').classList.remove('formhidden');
        document.getElementById('registerpage').classList.add('formactive');
        document.getElementById('loginpage').classList.remove('formactive');
        document.getElementById('loginpage').classList.add('formhidden');
        but.style.left = '49%';
        loginButton.classList.remove('active-button');
        registerButton.classList.add('active-button');
    }
}
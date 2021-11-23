function errormsg() {
    let btn = document.getElementById('btn');
    let user = document.getElementById('user').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let errtxt = document.getElementById('error-msg');
    let signup = document.getElementById("error-msg");
    if (errtxt.style.display = 'none') {
        errtxt.style.display = 'block';
        if (pass.length == "") {
            signup.classList.remove('signup');
            document.getElementById("error-msg").innerHTML = "<p>The password field is empty</p>";
        } else if (pass.length < 8) {
            signup.classList.remove('signup');
            document.getElementById("error-msg").innerHTML = "<p>Password must contain atleast 8<br>characters long</p>";
        } else if (user.length == "") {
            signup.classList.remove('signup');
            document.getElementById("error-msg").innerHTML = "<p>Username field is empty</p>";
        } else if (email.length == "") {
            signup.classList.remove('signup');
            document.getElementById("error-msg").innerHTML = "<p>Email field is empty</p>";
        } else {
            signup.classList.add('signup');
            signup.innerHTML = "<p>Successfully signup</p>";
        }
    } else {
        errtxt.style.display = 'none';
    }

}
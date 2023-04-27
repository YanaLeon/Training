class UserService {
    username;
    #password;

    constructor (username, password) {
        this.username = username;
        this.#password = password;
    }
    getName () {
        return this.username;
    };
    authenticateUser () {
        const data = {username: this.username, password: this.#password};
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://examples.com/api/user/autenticate");
        xhr.responseType = 'json';
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        
        xhr.onload = () => {
            if (xhr.status >= 400) { 
                console.log("Server response: ", xhr.status);
            } else {
               console.log(xhr.response);
               window.location.href = '/home';
            }
        };
        xhr.send(JSON.stringify(data));
    }
}
$('#login').submit(function (eo) {
   eo.preventDefault();
    var username = $('#username').val();
    var password = $('#password').val();

    let user = new UserService (username, password);
    user.authenticateUser();
})
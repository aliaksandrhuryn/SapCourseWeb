function buttom_click() {
    username = prompt("Enter your name", "");

    if (/\d/.test(username)) {
        alert(username.toUpperCase());
    } else {
        alert(backword(username.toString()));
    }
}

function backword(str) {
    var letters = str.split('');
    letters.reverse();
    return letters.join('');
}
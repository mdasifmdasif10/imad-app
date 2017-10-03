console.log('Loaded!');
var img = document.getElementById('mk');
var marginLeft = 0;

function moveRight() {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 50)
};
//submit button
var naamInput = document.getElementById('naam');
var naam = naamInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //make a request
    //name list
    var naams = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for (var i = 0; i < naams.length; i++) {
        list += '<li>' + naams[i] + '</li>';
    }
    var ul = document.getElementById('naamlist');
    ul.innerHTML = list;
};
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
console.login('username');
console.login('password');
request.open('POST', 'http://http://mdasifmdasif10.imad.hasura-app.io/login', true);
request.send(JSON.stringify({ username: username, password: password }));
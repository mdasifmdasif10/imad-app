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
var nameInuput = document.getElementById('naam');
var naam = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //make a request
    //name list
    var naam = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for (var i = 0; i < naam.length; i++) {
        list += '<li>' + naam[i] + '</li>';
    };
    var ul = document.getElementById('naamlist');
    ul.innerHTML = list;
};
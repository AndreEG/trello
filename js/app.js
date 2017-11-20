window.addEventListener('load', function() {
  var container = document.getElementById('boards-here'); 
  var btn = document.getElementById('add');
  btn.addEventListener('click', function() {
    var input = document.createElement('input');
    input.setAttribute('type','text');
    container.appendChild(input);
    container.removeChild[0];
  })
});
window.addEventListener('load', function() {
  size();
});

function size() {
  var container = document.getElementById('container');
  container.innerHTML = '';//don't want any extra boxes when you call this function again
  var x = 16;//width of boxes that can fit; remove any decimal places
  var y = 16;//height of boxes that can fit; remove any decimal places
  for (var i = 0; i < 256; i++) {//multiply x*y to get total area of boxes that can fit
    var box = document.createElement('div');//create a div
    box.className = 'box';//assign class
    container.appendChild(box);//append
  }
}

window.addEventListener('resize', function() {
  size();//call the function again when the window is resized
});
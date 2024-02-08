var openSizePickerItem=document.querySelectorAll('.sizepicker');
var sizePicker=document.querySelector('.cart-window');
var page=document.querySelector('.page');
var smallSize=sizePicker.querySelector("[value=size-s]");
var mediumSize=sizePicker.querySelector("[value=size-m]");
var largeSize=sizePicker.querySelector("[value=size-l]");


openSizePickerItem.forEach(function(a) {
  a.addEventListener('click', function(evt) {
    evt.preventDefault();
    sizePicker.classList.add('cart-window--opened');
    page.classList.add('page--overlay');
  })
});

openSizePickerItem.forEach(function(a) {
  a.addEventListener('keydown',function(evt) {
    if(evt.keyCode===13) {
      evt.preventDefault();
      sizePicker.classList.add('cart-window--opened');
      page.classList.add('page--overlay');
    }
  })
});

openSizePickerItem.forEach(function(a) {
  window.addEventListener('keydown', function(evt) {
    if(evt.keyCode===27) {
      if(sizePicker.classList.contains('cart-window--opened'))  {
        sizePicker.classList.remove('cart-window--opened');
        page.classList.remove('page--overlay');
      }
    }
  })
});

//select elements from the DOM
const box = document.getElementById('color-box'),
      selectedColor = document.getElementById('color-picker');


//event for color change
selectedColor.addEventListener('change', function(e){
    box.style.backgroundColor = selectedColor.value;
});

//ID sizePicker
const sizePicker = document.getElementById('sizePicker');
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');

//ID colorPicker
const color = document.getElementById('colorPicker');
const table = document.getElementById('pixelCanvas');

//ID save grid (optional)
const checkbox = document.getElementById('gridSaver');

//Event Listener Submit, Call makeGrid Function
sizePicker.addEventListener('submit', function(event) {
  makeGrid(height, width);
  event.preventDefault();
});

//Create the grid
function makeGrid(height, width) {
  table.innerHTML=""
  for (let i = 0; i < height.value; i++) {
    let rows = table.insertRow(i);
    rows.style.borderColor='#02b3e4';
    for (let y = 0; y < width.value; y++) {
      let cells = rows.insertCell(y);
      cells.style.borderColor='#02b3e4';
      cells.addEventListener('click', function() {
        const color = document.getElementById('colorPicker').value;
        this.style.backgroundColor = color;
      });
    }
  }
};

//Save grid (optional, work in progress)
checkbox.addEventListener('click', function() {
  if (this.checked) {
    //code
  } else {
    //code
  }
});

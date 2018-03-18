// Select color input
const colorPicker = document.getElementById('colorPicker');


// Select size input
const gridHeight = document.getElementById('inputHeight');
const gridWidth = document.getElementById('inputWeight');

// Select table;
const table = document.getElementById('pixelCanvas');


// When size is submitted by the user, call makeGrid()
const submit = document.getElementById('submit');

submit.addEventListener('click', function (e) {
   e.preventDefault();
   makeGrid();
});

// Color changing 
table.addEventListener('mousedown', function (e) {
   e.target.style.backgroundColor = colorPicker.value;
})

function makeGrid() {

   table.textContent = "";

   for (let i = 1; i <= gridHeight.value; i++) {
      const trow = document.createElement('tr');
      //trow.textContent = `row`;
      table.appendChild(trow);

      for (let j = 1; j <= gridWidth.value; j++) {
         const tcol = document.createElement('td');
         //tcol.textContent = `col`;
         trow.appendChild(tcol);
      }
   }
}

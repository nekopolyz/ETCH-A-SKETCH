const container = document.getElementById('container')

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
      let cell = document.createElement("div");
    //   cell.innerText = (i + 1);
      container.appendChild(cell).className = "grid-item";
    };
  };
  
  makeRows(16, 16);

  const button = document.querySelector('.reset')
  button.addEventListener('click',function(){
    container.innerHTML=""
    createGrid();

  });

  function createGrid(){
    let x = prompt("Enter the Grid Size maximum 100");
    y = x
    if (x > 100 || x === null){
    return createGrid()
    }
    makeRows(x,y)
  }

  function changeColor(e) {
    const Color1 = Math.floor(Math.random() * 256);
    const Color2 = Math.floor(Math.random() * 256);
    const Color3 = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${Color1}, ${Color2}, ${Color3})`;
  }

  container.addEventListener('mouseover',function(e){
    changeColor(e)
     // e.target.classList.replace("grid-item","color");
   });



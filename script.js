const containerTic = document.querySelector("#gameTic");
const infoTic = document.querySelector("#infoTic");
const borderses = Array(20).fill(null).map(() => Array(20).fill(null));
let marke = "circle";
let gameOver = false;

function chickenDinner(marke){
  console.log(marke)
//  horizantal
for(let i=0; i<20; i++){
  let count=0
  for(let j=0;j<20;j++){
    if(borderses[i][j]===marke){
      count++
      if(count===5)return true;
    }else{
      count=0;
    }
  }
}

}
const container = () => {
    let count = 1;
    borderses.forEach((borders, x) => {
        borders.forEach((border, y) => {
            const cellElement = document.createElement("div");
            cellElement.classList.add("square");
            cellElement.id = count;
            containerTic.appendChild(cellElement);
            count++;

            cellElement.addEventListener("click", function (e) {
                if (!gameOver && !borderses[x][y] && !e.target.querySelector(".circle") && !e.target.querySelector(".cross")) {
                    const displayMark = document.createElement("div");
                    displayMark.classList.add(marke);
                    e.target.appendChild(displayMark);
                    borderses[x][y] = marke;
                    console.log(borderses)
                    if(chickenDinner(marke)){
                      infoTic.textContent = `Le joueur ${marke} a gagné !`;
                      gameOver=true;
                    }else{ 
                      marke = marke === "circle" ? "cross" : "circle";
                    infoTic.textContent = `C'est maintenant au tour de ${marke}`;
                  } 
                }
            });
        });
    });
};

container();

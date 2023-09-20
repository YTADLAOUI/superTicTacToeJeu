const containerTic= document.querySelector("#gameTic");
const infoTic=document.querySelector("#infoTic");
const borderses= Array(20).fill(null).map(()=>Array(20).fill(null));
const container=()=>{
  borderses.forEach((borders,index)=>{
        // const firstSquare=document.createElement("div");
        // firstSquare.classList.add("square");
        // containerTic.append(firstSquare);
        borders.forEach((border,index)=>{
          const cellElement=document.createElement("div");
          cellElement.classList.add("square");
          containerTic.append(cellElement);
        })

  })
}
container();
